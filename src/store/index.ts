import { VaultConstant, VaultGroupConstant, VaultGroupList } from './data/index';
import { assets as tokenAssets, tokenStore } from '@scom/scom-token-list';
import { getChainNativeToken, isWalletConnected } from './utils';

export * from './data/index';

export const nullAddress = "0x0000000000000000000000000000000000000000";

export const getTokenIcon = (address: string, chainId: number) => {
  if (!address) return '';
  const tokenMap = tokenStore.getTokenMapByChainId(chainId);
  let ChainNativeToken;
  let tokenObject;
  if (isWalletConnected()) {
    ChainNativeToken = getChainNativeToken(chainId);
    tokenObject = address == ChainNativeToken.symbol ? ChainNativeToken : tokenMap[address.toLowerCase()];
  } else {
    tokenObject = tokenMap[address.toLowerCase()];
  }
  return tokenAssets.tokenPath(tokenObject, chainId);
}

const EMBED_URL = "https://embed.scom.page/#/";
export const getEmbedLink = (dataUri: string, params?: { [key: string]: string }) => {
  let queries = new URLSearchParams(params).toString();
  let url = `${EMBED_URL}${dataUri}${queries ? "?" + queries : ""}`;
  return url;
}

export function findConstantTokenByVault(chainId: number, vaultAddress: string) {
  let x = VaultGroupList.find(group => group.vaults[chainId].vaultAddress.toLowerCase() == vaultAddress.toLowerCase());
  if (!x) return;
  return x.vaults[chainId].assetToken;
}

export function findConstantVaultGroupByToken(chainId: number, tokenAddress: string) {
  return VaultGroupList.find(group => group.vaults[chainId].assetToken.address.toLowerCase() == tokenAddress.toLowerCase());
}

export function findConstantVault(vaultGroup: VaultGroupConstant, chainId: number) {
  try {
    return vaultGroup.vaults[chainId];
  } catch (error) {
    return undefined;
  }
}

export function findConstantToVault(fromChainId: number, tokenAddress: string, toChainId: number) {
  let group = findConstantVaultGroupByToken(fromChainId, tokenAddress)
  if (!group || !group.vaults) throw new Error(`No such token ${tokenAddress} recorded in chain ${fromChainId}`);
  return findConstantVault(group, toChainId);
}

export function findConstantAllAsset(fromChainId: number): VaultConstant[] {
  let out: VaultConstant[] = [];
  VaultGroupList.forEach(group => {
    const vaults = findConstantVault(group, fromChainId);
    if (vaults) out.push(vaults);
  });
  return out;
}

export * from './utils';
