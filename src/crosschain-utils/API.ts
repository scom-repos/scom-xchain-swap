import {
  VaultGroupList,
  getNetworksByType,
  VaultGroupStore,
  VaultConstant,
  VaultStore,
  forEachNumberIndexAwait,
  CoreContractStore,
  Mainnets,
  Testnets,
  State,
} from "../store/index"
import { Wallet, BigNumber, TransactionReceipt, Contracts, IMulticallContractCall } from "@ijstech/eth-wallet";
import '@ijstech/eth-contract';
import { Contracts as xChainContracts } from "@scom/oswap-cross-chain-bridge-contract"
import {
  CreateBridgeVaultOrderParams,
  GetAvailableRouteOptionsParams,
  ICrossChainRouteResult,
} from "./crosschain-utils.types";
import { getMulticallInfoList } from "@scom/scom-multicall";
import { ITokenObject } from "@scom/scom-token-list";

const initCrossChainWallet = (state: State, chainId: number) => {
  const wallet = Wallet.getClientInstance();
  const networkInfo = state.getNetworkInfo(chainId);
  let rpcEndpoint = networkInfo.rpcUrls[0];
  let crossChainWallet = new Wallet(rpcEndpoint, { address: wallet.address });
  let mul = getMulticallInfoList().find(x => x.chainId === chainId);
  crossChainWallet.multicallInfoMap = { [chainId]: mul };
  return crossChainWallet;
}

function isSupportedCrossChain(fromChain: number, toChain: number) {
  try {
    if ([fromChain, toChain].some(c => c <= 0)) return false;
    if (fromChain === toChain) return false;
    if (Mainnets.includes(fromChain)) return Mainnets.includes(toChain);
    if (Testnets.includes(fromChain)) return Testnets.includes(toChain);
  } catch (error) { }
  return false;
}

interface VaultTokenMap { [chainId: string]: { [vaultAddress: string]: string } }

const getVaultTokenMap = () => {
  let vaultTokenMap: VaultTokenMap = {};
  VaultGroupList.forEach((vaultGroup) => {
    for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
      vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
      vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.assetToken.address.toLowerCase();
    }
  });
  return vaultTokenMap;
}

//MARK: Bond
async function getBond(state: State, vault: VaultConstant | VaultStore) {
  //FIXME need to minus pending withdraw
  let govToken = new xChainContracts.ERC20(initCrossChainWallet(state, vault.chainId), CoreContractStore[vault.chainId].GOV_TOKEN);
  return (await govToken.balanceOf(vault.vaultRegistryAddress)).shiftedBy(-vault.assetToken.decimals);
}

// Bridge Swap

interface CreateOrderParams {
  vaultAddress: string;
  targetChainId: number;
  tokenIn: ITokenObject;
  tokenOut: ITokenObject;
  amountIn: string;
  minAmountOut: string;
}

async function createBridgeVaultOrder(state: State, params: CreateOrderParams): Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> {
  try {
    const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut } = params;
    const wallet = Wallet.getClientInstance();
    const amountInTokenAmount = BigNumber(amountIn).shiftedBy(tokenIn.decimals);
    const minAmountOutTokenAmount = BigNumber(minAmountOut).shiftedBy(tokenOut.decimals).dp(0, 1);
    const vaultContract = new xChainContracts.OSWAP_BridgeVault(wallet, vaultAddress);
    const transactionDeadlineInMinutes = state.getCrossChainTransactionDeadline();
    const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
    let receipt = await vaultContract.newOrder({
      peerChain: targetChainId,
      inAmount: amountInTokenAmount,
      outToken: tokenOut.address,
      minOutAmount: minAmountOutTokenAmount,
      to: wallet.address,
      expire: transactionDeadline
    });
    return { receipt, error: null };
  } catch (error) {
    return { receipt: null, error: error as any };
  }
}

// Return the current vault asset balance by given chainId and address
const getVaultAssetBalance = async (state: State, chainId: number, vaultAddress: string) => {
  let targetChainWallet = initCrossChainWallet(state, chainId);
  const vault = new xChainContracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
  const asset = new Contracts.ERC20(targetChainWallet, await vault.asset());
  return (await asset.balanceOf(vault.address));
}

interface SwapData {
  fromAmount: BigNumber;
  toAmount: BigNumber;
}

// CrossChain

function getFeeAmounts(vault: VaultStore, amountIn: BigNumber) {
  let deci = vault.assetToken.decimals;
  let weiAmountIn = amountIn.shiftedBy(deci);
  let baseFeeAmount = new BigNumber(vault.baseFee).shiftedBy(-deci);
  let protocolFeeAmount = new BigNumber(weiAmountIn).times(vault.protocolFee).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-deci);
  let transactionFeeAmount = new BigNumber(weiAmountIn).times(vault.transactionFee).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-deci);
  let imbalance = new BigNumber(vault.imbalance).minus(weiAmountIn);
  let imbalanceFeeAmount = imbalance.lt(0) ? imbalance.times(-vault.imbalanceFee).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-deci) : new BigNumber("0");
  return {
    totalFeeAmount: baseFeeAmount.plus(protocolFeeAmount).plus(transactionFeeAmount).plus(imbalanceFeeAmount),
    baseFeeAmount,
    protocolFeeAmount,
    transactionFeeAmount,
    imbalanceFeeAmount,
  }
}
interface Route {
  fromVault: VaultStore;
  fromAmount: BigNumber;
  toVault: VaultStore;
  toAmount: BigNumber;
  feeAmounts: {
    totalFeeAmount: BigNumber;
    baseFeeAmount: BigNumber;
    protocolFeeAmount: BigNumber;
    transactionFeeAmount: BigNumber;
    imbalanceFeeAmount: BigNumber;
  }
}
function getRoute(swapInfo: SwapInfo): Route {
  let fromVault = findVault(swapInfo.vaultGroup, swapInfo.fromChainId);
  let toVault = findVault(swapInfo.vaultGroup, swapInfo.toChainId);
  if (!fromVault || !toVault) return null;
  let feeAmounts = getFeeAmounts(fromVault, swapInfo.inAmount);

  return {
    fromVault,
    fromAmount: swapInfo.inAmount,
    toVault,
    toAmount: swapInfo.inAmount.minus(feeAmounts.totalFeeAmount),
    feeAmounts,
  }
}

interface NewOrderParams {
  vaultAddress: string,
  targetChainId: number,
  tokenIn: ITokenObject,
  tokenOut: ITokenObject,
  amountIn: string,
  minAmountOut: string,
  sourceRouteInfo?: {
    amountOut: string,
    pairs: string[]
  }
}

//============================

interface SwapInfo {
  vaultGroup: VaultGroupStore
  toChainId: number
  fromChainId: number
  inAmount: BigNumber
}

async function findVaultGroupByToken(state: State, chainId: number, tokenAddress: string) {
  return (await getVaultGroups(state)).find(group => group.vaults[chainId]?.assetToken.address.toLowerCase() == tokenAddress.toLowerCase());
}

function findVault(vaultGroup: VaultGroupStore, chainId: number) {
  try {
    return vaultGroup?.vaults[chainId];
  } catch (error) {
    return undefined;
  }
}

async function getVaultGroups(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]> {
  const wallet = Wallet.getClientInstance();
  if (!wallet.address) {
    // for noto fan when wallet is not connected
    return getVaultGroupsWithoutWallet(state, isUpdate);
  }

  let walletChainId = Wallet.getClientInstance().chainId;
  let networks = getNetworksByType(walletChainId);
  let vaultGroupsStore = state.getVaultGroups();

  if (!vaultGroupsStore || vaultGroupsStore.length < 1) {
    //vaultGroupsStore = VaultGroupList.map(g => castToVaultGroupStore(g));
    state.setVaultGroups(vaultGroupsStore);
  }
  if (!isUpdate) return vaultGroupsStore;

  let chainTask: {
    [chainId: number]: {
      assetNames: string[],
      wallet: Wallet,
      calls: IMulticallContractCall[],
    }
  } = {};
  //only update DYNAMIC items in VaultGroupList
  for (let i = 0; i < vaultGroupsStore.length; i++) {
    const group = vaultGroupsStore[i];
    await forEachNumberIndexAwait(group.vaults, async (vault, chainId) => {
      if (networks.every(n => n !== chainId)) return;
      if (!chainTask[chainId]) {
        chainTask[chainId] = {
          assetNames: [],
          wallet: initCrossChainWallet(state, Number(chainId)),
          calls: [],
        };
      }
      let vaultContract = new xChainContracts.OSWAP_BridgeVault(chainTask[chainId].wallet, vault.vaultAddress);
      let tokenContract = new xChainContracts.ERC20(chainTask[chainId].wallet, vault.assetToken.address);
      chainTask[chainId].assetNames.push(group.assetName);
      chainTask[chainId].calls.push({
        to: vault.vaultAddress,
        contract: vaultContract,
        methodName: "lpAssetBalance",
        params: []
      }, {
        to: vault.vaultAddress,
        contract: vaultContract,
        methodName: "imbalance",
        params: []
      }, {
        to: vault.vaultAddress,
        contract: vaultContract,
        methodName: "ordersLength",
        params: []
      }, {
        to: vault.assetToken.address,
        contract: tokenContract,
        methodName: "balanceOf",
        params: [chainTask[chainId].wallet.address]
      });
    });
  }
  await forEachNumberIndexAwait(chainTask, async (x, chainId) => {
    try {
      let res = await x.wallet.doMulticall(x.calls);
      if (!res) throw new Error(`doMulticall result is empty`);
      vaultGroupsStore.forEach((group, gIndex) => {
        let callIndex = x.assetNames.findIndex(asset => asset === group.assetName);
        if (callIndex < 0) return;
        group.vaults[chainId].tokenBalance = res[callIndex * 4]; //TODO decimal offset
        group.vaults[chainId].imbalance = res[callIndex * 4 + 1]; //TODO decimal offset
        group.vaults[chainId].ordersLength = res[callIndex * 4 + 2];
        group.vaults[chainId].userTokenAmount = res[callIndex * 4 + 3]; //TODO decimal offset
      });
    } catch (error) {
      console.log(`Error on getVaultGroups chainId ${chainId}.`, error, x);
    }
  })
  state.setVaultGroups(vaultGroupsStore);
  return vaultGroupsStore;
}

// Support noto fan if wallet is not connected
async function getVaultGroupsWithoutWallet(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]> {
  let walletChainId = Wallet.getClientInstance().chainId;
  let networks = getNetworksByType(walletChainId);
  let vaultGroupsStore = state.getVaultGroups();

  if (!isUpdate) return vaultGroupsStore;

  for (let i = 0; i < vaultGroupsStore.length; i++) {
    const group = vaultGroupsStore[i];
    await forEachNumberIndexAwait(group.vaults, async (vault, chainId) => {
      if (networks.every(n => n !== chainId)) return;
      const wallet = initCrossChainWallet(state, chainId);
      const vaultContract = new xChainContracts.OSWAP_BridgeVault(wallet, vault.vaultAddress);
      vaultGroupsStore[i].vaults[chainId].tokenBalance = await vaultContract.lpAssetBalance();
      vaultGroupsStore[i].vaults[chainId].imbalance = await vaultContract.imbalance();
      vaultGroupsStore[i].vaults[chainId].ordersLength = (await vaultContract.ordersLength()).toNumber();
      if (wallet.address) {
        const tokenContract = new xChainContracts.ERC20(wallet, vault.assetToken.address);
        vaultGroupsStore[i].vaults[chainId].userTokenAmount = await tokenContract.balanceOf(wallet.address);
      }
    });
  }

  state.setVaultGroups(vaultGroupsStore);
  return vaultGroupsStore;
}

export {
  isSupportedCrossChain,
  getFeeAmounts,
  getVaultGroups,
  VaultTokenMap,
  getVaultTokenMap,
  getBond,
  initCrossChainWallet,
  CreateOrderParams,
  CreateBridgeVaultOrderParams,
  createBridgeVaultOrder,
  GetAvailableRouteOptionsParams,
  Route,
  getRoute,
  ICrossChainRouteResult,
  getVaultAssetBalance,
  findVaultGroupByToken,
  SwapData,
  NewOrderParams,
}