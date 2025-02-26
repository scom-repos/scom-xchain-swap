import { application } from '@ijstech/components';
import { BigNumber, ERC20ApprovalModel, IERC20ApprovalEventOptions, INetwork, Wallet } from '@ijstech/eth-wallet';
import { EventId, IExtendedNetwork } from '../global/index';
import { VaultConstant, Mainnets, Testnets, VaultGroupConstant, VaultType, TokenConstant, VaultGroupList, orderMinOutRate } from './data/core';
import { INetworkConfig } from '@scom/scom-network-picker';
import getNetworkList from '@scom/scom-network-list';
import ConfigData from '../data.json';

export enum WalletPlugin {
  MetaMask = 'metamask',
  Coin98 = 'coin98',
  TrustWallet = 'trustwallet',
  BinanceChainWallet = 'binancechainwallet',
  ONTOWallet = 'onto',
  WalletConnect = 'walletconnect',
  BitKeepWallet = 'bitkeepwallet',
  FrontierWallet = 'frontierwallet',
}

export enum NetworkType {
  Mainnet,
  Testnet,
  NotSupported,
}

export function getNetworkType(chainId: number) {
  if (Mainnets.some(network => network === chainId)) {
    return NetworkType.Mainnet;
  }
  if (Testnets.some(network => network === chainId)) {
    return NetworkType.Testnet;
  }
  return NetworkType.NotSupported;
}

export function getNetworksByType(chainId: number): number[] {
  switch (getNetworkType(chainId)) {
    case NetworkType.Mainnet:
      return Mainnets;
    case NetworkType.Testnet:
      return Testnets;
  }
  return [];
}

export async function forEachNumberIndexAwait<T>(list: { [index: number]: T }, callbackFn: (item: T, index: number) => Promise<void>) {
  for (const chainId in list) {
    if (
      Object.prototype.hasOwnProperty.call(list, chainId)
      && new BigNumber(chainId).isInteger()
    ) await callbackFn(list[chainId], Number(chainId));
  }
}

export function forEachNumberIndex<T>(list: { [index: number]: T }, callbackFn: (item: T, index: number) => void) {
  for (const chainId in list) {
    if (
      Object.prototype.hasOwnProperty.call(list, chainId)
      && new BigNumber(chainId).isInteger()
    ) callbackFn(list[chainId], Number(chainId));
  }
}

export interface VaultGroupStore {
  assetName: string,//must be unique
  vaultType: VaultType,
  vaults: { [chainId: number]: VaultStore },
  deprecated?: boolean,
}

export interface VaultStore extends VaultConstant {
  //DYNAMIC
  //vault
  tokenBalance: BigNumber,
  imbalance: BigNumber,
  ordersLength: number,
  //user
  userTokenAmount: BigNumber,
  userOrders: VaultOrderStore[]
}

export interface VaultOrderStore {
  id: number//orderId on chain
  status: VaultOrderStatus
  expire: BigNumber

  fromOwner: string,
  fromChain: number,
  fromToken: TokenConstant,
  fromAmount: BigNumber,
  fromStatus: ContractVaultOrderStatus,

  toOwner: string,
  toChain: number,
  toToken: TokenConstant,
  toAmount: BigNumber,
  toAmountMin: BigNumber,
  toStatus: ContractVaultOrderStatus,

  protocolFee: string,
}

export enum ContractVaultOrderStatus {
  //copied from contract interface IOSWAP_BridgeVault, 
  //must not be changed
  NotSpecified,//0
  Pending,//1
  Executed,//2
  RequestCancel,//3
  RefundApproved,//4
  Cancelled,//5
  RequestAmend,//6
}

export enum VaultOrderStatus {
  Pending,//
  Executed,//
  RequestCancel,
  RefundApproved,
  Cancelled,
  RequestAmend,

  Expired,
}

export type ProxyAddresses = { [key: number]: string };

export class State {
  defaultChainId: number = 0;
  isExpertMode: boolean = false;
  slippageTolerance = new BigNumber(orderMinOutRate).shiftedBy(2).toFixed();
  crossChainTransactionDeadline = 72 * 60; //72 hours
  proxyAddresses: ProxyAddresses = {};
  infuraId: string = "";
  rpcWalletId: string = "";
  networkMap = {} as { [key: number]: IExtendedNetwork };
  networkConfig = [] as INetworkConfig[];
  vaultGroups = initVaultGroupsStore(VaultGroupList);
  embedderCommissionFee: string;
  approvalModel: ERC20ApprovalModel;

  constructor(options: any) {
    this.initData(options);
  }

  initRpcWallet(defaultChainId: number) {
    this.defaultChainId = defaultChainId;
    if (this.rpcWalletId) {
      return this.rpcWalletId;
    }
    const clientWallet = Wallet.getClientInstance();
    const networkList: INetwork[] = Object.values(application.store?.networkMap || []);
    const instanceId = clientWallet.initRpcWallet({
      networks: networkList,
      defaultChainId,
      infuraId: application.store?.infuraId,
      multicalls: application.store?.multicalls
    });
    this.rpcWalletId = instanceId;
    if (clientWallet.address) {
      const rpcWallet = Wallet.getRpcWalletInstance(instanceId);
      rpcWallet.address = clientWallet.address;
    }
    const defaultNetworkList = getNetworkList();
    const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
      acc[cur.chainId] = cur;
      return acc;
    }, {});
    const supportedNetworks = ConfigData.supportedNetworks || [];
    for (let network of networkList) {
      const networkInfo = defaultNetworkMap[network.chainId];
      const supportedNetwork = supportedNetworks.find(v => v.chainId == network.chainId);
      if (!networkInfo || !supportedNetwork) continue;
      if (this.infuraId && network.rpcUrls && network.rpcUrls.length > 0) {
        for (let i = 0; i < network.rpcUrls.length; i++) {
          network.rpcUrls[i] = network.rpcUrls[i].replace(/{InfuraId}/g, this.infuraId);
        }
      }
      this.networkMap[network.chainId] = {
        ...networkInfo,
        ...network,
        isCrossChainSupported: supportedNetwork.isCrossChainSupported,
        isTestnet: supportedNetwork.isTestnet
      };
    }
    return instanceId;
  }

  getRpcWallet() {
    return this.rpcWalletId ? Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
  }

  isRpcWalletConnected() {
    const wallet = this.getRpcWallet();
    return wallet?.isConnected;
  }

  getProxyAddress(chainId?: number) {
    const _chainId = chainId || Wallet.getInstance().chainId;
    const proxyAddresses = this.proxyAddresses;
    if (proxyAddresses) {
      return proxyAddresses[_chainId];
    }
    return null;
  }

  getNetworkInfo = (chainId: number) => {
    return this.networkMap[chainId];
  }

  getFilteredNetworks = (filter: (value: IExtendedNetwork, index: number, array: IExtendedNetwork[]) => boolean) => {
    let networkFullList = Object.values(this.networkMap);
    return networkFullList.filter(filter);
  }

  getSiteSupportedNetworks = () => {
    let networkFullList = Object.values(this.networkMap);
    let list = networkFullList.filter(network => !this.getNetworkInfo(network.chainId)?.isDisabled);
    return list;
  }

  getMatchNetworks = (conditions: NetworkConditions): IExtendedNetwork[] => {
    let networkFullList = Object.values(this.networkMap);
    let out = matchFilter(networkFullList, conditions);
    return out;
  }

  getNetworkExplorerName = (chainId: number) => {
    if (this.getNetworkInfo(chainId)) {
      return this.getNetworkInfo(chainId).explorerName;
    }
    return 'Unknown';
  }

  viewOnExplorerByTxHash = (chainId: number, txHash: string) => {
    let network = this.getNetworkInfo(chainId);
    if (network && network.explorerTxUrl) {
      let url = `${network.explorerTxUrl}${txHash}`;
      window.open(url);
    }
  }

  viewOnExplorerByAddress = (chainId: number, address: string) => {
    let network = this.getNetworkInfo(chainId);
    if (network && network.explorerAddressUrl) {
      let url = `${network.explorerAddressUrl}${address}`;
      window.open(url);
    }
  }

  getChainId() {
    const rpcWallet = this.getRpcWallet();
    return rpcWallet?.chainId;
  }

  toggleExpertMode() {
    this.isExpertMode = !this.isExpertMode
  }

  getSlippageTolerance = (): number => {
    return Number(this.slippageTolerance) || 0;
  }

  setSlippageTolerance = (value: number) => {
    this.slippageTolerance = new BigNumber(value).toFixed();
  }

  getCrossChainTransactionDeadline = (): number => {
    return this.crossChainTransactionDeadline;
  }

  setCrossChainTransactionDeadline = (value: number) => {
    this.crossChainTransactionDeadline = value;
  }

  setVaultGroups = (vaultGroups: VaultGroupStore[]) => {
    this.vaultGroups = vaultGroups;
  }

  getVaultGroups = () => {
    return this.vaultGroups;
  }

  setNetworkConfig = (networks: INetworkConfig[]) => {
    this.networkConfig = networks;
  }

  getNetworkConfig = () => {
    return this.networkConfig;
  }

  private initData(options: any) {
    if (options.infuraId) {
      this.infuraId = options.infuraId;
    }
    if (options.proxyAddresses) {
      this.proxyAddresses = options.proxyAddresses;
    }
  }

  async setApprovalModelAction(options: IERC20ApprovalEventOptions) {
    const approvalOptions = {
      ...options,
      spenderAddress: ''
    };
    let wallet = this.getRpcWallet();
    this.approvalModel = new ERC20ApprovalModel(wallet, approvalOptions);
    let approvalModelAction = this.approvalModel.getAction();
    return approvalModelAction;
  }
}

function castToVaultStore(vc: VaultConstant): VaultStore {
  return {
    ...vc,
    tokenBalance: new BigNumber("0"),
    imbalance: new BigNumber("0"),
    userTokenAmount: new BigNumber("0"),
    userOrders: [],
    ordersLength: 0
  }
}

function castToVaultGroupStore(vgc: VaultGroupConstant): VaultGroupStore {
  let vaults: { [chainId: number]: VaultStore } = {};
  forEachNumberIndex(vgc.vaults, (v, chainId) => vaults[chainId] = castToVaultStore(v));
  return {
    ...vgc,
    vaults,
  }
}

function initVaultGroupsStore(vgcs: VaultGroupConstant[]) {
  return vgcs.map(g => castToVaultGroupStore(g));
}

interface NetworkConditions {
  isDisabled?: boolean,
  isTestnet?: boolean,
  isCrossChainSupported?: boolean,
  isMainChain?: boolean
}

function matchFilter<O extends { [keys: string]: any }>(list: O[], filter: Partial<O>): O[] {
  let filters = Object.keys(filter);
  return list.filter(item => filters.every(f => {
    switch (typeof filter[f]) {
      case 'boolean':
        if (filter[f] === false) {
          return !item[f];
        }
      // also case for filter[f] === true 
      case 'string':
      case 'number':
        return filter[f] === item[f];
      case 'object': // have not implemented yet
      default:
        console.log(`matchFilter do not support ${typeof filter[f]} yet!`)
        return false;
    }
  }));
}

// wallet
export function getWalletProvider() {
  return localStorage.getItem('walletProvider') || WalletPlugin.MetaMask;
}

export function isWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export async function switchNetwork(chainId: number) {
  const wallet = Wallet.getClientInstance();
  await wallet.switchNetwork(chainId);
  if (!isWalletConnected()) {
    application.EventBus.dispatch(EventId.chainChanged, chainId);
  }
}
