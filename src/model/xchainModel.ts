import { Module } from "@ijstech/components";
import { State, DefaultERC20Tokens } from "../store/index";
import { ConfigModel } from "./configModel";
import { ITokenObject, tokenStore } from "@scom/scom-token-list";
import { formatNumber, IExtendedNetwork } from "../global/index";
import { BigNumber } from "@ijstech/eth-contract";
import { Route } from "../crosschain-utils/index";

interface ISwapOptions {
  showModalFees: () => void;
}

const ROUNDING_NUMBER = BigNumber.ROUND_DOWN;

export class XchainModel {
  private state: State;
  private configModel: ConfigModel;
  private options: ISwapOptions = {
    showModalFees: () => { },
  };
  private module: Module;
  private _srcChain: IExtendedNetwork;
  private _desChain: IExtendedNetwork;
  private _fromInputValue: BigNumber;
  private _toInputValue: BigNumber;
  private _isFrom: boolean;
  private _fromToken: ITokenObject;
  private _toToken: ITokenObject;
  private _record: Route;
  private _chainId: number;
  private _targetChainId: number;
  private _supportedChainList: IExtendedNetwork[] = [];
  private _urlParams: URLSearchParams;
  private _fromTokenSymbol: string;
  private _toTokenSymbol: string;

  constructor(module: Module, state: State, configModel: ConfigModel, options: ISwapOptions) {
    this.module = module;
    this.state = state;
    this.configModel = configModel;
    this.options = options;
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
  }

  getSupportedTokens = (tokens: ITokenObject[], chainId: number) => {
    return tokens.filter(token => token.chainId === chainId) || [];
  }

  get isFrom() {
    return this._isFrom;
  }
  set isFrom(value: boolean) {
    this._isFrom = value;
  }

  get fromInputValue() {
    return this._fromInputValue;
  }
  set fromInputValue(value: BigNumber) {
    this._fromInputValue = value;
  }

  get toInputValue() {
    return this._toInputValue;
  }
  set toInputValue(value: BigNumber) {
    this._toInputValue = value;
  }

  get record() {
    return this._record;
  }
  set record(value: Route) {
    this._record = value;
  }

  get fromToken() {
    return this._fromToken;
  }
  set fromToken(token: ITokenObject) {
    this._fromToken = token;
  }

  get toToken() {
    return this._toToken;
  }
  set toToken(token: ITokenObject) {
    this._toToken = token;
  }

  get desChain() {
    return this._desChain;
  }
  set desChain(value: IExtendedNetwork) {
    this._desChain = value;
  }

  get srcChain() {
    return this._srcChain;
  }
  set srcChain(value: IExtendedNetwork) {
    this._srcChain = value;
  }

  get targetChainId() {
    return this._targetChainId;
  }
  set targetChainId(value: number) {
    this._targetChainId = value;
  }

  get urlParamsEnabled() {
    return this.configModel.urlParamsEnabled;
  }

  get urlParams() {
    return this._urlParams;
  }
  set urlParams(value: URLSearchParams) {
    this._urlParams = value;
  }

  get isInsufficientBalance(): boolean {
    if (!this.fromToken && !this.record) return false;
    const balance = this.getBalance(this.fromToken);
    return this.record?.fromAmount && this.record.fromAmount.gt(balance)
  }

  get isValidToken(): boolean {
    try {
      return !!this.fromToken.symbol && !!this.toToken.symbol;
    } catch {
      return false;
    }
  }

  get targetTokenMap() {
    const chainId = this.desChain?.chainId || this.targetChainId || this.state.getChainId();
    // return tokenStore.getTokenMapByChainId(chainId);
    return DefaultERC20Tokens[chainId];
  }

  get defaultTargetChainId() {
    return this._supportedChainList.find(v => v.chainId !== this.state.getChainId())?.chainId;
  }

  get supportedChainList() {
    return this._supportedChainList || [];
  }

  get chainId() {
    return this._chainId;
  }
  set chainId(value: number) {
    this._chainId = value;
  }

  get fromTokenSymbol() {
    return this._fromTokenSymbol;
  }
  set fromTokenSymbol(value: string) {
    this._fromTokenSymbol = value;
  }

  get toTokenSymbol() {
    return this._toTokenSymbol;
  }
  set toTokenSymbol(value: string) {
    this._toTokenSymbol = value;
  }

  getSupportedChainList = (updateList?: boolean) => {
    const list = this.state.getMatchNetworks({ isDisabled: false });
    const testnetSupportedList = list.filter(v => v.isTestnet && this.configModel.networks.some(n => n.chainId == v.chainId));
    const mainnetSupportedList = list.filter(v => !v.isTestnet && this.configModel.networks.some(n => n.chainId == v.chainId));
    const isMainnet = mainnetSupportedList.some((item: any) => item.chainId == this.chainId);
    const supportList = isMainnet ? mainnetSupportedList : testnetSupportedList;
    if (updateList) this._supportedChainList = supportList;
    return supportList;
  }

  onUpdateEstimatedPosition = (isFrom: boolean, reverseRouting: boolean = false) => {
    if (this.isFrom != isFrom) {
      this.isFrom = isFrom;
    }
  }

  getBalance(token?: ITokenObject) {
    if (!token) return '0';
    let tokenBalances = tokenStore.getTokenBalancesByChainId(token.chainId);
    if (!tokenBalances) return '0';
    const address = token.address || '';
    let balance = address ? tokenBalances[address.toLowerCase()] ?? '0' : tokenBalances[token.symbol] || '0';
    return balance
  }

  isEstimated = (tokenPosition: string, strict = false) => {
    if (tokenPosition === 'from') {
      return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
    } else if (tokenPosition === 'to') {
      return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
    } else {
      return false;
    }
  }

  isMaxDisabled = (): boolean => {
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    return !address || new BigNumber(balance).isLessThanOrEqualTo(0);
  }

  getInputValue(isFrom: boolean) {
    const token = isFrom ? this.fromToken : this.toToken;
    const value = isFrom ? this.fromInputValue : this.toInputValue;
    if (!value || value.isNaN()) return '';
    const newValue = value.dp(token?.decimals || 18, ROUNDING_NUMBER).toFixed();
    return newValue;
  }

  calculateDefaultTokens() {
    let firstDefaultToken: ITokenObject;
    let secondDefaultToken: ITokenObject;
    const currentChainId = this.state.getChainId();
    const targetChainId = this.desChain?.chainId || this.targetChainId || currentChainId;
    const currentChainTokens = this.getSupportedTokens(this.configModel.tokens, currentChainId);
    const targetChainTokens = this.getSupportedTokens(this.configModel.tokens, targetChainId);
    if (!this.configModel.defaultInputToken) {
      firstDefaultToken = currentChainTokens[0];
      secondDefaultToken = targetChainTokens[0];
    }
    else {
      if (this.configModel.defaultInputToken && currentChainId === this.configModel.defaultInputToken.chainId) {
        let inputTokens = this.getSupportedTokens(this.configModel.tokens, this.configModel.defaultInputToken.chainId);
        firstDefaultToken = inputTokens.find(v => v.chainId === this.configModel.defaultInputToken.chainId && v.address === this.configModel.defaultInputToken.address);
      }
      else {
        firstDefaultToken = currentChainTokens[0];
      }
      secondDefaultToken = targetChainTokens[0];
    }
    return {
      firstDefaultToken,
      secondDefaultToken
    }
  }

  updateToken(token: ITokenObject, isFrom: boolean, tokenInput: any) {
    if (!token) return;
    if (isFrom) {
      this.fromToken = token;
      if (this.fromInputValue.gt(0)) {
        const formattedValue = new BigNumber(this.fromInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
        if (!this.fromInputValue.eq(formattedValue)) {
          if (tokenInput) {
            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
          }
          this.fromInputValue = new BigNumber(formattedValue);
        }
      } else if (this.fromInputValue.isZero()) {
        this.onUpdateEstimatedPosition(true);
      }
    } else {
      this.toToken = token;
      if (this.toInputValue.gt(0)) {
        const formattedValue = new BigNumber(this.toInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
        if (!this.toInputValue.eq(formattedValue)) {
          if (tokenInput) {
            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
          }
          this.toInputValue = new BigNumber(formattedValue);
        }
      } else if (this.toInputValue.isZero()) {
        this.onUpdateEstimatedPosition(false);
      }
    }
  }

  async updateChain(network: IExtendedNetwork) {
    const oldDestination = this.desChain;
    try {
      this.desChain = network;
      this.targetChainId = this.desChain.chainId;
      await tokenStore.updateTokenBalancesByChainId(this.targetChainId);
    } catch (err) {
      console.log('err', err)
      if (oldDestination) {
        this.desChain = oldDestination;
      } else {
        this.desChain = this._supportedChainList[0];
      }
    }
  }

  getTradeFeeExactAmount() {
    const tradeFee = this.record?.feeAmounts.totalFeeAmount;
    if (tradeFee) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }

  getFeeDetails() {
    if (this.record) {
      let feeAmounts = this.record.feeAmounts
      let detail = [
        {
          title: this.module.i18n.get('$base_fee'),
          description: this.module.i18n.get('$this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain'),
          value: feeAmounts.baseFeeAmount,
        },
        {
          title: this.module.i18n.get("$bridge_vault_liquidity_fee"),
          description: this.module.i18n.get('$this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain'),
          value: feeAmounts.transactionFeeAmount,
        },
        {
          title: this.module.i18n.get("$protocol_fee"),
          description: this.module.i18n.get('$this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network'),
          value: feeAmounts.protocolFeeAmount,
        },
        {
          title: this.module.i18n.get("$imbalance_fee"),
          description: this.module.i18n.get('$this_fee_is_acted_as_an_incentive_to_balance_the_vault'),
          value: feeAmounts.imbalanceFeeAmount,
        }
      ]
      return detail;
    }
    return [];
  }

  getPriceInfo() {
    const tradeFeeExactAmount = this.getTradeFeeExactAmount();

    const fees = this.getFeeDetails();
    const countFees = fees.length;
    let feeTooltip: any;
    if (countFees === 1) {
      const fee = fees[0];
      feeTooltip = `${fee.description}`;
    } else if (countFees > 1) {
      feeTooltip = fees;
    }

    let info = [
      {
        title: "$transaction_fee",
        value: this.isValidToken ? tradeFeeExactAmount : '-',
        tooltip: feeTooltip,
        onClick: countFees > 1 ? () => this.options.showModalFees() : null
      },
      {
        title: "$estimated_time",
        value: this.isValidToken && this.record ? '$30_seconds' : '-',
      },
    ];
    return info.filter((f: any) => !f.isHidden);
  }

  getAddressFromUrl() {
    if (!this.urlParamsEnabled) return;
    const chainId = this.state.getChainId();
    const wHref = window.location.href;
    const startIdx = wHref.indexOf('?');
    const search = wHref.substring(startIdx, wHref.length);
    const queryString = search;
    const urlParams = new URLSearchParams(queryString);
    const tokenAddress = (urlParams.get('token') || '').toLowerCase();
    const tokenList = tokenStore.getTokenList(chainId);
    const token = tokenList.find(f => f.address?.toLowerCase() === tokenAddress) || tokenList.find(f => f.address);
    this.fromTokenSymbol = token?.symbol || ''
    this.toTokenSymbol = token?.symbol || '';
    const targetId = Number(urlParams.get('toChainId'));
    this.targetChainId = (targetId === 0 || targetId === chainId) ? this.defaultTargetChainId : targetId;
    if (this.fromInputValue.eq(0) && this.toInputValue.eq(0)) {
      const fromAmount = new BigNumber(urlParams.get('fromAmount'));
      this.fromInputValue = fromAmount.isNaN() || fromAmount.isZero() ? new BigNumber(1) : fromAmount.abs();
    }
  }

  redirectToken() {
    if (!this.urlParamsEnabled) return;
    const token = this.fromToken ?? tokenStore.getTokenList(this.chainId).find(v => v.address?.toLowerCase() === this.fromTokenSymbol?.toLowerCase() || v.symbol.toLowerCase() === this.fromTokenSymbol?.toLowerCase());
    let queryRouter: any = {
      chainId: this.chainId || this.state.getChainId(),
      toChainId: this.desChain?.chainId || this.targetChainId,
      token: token?.address || token?.symbol
    };
    this.isFrom = false;

    if (this.isFrom) {
      queryRouter = {
        ...queryRouter,
        toAmount: this.toInputValue.toFixed(),
      };
    } else {
      queryRouter = {
        ...queryRouter,
        fromAmount: this.fromInputValue.toFixed(),
      };
    }
    const symbol = token?.symbol || '';
    this.fromTokenSymbol = symbol;
    this.toTokenSymbol = symbol;
    this.targetChainId = queryRouter.toChainId;
    if (!queryRouter.toChainId) {
      delete queryRouter['toChainId'];
    }
    if (!queryRouter.token) {
      delete queryRouter['token'];
    }
    if (!this.configModel.currentURLHash || !window.location.hash.includes(this.configModel.currentURLHash)) return;
    const queryString = new URLSearchParams(queryRouter).toString();
    let newURL = window.location.protocol + "//" + window.location.host;
    if (location.hash.split("?")[0]) {
      newURL += '/' + location.hash.split("?")[0];
    }
    newURL += '?' + queryString;
    window.history.replaceState({}, '', newURL);
  }
}
