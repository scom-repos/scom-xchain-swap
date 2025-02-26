import { ITokenObject } from "@scom/scom-token-list";
import { Tokens_Avalanche, Tokens_BSC } from "./mainnet/index";
import { Tokens_BSC_Testnet, Tokens_Fuji } from "./testnet/index";

const DefaultERC20Tokens: { [chainId: number]: ITokenObject[] } = {
  56: Tokens_BSC,
  97: Tokens_BSC_Testnet,
  43113: Tokens_Fuji,
  43114: Tokens_Avalanche,
}

//TODO
const ChainNativeTokenByChainId: { [chainId: number]: ITokenObject } = {
  56: { address: undefined, decimals: 18, symbol: "BNB", name: 'BNB', isNative: true }, // Binance Mainnet
  97: { address: undefined, decimals: 18, symbol: "BNB", name: 'BNB', isNative: true }, // Binance Test Chain
  43114: { address: undefined, decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true }, //Avalanche Mainnet C-Chain
  43113: { address: undefined, decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true },  //Avalanche FUJI C-Chain
}

export {
  DefaultERC20Tokens,
  ChainNativeTokenByChainId,
}

