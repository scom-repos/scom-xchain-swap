/// <reference path="@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-commission-proxy-contract/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-dapp-container/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-commission-fee-setup/index.d.ts" />
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts" {
    export const Tokens_Avalanche: {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts" {
    export const Tokens_BSC: {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/mainnet/index.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/mainnet/index.ts" {
    export { Tokens_Avalanche } from "@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts";
    export { Tokens_BSC } from "@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts" {
    export const Tokens_BSC_Testnet: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts" {
    export const Tokens_Fuji: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/testnet/index.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/testnet/index.ts" {
    export { Tokens_BSC_Testnet } from "@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts";
    export { Tokens_Fuji } from "@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/tokens/index.ts" />
declare module "@scom/scom-xchain-swap/store/data/tokens/index.ts" {
    import { ITokenObject } from "@scom/scom-token-list";
    const DefaultERC20Tokens: {
        [chainId: number]: ITokenObject[];
    };
    const ChainNativeTokenByChainId: {
        [chainId: number]: ITokenObject;
    };
    const getOpenSwapToken: (chainId: number) => ITokenObject;
    const DefaultTokens: {
        [chainId: number]: ITokenObject[];
    };
    const ToUSDPriceFeedAddressesMap: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const tokenPriceAMMReference: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const getTokenIconPath: (tokenObj: any, chainId?: number) => string;
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getTokenIconPath, getOpenSwapToken, };
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/core.ts" />
declare module "@scom/scom-xchain-swap/store/data/core.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    export interface TokenConstant {
        address: string;
        name: string;
        decimals: number;
        symbol: string;
    }
    export interface TokenStore {
        address: string;
        name: string;
        decimals: number;
        symbol: string;
        userBalance: BigNumber;
    }
    export interface ContractSet {
        WETH9: string;
        GOV_TOKEN: string;
    }
    export const MainnetMainChain = 56;
    export const TestnetMainChain = 97;
    export const Mainnets: number[];
    export const Testnets: number[];
    export const CoreContractStore: {
        [chainId: number]: ContractSet;
    };
    export const crossChainNativeTokenList: {
        [chainId: number]: {
            address: string;
            decimals: number;
            symbol: string;
            name: string;
            isNative: boolean;
            wethAddress: string;
        };
    };
    export const orderMinOutRate = "0.005";
    export enum VaultType {
        Project = "Project",
        Exchange = "Exchange"
    }
    export interface VaultConstant {
        chainId: number;
        assetToken: TokenConstant;
        vaultRegistryAddress: string;
        vaultAddress: string;
        vaultDecimals?: number;
        softCap: number;
        baseFee: string;
        protocolFee: string;
        transactionFee: string;
        imbalanceFee: string;
    }
    export interface VaultGroupConstant {
        assetName: string;
        vaultType: VaultType;
        vaults: {
            [chainId: number]: VaultConstant;
        };
        deprecated?: boolean;
    }
    export const VaultGroupList: VaultGroupConstant[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/dummy.ts" />
declare module "@scom/scom-xchain-swap/store/data/dummy.ts" {
    export const dummyAddressList: string[];
}
/// <amd-module name="@scom/scom-xchain-swap/store/data/index.ts" />
declare module "@scom/scom-xchain-swap/store/data/index.ts" {
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getTokenIconPath, getOpenSwapToken, } from "@scom/scom-xchain-swap/store/data/tokens/index.ts";
    export * from "@scom/scom-xchain-swap/store/data/core.ts";
    export { dummyAddressList, } from "@scom/scom-xchain-swap/store/data/dummy.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/global/helper.ts" />
declare module "@scom/scom-xchain-swap/global/helper.ts" {
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
    export const DefaultDateTimeFormat = "DD/MM/YYYY HH:mm:ss";
    export const DefaultDateFormat = "DD/MM/YYYY";
    export const formatDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const formatNumber: (value: any, decimals?: number, options?: {
        min?: number;
        sign?: string;
    }) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const isInvalidInput: (val: any) => boolean;
    export const limitInputNumber: (input: any, decimals: number) => void;
    export const limitDecimals: (value: any, decimals: number) => any;
    export function getAPI(url: string, paramsObj?: any): Promise<any>;
    export const showResultMessage: (result: any, status: 'warning' | 'success' | 'error', content?: string | Error) => void;
}
/// <amd-module name="@scom/scom-xchain-swap/global/common.ts" />
declare module "@scom/scom-xchain-swap/global/common.ts" {
    import { ISendTxEventsOptions } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-token-list";
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
    export const registerSendTxEvents: (sendTxEventHandlers: ISendTxEventsOptions) => void;
}
/// <amd-module name="@scom/scom-xchain-swap/global/interface.ts" />
declare module "@scom/scom-xchain-swap/global/interface.ts" {
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    export interface ICommissionInfo {
        chainId: number;
        walletAddress: string;
    }
    export interface INetworkConfig {
        chainName?: string;
        chainId: number;
    }
    export interface ITokenConfig {
        chainId: number;
        address?: string;
    }
    export interface IXchainWidgetData {
        campaignId?: number;
        commissions?: ICommissionInfo[];
        tokens?: ITokenConfig[];
        defaultChainId: number;
        wallets: IWalletPlugin[];
        networks: INetworkConfig[];
        showHeader?: boolean;
        showFooter?: boolean;
        defaultInputToken?: ITokenConfig;
        recordUrl?: string;
        urlParamsEnabled?: boolean;
        currentURLHash?: string;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/global/index.ts" />
declare module "@scom/scom-xchain-swap/global/index.ts" {
    import { INetwork } from '@ijstech/eth-wallet';
    export interface IExtendedNetwork extends INetwork {
        shortName?: string;
        isDisabled?: boolean;
        isMainChain?: boolean;
        isCrossChainSupported?: boolean;
        explorerName?: string;
        explorerTxUrl?: string;
        explorerAddressUrl?: string;
        isTestnet?: boolean;
    }
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        Paid = "Paid",
        chainChanged = "chainChanged",
        ShowExpertModal = "showExpertModal",
        ShowTransactionModal = "showTransactionModal",
        SlippageToleranceChanged = "slippageToleranceChanged",
        ExpertModeChanged = "expertModeChanged"
    }
    export { getAPI, formatNumber, formatNumberWithSeparators, DefaultDateTimeFormat, DefaultDateFormat, formatDate, limitDecimals, limitInputNumber, isInvalidInput, SITE_ENV, showResultMessage } from "@scom/scom-xchain-swap/global/helper.ts";
    export { registerSendTxEvents, TokenMapType } from "@scom/scom-xchain-swap/global/common.ts";
    export * from "@scom/scom-xchain-swap/global/interface.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/data.json.ts" />
declare module "@scom/scom-xchain-swap/data.json.ts" {
    const _default: {
        infuraId: string;
        defaultBuilderData: {
            tokens: {
                address: string;
                chainId: number;
            }[];
            defaultChainId: number;
            networks: {
                chainId: number;
            }[];
            wallets: {
                name: string;
            }[];
            showHeader: boolean;
            showFooter: boolean;
        };
        supportedNetworks: ({
            chainId: number;
            isMainChain: boolean;
            isCrossChainSupported: boolean;
            isTestnet?: undefined;
        } | {
            chainId: number;
            isMainChain: boolean;
            isCrossChainSupported: boolean;
            isTestnet: boolean;
        } | {
            chainId: number;
            isCrossChainSupported: boolean;
            isTestnet: boolean;
            isMainChain?: undefined;
        } | {
            chainId: number;
            isCrossChainSupported: boolean;
            isMainChain?: undefined;
            isTestnet?: undefined;
        })[];
    };
    export default _default;
}
/// <amd-module name="@scom/scom-xchain-swap/store/utils.ts" />
declare module "@scom/scom-xchain-swap/store/utils.ts" {
    import { BigNumber, ERC20ApprovalModel, IERC20ApprovalEventOptions } from '@ijstech/eth-wallet';
    import { IExtendedNetwork, TokenMapType } from "@scom/scom-xchain-swap/global/index.ts";
    import { VaultConstant, VaultGroupConstant, VaultType, TokenConstant } from "@scom/scom-xchain-swap/store/data/core.ts";
    import { INetworkConfig } from '@scom/scom-network-picker';
    import { ITokenObject } from '@scom/scom-token-list';
    export interface IWalletConnectMetadata {
        name: string;
        description: string;
        url: string;
        icons: string[];
    }
    export interface IWalletConnectConfig {
        projectId: string;
        metadata: IWalletConnectMetadata;
    }
    export enum WalletPlugin {
        MetaMask = "metamask",
        Coin98 = "coin98",
        TrustWallet = "trustwallet",
        BinanceChainWallet = "binancechainwallet",
        ONTOWallet = "onto",
        WalletConnect = "walletconnect",
        BitKeepWallet = "bitkeepwallet",
        FrontierWallet = "frontierwallet"
    }
    export enum NetworkType {
        Mainnet = 0,
        Testnet = 1,
        NotSupported = 2
    }
    export function getNetworkType(chainId: number): NetworkType;
    export function getNetworksByType(chainId: number): number[];
    export function forEachNumberIndexAwait<T>(list: {
        [index: number]: T;
    }, callbackFn: (item: T, index: number) => Promise<void>): Promise<void>;
    export function forEachNumberIndex<T>(list: {
        [index: number]: T;
    }, callbackFn: (item: T, index: number) => void): void;
    export function forEachStringIndexAwait<T>(list: {
        [index: string]: T;
    }, callbackFn: (item: T, index: string) => Promise<void>): Promise<void>;
    export function forEachStringIndex<T>(list: {
        [index: string]: T;
    }, callbackFn: (item: T, index: string) => void): void;
    export function filterNumberIndexedList<T>(list: {
        [index: number]: T;
    }, filterFn: (item: T, index: number) => boolean): {
        [index: number]: T;
    };
    export function filterVaultInsideGroup(vgs: VaultGroupConstant[], filterFn: (vault: VaultConstant, chainId: number) => boolean): {
        assetName: string;
        vaultType: VaultType;
        vaults: {
            [index: number]: VaultConstant;
        };
    }[];
    export interface VaultGroupStore {
        assetName: string;
        vaultType: VaultType;
        vaults: {
            [chainId: number]: VaultStore;
        };
        deprecated?: boolean;
    }
    export interface VaultStore extends VaultConstant {
        tokenBalance: BigNumber;
        imbalance: BigNumber;
        ordersLength: number;
        userTokenAmount: BigNumber;
        userOrders: VaultOrderStore[];
    }
    export interface VaultOrderStore {
        id: number;
        status: VaultOrderStatus;
        expire: BigNumber;
        fromOwner: string;
        fromChain: number;
        fromToken: TokenConstant;
        fromAmount: BigNumber;
        fromStatus: ContractVaultOrderStatus;
        toOwner: string;
        toChain: number;
        toToken: TokenConstant;
        toAmount: BigNumber;
        toAmountMin: BigNumber;
        toStatus: ContractVaultOrderStatus;
        protocolFee: string;
    }
    export enum ContractVaultOrderStatus {
        NotSpecified = 0,
        Pending = 1,
        Executed = 2,
        RequestCancel = 3,
        RefundApproved = 4,
        Cancelled = 5,
        RequestAmend = 6
    }
    export enum VaultOrderStatus {
        Pending = 0,
        Executed = 1,
        RequestCancel = 2,
        RefundApproved = 3,
        Cancelled = 4,
        RequestAmend = 5,
        Expired = 6
    }
    export interface VaultOrderItem {
        assetName: string;
        fromVaultAddress: string;
        toVaultAddress: string;
        orderId: number;
        expire: BigNumber;
        fromNetwork: IExtendedNetwork;
        toNetwork: IExtendedNetwork;
        price: string;
        protocolFee: BigNumber;
        fromAmount: string;
        fromToken: TokenConstant;
        toToken: TokenConstant;
        toAmount: string;
        minOutAmount: string;
        sourceVaultToken: TokenConstant;
        sourceVaultInAmount: string;
        statusCode: VaultOrderStatus;
        status: string;
        sender: string;
    }
    interface Logo {
        default: string;
        mobile: string;
        footer: string;
    }
    interface FooterPageInfo {
        caption: string;
        link: string;
    }
    interface SocialMediaInfo {
        img: string;
        link: string;
    }
    interface TokenInfo {
        symbol: string;
        img: string;
    }
    export interface ProjectInfo {
        logo: Logo;
        versionText: string;
    }
    export interface IParams {
        projectInfo: ProjectInfo;
        footerPagesInfo: FooterPageInfo[];
        socialMediaInfo: SocialMediaInfo[];
        tokenInfo: TokenInfo;
    }
    export type ProxyAddresses = {
        [key: number]: string;
    };
    export class State {
        defaultChainId: number;
        isExpertMode: boolean;
        slippageTolerance: string;
        crossChainTransactionDeadline: number;
        proxyAddresses: ProxyAddresses;
        infuraId: string;
        rpcWalletId: string;
        networkMap: {
            [key: number]: IExtendedNetwork;
        };
        networkConfig: INetworkConfig[];
        vaultGroups: VaultGroupStore[];
        embedderCommissionFee: string;
        approvalModel: ERC20ApprovalModel;
        constructor(options: any);
        initRpcWallet(defaultChainId: number): string;
        getRpcWallet(): import("@ijstech/eth-wallet").IRpcWallet;
        isRpcWalletConnected(): boolean;
        getProxyAddress(chainId?: number): string;
        getNetworkInfo: (chainId: number) => IExtendedNetwork;
        getFilteredNetworks: (filter: (value: IExtendedNetwork, index: number, array: IExtendedNetwork[]) => boolean) => IExtendedNetwork[];
        getSiteSupportedNetworks: () => IExtendedNetwork[];
        getMatchNetworks: (conditions: NetworkConditions) => IExtendedNetwork[];
        getNetworkExplorerName: (chainId: number) => string;
        viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
        viewOnExplorerByAddress: (chainId: number, address: string) => void;
        getChainId(): number;
        toggleExpertMode(): void;
        getSlippageTolerance: () => number;
        setSlippageTolerance: (value: number) => void;
        getCrossChainTransactionDeadline: () => number;
        setCrossChainTransactionDeadline: (value: number) => void;
        setVaultGroups: (vaultGroups: VaultGroupStore[]) => void;
        getVaultGroups: () => VaultGroupStore[];
        setNetworkConfig: (networks: INetworkConfig[]) => void;
        getNetworkConfig: () => INetworkConfig[];
        private initData;
        setApprovalModelAction(options: IERC20ApprovalEventOptions): Promise<import("@ijstech/eth-wallet").IERC20ApprovalAction>;
    }
    export function isContractVaultOrderStatus(n: number): n is ContractVaultOrderStatus;
    export function isVaultOrderStatus(n: number): n is VaultOrderStatus;
    export function castToVaultOrderStatus(n: number): ContractVaultOrderStatus;
    export function determineOrderStatus(expire: number | BigNumber, fromChainStatus: ContractVaultOrderStatus, toChainStatus: ContractVaultOrderStatus): VaultOrderStatus;
    interface NetworkConditions {
        isDisabled?: boolean;
        isTestnet?: boolean;
        isCrossChainSupported?: boolean;
        isMainChain?: boolean;
    }
    export const getTokensDataList: (tokenMapData: TokenMapType, tokenBalances: any) => Promise<any[]>;
    export function getWalletProvider(): string;
    export function isMetaMask(): boolean;
    export function isWalletConnected(): boolean;
    export function switchNetwork(chainId: number): Promise<void>;
    export const truncateAddress: (address: string) => string;
    export function getChainId(): number;
    export function getAddresses(chainId: number): import("@scom/scom-xchain-swap/store/data/core.ts").ContractSet;
    export const getChainNativeToken: (chainId: number) => ITokenObject;
    export const getGovToken: (chainId: number) => ITokenObject;
}
/// <amd-module name="@scom/scom-xchain-swap/store/index.ts" />
declare module "@scom/scom-xchain-swap/store/index.ts" {
    import { VaultConstant, VaultGroupConstant } from "@scom/scom-xchain-swap/store/data/index.ts";
    export * from "@scom/scom-xchain-swap/store/data/index.ts";
    export const nullAddress = "0x0000000000000000000000000000000000000000";
    export const getTokenIcon: (address: string, chainId: number) => string;
    export const getEmbedLink: (dataUri: string, params?: {
        [key: string]: string;
    }) => string;
    export function findConstantTokenByVault(chainId: number, vaultAddress: string): import("@scom/scom-xchain-swap/store/data/core.ts").TokenConstant;
    export function findConstantVaultGroupByToken(chainId: number, tokenAddress: string): VaultGroupConstant;
    export function findConstantVault(vaultGroup: VaultGroupConstant, chainId: number): VaultConstant;
    export function findConstantToVault(fromChainId: number, tokenAddress: string, toChainId: number): VaultConstant;
    export function findConstantAllAsset(fromChainId: number): VaultConstant[];
    export * from "@scom/scom-xchain-swap/store/utils.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/crosschain-utils/crosschain-utils.types.ts" />
declare module "@scom/scom-xchain-swap/crosschain-utils/crosschain-utils.types.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-token-list";
    export interface IBridgeVaultBond {
        vaultTrollRegistry: string;
        chainId: number;
        trollId: string;
        shareHolder: string;
        bond: string;
        shares: string;
        sharesPendingWithdrawal: string;
        sharesApprovedWithdrawal: string;
        version: string;
    }
    export interface IBridgeVault {
        chainId: number;
        address: string;
        asset: string;
        configStore: string;
        baseFee: string;
        protocolFee: string;
        transactionFee: string;
        imbalanceFee: string;
        lpAssetBalance: string;
        imbalance: string;
        vaultType: string;
        vaultGroup: string;
        version: string;
    }
    export interface CreateBridgeVaultOrderParams {
        vaultAddress: string;
        targetChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: string;
        minAmountOut: string;
        transactionSetting: {
            transactionDeadlineInMinutes: number;
            slippageTolerance: number;
        };
        sourceRouteInfo?: {
            amountOut: string;
            pairs: string[];
        };
    }
    export interface Order {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    }
    export interface SwapExactETHForTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: Order;
    }
    export interface SwapExactTokensForTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: Order;
    }
    export interface GetAvailableRouteOptionsParams {
        fromChainId: number;
        toChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: number | BigNumber;
    }
    export interface IBridgeFees {
        baseFee: BigNumber | number;
        protocolFee: BigNumber | number;
        transactionFee: BigNumber | number;
        imbalanceFee: BigNumber | number;
        sourceRouteLiquidityFee?: BigNumber | number;
        targetRouteLiquidityFee?: BigNumber | number;
    }
    export interface ICrossChainRouteResult {
        contractAddress: string;
        vaultAddress: string;
        fromAmount: BigNumber;
        toAmount: BigNumber;
        fees: IBridgeFees;
        price: number;
        priceSwap: number;
        priceImpact: number;
        sourceRouteObj?: IRoutesResult | null;
        sourceVaultToken?: ITokenObject | null;
        targetRouteObj: IRoutesResult;
        targetVaultToken: ITokenObject;
        vaultTokenToTargetChain: string;
        vaultTokenFromSourceChain: BigNumber;
        isApproveButtonShown?: boolean;
        tardeFee: number;
    }
    export interface IRoutesResult {
        amountOut: BigNumber;
        bestRoutes: ITokenObject[];
        bestSmartRoute: IBestSmartRoute[];
        key: string;
        market: number[];
        pairs: string[];
        price: number;
        priceImpact: number;
        provider: string;
        queueType: number;
        tradeFee: string;
    }
    export interface IBestSmartRoute {
        caption: string;
        fromToken: ITokenObject;
        toToken: ITokenObject;
        isRegistered: boolean;
        pairAddress: string;
        provider: string;
    }
    export interface ICrossChainRouteFromAPI {
        vault: string;
        sourceRoute: IRoutesAPI;
        targetRoute: IRoutesAPI;
        fees: IBridgeFees;
    }
    export interface IRoutesAPI {
        amountOut: string;
        dexId: number;
        queueType?: number;
        isDirectRoute: boolean;
        route: IRouteAPI[];
        tokens: {
            address: string;
            decimals: number;
            name: string;
            symbol: string;
        }[];
        tradeFees: {
            fee: string;
            base: string;
        }[];
    }
    export interface IRouteAPI {
        address: string;
        dexId: number;
        isRegistered: boolean;
        reserves: {
            reserve0: string;
            reserve1: string;
        };
        boostReserves?: {
            boostReserveIn: string;
            boostReserveOut: string;
        };
        queueType?: number;
        orderIds?: string[];
    }
}
/// <amd-module name="@scom/scom-xchain-swap/crosschain-utils/API.ts" />
declare module "@scom/scom-xchain-swap/crosschain-utils/API.ts" {
    import { VaultGroupStore, VaultConstant, VaultStore, State } from "@scom/scom-xchain-swap/store/index.ts";
    import { Wallet, BigNumber, TransactionReceipt } from "@ijstech/eth-wallet";
    import '@ijstech/eth-contract';
    import { CreateBridgeVaultOrderParams, GetAvailableRouteOptionsParams, ICrossChainRouteResult } from "@scom/scom-xchain-swap/crosschain-utils/crosschain-utils.types.ts";
    import { ITokenObject } from "@scom/scom-token-list";
    const initCrossChainWallet: (state: State, chainId: number) => Wallet;
    function isSupportedCrossChain(fromChain: number, toChain: number): boolean;
    interface VaultTokenMap {
        [chainId: string]: {
            [vaultAddress: string]: string;
        };
    }
    const getVaultTokenMap: () => VaultTokenMap;
    function getBond(state: State, vault: VaultConstant | VaultStore): Promise<BigNumber>;
    interface CreateOrderParams {
        vaultAddress: string;
        targetChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: string;
        minAmountOut: string;
    }
    function createBridgeVaultOrder(state: State, params: CreateOrderParams): Promise<{
        receipt: TransactionReceipt | null;
        error: Record<string, string> | null;
    }>;
    const getVaultAssetBalance: (state: State, chainId: number, vaultAddress: string) => Promise<BigNumber>;
    const getChainNativeToken: () => ITokenObject;
    interface SwapData {
        fromAmount: BigNumber;
        toAmount: BigNumber;
    }
    function getFeeAmounts(vault: VaultStore, amountIn: BigNumber): {
        totalFeeAmount: BigNumber;
        baseFeeAmount: BigNumber;
        protocolFeeAmount: BigNumber;
        transactionFeeAmount: BigNumber;
        imbalanceFeeAmount: BigNumber;
    };
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
        };
    }
    function getRoute(swapInfo: SwapInfo): Route;
    interface NewOrderParams {
        vaultAddress: string;
        targetChainId: number;
        tokenIn: ITokenObject;
        tokenOut: ITokenObject;
        amountIn: string;
        minAmountOut: string;
        sourceRouteInfo?: {
            amountOut: string;
            pairs: string[];
        };
    }
    interface SwapInfo {
        vaultGroup: VaultGroupStore;
        toChainId: number;
        fromChainId: number;
        inAmount: BigNumber;
    }
    function findVaultGroupByToken(state: State, chainId: number, tokenAddress: string): Promise<VaultGroupStore>;
    function findToVault(state: State, fromChainId: number, tokenAddress: string, toChainId: number): Promise<VaultStore>;
    function findAllAsset(state: State, fromChainId: number): Promise<VaultConstant[]>;
    function getVaultGroups(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]>;
    function getVaultGroupsUpdateOrders(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]>;
    export { isSupportedCrossChain, getFeeAmounts, getVaultGroups, getVaultGroupsUpdateOrders, VaultTokenMap, getVaultTokenMap, getBond, initCrossChainWallet, CreateOrderParams, CreateBridgeVaultOrderParams, createBridgeVaultOrder, GetAvailableRouteOptionsParams, Route, getRoute, ICrossChainRouteResult, getVaultAssetBalance, findAllAsset, findToVault, findVaultGroupByToken, SwapData, getChainNativeToken, NewOrderParams, };
}
/// <amd-module name="@scom/scom-xchain-swap/crosschain-utils/index.ts" />
declare module "@scom/scom-xchain-swap/crosschain-utils/index.ts" {
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    export const getCommissionRate: (state: State, campaignId: number) => Promise<string>;
    export * from "@scom/scom-xchain-swap/crosschain-utils/API.ts";
}
/// <amd-module name="@scom/scom-xchain-swap/price-info/index.css.ts" />
declare module "@scom/scom-xchain-swap/price-info/index.css.ts" { }
/// <amd-module name="@scom/scom-xchain-swap/assets.ts" />
declare module "@scom/scom-xchain-swap/assets.ts" {
    function fullPath(path: string): string;
    const _default_1: {
        fullPath: typeof fullPath;
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/main.json.ts" />
declare module "@scom/scom-xchain-swap/languages/main.json.ts" {
    const _default_2: {
        en: {
            "last_updated_(s)_ago": string;
            confirm_swap: string;
            transaction_fee_details: string;
            close: string;
            cancel: string;
            vault_bond_balance: string;
            vault_asset_balance: string;
            "vault_bond_balance:_0": string;
            "vault_asset_balance:_0": string;
            "balance:_0": string;
            "swapping_from_to:": string;
            no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token: string;
            no_routing: string;
            balance: string;
            you_receive: string;
            you_pay: string;
            destination_chain: string;
            source_chain: string;
            you_swap: string;
            total_transaction_fee: string;
            exceed_vault_asset_balance_or_bond_balance: string;
            cap_reached: string;
            cap: string;
            you_will_pay_at_most: string;
            you_will_receive_at_least: string;
            input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is: string;
            swapping: string;
            approving: string;
            max: string;
            xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet: string;
            do_you_want_to_switch_network_to_network: string;
            connect_wallet: string;
            switch_network: string;
            approve: string;
            swap: string;
            create_order: string;
            turn_on_expert_mode: string;
            insufficient_balance: string;
            invalid_pair: string;
            circuit_breaker_triggered: string;
            base_fee: string;
            this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain: string;
            bridge_vault_liquidity_fee: string;
            this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain: string;
            protocol_fee: string;
            this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network: string;
            imbalance_fee: string;
            this_fee_is_acted_as_an_incentive_to_balance_the_vault: string;
            "the_order_was_created_successfully!": string;
            do_you_want_to_view_the_record: string;
            current_url_hash: string;
            record_url: string;
            enable_url_params: string;
            networks: string;
            chain_id: string;
            tokens: string;
            address: string;
            general: string;
        };
        "zh-hant": {
            "last_updated_(s)_ago": string;
            approve: string;
            approving: string;
            balance: string;
            cap_reached: string;
            cap: string;
            circuit_breaker_triggered: string;
            close: string;
            cancel: string;
            confirm_swap: string;
            connect_wallet: string;
            create_order: string;
            destination_chain: string;
            exceed_vault_asset_balance_or_bond_balance: string;
            if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is: string;
            input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            insufficient_balance: string;
            invalid_pair: string;
            max: string;
            xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet: string;
            do_you_want_to_switch_network_to_network: string;
            no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token: string;
            no_routing: string;
            output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            source_chain: string;
            swap_supports_this_network_please_switch_network_in_the_connected_wallet: string;
            swap: string;
            swapping: string;
            switch_network: string;
            total_transaction_fee: string;
            transaction_fee_details: string;
            turn_on_expert_mode: string;
            vault_asset_balance: string;
            vault_bond_balance: string;
            you_pay: string;
            you_receive: string;
            you_swap: string;
            you_will_pay_at_most: string;
            you_will_receive_at_least: string;
            "vault_bond_balance:_0": string;
            "vault_asset_balance:_0": string;
            "balance:_0": string;
            "swapping_from_to:": string;
            base_fee: string;
            bridge_vault_liquidity_fee: string;
            protocol_fee: string;
            imbalance_fee: string;
            this_fee_is_acted_as_an_incentive_to_balance_the_vault: string;
            this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain: string;
            this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network: string;
            this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain: string;
            "the_order_was_created_successfully!": string;
            do_you_want_to_view_the_record: string;
            current_url_hash: string;
            record_url: string;
            enable_url_params: string;
            networks: string;
            chain_id: string;
            tokens: string;
            address: string;
            general: string;
        };
        vi: {
            "last_updated_(s)_ago": string;
            confirm_swap: string;
            transaction_fee_details: string;
            close: string;
            cancel: string;
            vault_bond_balance: string;
            vault_asset_balance: string;
            "vault_bond_balance:_0": string;
            "vault_asset_balance:_0": string;
            "balance:_0": string;
            "swapping_from_to:": string;
            no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token: string;
            no_routing: string;
            balance: string;
            you_receive: string;
            you_pay: string;
            destination_chain: string;
            source_chain: string;
            you_swap: string;
            total_transaction_fee: string;
            exceed_vault_asset_balance_or_bond_balance: string;
            cap_reached: string;
            cap: string;
            you_will_pay_at_most: string;
            you_will_receive_at_least: string;
            input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert: string;
            if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is: string;
            swapping: string;
            approving: string;
            max: string;
            xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet: string;
            do_you_want_to_switch_network_to_network: string;
            price_impact_too_high_if_you_want_to_bypass_this_check_please_turn_on_expert_mode: string;
            connect_wallet: string;
            switch_network: string;
            approve: string;
            swap: string;
            create_order: string;
            turn_on_expert_mode: string;
            insufficient_balance: string;
            invalid_pair: string;
            circuit_breaker_triggered: string;
            base_fee: string;
            this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain: string;
            imbalance_fee: string;
            this_fee_is_acted_as_an_incentive_to_balance_the_vault: string;
            bridge_vault_liquidity_fee: string;
            this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain: string;
            protocol_fee: string;
            this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network: string;
            "the_order_was_created_successfully!": string;
            do_you_want_to_view_the_record: string;
            current_url_hash: string;
            record_url: string;
            enable_url_params: string;
            networks: string;
            chain_id: string;
            tokens: string;
            address: string;
            general: string;
        };
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/bridgeRecord.json.ts" />
declare module "@scom/scom-xchain-swap/languages/bridgeRecord.json.ts" {
    const _default_3: {
        en: {
            data_last_updated_0_seconds_ago: string;
            data_last_updated_seconds_ago: string;
            latest_swap: string;
            no_data: string;
            please_connect_with_your_wallet: string;
            oldest_swap: string;
            destination_chain: string;
            source_chain: string;
            token_group: string;
            confirming: string;
            request_cancel: string;
            withdraw: string;
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
            the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
            amend_order: string;
            minimum_receive: string;
            the_address_has_been_copied: string;
            loading: string;
            withdraw_amount: string;
            switch_network: string;
            token_receive: string;
            expected_receive: string;
            confirm: string;
            token_swap: string;
            from: string;
            to: string;
            status: string;
        };
        "zh-hant": {};
        vi: {
            data_last_updated_0_seconds_ago: string;
            data_last_updated_seconds_ago: string;
            latest_swap: string;
            no_data: string;
            please_connect_with_your_wallet: string;
            oldest_swap: string;
            destination_chain: string;
            source_chain: string;
            token_group: string;
            confirming: string;
            request_cancel: string;
            withdraw: string;
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
            the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
            amend_order: string;
            minimum_receive: string;
            the_address_has_been_copied: string;
            loading: string;
            withdraw_amount: string;
            switch_network: string;
            token_receive: string;
            expected_receive: string;
            confirm: string;
            token_swap: string;
            from: string;
            to: string;
            status: string;
        };
    };
    export default _default_3;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/expertMode.json.ts" />
declare module "@scom/scom-xchain-swap/languages/expertMode.json.ts" {
    const _default_4: {
        en: {
            expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds: string;
            only_use_this_mode_if_you_know_what_you_are_doing: string;
            turn_on_expert_mode: string;
        };
        "zh-hant": {};
        vi: {
            expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds: string;
            only_use_this_mode_if_you_know_what_you_are_doing: string;
            turn_on_expert_mode: string;
        };
    };
    export default _default_4;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/priceInfo.json.ts" />
declare module "@scom/scom-xchain-swap/languages/priceInfo.json.ts" {
    const _default_5: {
        en: {
            price_info: string;
            click_to_view_details: string;
            transaction_fee: string;
            estimated_time: string;
            "30_seconds": string;
        };
        "zh-hant": {
            click_to_view_details: string;
            transaction_fee: string;
            estimated_time: string;
            "30_seconds": string;
        };
        vi: {
            price_info: string;
            click_to_view_details: string;
            transaction_fee: string;
            estimated_time: string;
            "30_seconds": string;
        };
    };
    export default _default_5;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/transactions.json.ts" />
declare module "@scom/scom-xchain-swap/languages/transactions.json.ts" {
    const _default_6: {
        en: {
            transaction_settings: string;
            please_enter_a_valid_transaction_deadline: string;
            please_enter_a_valid_slippage_percentage: string;
            your_transaction_may_fail: string;
            your_transaction_may_be_frontrun: string;
            toggle_expert_mode: string;
            your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage: string;
            slippage_tolerance: string;
            cross_chain_transaction_deadline: string;
            your_transaction_will_revert_if_it_is_pending_for_more_than_this_long: string;
            off: string;
            on: string;
            hours: string;
        };
        "zh-hant": {};
        vi: {
            transaction_settings: string;
            please_enter_a_valid_transaction_deadline: string;
            please_enter_a_valid_slippage_percentage: string;
            your_transaction_may_fail: string;
            your_transaction_may_be_frontrun: string;
            toggle_expert_mode: string;
            your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage: string;
            slippage_tolerance: string;
            cross_chain_transaction_deadline: string;
            your_transaction_will_revert_if_it_is_pending_for_more_than_this_long: string;
            off: string;
            on: string;
            hours: string;
        };
    };
    export default _default_6;
}
/// <amd-module name="@scom/scom-xchain-swap/languages/index.ts" />
declare module "@scom/scom-xchain-swap/languages/index.ts" {
    import mainJson from "@scom/scom-xchain-swap/languages/main.json.ts";
    import bridgeRecordJson from "@scom/scom-xchain-swap/languages/bridgeRecord.json.ts";
    import expertModeJson from "@scom/scom-xchain-swap/languages/expertMode.json.ts";
    import priceInfoJson from "@scom/scom-xchain-swap/languages/priceInfo.json.ts";
    import transactionsJson from "@scom/scom-xchain-swap/languages/transactions.json.ts";
    export { mainJson, bridgeRecordJson, expertModeJson, priceInfoJson, transactionsJson };
}
/// <amd-module name="@scom/scom-xchain-swap/price-info/index.tsx" />
declare module "@scom/scom-xchain-swap/price-info/index.tsx" {
    import { Module, Control, ControlElement, Image, Icon, Container } from '@ijstech/components';
    import "@scom/scom-xchain-swap/price-info/index.css.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['price-info']: ControlElement;
            }
        }
    }
    export class PriceInfo extends Module {
        private priceContent;
        private _items;
        onTogglePrice: any;
        constructor(parent?: Container, options?: any);
        get Items(): any[];
        set Items(value: any[]);
        renderItems: () => Promise<void>;
        onRenderToggleBtn: (parent: Control) => Image;
        renderIconTooltip: (parent: Control, item: any) => Promise<Icon>;
        updateItems: () => Promise<void>;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/expert-mode-settings/index.css.ts" />
declare module "@scom/scom-xchain-swap/expert-mode-settings/index.css.ts" {
    const _default_7: string;
    export default _default_7;
}
/// <amd-module name="@scom/scom-xchain-swap/expert-mode-settings/index.tsx" />
declare module "@scom/scom-xchain-swap/expert-mode-settings/index.tsx" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['xchain-expert-mode-settings']: ControlElement;
            }
        }
    }
    export class ExpertModeSettings extends Module {
        private expertModal;
        private $eventBus;
        private state;
        constructor(state: State, parent?: Container, options?: any);
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        onToggle(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/transaction-settings-layout/index.css.ts" />
declare module "@scom/scom-xchain-swap/transaction-settings-layout/index.css.ts" {
    const _default_8: string;
    export default _default_8;
}
/// <amd-module name="@scom/scom-xchain-swap/transaction-settings-layout/index.tsx" />
declare module "@scom/scom-xchain-swap/transaction-settings-layout/index.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['xchain-transaction-settings-layout']: ControlElement;
            }
        }
    }
    export class TransactionSettingsLayout extends Module {
        private slippageGroup;
        private slippageInput;
        private warningIcon;
        private switchBox;
        private slippageRow;
        private switchBoxRow;
        private crossChainDeadlineInput;
        private crossChainDeadlineGroup;
        private crossChainDeadlineMessage;
        private crossChainDeadlineRow;
        private crossChainDeadlineInputRow;
        private _showSlippageOnly;
        private _showCrossChain;
        private state;
        private $eventBus;
        private slippageToleranceMessage;
        constructor(state: State, parent?: Container, options?: any);
        get showSlippageOnly(): boolean;
        set showSlippageOnly(value: boolean);
        get showCrossChain(): boolean;
        set showCrossChain(value: boolean);
        init(): Promise<void>;
        private registerEvent;
        private onRenderSlippage;
        private onRenderWarningElm;
        private onActiveItem;
        private onSelectSlippage;
        private inputSlippageTolerance;
        private blurSlippageTolerance;
        private setSlippageToleranceMessage;
        private inputCrossChainDeadline;
        private blurCrossChainTransactionDeadline;
        private handleProcessExpertMode;
        private setDefaultTransactionSettings;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/transaction-settings/index.css.ts" />
declare module "@scom/scom-xchain-swap/transaction-settings/index.css.ts" {
    const _default_9: string;
    export default _default_9;
}
/// <amd-module name="@scom/scom-xchain-swap/transaction-settings/index.tsx" />
declare module "@scom/scom-xchain-swap/transaction-settings/index.tsx" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['xchain-transaction-settings']: ControlElement;
            }
        }
    }
    export class TransactionSettings extends Module {
        private transactionModal;
        private transactionLayout;
        private mainContent;
        private state;
        private _showCrossChain;
        get showCrossChain(): boolean;
        set showCrossChain(value: boolean);
        constructor(state: State, parent?: Container, options?: any);
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/index.css.ts" />
declare module "@scom/scom-xchain-swap/index.css.ts" {
    export const xchainSwapStyle: string;
    export const xchainSwapContainerStyle: string;
    export const btnDropdownStyle: string;
    export const contentXchainSwap: string;
    export const inputTokenContainerStyle: string;
}
/// <amd-module name="@scom/scom-xchain-swap/formSchema.ts" />
declare module "@scom/scom-xchain-swap/formSchema.ts" {
    import ScomNetworkPicker from '@scom/scom-network-picker';
    import ScomTokenInput from '@scom/scom-token-input';
    export function getBuilderSchema(): {
        dataSchema: {
            type: string;
            properties: {
                recordUrl: {
                    title: string;
                    type: string;
                };
                networks: {
                    title: string;
                    type: string;
                    required: boolean;
                    items: {
                        type: string;
                        maxItems: number;
                        properties: {
                            chainId: {
                                title: string;
                                type: string;
                                enum: number[];
                                required: boolean;
                            };
                        };
                    };
                };
                tokens: {
                    title: string;
                    type: string;
                    required: boolean;
                    items: {
                        type: string;
                        properties: {
                            chainId: {
                                title: string;
                                type: string;
                                enum: number[];
                                required: boolean;
                            };
                            address: {
                                title: string;
                                type: string;
                            };
                        };
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    scope: string;
                    options: {
                        detail: {
                            type: string;
                        };
                    };
                }[];
            })[];
        };
        customControls(): {
            '#/properties/networks/properties/chainId': {
                render: () => ScomNetworkPicker;
                getData: (control: ScomNetworkPicker) => number;
                setData: (control: ScomNetworkPicker, value: number) => Promise<void>;
            };
            '#/properties/tokens/properties/chainId': {
                render: () => ScomNetworkPicker;
                getData: (control: ScomNetworkPicker) => number;
                setData: (control: ScomNetworkPicker, value: number) => Promise<void>;
            };
            '#/properties/tokens/properties/address': {
                render: () => ScomTokenInput;
                getData: (control: ScomTokenInput) => string;
                setData: (control: ScomTokenInput, value: string, rowData: any) => void;
            };
        };
    };
    export function getProjectOwnerSchema(): any;
}
/// <amd-module name="@scom/scom-xchain-swap/model/configModel.ts" />
declare module "@scom/scom-xchain-swap/model/configModel.ts" {
    import { Module } from "@ijstech/components";
    import { ICommissionInfo, INetworkConfig, ITokenConfig, IXchainWidgetData } from "@scom/scom-xchain-swap/global/index.ts";
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    import { IWalletPlugin } from "@scom/scom-wallet-modal";
    import ScomCommissionFeeSetup from "@scom/scom-commission-fee-setup";
    import { ITokenObject } from "@scom/scom-token-list";
    interface IConfigOptions {
        refreshWidget: () => Promise<void>;
        resetRpcWallet: () => void;
        setContainerTag: (value: any) => void;
        updateTheme: () => void;
    }
    export class ConfigModel {
        private module;
        private options;
        private state;
        private _tokens;
        private _data;
        private supportedChainIds;
        constructor(module: Module, state: State, options: IConfigOptions);
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get currentURLHash(): string;
        set currentURLHash(value: string);
        get recordUrl(): string;
        set recordUrl(value: string);
        get urlParamsEnabled(): boolean;
        set urlParamsEnabled(value: boolean);
        get campaignId(): number;
        get defaultInputToken(): ITokenConfig;
        get tokens(): ITokenObject[];
        setData(value: IXchainWidgetData): Promise<void>;
        getData(): IXchainWidgetData;
        getTag(): any;
        setTag(value: any): void;
        private updateTag;
        private loadCommissionFee;
        private getTokenObjArr;
        private getBuilderActions;
        private getProjectOwnerActions;
        private determineActionsByTarget;
        getConfigurators(): ({
            name: string;
            target: string;
            elementName: string;
            getLinkParams: () => {
                data: string;
            };
            bindOnChanged: (element: ScomCommissionFeeSetup, callback: (data: any) => Promise<void>) => void;
            getData: () => Promise<{
                fee: string;
                campaignId?: number;
                commissions?: ICommissionInfo[];
                tokens?: ITokenConfig[];
                defaultChainId: number;
                wallets: IWalletPlugin[];
                networks: INetworkConfig[];
                showHeader?: boolean;
                showFooter?: boolean;
                defaultInputToken?: ITokenConfig;
                recordUrl?: string;
                urlParamsEnabled?: boolean;
                currentURLHash?: string;
            }>;
            setData: (properties: IXchainWidgetData, linkParams?: Record<string, any>) => Promise<void>;
            getTag: any;
            setTag: any;
            getActions?: undefined;
        } | {
            name: string;
            target: string;
            getActions: (category?: string) => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            elementName?: undefined;
            getLinkParams?: undefined;
            bindOnChanged?: undefined;
        })[];
    }
}
/// <amd-module name="@scom/scom-xchain-swap/model/xchainModel.ts" />
declare module "@scom/scom-xchain-swap/model/xchainModel.ts" {
    import { Module } from "@ijstech/components";
    import { State } from "@scom/scom-xchain-swap/store/index.ts";
    import { ConfigModel } from "@scom/scom-xchain-swap/model/configModel.ts";
    import { ITokenObject } from "@scom/scom-token-list";
    import { IExtendedNetwork } from "@scom/scom-xchain-swap/global/index.ts";
    import { BigNumber } from "@ijstech/eth-contract";
    interface ISwapOptions {
        showModalFees: () => void;
    }
    export class XchainModel {
        private state;
        private configModel;
        private options;
        private module;
        private _srcChain;
        private _desChain;
        private _fromInputValue;
        private _toInputValue;
        private _isFrom;
        private _fromToken;
        private _toToken;
        private _record;
        private _chainId;
        private _targetChainId;
        private _supportedChainList;
        private _urlParams;
        private _fromTokenSymbol;
        private _toTokenSymbol;
        constructor(module: Module, state: State, configModel: ConfigModel, options: ISwapOptions);
        getSupportedTokens: (tokens: ITokenObject[], chainId: number) => ITokenObject[];
        get isFrom(): boolean;
        set isFrom(value: boolean);
        get fromInputValue(): BigNumber;
        set fromInputValue(value: BigNumber);
        get toInputValue(): BigNumber;
        set toInputValue(value: BigNumber);
        get record(): any;
        set record(value: any);
        get fromToken(): ITokenObject;
        set fromToken(token: ITokenObject);
        get toToken(): ITokenObject;
        set toToken(token: ITokenObject);
        get desChain(): IExtendedNetwork | undefined;
        set desChain(value: IExtendedNetwork | undefined);
        get srcChain(): IExtendedNetwork | undefined;
        set srcChain(value: IExtendedNetwork | undefined);
        get targetChainId(): number | undefined;
        set targetChainId(value: number | undefined);
        get urlParamsEnabled(): boolean;
        get urlParams(): URLSearchParams;
        set urlParams(value: URLSearchParams);
        get isInsufficientBalance(): boolean;
        get isValidToken(): boolean;
        get targetTokenMap(): ITokenObject[];
        get defaultTargetChainId(): number;
        get supportedChainList(): IExtendedNetwork[];
        get chainId(): number;
        set chainId(value: number);
        get fromTokenSymbol(): string;
        set fromTokenSymbol(value: string);
        get toTokenSymbol(): string;
        set toTokenSymbol(value: string);
        getSupportedChainList: (updateList?: boolean) => IExtendedNetwork[];
        onUpdateEstimatedPosition: (isFrom: boolean, reverseRouting?: boolean) => void;
        getBalance(token?: ITokenObject): string;
        isEstimated: (tokenPosition: string, strict?: boolean) => boolean;
        isMaxDisabled: () => boolean;
        getInputValue(isFrom: boolean): string;
        calculateDefaultTokens(): {
            firstDefaultToken: ITokenObject;
            secondDefaultToken: ITokenObject;
        };
        updateToken(token: ITokenObject, isFrom: boolean, tokenInput: any): void;
        updateChain(network: IExtendedNetwork): Promise<void>;
        getTradeFeeExactAmount(): string;
        getFeeDetails(): {
            title: string;
            description: string;
            value: any;
        }[];
        getPriceInfo(): ({
            title: string;
            value: string;
            tooltip: any;
            onClick: () => void;
        } | {
            title: string;
            value: string;
            tooltip?: undefined;
            onClick?: undefined;
        })[];
        getAddressFromUrl(): void;
        redirectToken(): void;
    }
}
/// <amd-module name="@scom/scom-xchain-swap/model/index.ts" />
declare module "@scom/scom-xchain-swap/model/index.ts" {
    export { ConfigModel } from "@scom/scom-xchain-swap/model/configModel.ts";
    export { XchainModel } from "@scom/scom-xchain-swap/model/xchainModel.ts";
}
/// <amd-module name="@scom/scom-xchain-swap" />
declare module "@scom/scom-xchain-swap" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    import { BlockNoteEditor, BlockNoteSpecs, callbackFnType, executeFnType } from '@scom/scom-blocknote-sdk';
    import { IXchainWidgetData, ICommissionInfo, INetworkConfig, ITokenConfig } from "@scom/scom-xchain-swap/global/index.ts";
    export enum ApprovalStatus {
        TO_BE_APPROVED = 0,
        APPROVING = 1,
        NONE = 2
    }
    interface ScomXchainWidgetElement extends ControlElement {
        campaignId?: number;
        lazyLoad?: boolean;
        tokens?: ITokenConfig[];
        defaultChainId: number;
        networks: INetworkConfig[];
        wallets: IWalletPlugin[];
        showHeader?: boolean;
        showFooter?: boolean;
        commissions?: ICommissionInfo[];
        defaultInputToken?: ITokenConfig;
        recordUrl?: string;
        urlParamsEnabled?: boolean;
        currentURLHash?: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-xchain-widget']: ScomXchainWidgetElement;
            }
        }
    }
    export default class ScomXchainWidget extends Module implements BlockNoteSpecs {
        private xchainSwapContainer;
        private xchainReceiveContainer;
        private payBalance;
        private receiveBalance;
        private firstTokenInput;
        private secondTokenInput;
        private xchainPayCol;
        private xchainReceiveCol;
        private swapModal;
        private priceInfo;
        private priceInfo2;
        private priceInfoContainer;
        private fromTokenImage;
        private fromTokenLabel;
        private fromTokenValue;
        private toTokenImage;
        private toTokenLabel;
        private toTokenValue;
        private payOrReceiveValue;
        private payOrReceiveToken;
        private txStatusModal;
        private maxButton;
        private swapBtn;
        private actionSetting;
        private timeout;
        private isPriceToggled;
        private configModel;
        private xchainModel;
        private swapButtonText;
        private _lastUpdated;
        private lastUpdatedText;
        private timer;
        private estimateMsg;
        private payOrReceiveText;
        private approvalModelAction;
        private crossChainApprovalStatus;
        private oldSupportedChainList;
        private minSwapHintLabel;
        private srcChainFirstPanel;
        private targetChainFirstPanel;
        private srcChainTokenImage;
        private srcChainTokenLabel;
        private targetChainTokenImage;
        private targetChainTokenLabel;
        private targetChainSecondPanel;
        private targetChainVaultImage;
        private targetChainVaultLabel;
        private targetVaultTokenImage;
        private targetVaultTokenLabel;
        private targetVaultTokenValue;
        private targetVaultAssetBalanceLabel1;
        private targetVaultBondBalanceLabel1;
        private crossChainSoftCapLabel1;
        private targetVaultAssetBalanceLabel2;
        private targetVaultBondBalanceLabel2;
        private crossChainSoftCapLabel2;
        private swapModalConfirmBtn;
        private crossChainVaultInfoVstack;
        private modalViewOrder;
        private modalFees;
        private btnCloseFees;
        private feesInfo;
        private pnlReminderRejected;
        private lbReminderRejectedValue;
        private btnSourceChain;
        private mdSourceChain;
        private listElmSrcChain;
        private isSrcOpened;
        private expertModal;
        private transactionModal;
        private btnDestinationChain;
        private mdDestinationChain;
        private listElmDesChain;
        private isDesOpened;
        private dappContainer;
        private mdWallet;
        private state;
        private isInited;
        private isVaultEmpty;
        private modalSwitchNetwork;
        private lbSwitchNetwork;
        tag: any;
        constructor(parent?: Container, options?: any);
        onLoad(): void;
        addBlock(blocknote: any, executeFn: executeFnType, callbackFn?: callbackFnType): {
            block: any;
            slashItem: {
                name: string;
                execute: (editor: BlockNoteEditor) => void;
                aliases: string[];
                group: string;
                icon: {
                    name: string;
                };
                hint: string;
            };
            moduleData: {
                name: string;
                localPath: string;
            };
        };
        removeRpcWalletEvents(): void;
        onHide(): void;
        private get lastUpdated();
        private set lastUpdated(value);
        private get defaultTargetChainId();
        private get supportedChainList();
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get chainId(): number;
        getConfigurators(): ({
            name: string;
            target: string;
            elementName: string;
            getLinkParams: () => {
                data: string;
            };
            bindOnChanged: (element: import("@scom/scom-commission-fee-setup").default, callback: (data: any) => Promise<void>) => void;
            getData: () => Promise<{
                fee: string;
                campaignId?: number;
                commissions?: ICommissionInfo[];
                tokens?: ITokenConfig[];
                defaultChainId: number;
                wallets: IWalletPlugin[];
                networks: INetworkConfig[];
                showHeader?: boolean;
                showFooter?: boolean;
                defaultInputToken?: ITokenConfig;
                recordUrl?: string;
                urlParamsEnabled?: boolean;
                currentURLHash?: string;
            }>;
            setData: (properties: IXchainWidgetData, linkParams?: Record<string, any>) => Promise<void>;
            getTag: any;
            setTag: any;
            getActions?: undefined;
        } | {
            name: string;
            target: string;
            getActions: (category?: string) => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            elementName?: undefined;
            getLinkParams?: undefined;
            bindOnChanged?: undefined;
        })[];
        private resetRpcWallet;
        getData(): IXchainWidgetData;
        setData(value: IXchainWidgetData): Promise<void>;
        getTag(): any;
        setTag(value: any): Promise<void>;
        private setContainerTag;
        private updateStyle;
        private updateTheme;
        private refreshUI;
        private checkUrl;
        private closeSwitchNetwork;
        private switchNetwork;
        private initData;
        isEmptyData(value: IXchainWidgetData): boolean;
        private initModels;
        init(): Promise<void>;
        private fixedNumber;
        private initWallet;
        private initializeWidgetConfig;
        private onChainChange;
        private initApprovalModelAction;
        private setDefaultToken;
        private setGroupToken;
        private setupCrossChainPopup;
        private handleSwapPopup;
        private doSwap;
        private getMinReceivedMaxSold;
        private onUpdateToken;
        private onSelectToken;
        private setApprovalModalSpenderAddress;
        private updateTokenInput;
        private onSelectRouteItem;
        private onTokenInputChange;
        private resetValuesByInput;
        private initRoutes;
        private handleAddRoute;
        private onTogglePrice;
        private updateBalances;
        private getSwapButtonText;
        private getWarningMessageText;
        private onSwapConfirming;
        private onSwapConfirmed;
        private isSwapButtonDisabled;
        private switchNetworkByWallet;
        private onClickSwapButton;
        private onSubmit;
        private onApproveRouterMax;
        private onSetMaxBalance;
        private onRenderPriceInfo;
        private onRefresh;
        private onSetting;
        private get isMetaMask();
        private onShowSourceChain;
        private onCloseSourceChain;
        private onShowDestinationChain;
        private onCloseDesChain;
        private disableSelectChain;
        private selectSourceChain;
        private selectDestinationChain;
        private onSourceChainChanged;
        private onSelectSourceChain;
        private onSelectDestinationChain;
        private setDefaultChain;
        private initChainElm;
        private renderChainList;
        private showViewOrderModal;
        private closeViewOrderModal;
        private onViewOrder;
        private showModalFees;
        private closeModalFees;
        private initExpertModal;
        private initTransactionModal;
        render(): any;
    }
}
