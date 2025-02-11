import {
  VaultGroupList,
  getChainId,
  isWalletConnected,
  getNetworksByType,
  forEachNumberIndex,
  VaultGroupStore,
  VaultGroupConstant,
  VaultConstant,
  VaultStore,
  VaultOrderStore,
  ChainNativeTokenByChainId,
  forEachNumberIndexAwait,
  VaultOrderStatus,
  CoreContractStore,
  castToVaultOrderStatus,
  determineOrderStatus,
  ContractVaultOrderStatus,
  isContractVaultOrderStatus,
  isVaultOrderStatus,
  Mainnets,
  Testnets,
  State,
} from "../store/index"
import { Wallet, BigNumber, Utils, TransactionReceipt, Contracts, IMulticallContractCall } from "@ijstech/eth-wallet";
import '@ijstech/eth-contract';
import { Contracts as xChainContracts } from "@scom/oswap-cross-chain-bridge-contract"
import { Contracts as OswapContracts } from "@scom/oswap-openswap-contract";
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

const checkIsApproveButtonShown = async (tokenIn: ITokenObject, fromInput: BigNumber, address: string) => {
  if (!isWalletConnected()) return false;
  const wallet = Wallet.getClientInstance()
  let erc20 = new OswapContracts.ERC20(wallet, tokenIn.address);
  let allowance = await erc20.allowance({
    owner: wallet.address,
    spender: address
  })
  return fromInput.gt(Utils.fromDecimals(allowance, tokenIn.decimals));
}

// Return the current vault asset balance by given chainId and address
const getVaultAssetBalance = async (state: State, chainId: number, vaultAddress: string) => {
  let targetChainWallet = initCrossChainWallet(state, chainId);
  const vault = new xChainContracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
  const asset = new Contracts.ERC20(targetChainWallet, await vault.asset());
  return (await asset.balanceOf(vault.address));
}

const getChainNativeToken = (): ITokenObject => {
  return ChainNativeTokenByChainId[getChainId()]
};

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

async function findToVault(state: State, fromChainId: number, tokenAddress: string, toChainId: number) {
  let group = await findVaultGroupByToken(state, fromChainId, tokenAddress)
  if (!group || !group.vaults) throw new Error(`No such token ${tokenAddress} recorded in chain ${fromChainId}`);
  return findVault(group, toChainId);
}

async function findAllAsset(state: State, fromChainId: number): Promise<VaultConstant[]> {
  let out: VaultConstant[] = [];
  let vgs = await getVaultGroups(state);
  vgs.forEach(group => {
    const vaults = findVault(group, fromChainId);
    if (vaults) out.push(vaults);
  });
  return out;
}

async function getVaultGroups(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]> {
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

interface RawOrder {
  peerChain: BigNumber;
  inAmount: BigNumber;
  outToken: string;
  minOutAmount: BigNumber;
  to: string;
  expire: BigNumber;
}

interface RawOrder2 extends RawOrder {
  id: number;
}

async function getVaultGroupsUpdateOrders(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]> {
  console.log("orders start");


  console.time("orders");
  let wallet = Wallet.getClientInstance();
  let walletAddress = wallet.address;
  let walletChainId = wallet.chainId;
  let networks = getNetworksByType(walletChainId);
  let vaultGroupsStore = await getVaultGroups(state, isUpdate);
  if (!isUpdate) return vaultGroupsStore;

  let chainTask: {
    [chainId: number]: {
      assetNames: string[],
      wallet: Wallet,
      calls: IMulticallContractCall[],
      resPromise: Promise<any>
    }
  } = {};
  //MARK: ordersLength
  vaultGroupsStore.forEach(group => {
    forEachNumberIndex(group.vaults, (vault, chainId) => {
      if (networks.every(n => n !== chainId)) return;
      if (!chainTask[chainId]) {
        chainTask[chainId] = {
          assetNames: [],
          wallet: initCrossChainWallet(state, Number(chainId)),
          calls: [],
          resPromise: null
        };
      }
      let vaultContract = new xChainContracts.OSWAP_BridgeVault(chainTask[chainId].wallet, vault.vaultAddress);
      chainTask[chainId].assetNames.push(group.assetName);
      chainTask[chainId].calls.push({
        to: vault.vaultAddress,
        contract: vaultContract,
        methodName: "ordersLength",
        params: []
      });
    });
  });

  let tasks: Promise<any>[] = [];
  for (const chainId in chainTask) {
    if (
      Object.prototype.hasOwnProperty.call(chainTask, chainId)
      && new BigNumber(chainId).isInteger()
    ) {
      chainTask[chainId].resPromise = chainTask[chainId].wallet.doMulticall(chainTask[chainId].calls);
      tasks.push(chainTask[chainId].resPromise);
    }
  }
  await Promise.all(tasks);

  await forEachNumberIndexAwait(chainTask, async (x, chainId) => {
    try {
      let res = await x.resPromise;
      if (!res) throw new Error(`doMulticall result is empty. trying to call ordersLength() ${x.calls.reduce((prev, curr) => { return `${prev}, ${curr.to}` }, "")}`);
      vaultGroupsStore.forEach((group, gIndex) => {
        let callIndex = x.assetNames.findIndex(asset => asset === group.assetName);
        if (callIndex < 0) return;
        vaultGroupsStore[gIndex].vaults[chainId].ordersLength = res[callIndex];
      });
    } catch (error) {
      console.log(`Error on getVaultGroups chainId ${chainId}.`, error);
    }
  });
  //MARK: orders
  const size = 100;
  for (const group of vaultGroupsStore) {
    await forEachNumberIndexAwait(group.vaults, async (vault, chainId) => {
      if (networks.every(n => n !== chainId)) return;
      let rawOrders = await fetchOrders(chainTask[chainId].wallet, vault.vaultAddress, vault.ordersLength, size);
      let rawOrders2: RawOrder2[] = rawOrders.map((o, i) => { return { ...o, id: i } });
      let filteredRawOrder = rawOrders2.filter(o => o.to === walletAddress);

      let orders: VaultOrderStore[] = filteredRawOrder.map((o, i) => {
        let toChain = o.peerChain.toNumber();
        return {
          id: o.id,
          status: VaultOrderStatus.Pending,
          expire: o.expire,

          fromOwner: o.to,//TODO call OSWAP_BridgeVault.orderOwner
          fromChain: chainId,
          fromToken: vault.assetToken,
          fromAmount: new BigNumber(o.inAmount),//TODO decimal offset
          fromStatus: ContractVaultOrderStatus.NotSpecified,

          toOwner: o.to,
          toChain,
          toToken: group.vaults[toChain].assetToken,
          toAmount: new BigNumber(o.minOutAmount),//actual toAmount only exist in event, TODO decimal offset
          toAmountMin: new BigNumber(o.minOutAmount),//TODO decimal offset
          toStatus: ContractVaultOrderStatus.NotSpecified,

          protocolFee: vault.protocolFee
        }
      });
      vault.userOrders = orders;
    });
  }
  console.log("fetchOrders() end", vaultGroupsStore);
  //MARK: orderStatus
  vaultGroupsStore = await fetchOrdersStatus(state, vaultGroupsStore).catch(x => {
    console.log("fetchOrdersStatus failed", x); return [];
  });
  console.log("getVaultGroupsUpdateOrders() end", vaultGroupsStore);
  console.timeEnd("orders");
  state.setVaultGroups(vaultGroupsStore);
  return vaultGroupsStore;
}

async function fetchOrders(wallet: Wallet, vaultAddress: string, ordersLength: number, batchSize: number) {
  let orders: RawOrder[] = [];
  let vaultContract = new xChainContracts.OSWAP_BridgeVault(wallet, vaultAddress);
  for (let i = 0; i < ordersLength; i += batchSize) {
    let orderBatch = await vaultContract.getOrders({ start: i, length: batchSize });
    orders = orders.concat(orderBatch);
  }
  console.log("fetchOrders", orders);
  return orders;
}

async function fetchOrdersStatus(state: State, vaultGroupsStore: VaultGroupStore[]) {
  type task = {
    wallet: Wallet,
    calls: IMulticallContractCall[],
    callsTo: IMulticallContractCall[],
    callsToIndex: { vgIndex: number, fromChain: number, orderIndex: number }[],//orderIndex is not orderId in contract
    prom: Promise<BigNumber[]>,
    res: BigNumber[];
  }
  let walletAddress = Wallet.getClientInstance().address;
  let chainTask = new Map<number, task>();
  //add calls
  for (let i = 0; i < vaultGroupsStore.length; i++) {
    let contrs = new Map<number, xChainContracts.OSWAP_BridgeVault>();
    forEachNumberIndex(vaultGroupsStore[i].vaults, (vault, chainId) => {
      if (!chainTask.has(chainId)) {
        chainTask.set(chainId, {
          wallet: initCrossChainWallet(state, chainId),
          callsTo: [],
          calls: [],
          callsToIndex: [],
          prom: null,
          res: []
        });
      }
      contrs.set(chainId, new xChainContracts.OSWAP_BridgeVault(chainTask.get(chainId).wallet, vault.vaultAddress));
    })
    forEachNumberIndex(vaultGroupsStore[i].vaults, (vault, chainId) => {
      for (let j = 0; j < vault.userOrders.length; j++) {
        const t = chainTask.get(chainId);
        t.calls.push({
          to: vault.vaultAddress,
          contract: contrs.get(chainId),
          methodName: "orderStatus",
          params: [vault.userOrders[j].id]
        });

        const t2 = chainTask.get(vault.userOrders[j].toChain);
        const orderHash = t2.wallet.soliditySha3(
          { t: 'address', v: walletAddress },
          { t: 'uint256', v: vault.userOrders[j].toChain },
          { t: 'address', v: vaultGroupsStore[i].vaults[vault.userOrders[j].toChain].vaultAddress },
          { t: 'uint256', v: chainId },
          { t: 'uint256', v: vault.userOrders[j].id }
        );
        t2.callsToIndex.push({ fromChain: chainId, vgIndex: i, orderIndex: j });
        t2.callsTo.push({
          to: vaultGroupsStore[i].vaults[vault.userOrders[j].toChain].vaultAddress,
          contract: contrs.get(vault.userOrders[j].toChain),
          methodName: "swapOrderStatus",
          params: [orderHash]
        });
      }
    });
  }

  //call
  let promises: Promise<BigNumber[]>[] = [];
  chainTask.forEach((t, chainId) => {
    let prom: Promise<BigNumber[]> = t.wallet.doMulticall(t.calls.concat(t.callsTo)).then(res => t.res = res).catch(x => { console.log("fetchOrdersStatus call failed", chainId, t.calls, x); return [] });
    t.prom = prom;
    if (t.calls.length > 0) promises.push(prom);
  });
  await Promise.all(promises);

  //write
  for (let i = 0; i < vaultGroupsStore.length; i++) {
    forEachNumberIndex(vaultGroupsStore[i].vaults, async (v, chainId) => {
      let t = chainTask.get(chainId);
      if (t?.calls.length <= 0 || t.res.length <= 0) return console.log("fetchOrdersStatus write no results or no calls", chainId, t);
      for (let j = 0; j < v.userOrders.length; j++) {
        let x = t.res[j];
        if (x) v.userOrders[j].fromStatus = x.toNumber();
      }
    });
  }

  //write toChain OrderStatus
  chainTask.forEach((t, chainId) => {
    if (t.callsTo.length <= 0) return;
    let start = t.calls.length;
    for (let i = 0; i < t.callsTo.length; i++) {
      let ids = t.callsToIndex[i];
      let res = t.res[i + start];
      let order = vaultGroupsStore[ids.vgIndex].vaults[ids.fromChain].userOrders[ids.orderIndex];
      order.toStatus = res.toNumber();
      order.status = determineOrderStatus(order.expire, order.fromStatus, order.toStatus);

      console.log(`${order.fromChain},${vaultGroupsStore[ids.vgIndex].assetName},${order.id} `,
        `${contractOrderStatusToString(order.fromStatus)}->${contractOrderStatusToString(order.toStatus)} = ${orderStatusToString(order.status)}`,
        `${new BigNumber(new Date().getTime()).shiftedBy(-3).gte(order.expire) ? "💀expired" : "⏳not expired"}`);
    }
  });
  console.log("fetchOrdersStatus end");
  return vaultGroupsStore;
}

function contractOrderStatusToString(os: number): string {
  if (isContractVaultOrderStatus(os)) {
    switch (os) {
      case ContractVaultOrderStatus.NotSpecified://0
        return "NotSpecified";
      case ContractVaultOrderStatus.Pending://1
        return "Pending";
      case ContractVaultOrderStatus.Executed://2
        return "Executed";
      case ContractVaultOrderStatus.RequestCancel://3
        return "RequestCancel";
      case ContractVaultOrderStatus.RefundApproved://4
        return "RefundApproved";
      case ContractVaultOrderStatus.Cancelled://5
        return "Cancelled";
      case ContractVaultOrderStatus.RequestAmend://6:
        return "RequestAmend";
    }
  }
  console.log("error vaultOrderStatusToString", os);
}

function orderStatusToString(os: number) {
  if (isVaultOrderStatus(os)) {
    switch (os) {
      case VaultOrderStatus.Pending:
        return "Pending";
      case VaultOrderStatus.Executed:
        return "Executed";
      case VaultOrderStatus.RequestCancel:
        return "RequestCancel";
      case VaultOrderStatus.RefundApproved:
        return "RefundApproved";
      case VaultOrderStatus.Cancelled:
        return "Cancelled";
      case VaultOrderStatus.RequestAmend:
        return "RequestAmend";
      case VaultOrderStatus.Expired:
        return "Expired";
    }
  }
  console.log("error orderStatusToString", os);
}

async function addLiquidity(vaultAddress: string, assetAmount: number | BigNumber) {
  let bv = new xChainContracts.OSWAP_BridgeVault(Wallet.getClientInstance(), vaultAddress)
  return await bv.addLiquidity(assetAmount);
}

export {
  isSupportedCrossChain,
  getFeeAmounts,
  getVaultGroups,
  getVaultGroupsUpdateOrders,
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
  findAllAsset,
  findToVault,
  findVaultGroupByToken,
  SwapData,
  getChainNativeToken,
  NewOrderParams,
}