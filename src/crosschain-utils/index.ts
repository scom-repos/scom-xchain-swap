import { Utils } from '@ijstech/eth-wallet';
import { State } from '../store/index';
import { ContractUtils as ProxyContractUtils } from '@scom/scom-commission-proxy-contract';

export const getCommissionRate = async (state: State, campaignId: number) => {
  const rpcWallet = state.getRpcWallet();
  const proxyAddress = state.getProxyAddress();
  await rpcWallet.init();
  let commissionRate = await ProxyContractUtils.getCommissionRate(rpcWallet, proxyAddress, campaignId)
  return Utils.fromDecimals(commissionRate, 6).toFixed();
}

export * from './API';