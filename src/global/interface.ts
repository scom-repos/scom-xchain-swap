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