import {
  customModule,
  observable,
  Control,
  Module,
  Styles,
  Modal,
  Label,
  Button,
  Image,
  Input,
  Panel,
  Container,
  application,
  HStack,
  VStack,
  ControlElement,
  customElements
} from '@ijstech/components';
import { BigNumber, Constants, IERC20ApprovalAction, Wallet } from '@ijstech/eth-wallet';
import {
  isWalletConnected,
  getWalletProvider,
  WalletPlugin,
  orderMinOutRate,
  State,
  DefaultERC20Tokens,
} from './store/index';
import {
  formatNumber,
  EventId,
  IExtendedNetwork,
  limitDecimals,
  isInvalidInput,
  showResultMessage,
} from './global/index'
import {
  getVaultAssetBalance,
  createBridgeVaultOrder,
  getRoute,
  findVaultGroupByToken,
  Route,
  getBond,
  getVaultGroups,
  isSupportedCrossChain
} from './crosschain-utils/index';
import { XchainSwapPriceInfo } from './price-info/index';
import ScomTokenInput from '@scom/scom-token-input';
import ScomTxStatusModal from '@scom/scom-tx-status-modal';
import ScomDappContainer from '@scom/scom-dapp-container'
import { tokenStore, assets as tokenAssets, ITokenObject } from '@scom/scom-token-list';
import ScomWalletModal, { IWalletPlugin } from '@scom/scom-wallet-modal';
import { XchainSwapExpertModeSettings } from './expert-mode-settings/index';
import { XchainSwapTransactionSettings } from './transaction-settings/index';
import { btnDropdownStyle, contentXchainSwap, customTokenInputStyle, inputTokenContainerStyle, xchainSwapContainerStyle, xchainSwapStyle } from './index.css';
import configData from './data.json';
import { Block, BlockNoteEditor, BlockNoteSpecs, callbackFnType, executeFnType, getWidgetEmbedUrl, parseUrl } from '@scom/scom-blocknote-sdk';
import { mainJson } from './languages/index';
import {
  IXchainWidgetData,
  ICommissionInfo,
  INetworkConfig,
  ITokenConfig
} from './global/index';
import { ConfigModel, XchainModel } from './model/index';
import Assets from './assets';

const Theme = Styles.Theme.ThemeVars;

export enum ApprovalStatus {
  TO_BE_APPROVED,
  APPROVING,
  NONE,
}

const defaultInput = '1';

interface ScomXchainSwapElement extends ControlElement {
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


declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-xchain-swap']: ScomXchainSwapElement;
    }
  }
}

@customModule
@customElements('i-scom-xchain-swap')
export default class ScomXchainSwap extends Module implements BlockNoteSpecs {
  private xchainSwapContainer: Container;
  private xchainReceiveContainer: Panel;
  private payBalance: Label;
  private receiveBalance: Label;
  private firstTokenInput: ScomTokenInput;
  private secondTokenInput: ScomTokenInput;
  private xchainPayCol: VStack;
  private xchainReceiveCol: VStack;
  private swapModal: Modal;
  private priceInfo: XchainSwapPriceInfo;
  private priceInfo2: XchainSwapPriceInfo;
  private priceInfoContainer: Panel;
  private fromTokenImage: Image;
  private fromTokenLabel: Label;
  private fromTokenValue: Label;
  private toTokenImage: Image;
  private toTokenLabel: Label;
  private toTokenValue: Label;
  private payOrReceiveValue: Label;
  private payOrReceiveToken: Label;
  private txStatusModal: ScomTxStatusModal;
  private maxButton: Button;
  private swapBtn: Button;
  private actionSetting: Panel;
  private timeout: any;
  private isPriceToggled: boolean;
  private configModel: ConfigModel;
  private xchainModel: XchainModel;
  @observable()
  private swapButtonText: string = '';
  private _lastUpdated: number = 0;
  @observable()
  private lastUpdatedText: string = '';
  private timer: any;
  @observable()
  private estimateMsg: string = '';
  @observable()
  private payOrReceiveText: string = '';
  private approvalModelAction: IERC20ApprovalAction;

  // Cross Chain
  private crossChainApprovalStatus: ApprovalStatus = ApprovalStatus.NONE;
  private oldSupportedChainList: IExtendedNetwork[] = [];
  private minSwapHintLabel: Label;
  private srcChainFirstPanel: Panel;
  private targetChainFirstPanel: Panel;
  private srcChainTokenImage: Image;
  private srcChainTokenLabel: Label;
  private targetChainTokenImage: Image;
  private targetChainTokenLabel: Label;
  private targetChainSecondPanel: Panel;
  private targetChainVaultImage: Image;
  private targetChainVaultLabel: Label;
  private targetVaultTokenImage: Image;
  private targetVaultTokenLabel: Label;
  private targetVaultTokenValue: Label;
  private targetVaultAssetBalanceLabel1: Label;
  private targetVaultBondBalanceLabel1: Label;
  private crossChainSoftCapLabel1: Label;
  private targetVaultAssetBalanceLabel2: Label;
  private targetVaultBondBalanceLabel2: Label;
  private crossChainSoftCapLabel2: Label;
  private swapModalConfirmBtn: Button;
  private crossChainVaultInfoVstack: VStack;
  private modalViewOrder: Modal;
  private modalFees: Modal;
  private btnCloseFees: Button;
  private feesInfo: VStack;
  private pnlReminderRejected: Panel;
  private lbReminderRejectedValue: Label;

  private btnSourceChain: Button;
  private mdSourceChain: Modal;
  private listElmSrcChain: VStack;
  private isSrcOpened: boolean;
  private expertModal: XchainSwapExpertModeSettings;
  private transactionModal: XchainSwapTransactionSettings;

  private btnDestinationChain: Button;
  private mdDestinationChain: Modal;
  private listElmDesChain: VStack;
  private isDesOpened: boolean;
  private dappContainer: ScomDappContainer;
  private mdWallet: ScomWalletModal;
  private state: State;
  private isInited: boolean = false;
  private isVaultEmpty = false;
  private modalSwitchNetwork: Modal;
  private lbSwitchNetwork: Label;
  tag: any = {};

  constructor(parent?: Container, options?: ScomXchainSwapElement) {
    super(parent, options);
    this.initModels();
  }

  onLoad() {
    this.checkUrl();
    this.xchainModel.redirectToken();
  }

  addBlock(blocknote: any, executeFn: executeFnType, callbackFn?: callbackFnType) {
    const blockType = 'xchain-swap';
    const moduleData = {
      name: "@scom/scom-xchain-swap",
      localPath: "scom-xchain-swap"
    }

    function getData(href: string) {
      const widgetData = parseUrl(href);
      if (widgetData) {
        const { module, properties } = widgetData;
        if (module.localPath === moduleData.localPath) return { ...properties };
      }
      return false;
    }

    const XchainSwapBlock = blocknote.createBlockSpec({
      type: blockType,
      propSchema: {
        ...blocknote.defaultProps,
        tokens: { default: [] },
        defaultChainId: { default: 0 },
        networks: { default: [] },
        wallets: { default: [] },
        commissions: { default: [] },
        defaultInputToken: { default: null },
      },
      content: "none"
    },
      {
        render: (block: Block) => {
          const wrapper = new Panel();
          const props = JSON.parse(JSON.stringify(block.props));
          const customElm = new ScomXchainSwap(wrapper, { ...props });
          if (typeof callbackFn === 'function') callbackFn(customElm, block);
          wrapper.appendChild(customElm);
          return {
            dom: wrapper
          };
        },
        parseFn: () => {
          return [
            {
              tag: `div[data-content-type=${blockType}]`,
              node: blockType
            },
            {
              tag: "a",
              getAttrs: (element: string | HTMLElement) => {
                if (typeof element === "string") {
                  return false;
                }
                const href = element.getAttribute('href');
                if (href) return getData(href);
                return false;
              },
              priority: 402,
              node: blockType
            },
            {
              tag: "p",
              getAttrs: (element: string | HTMLElement) => {
                if (typeof element === "string") {
                  return false;
                }
                const child = element.firstChild as HTMLElement;
                if (child?.nodeName === 'A' && child.getAttribute('href')) {
                  const href = child.getAttribute('href');
                  return getData(href);
                }
                return false;
              },
              priority: 403,
              node: blockType
            },
          ]
        },
        toExternalHTML: (block: any, editor: any) => {
          const link = document.createElement("a");
          const url = getWidgetEmbedUrl(
            {
              type: blockType,
              props: { ...(block.props || {}) }
            },
            moduleData
          );
          link.setAttribute("href", url);
          link.textContent = blockType;
          const wrapper = document.createElement("p");
          wrapper.appendChild(link);
          return { dom: wrapper };
        }
      });

    const XchainSwapSlashItem = {
      name: "Xchain-swap",
      execute: (editor: BlockNoteEditor) => {
        const block: any = {
          type: blockType,
          props: configData.defaultBuilderData
        };
        if (typeof executeFn === 'function') {
          executeFn(editor, block);
        }
      },
      aliases: [blockType, "widget"],
      group: "Widget",
      icon: { name: 'exchange-alt' },
      hint: "Insert an xchain swap",
    }

    return {
      block: XchainSwapBlock,
      slashItem: XchainSwapSlashItem,
      moduleData
    }
  }

  removeRpcWalletEvents() {
    const rpcWallet = this.state.getRpcWallet();
    if (rpcWallet) rpcWallet.unregisterAllWalletEvents();
  }

  onHide() {
    this.dappContainer.onHide();
    this.removeRpcWalletEvents();
  }

  private get lastUpdated(): number {
    return this._lastUpdated
  }

  private set lastUpdated(value: number) {
    this._lastUpdated = value;
    this.lastUpdatedText = this.i18n.get('$last_updated_(s)_ago', { value: `${this._lastUpdated}` });
  }

  private get defaultTargetChainId() {
    return this.xchainModel.defaultTargetChainId;
  }

  private get supportedChainList() {
    return this.xchainModel.supportedChainList;
  }

  get defaultChainId() {
    return this.configModel.defaultChainId;
  }

  set defaultChainId(value: number) {
    this.configModel.defaultChainId = value;
  }

  get wallets() {
    return this.configModel.wallets ?? [];
  }

  set wallets(value: IWalletPlugin[]) {
    this.configModel.wallets = value;
  }

  get networks() {
    return this.configModel.networks ?? [];
  }

  set networks(value: INetworkConfig[]) {
    this.configModel.networks = value;
  }

  get showHeader() {
    return this.configModel.showHeader ?? true;
  }

  set showHeader(value: boolean) {
    this.configModel.showHeader = value;
  }

  get showFooter() {
    return this.configModel.showFooter ?? true;
  }

  set showFooter(value: boolean) {
    this.configModel.showFooter = value;
  }

  get chainId() {
    return this.xchainModel.chainId;
  }

  getConfigurators() {
    this.initModels();
    return this.configModel.getConfigurators();
  }

  private async resetRpcWallet() {
    this.removeRpcWalletEvents();
    const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
    const rpcWallet = this.state.getRpcWallet();
    const chainChangedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.ChainChanged, async (chainId: number) => {
      this.onChainChange();
    });
    const connectedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.Connected, async (connected: boolean) => {
      if (this.swapBtn) this.swapBtn.visible = true;
      await this.initializeWidgetConfig();
    });
    const data: any = {
      defaultChainId: this.defaultChainId,
      wallets: this.wallets,
      networks: this.networks,
      showHeader: this.showHeader,
      showFooter: this.showFooter,
      rpcWalletId: rpcWallet.instanceId
    }
    if (this.dappContainer?.setData) this.dappContainer.setData(data);
  }

  getData() {
    return this.configModel.getData();
  }

  async setData(value: IXchainWidgetData) {
    this.configModel.setData(value);
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.configModel.setTag(value);
  }

  private setContainerTag(value: any) {
    if (this.dappContainer) this.dappContainer.setTag(value);
  }

  private updateStyle(name: string, value: any) {
    value ?
      this.style.setProperty(name, value) :
      this.style.removeProperty(name);
  }

  private updateTheme() {
    const themeVar = this.dappContainer?.theme || 'light';
    this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
    this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
    this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
    this.updateStyle('--input-background', this.tag[themeVar]?.inputBackgroundColor);
    //FIXME: temporary solution
    this.updateStyle('--primary-button-background', this.tag[themeVar]?.primaryButtonBackground || 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box');
    this.updateStyle('--primary-button-hover-background', this.tag[themeVar]?.primaryButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
    this.updateStyle('--primary-button-disabled-background', this.tag[themeVar]?.primaryButtonDisabledBackground || 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-background', this.tag[themeVar]?.maxButtonBackground || 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-hover-background', this.tag[themeVar]?.maxButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
  }

  private async refreshUI() {
    await this.initData();
    await this.initializeWidgetConfig();
  }

  private checkUrl() {
    if (!this.xchainModel.urlParamsEnabled) return;
    const wHref = window.location.href;
    const startIdx = wHref.indexOf('?');
    const search = wHref.substring(startIdx, wHref.length);
    const queryString = search;
    const urlParams = new URLSearchParams(queryString);
    this.xchainModel.urlParams = urlParams;
    const _chainId = urlParams.get('chainId');
    if (_chainId) {
      const chainId = Number(_chainId);
      const networkList = this.state.getSiteSupportedNetworks();
      const newNetwork = networkList.find(v => v.chainId === chainId);
      if (this.state.getChainId() !== chainId && newNetwork) {
        if (isWalletConnected()) {
          this.lbSwitchNetwork.caption = this.i18n.get('$do_you_want_to_switch_network_to_network', { network: `${newNetwork.chainName} (${newNetwork.chainId})` });
          this.modalSwitchNetwork.visible = true;
        } else {
          this.switchNetwork();
        }
      }
    }
  }

  private closeSwitchNetwork = () => {
    this.modalSwitchNetwork.visible = false;
  }

  private switchNetwork = async () => {
    const urlParams = this.xchainModel.urlParams;
    const _chainId = urlParams.get('chainId');
    const chainId = Number(_chainId);
    if (this.chainId === chainId) return;
    if (isWalletConnected()) {
      const chainId = this.state.getChainId();
      const clientWallet = Wallet.getClientInstance();
      await clientWallet.switchNetwork(chainId);
    }
    this.modalSwitchNetwork.visible = false;
    if (!this.xchainModel.urlParamsEnabled) return;
    const networkList = this.state.getSiteSupportedNetworks();
    const _targetId = Number(urlParams.get('toChainId'));
    const tokenAddress = urlParams.get('token') || '';
    const tokenList = tokenStore.getTokenList(this.state.getChainId());
    const token = tokenList.find(f => f.address?.toLowerCase() === tokenAddress) || tokenList.find(f => f.address);
    this.xchainModel.fromTokenSymbol = token?.symbol || ''
    this.xchainModel.toTokenSymbol = token?.symbol || '';
    const targetId = (_targetId === 0 || _targetId === chainId) ? this.defaultTargetChainId : _targetId;
    if (token) {
      this.xchainModel.fromToken = token;
      this.xchainModel.toToken = tokenStore.getTokenList(targetId).find(f => f.symbol?.toLowerCase() === token.symbol.toLowerCase());
    }
    this.xchainModel.chainId = chainId;
    const srcChain = networkList.find(f => f.chainId === chainId);
    if (!isWalletConnected()) {
      await this.selectSourceChain(srcChain);
    }
    this.xchainModel.srcChain = srcChain;
    this.xchainModel.targetChainId = targetId;
    this.xchainModel.desChain = networkList.find(f => f.chainId === targetId);
    this.selectDestinationChain(this.xchainModel.desChain);
    this.xchainModel.redirectToken();
  }

  private async initData() {
    if (!this.isInited) {
      await this.initApprovalModelAction();
      this.isInited = true;
    }
  }

  isEmptyData(value: IXchainWidgetData) {
    return !value || !value.networks || value.networks.length === 0;
  }

  private initModels() {
    if (!this.state) {
      this.state = new State(configData);
    }
    if (!this.configModel) {
      this.configModel = new ConfigModel(this, this.state, {
        updateTheme: this.updateTheme.bind(this),
        refreshWidget: this.refreshUI.bind(this),
        resetRpcWallet: this.resetRpcWallet.bind(this),
        setContainerTag: this.setContainerTag.bind(this)
      });
    }
    if (!this.xchainModel) {
      this.xchainModel = new XchainModel(this, this.state, this.configModel, {
        showModalFees: this.showModalFees.bind(this)
      });
    }
  }

  async init() {
    this.i18n.init({ ...mainJson });
    await super.init();
    this.xchainModel.chainId = this.state.getChainId();
    this.swapButtonText = this.getSwapButtonText();
    this.initExpertModal();
    this.initTransactionModal();
    const lazyLoad = this.getAttribute('lazyLoad', true, false);
    if (!lazyLoad) {
      const campaignId = this.getAttribute('campaignId', true);
      const commissions = this.getAttribute('commissions', true, []);
      const defaultChainId = this.getAttribute('defaultChainId', true);
      const defaultInputToken = this.getAttribute('defaultInputToken', true);
      const tokens = this.getAttribute('tokens', true, []);
      const networks = this.getAttribute('networks', true);
      const wallets = this.getAttribute('wallets', true);
      const showHeader = this.getAttribute('showHeader', true);
      const showFooter = this.getAttribute('showFooter', true);
      const recordUrl = this.getAttribute('recordUrl', true);
      const urlParamsEnabled = this.getAttribute('urlParamsEnabled', true);
      const currentURLHash = this.getAttribute('currentURLHash', true);
      let data = {
        campaignId,
        commissions,
        defaultChainId,
        defaultInputToken,
        tokens,
        networks,
        wallets,
        showHeader,
        showFooter,
        recordUrl,
        urlParamsEnabled,
        currentURLHash
      };
      if (!this.isEmptyData(data)) {
        await this.setData(data);
      }
    };
    this.executeReadyCallback();
  }

  private fixedNumber = (value: BigNumber | string | number) => {
    const val = typeof value === 'object' ? value : new BigNumber(value);
    if (val.isNaN()) return '0';
    let formatted = '';
    if (val.gte(1)) {
      formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
    } else {
      formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
    }
    return formatted.replace(/,/g, '');
  }

  private initWallet = async () => {
    try {
      await Wallet.getClientInstance().init();
      const rpcWallet = this.state.getRpcWallet();
      await rpcWallet.init();
    } catch (err) {
      console.log(err);
    }
  }

  private initializeWidgetConfig = async () => {
    setTimeout(async () => {
      await this.initWallet();
      this.xchainModel.getAddressFromUrl();
      this.xchainModel.calculateDefaultTokens();
      this.xchainModel.chainId = this.state.getChainId();
      this.swapButtonText = this.getSwapButtonText();
      await this.updateBalances();
      await this.renderChainList();

      await getVaultGroups(this.state, true);

      this.initRoutes();
      this.xchainModel.toInputValue = new BigNumber(0);
      if (this.secondTokenInput) {
        this.secondTokenInput.value = '-';
        this.secondTokenInput.inputReadOnly = true;
        this.secondTokenInput.classList.add('cursor-input--default');
      }
      if (this.xchainModel.isEstimated('from')) {
        this.xchainModel.onUpdateEstimatedPosition(false, true);
      }
      this.firstTokenInput.chainId = this.xchainModel.srcChain?.chainId || this.chainId;
      this.secondTokenInput.chainId = this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId;
      this.setDefaultToken();
      this.setGroupToken(true);
      if (this.xchainModel.fromInputValue.isGreaterThanOrEqualTo(0)) {
        this.xchainModel.onUpdateEstimatedPosition(false, true);
        this.firstTokenInput.value = this.fixedNumber(this.xchainModel.fromInputValue);
      } else if (this.xchainModel.toInputValue.isGreaterThanOrEqualTo(0)) {
        this.xchainModel.onUpdateEstimatedPosition(true, true);
        this.secondTokenInput.value = this.fixedNumber(this.xchainModel.toInputValue);
        this.secondTokenInput.inputReadOnly = true;
        this.secondTokenInput.classList.add('cursor-input--default');
      }
      this.firstTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.fromToken.chainId);
      this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.toToken.chainId);
      this.actionSetting?.classList.remove("hidden");

      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.lastUpdated++;
      }, 1000)
      this.lastUpdated = 0;
      if (!this.xchainModel.record)
        this.swapBtn.classList.add('hidden');
      await this.onRenderPriceInfo();
      this.xchainModel.redirectToken();
      await this.handleAddRoute();
    })
  }

  private onChainChange = async () => {
    this.xchainModel.chainId = this.state.getChainId();
    tokenStore.updateTokenMapData(this.chainId);
    if (this.chainId != null && this.chainId != undefined)
      this.swapBtn.classList.remove('hidden');
    this.initializeWidgetConfig();
    this.swapButtonText = this.getSwapButtonText()
  }

  private async initApprovalModelAction() {
    this.approvalModelAction = await this.state.setApprovalModelAction({
      sender: this,
      payAction: this.onSubmit,
      onToBeApproved: async (token: ITokenObject) => {
        this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        this.swapBtn.enabled = true;
      },
      onToBePaid: async (token: ITokenObject) => {
        this.crossChainApprovalStatus = ApprovalStatus.NONE;
      },
      onApproving: async (token: ITokenObject, receipt?: string, data?: any) => {
        this.crossChainApprovalStatus = ApprovalStatus.APPROVING;
        showResultMessage(this.txStatusModal, 'success', receipt);
        if (!this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = true;
      },
      onApproved: async (token: ITokenObject, data?: any) => {
        this.crossChainApprovalStatus = ApprovalStatus.NONE;
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
        await this.handleAddRoute();
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        showResultMessage(this.txStatusModal, 'error', err);
        this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
        if (this.swapBtn.rightIcon.visible)
          this.swapBtn.rightIcon.visible = false;
      },
      onPaying: async (receipt?: string, data?: any) => {
        showResultMessage(this.txStatusModal, 'success', receipt);
        this.onSwapConfirming();
      },
      onPaid: async (data?: any) => {
        application.EventBus.dispatch(EventId.Paid);
        this.onSwapConfirmed();
        await this.updateBalances();
      },
      onPayingError: async (err: Error) => {
        showResultMessage(this.txStatusModal, 'error', err);
      }
    })
  }

  private setDefaultToken = () => {
    const { desChain, targetChainId: mTargetChainId, targetTokenMap } = this.xchainModel;
    let lstTokenMap = Object.values(tokenStore.getTokenMapByChainId(this.chainId));
    const supportedTokens = DefaultERC20Tokens[this.chainId] || [];
    lstTokenMap = lstTokenMap.filter(v => supportedTokens.some(token => token.address?.toLowerCase() === v.address?.toLowerCase()));
    const defaultCrossChainToken = lstTokenMap.find((v) => v.address);
    const targetChainId = desChain?.chainId || mTargetChainId || this.state.getChainId();
    const supportedTargetTokens = DefaultERC20Tokens[targetChainId] || [];
    let lstTargetTokenMap = Object.values(targetTokenMap);
    lstTargetTokenMap = lstTargetTokenMap.filter((v: ITokenObject) => supportedTargetTokens.some(token => token.address?.toLowerCase() === v.address?.toLowerCase()));
    const oswapIndex = lstTargetTokenMap.findIndex((item: ITokenObject) => item.symbol === 'OSWAP');
    if (oswapIndex > 0) {
      [lstTargetTokenMap[0], lstTargetTokenMap[oswapIndex]] = [lstTargetTokenMap[oswapIndex], lstTargetTokenMap[0]];
    }
    const { urlParamsEnabled, fromToken, toToken, fromTokenSymbol, toTokenSymbol } = this.xchainModel;
    const fromSymbol = urlParamsEnabled ? fromTokenSymbol : (fromTokenSymbol || fromToken?.symbol);
    const toSymbol = urlParamsEnabled ? toTokenSymbol : (toTokenSymbol || toToken?.symbol);
    const needToRedirectToken = urlParamsEnabled && (!fromTokenSymbol || !toTokenSymbol);
    if (fromSymbol && toSymbol) {
      const firstObj = supportedTokens.find((item: ITokenObject) => fromSymbol === item.symbol || fromSymbol === item.address);
      const secondObj = lstTargetTokenMap.find((item: ITokenObject) => toSymbol === item.symbol || toSymbol === item.address);
      this.xchainModel.fromToken = firstObj || defaultCrossChainToken;
      this.xchainModel.toToken = (secondObj || lstTargetTokenMap[0]) as ITokenObject;
      if (this.xchainModel.fromToken && !this.xchainModel.fromToken.chainId) {
        this.xchainModel.fromToken.chainId = this.chainId;
      }
      if (this.xchainModel.toToken && !this.xchainModel.toToken.chainId) {
        this.xchainModel.toToken.chainId = targetChainId;
      }
      this.onUpdateToken(this.xchainModel.fromToken, true);
      this.onUpdateToken(this.xchainModel.toToken, false);
      this.firstTokenInput.token = this.xchainModel.fromToken;
      this.secondTokenInput.token = this.xchainModel.toToken;
      this.xchainModel.fromInputValue = new BigNumber(this.xchainModel.fromInputValue.toNumber() || defaultInput);
      if (needToRedirectToken) {
        this.xchainModel.redirectToken();
      }
    } else {
      this.xchainModel.fromInputValue = new BigNumber(defaultInput);
      const { firstDefaultToken, secondDefaultToken } = this.xchainModel.calculateDefaultTokens();
      if (firstDefaultToken && secondDefaultToken) {
        this.xchainModel.fromInputValue = new BigNumber(defaultInput);
        this.onUpdateToken(firstDefaultToken, true);
        this.onUpdateToken(secondDefaultToken, false);
        this.firstTokenInput.token = this.xchainModel.fromToken;
        this.secondTokenInput.token = this.xchainModel.toToken;
      }
      this.xchainModel.redirectToken();
    }
  }

  // TODO Only allow Oswap to be selected in Mainnet Oswap2Oswap Pilot launch, BSC <-> AVAX, should be changed when any2any is ready
  private setGroupToken(isFrom?: boolean) {
    const { targetTokenMap, desChain } = this.xchainModel;
    if (isSupportedCrossChain(this.chainId, desChain?.chainId)) {
      const token = isFrom ? this.xchainModel.fromToken : this.xchainModel.toToken;
      const targetToken = isFrom ? this.xchainModel.toToken : this.xchainModel.fromToken;
      const chainId = isFrom ? this.chainId : desChain.chainId;
      const targetChainId = isFrom ? desChain.chainId : this.chainId;
      const vaultGroups = this.state.getVaultGroups();
      const vaults = vaultGroups.map(v => v.vaults);
      const vault = vaults.find(v => v[chainId]?.assetToken.address.toLowerCase() === token.address.toLowerCase());
      const targetVault = vault ? vault[targetChainId] : null;
      if (targetVault && targetVault.assetToken.address.toLowerCase() !== targetToken.address.toLowerCase()) {
        let listTargetTokenMap = Object.values(isFrom ? targetTokenMap : tokenStore.getTokenMapByChainId(targetChainId));
        const token = listTargetTokenMap.find(v => v.address?.toLowerCase() === targetVault.assetToken.address.toLowerCase());
        const tokenSelection = isFrom ? this.secondTokenInput : this.firstTokenInput;
        if (token && !token.chainId) {
          token.chainId = targetChainId;
        }
        tokenSelection.token = token;
        this.onUpdateToken(token, !isFrom);
      }
      this.isVaultEmpty = !targetVault;
    } else {
      // Reset firstTokenSelection tokenDataListProp to empty array to allow bypass in TokenSelection get tokenDataList, and get show all token selection
      this.firstTokenInput.tokenDataListProp = [];
      this.secondTokenInput.tokenDataListProp = [];
    }
  }

  private setupCrossChainPopup() {
    const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
    arrows.forEach((arrow: Element) => {
      arrow.classList.add('arrow-down--chain');
    });
    this.pnlReminderRejected?.classList.add('hidden');
    const { srcChain, desChain } = this.xchainModel;
    if (srcChain && desChain) {
      const fromToken = this.xchainModel.record.fromVault.assetToken;
      const toToken = this.xchainModel.record.toVault.assetToken;

      this.srcChainFirstPanel.classList.remove('hidden');
      this.targetChainFirstPanel.classList.remove('hidden');
      this.srcChainTokenImage.url = srcChain.image;
      this.srcChainTokenLabel.caption = srcChain.chainName;
      this.targetChainTokenImage.url = desChain.image;
      this.targetChainTokenLabel.caption = desChain.chainName;
      if (this.xchainModel.record && fromToken) {
        let toAmount = this.xchainModel.record.toAmount;
        this.pnlReminderRejected?.classList.remove('hidden');
        this.lbReminderRejectedValue.caption = `${formatNumber(toAmount)} ${toToken.symbol} `;
      }
      this.targetChainSecondPanel.classList.add('hidden');
      // Show vault info at the end if vaultTokenSymbol same as toToken
      this.crossChainVaultInfoVstack.classList.remove('hidden');
    } else {
      this.srcChainFirstPanel.classList.add('hidden');
      this.targetChainFirstPanel.classList.add('hidden');
      this.targetChainSecondPanel.classList.add('hidden');
      this.crossChainVaultInfoVstack.classList.add('hidden');
    }
  }

  private handleSwapPopup() {
    if (!this.xchainModel.record) return;
    this.setupCrossChainPopup();
    const { desChain, fromToken, toToken, fromInputValue, toInputValue, isFrom } = this.xchainModel;
    const slippageTolerance = this.state.getSlippageTolerance();
    this.fromTokenImage.url = tokenAssets.tokenPath(fromToken, this.chainId);
    this.fromTokenLabel.caption = fromToken?.symbol ?? '';
    this.fromTokenValue.caption = formatNumber(fromInputValue, 4);
    this.toTokenImage.url = tokenAssets.tokenPath(toToken, desChain?.chainId);
    this.toTokenLabel.caption = toToken?.symbol ?? '';
    this.toTokenValue.caption = formatNumber(toInputValue, 4);
    this.payOrReceiveValue.caption = formatNumber(this.getMinReceivedMaxSold());
    this.payOrReceiveToken.caption = isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
    const lgKey = isFrom ? '$input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert' : '$output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert';
    this.estimateMsg = this.i18n.get(lgKey, { value: `${slippageTolerance} ` });
    this.payOrReceiveText = isFrom ? '$you_will_pay_at_most' : '$you_will_receive_at_least';
    this.priceInfo2.items = this.xchainModel.getPriceInfo();
    this.swapModal.title = this.i18n.get('$confirm_swap');
    this.swapModal.visible = true;
  }

  private doSwap() {
    this.approvalModelAction.doPayAction(this.xchainModel.record);
  }

  private getMinReceivedMaxSold = (): number | null => {
    const slippageTolerance = this.state.getSlippageTolerance();
    if (!slippageTolerance || !this.xchainModel.record) return null;
    const amount = new BigNumber(this.xchainModel.isFrom ? this.xchainModel.record.fromAmount : this.xchainModel.record.toAmount);
    if (amount.isZero()) return null;
    const minReceivedMaxSold = amount.dividedBy(1 + slippageTolerance / 100).toNumber();
    return minReceivedMaxSold;
  }

  private onUpdateToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return;
    const balance = this.xchainModel.getBalance(token);
    if (isFrom) {
      const enabled = !this.xchainModel.isMaxDisabled();
      this.maxButton.enabled = enabled;
      this.xchainModel.updateToken(token, isFrom, this.firstTokenInput);
      this.payBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${token.symbol} `;
      this.updateTokenInput(true);
    } else {
      this.xchainModel.updateToken(token, isFrom, this.secondTokenInput);
      this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${token.symbol} `;
      this.updateTokenInput(false);
    }
  }

  private async onSelectToken(token: ITokenObject, isFrom: boolean) {
    if (!token) return;
    this.firstTokenInput.enabled = false;
    this.secondTokenInput.enabled = false;
    this.onUpdateToken(token, isFrom);
    this.setGroupToken(isFrom);
    this.xchainModel.redirectToken();
    await this.handleAddRoute();
    this.firstTokenInput.enabled = true;
    this.secondTokenInput.enabled = true;
  }

  private setApprovalModalSpenderAddress() {
    const item = this.xchainModel.record;
    this.state.approvalModel.spenderAddress = item.fromVault.vaultAddress;
  }

  private async updateTokenInput(isFrom: boolean) {
    const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
    if (inputEl) inputEl.value = this.xchainModel.getInputValue(isFrom);
  }

  private async onSelectRouteItem(item: Route) {
    if (this.xchainModel.isFrom) {
      if (this.xchainPayCol.children) {
        let balanceValue = item?.fromAmount || '';
        this.xchainModel.fromInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
        this.firstTokenInput.value = this.fixedNumber(balanceValue);
      }
    } else {
      if (this.xchainReceiveCol.children) {
        let balanceValue = item?.toAmount || '';
        this.xchainModel.toInputValue = typeof balanceValue !== 'object' ? new BigNumber(balanceValue) : balanceValue;
        this.secondTokenInput.value = this.fixedNumber(balanceValue);
        this.secondTokenInput.inputReadOnly = true;
        this.secondTokenInput.classList.add('cursor-input--default');
      }
    }

    this.swapBtn.classList.remove('hidden');
    this.xchainModel.record = item;
    if (this.xchainModel.fromToken && !this.xchainModel.fromToken.isNative && isWalletConnected() && item) {
      try {
        this.setApprovalModalSpenderAddress()
        await this.approvalModelAction.checkAllowance(this.xchainModel.fromToken, this.xchainModel.fromInputValue.toFixed());
      } catch (e) {
        console.log('Cannot check the Approval status (Cross Chain)', e);
      }
    }
    if (!item) {
      this.crossChainApprovalStatus = ApprovalStatus.NONE;
    }
    this.swapButtonText = this.getSwapButtonText();
    const enabled = !this.isSwapButtonDisabled();
    this.swapBtn.enabled = enabled || !isWalletConnected() || !this.state.isRpcWalletConnected();
    this.swapBtn.rightIcon.visible = false;
    this.priceInfo.items = this.xchainModel.getPriceInfo();
  }

  private onTokenInputChange(source: Control) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      const fromInput = this.xchainPayCol.getElementsByTagName('I-INPUT')?.[0] as Input;
      const toInput = this.xchainReceiveCol.getElementsByTagName('I-INPUT')?.[0] as Input;
      const isFrom = source.isSameNode(fromInput);
      const amount = (source as Input).value;
      if (isInvalidInput(amount)) {
        this.resetValuesByInput();
        if (fromInput)
          fromInput.value = '0';
        if (toInput)
          toInput.value = '0';
        return;
      }
      const limit = isFrom ? this.xchainModel.fromToken?.decimals : this.xchainModel.toToken?.decimals;
      const value = new BigNumber(limitDecimals(amount, limit || 18));
      if (!value.gt(0)) {
        this.resetValuesByInput();
        if (isFrom && toInput) {
          toInput.value = '0';
        } else if (!isFrom && fromInput) {
          fromInput.value = '0';
        }
      } else {
        let valueChanged = false;
        const isLastDot = amount.indexOf('.') === amount.length - 1;
        if (isFrom) {
          if (!this.xchainModel.fromInputValue.eq(value)) {
            this.xchainModel.fromInputValue = value;
            this.xchainModel.onUpdateEstimatedPosition(false, true);
            valueChanged = true;
          }
          if (!isLastDot)
            fromInput.value = value.toFixed();
        } else {
          if (!this.xchainModel.toInputValue.eq(value)) {
            this.xchainModel.toInputValue = value;
            this.xchainModel.onUpdateEstimatedPosition(true, true);
            valueChanged = true;
          }
          if (!isLastDot)
            toInput.value = value.toFixed();
        }
        this.xchainModel.redirectToken();
        if (valueChanged) await this.handleAddRoute();
      }

    }, 1000);
  }

  private resetValuesByInput() {
    this.initRoutes();
    this.priceInfo.items = this.xchainModel.getPriceInfo();
    this.xchainModel.fromInputValue = new BigNumber(0);
    this.xchainModel.toInputValue = new BigNumber(0);
    this.xchainModel.redirectToken();
  }

  private initRoutes() {
    this.xchainModel.record = null;
    this.isPriceToggled = false;
    this.swapBtn.classList.add('hidden');
  }

  private async handleAddRoute() {
    if (!this.xchainModel.fromToken || !this.xchainModel.toToken || !(this.xchainModel.fromInputValue.gt(0) || this.xchainModel.toInputValue.gt(0))) return;
    this.initRoutes();
    this.disableSelectChain(true);
    this.disableSelectChain(true, true);
    const { srcChain, desChain } = this.xchainModel;
    if (!srcChain || !desChain) return;
    let vaultGroup = this.isVaultEmpty ? null : await findVaultGroupByToken(this.state, srcChain.chainId, this.xchainModel.fromToken.address || this.xchainModel.fromToken.symbol);
    let route = getRoute({
      vaultGroup,
      toChainId: desChain.chainId,
      fromChainId: srcChain.chainId,
      inAmount: new BigNumber(this.xchainModel.fromInputValue)
    });
    if (route) {
      this.minSwapHintLabel?.classList.add('hidden');
    } else {
      this.minSwapHintLabel?.classList.remove('hidden');
    }
    this.xchainModel.record = route;
    this.swapModalConfirmBtn.caption = '$confirm_swap';
    this.swapModalConfirmBtn.enabled = true;

    if (this.xchainModel.record) {
      const assetSymbol = this.xchainModel.record.toVault.assetToken.symbol;
      const vaultAddress = this.xchainModel.record.toVault.vaultAddress;
      const softCap = vaultGroup.vaults[srcChain.chainId].softCap;
      const bond = await getBond(this.state, route.toVault);
      const vaultAssetBalance = await getVaultAssetBalance(this.state, desChain!.chainId, vaultAddress)
      const assetBalance = vaultAssetBalance ?? 0;
      const assetDecimal = this.xchainModel.record.toVault.assetToken.decimals;
      const targetVaultAssetBalance = (new BigNumber(assetBalance)).shiftedBy(-assetDecimal);
      const toAmount = this.xchainModel.record.toAmount;
      //const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
      //const oswapToUsdPrice = oraclePriceMap[bridgeVaultConstantMap['OSWAP'][this.desChain!.chainId].tokenAddress.toLowerCase()];
      //const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
      this.targetVaultAssetBalanceLabel1.caption = `${this.i18n.get('$vault_asset_balance')}: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol} `;
      this.targetVaultAssetBalanceLabel2.caption = `${this.i18n.get('$vault_asset_balance')}: ${formatNumber(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol} `;

      this.targetVaultBondBalanceLabel1.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(bond.toNumber(), 4)} ${assetSymbol} `;
      this.targetVaultBondBalanceLabel2.caption = `${this.i18n.get('$vault_bond_balance')}: ${formatNumber(bond.toNumber(), 4)} ${assetSymbol} `;
      //TODO Bond
      /* 
      if (!vault.vaultGroup) {
        this.targetVaultBondBalanceLabel1.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } ${ assetSymbol } `;
        this.targetVaultBondBalanceLabel2.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } ${ assetSymbol } `;
      } else if (vault.vaultGroup === 'OSWAP') {
        this.targetVaultBondBalanceLabel1.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } OSWAP`;
        this.targetVaultBondBalanceLabel2.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } OSWAP`;
      } else {
        this.targetVaultBondBalanceLabel1.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } OSWAP ≈ ${ formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4) } ${ assetSymbol } `;
        this.targetVaultBondBalanceLabel2.caption = `${ this.i18n.get('$vault_bond_balance') }: ${ formatNumber(targetVaultBondBalance.toNumber(), 4) } OSWAP ≈ ${ formatNumber(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4) } ${ assetSymbol } `;
      }*/
      this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${formatNumber(softCap)} ${assetSymbol} ` : "-";
      this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${formatNumber(softCap)} ${assetSymbol} ` : "-";
      const minValue = BigNumber.min(targetVaultAssetBalance, bond, softCap);
      if (minValue.eq(targetVaultAssetBalance)) {
        this.targetVaultAssetBalanceLabel1.classList.add('text--limit');
        this.targetVaultAssetBalanceLabel2.classList.add('text--limit');
        this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
        this.crossChainSoftCapLabel1.classList.remove('text--limit');
        this.crossChainSoftCapLabel2.classList.remove('text--limit');
      } else if (minValue.eq(bond)) {
        this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
        this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel1.classList.add('text--limit');
        this.targetVaultBondBalanceLabel2.classList.add('text--limit');
        this.crossChainSoftCapLabel1.classList.remove('text--limit');
        this.crossChainSoftCapLabel2.classList.remove('text--limit');
      } else {
        this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
        this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
        this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
        this.crossChainSoftCapLabel1.classList.add('text--limit');
        this.crossChainSoftCapLabel2.classList.add('text--limit');
      }
      if (softCap && toAmount.gte(softCap)) {
        this.swapModalConfirmBtn.caption = 'Cap Reached';
        this.swapModalConfirmBtn.enabled = false;
        //} else if (toAmount.gt(targetVaultAssetBalance) || toAmount.multipliedBy(vaultToOswapPrice).gt(bond)) {
        //  this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
        //  this.swapModalConfirmBtn.enabled = false;
      } else {
        this.swapModalConfirmBtn.enabled = true;
      }

    }
    this.lastUpdated = 0;
    this.disableSelectChain(false);
    this.disableSelectChain(false, true);
    this.initRoutes();
    this.onSelectRouteItem(route);

    if (!route) {
      this.priceInfo.items = this.xchainModel.getPriceInfo();
      if (this.xchainModel.isEstimated('to')) {
        const input = this.secondTokenInput;
        this.xchainModel.toInputValue = new BigNumber(0);
        if (input) {
          input.value = '-';
          input.inputReadOnly = true;
          input.classList.add('cursor-input--default');
        }
      } else {
        const input = this.firstTokenInput;
        this.xchainModel.fromInputValue = new BigNumber(0);
        if (input) input.value = '-';
      }
    }
    if (this.xchainModel.record) this.setApprovalModalSpenderAddress()
  }

  // Price Info
  private onTogglePrice(priceInfo: XchainSwapPriceInfo) {
    this.isPriceToggled = !this.isPriceToggled;
    priceInfo.items = this.xchainModel.getPriceInfo();
  }

  private async updateBalances() {
    const chainIds = [...new Set([this.chainId, this.xchainModel.targetChainId])];
    for (let chainId of chainIds) {
      await tokenStore.updateTokenBalancesByChainId(chainId);
    }
    if (this.xchainModel.fromToken) {
      const balance = this.xchainModel.getBalance(this.xchainModel.fromToken);
      this.payBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${this.xchainModel.fromToken.symbol} `;
    }
    if (this.xchainModel.toToken) {
      const balance = this.xchainModel.getBalance(this.xchainModel.toToken);
      this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${this.xchainModel.toToken.symbol} `;
    }
    const enabled = !this.xchainModel.isMaxDisabled();
    this.maxButton.enabled = enabled;
  }

  private getSwapButtonText() {
    const isApproveButtonShown = this.crossChainApprovalStatus !== ApprovalStatus.NONE;
    if (!isWalletConnected()) {
      return this.i18n.get('$connect_wallet');
    }
    if (!this.state.isRpcWalletConnected()) {
      return this.i18n.get('$switch_network');
    }
    if (isApproveButtonShown) {
      const status = this.crossChainApprovalStatus;
      switch (status) {
        case ApprovalStatus.APPROVING:
          return this.i18n.get('$approving');
        case ApprovalStatus.TO_BE_APPROVED:
          return this.i18n.get('$approve');
      }
      return '';
    }
    if (this.swapBtn.rightIcon.visible) {
      return this.i18n.get('$creating_order');
    }
    if (this.xchainModel.isInsufficientBalance) {
      return this.i18n.get('$insufficient_balance', { symbol: this.xchainModel.fromToken?.symbol });
    }
    if (this.xchainModel.record.toAmount.lte(0)) {
      return this.i18n.get('$amount_lower_than_base_fee');
    }
    return this.i18n.get('$create_order');
  }

  private getWarningMessageText() {
    const tokens = [this.xchainModel.fromToken?.symbol, this.xchainModel.toToken?.symbol];
    if (tokens.every(v => v === 'ETH' || v === 'WETH')) {
      return this.i18n.get('$invalid_pair');
    }
    if (!this.xchainModel.record) {
      return this.i18n.get('$no_records');
    }
    if (this.crossChainApprovalStatus === ApprovalStatus.TO_BE_APPROVED) {
      return '';
    }
    let balance = this.xchainModel.getBalance(this.xchainModel.fromToken)
    if (this.xchainModel.record.fromAmount.gt(balance)) {
      return this.i18n.get('$insufficient_balance', { symbol: this.xchainModel.fromToken?.symbol });
    }
    if (this.xchainModel.record.toAmount.lte(0)) {
      return this.i18n.get('$amount_lower_than_base_fee');
    }
    return '';
  }

  private onSwapConfirming = () => {
    if (!this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = true;
    this.swapButtonText = this.getSwapButtonText();
  }

  private onSwapConfirmed = async () => {
    if (this.swapBtn.rightIcon.visible)
      this.swapBtn.rightIcon.visible = false;
    this.swapButtonText = this.getSwapButtonText();
    await this.handleAddRoute();
    this.showViewOrderModal();
  }

  private isSwapButtonDisabled() {
    const warningMessageText = this.getWarningMessageText();
    return (isWalletConnected() && warningMessageText != '');
  }

  private async switchNetworkByWallet() {
    if (this.mdWallet) {
      await application.loadPackage('@scom/scom-wallet-modal', '*');
      this.mdWallet.networks = this.networks;
      this.mdWallet.wallets = this.wallets;
      this.mdWallet.showModal();
    }
  }

  private async onClickSwapButton() {
    if (!isWalletConnected()) {
      this.switchNetworkByWallet();
      return;
    } else if (!this.state.isRpcWalletConnected()) {
      const chainId = this.state.getChainId();
      const clientWallet = Wallet.getClientInstance();
      await clientWallet.switchNetwork(chainId);
      return;
    }
    if (!this.xchainModel.record || this.isSwapButtonDisabled()) return;

    const isApproveButtonShown = this.crossChainApprovalStatus !== ApprovalStatus.NONE;
    if (isApproveButtonShown) {
      this.onApproveRouterMax();
      return;
    }
    this.handleSwapPopup();
  }

  private onSubmit = async () => {
    try {
      this.swapModal.visible = false;
      showResultMessage(this.txStatusModal, 'warning', this.i18n.get('$swapping', {
        from: `${formatNumber(this.xchainModel.fromInputValue, 4)} ${this.xchainModel.fromToken?.symbol} `,
        to: `${formatNumber(this.xchainModel.toInputValue, 4)} ${this.xchainModel.toToken?.symbol} `
      }));
      if (this.xchainModel.toToken && this.xchainModel.fromToken && this.xchainModel.desChain) {
        const { error } = await createBridgeVaultOrder(this.state, {
          vaultAddress: this.xchainModel.record.fromVault.vaultAddress,
          targetChainId: this.xchainModel.desChain.chainId,
          tokenIn: this.xchainModel.fromToken,
          tokenOut: this.xchainModel.toToken,
          amountIn: this.xchainModel.record.fromAmount.toFixed(),
          minAmountOut: this.xchainModel.record.toAmount.dividedBy(new BigNumber("1").plus(orderMinOutRate)).toFixed(),
        })
        if (error) {
          showResultMessage(this.txStatusModal, 'error', error as any);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  private onApproveRouterMax = () => {
    showResultMessage(this.txStatusModal, 'warning', this.i18n.get('$approving'));
    this.setApprovalModalSpenderAddress();
    this.approvalModelAction.doApproveAction(this.xchainModel.fromToken, this.xchainModel.fromInputValue.toString(), this.xchainModel.record);
  }

  private onSetMaxBalance = async (value?: number) => {
    if (!this.xchainModel.fromToken?.symbol) return;
    this.xchainModel.isFrom = false;
    const address = this.xchainModel.fromToken?.address || this.xchainModel.fromToken?.symbol;
    let balance = this.xchainModel.getBalance(this.xchainModel.fromToken);
    let inputVal = new BigNumber(balance);
    if (!address) {
      inputVal = new BigNumber(0);
    }

    if (value == 0 || value) {
      inputVal = inputVal.multipliedBy(value).dividedBy(100);
    }
    if (inputVal.eq(this.xchainModel.fromInputValue)) return;
    this.xchainModel.fromInputValue = inputVal;
    this.firstTokenInput.value = this.xchainModel.fromInputValue.toString();
    if (this.xchainReceiveContainer && this.xchainReceiveContainer.childNodes[1]) {
      this.xchainModel.redirectToken();
    }
    await this.handleAddRoute();
  }

  private async onRenderPriceInfo() {
    if (!this.priceInfo) {
      this.priceInfo = new XchainSwapPriceInfo();
      this.priceInfo.width = 'auto';
      this.priceInfo.height = 'auto';
      this.xchainSwapContainer.appendChild(this.priceInfo);
      this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
      await this.priceInfo.ready();
    }
    this.priceInfo.items = this.xchainModel.getPriceInfo();

    if (!this.priceInfo2) {
      this.priceInfo2 = new XchainSwapPriceInfo();
      this.priceInfo2.width = 'auto';
      this.priceInfo2.height = 'auto';
      this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
      await this.priceInfo2.ready();
    }
    this.priceInfoContainer.appendChild(this.priceInfo2);
  }

  private onRefresh = async (source: Control) => {
    source.enabled = false;
    await this.handleAddRoute();
    source.enabled = true;
  }

  private onSetting = () => {
    this.transactionModal.showModal();
  }

  private get isMetaMask() {
    return getWalletProvider() === WalletPlugin.MetaMask;
  }

  private onShowSourceChain = () => {
    if (this.isSrcOpened) {
      this.mdSourceChain.visible = false;
    } else {
      this.isSrcOpened = true;
      this.mdSourceChain.visible = true;
      setTimeout(() => {
        this.mdSourceChain.refresh();
      }, 1)
    }
  }

  private onCloseSourceChain = () => {
    setTimeout(() => {
      this.isSrcOpened = false;
    })
  }

  private onShowDestinationChain = () => {
    if (this.isDesOpened) {
      this.mdDestinationChain.visible = false;
    } else {
      this.isDesOpened = true;
      this.mdDestinationChain.visible = true;
      setTimeout(() => {
        this.mdDestinationChain.refresh();
      }, 1)
    }
  }

  private onCloseDesChain = () => {
    setTimeout(() => {
      this.isDesOpened = false;
    })
  }

  private disableSelectChain = (disabled: boolean, isDes?: boolean) => {
    const btnChain = isDes ? this.btnDestinationChain : this.btnSourceChain;
    if (btnChain) btnChain.enabled = !disabled;
  }

  private selectSourceChain = async (network: IExtendedNetwork) => {
    const { chainId, isCrossChainSupported } = network;
    const srcChain = this.xchainModel.srcChain;
    if ((srcChain && srcChain.chainId != chainId) || !srcChain) {
      const rpcWallet = this.state.getRpcWallet();
      await rpcWallet.switchNetwork(network.chainId);
      if (!isCrossChainSupported) {
        this.selectDestinationChain(network)
      }
      this.xchainModel.srcChain = network;
      const networkImg = this.btnSourceChain.querySelector('i-image');
      if (networkImg) this.btnSourceChain.removeChild(networkImg);
      this.btnSourceChain.prepend(<i-image width={30} height={30} url={this.xchainModel.srcChain.image} />);
      this.btnSourceChain.caption = `${this.xchainModel.srcChain.chainId} - ${this.xchainModel.srcChain.chainName} `;
    }
  }

  private selectDestinationChain = async (network: IExtendedNetwork) => {
    this.disableSelectChain(true, true);
    await this.xchainModel.updateChain(network);
    const networkImg = this.btnDestinationChain.querySelector('i-image');
    if (networkImg) this.btnDestinationChain.removeChild(networkImg);
    if (this.xchainModel.desChain) {
      this.xchainModel.targetChainId = this.xchainModel.desChain.chainId;
      this.btnDestinationChain.prepend(<i-image width={30} height={30} url={this.xchainModel.desChain.image} />);
      this.btnDestinationChain.caption = `${this.xchainModel.desChain.chainId} - ${this.xchainModel.desChain.chainName} `;
    } else {
      this.btnDestinationChain.caption = '$destination_chain';
    }
    this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId);
    this.disableSelectChain(false, true);
  }

  private onSourceChainChanged = () => {
    this.xchainModel.getSupportedChainList(true);
    if (!this.chainId)
      this.xchainModel.chainId = this.supportedChainList[0].chainId;
    const currentNetwork = this.supportedChainList.find((f: IExtendedNetwork) => f.chainId == this.chainId);
    this.xchainModel.srcChain = currentNetwork;
    const networkImg = this.btnSourceChain.querySelector('i-image');
    if (networkImg) this.btnSourceChain.removeChild(networkImg);
    if (this.xchainModel.srcChain) {
      this.btnSourceChain.prepend(<i-image width={30} height={30} url={this.xchainModel.srcChain.image} />);
      this.btnSourceChain.caption = `${this.xchainModel.srcChain.chainId} - ${this.xchainModel.srcChain.chainName} `;
    } else {
      this.btnSourceChain.caption = '$source_chain';
    }
  }

  private onSelectSourceChain = async (obj: IExtendedNetwork) => {
    this.mdSourceChain.visible = false;
    if (obj.chainId === this.xchainModel.srcChain?.chainId) return;
    this.firstTokenInput.chainId = obj.chainId;
    await this.selectSourceChain(obj);
  }

  private onSelectDestinationChain = async (obj: IExtendedNetwork) => {
    this.mdDestinationChain.visible = false;
    if (obj.chainId === this.xchainModel.desChain?.chainId) return;
    this.secondTokenInput.chainId = obj.chainId;
    await this.selectDestinationChain(obj);
    this.initializeWidgetConfig();
  }

  private setDefaultChain = async () => {
    if (this.supportedChainList && this.supportedChainList.length) {
      let obj = this.supportedChainList.find((f: IExtendedNetwork) => f.chainId == this.chainId);
      if (!obj)
        obj = this.supportedChainList[0];
      if (!this.xchainModel.srcChain && obj) {
        await this.selectSourceChain(obj);
      }
      this.onSourceChainChanged();
      const targetId = this.xchainModel.targetChainId === this.chainId ? this.defaultTargetChainId : (this.xchainModel.targetChainId || this.defaultTargetChainId);
      const targetChain = this.supportedChainList.find((f: IExtendedNetwork) => f.chainId == targetId);
      const isSupported = targetChain && targetChain.isCrossChainSupported;
      if ((!this.xchainModel.desChain || this.xchainModel.desChain?.chainId === this.chainId) && isSupported) {
        await this.selectDestinationChain(targetChain);
      } else if (!isSupported && obj) {
        await this.selectDestinationChain(obj);
      } else {
        await tokenStore.updateTokenBalancesByChainId(this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
        if (this.xchainModel.toToken) {
          const balance = this.xchainModel.getBalance(this.xchainModel.toToken);
          this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${formatNumber(balance, 4)} ${this.xchainModel.toToken.symbol} `;
        }
        this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
      }
      const networkImg = this.btnDestinationChain.querySelector('i-image');
      if (networkImg) this.btnDestinationChain.removeChild(networkImg);
      if (this.xchainModel.desChain) {
        this.btnDestinationChain.prepend(<i-image width={30} height={30} url={this.xchainModel.desChain.image} />);
        this.btnDestinationChain.caption = `${this.xchainModel.desChain.chainId} - ${this.xchainModel.desChain.chainName} `;
      } else {
        this.btnDestinationChain.caption = '$destination_chain';
      }
    } else {
      this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
    }
  }

  private initChainElm = (network: IExtendedNetwork, isDes?: boolean) => {
    const { image, chainName, chainId } = network;
    const hStack = new HStack(undefined, {
      gap: 8,
      verticalAlignment: 'center',
      cursor: 'pointer'
    })
    const img = new Image(undefined, {
      url: image,
      width: 30,
      height: 30
    });
    const lb = new Label(undefined, {
      caption: `${chainId} - ${chainName} `
    });
    hStack.appendChild(img);
    hStack.appendChild(lb);
    if (isDes) {
      this.listElmDesChain.appendChild(hStack);
      if (network.chainId === this.chainId) {
        hStack.classList.add('disabled');
        hStack.tooltip.content = '$the_target_chain_cannot_be_the_same_as_the_source_chain';
      } else {
        hStack.onClick = () => this.onSelectDestinationChain(network);
      }
    } else {
      if (!this.isMetaMask && isWalletConnected()) {
        hStack.tooltip.content = this.i18n.get('$xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet', {
          chainName,
          chainId: `${chainId} `
        });
        hStack.style.cursor = 'default';
      }
      hStack.onClick = () => this.onSelectSourceChain(network);
      this.listElmSrcChain.appendChild(hStack);
    }
  }

  private renderChainList = async () => {
    this.oldSupportedChainList = this.supportedChainList;
    this.xchainModel.getSupportedChainList(true);
    if (this.oldSupportedChainList[0]?.chainId !== this.supportedChainList[0]?.chainId) {
      this.xchainModel.srcChain = undefined;
      this.xchainModel.desChain = undefined;
    };
    this.listElmSrcChain.clearInnerHTML();
    this.listElmDesChain.clearInnerHTML();
    this.supportedChainList.forEach((network: IExtendedNetwork) => {
      this.initChainElm(network);
      if (network.isCrossChainSupported) {
        this.initChainElm(network, true);
      }
    });
    await this.setDefaultChain();
  }

  private showViewOrderModal = () => {
    if (!this.configModel.recordUrl) return;
    this.modalViewOrder.visible = true;
  }

  private closeViewOrderModal = () => {
    this.modalViewOrder.visible = false;
  }

  private onViewOrder = () => {
    this.modalViewOrder.visible = false;
    window.open(this.configModel.recordUrl);
  }

  private showModalFees = () => {
    const fees = this.xchainModel.getFeeDetails();
    this.feesInfo.clearInnerHTML();
    fees.forEach((fee) => {
      this.feesInfo.appendChild(
        <i-hstack
          horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 10 }}
          border={{ bottom: { color: Theme.colors.info.light, width: '2px', style: 'solid' } }}
          padding={{ bottom: 16 }}
        >
          <i-hstack verticalAlignment="center">
            <i-label caption={fee.title} margin={{ right: 4 }} />
            <i-icon
              name="question-circle"
              width={15}
              height={15}
              fill={Theme.text.primary}
              tooltip={{ content: fee.description }}
              data-placement="right"
            />
          </i-hstack>
          <i-label class="ml-auto" caption={`${formatNumber(fee.value)} ${this.xchainModel.fromToken?.symbol} `} />
        </i-hstack>
      )
    })
    this.feesInfo.appendChild(
      <i-hstack horizontalAlignment="space-between" verticalAlignment="center" margin={{ top: 16 }}>
        <i-hstack verticalAlignment="center">
          <i-label caption={this.i18n.get('$total_transaction_fee')} />
        </i-hstack>
        <i-label class="ml-auto" caption={this.xchainModel.getTradeFeeExactAmount()} />
      </i-hstack>
    )
    this.btnCloseFees.caption = this.i18n.get('$close');
    this.modalFees.title = this.i18n.get('$transaction_fee_details');
    this.modalFees.visible = true;
  }

  private closeModalFees = () => {
    this.modalFees.visible = false;
  }

  private initExpertModal() {
    if (this.expertModal) return;
    this.expertModal = new XchainSwapExpertModeSettings(this.state);
    this.appendChild(this.expertModal);
  }

  private initTransactionModal() {
    if (this.transactionModal) return;
    this.transactionModal = new XchainSwapTransactionSettings(this.state);
    this.transactionModal.showCrossChain = true;
    this.appendChild(this.transactionModal);
  }

  render() {
    return (
      <i-scom-dapp-container id="dappContainer">
        <i-panel class={xchainSwapStyle}>
          <i-panel id="xchainSwapContainer" class={xchainSwapContainerStyle}>
            <i-hstack horizontalAlignment="end" verticalAlignment="center">
              <i-panel id="actionSetting" class="xchain-action-setting hidden">
                <i-label minWidth={160} caption={this.lastUpdatedText}></i-label>
                <i-icon width={26} height={26} class="xchain-rounded-icon" name="sync-alt" fill={Theme.text.primary} onClick={this.onRefresh}></i-icon>
                <i-icon width={26} height={26} class="xchain-rounded-icon" name="cog" fill={Theme.text.primary} onClick={this.onSetting}></i-icon>
              </i-panel>
            </i-hstack>
            <i-panel class={contentXchainSwap}>
              <i-hstack
                gap={4}
                margin={{ top: 8, bottom: 8 }}
                verticalAlignment="center"
                horizontalAlignment="space-between"
                wrap="wrap"
              >
                <i-label caption="$you_pay" font={{ size: '1.125rem', color: Theme.text.primary }} />
              </i-hstack>
              <i-panel class={btnDropdownStyle} width="auto" margin={{ bottom: 4 }}>
                <i-button
                  id="btnSourceChain"
                  class="btn-chain--selection"
                  rightIcon={{ name: 'angle-down', cursor: 'pointer' }}
                  caption="$source_chain"
                  width="calc(100% - 1px)"
                  onClick={this.onShowSourceChain}
                />
                <i-modal
                  id="mdSourceChain"
                  class="md--chain-selection"
                  showBackdrop={false}
                  onClose={this.onCloseSourceChain}
                  width="100%"
                  height="auto"
                  popupPlacement="bottom"
                >
                  <i-vstack id="listElmSrcChain" gap={2} />
                </i-modal>
              </i-panel>
              <i-panel class="token-box">
                <i-vstack id="xchainPayContainer" class={inputTokenContainerStyle} >
                  <i-hstack class="balance-info" horizontalAlignment="space-between" verticalAlignment="center" width="100%" margin={{ bottom: '0.5rem' }}>
                    <i-label id="payBalance" class="text--grey ml-auto" caption="$balance:_0"></i-label>
                    <i-button id="maxButton" class="btn-max" caption="$max" enabled={false} onClick={() => this.onSetMaxBalance()}></i-button>
                  </i-hstack>
                  <i-panel
                    id="xchainPayCol"
                    class="bg-box-radius"
                    background={{ color: Theme.input.background }}
                    width="100%"
                    margin={{ top: 'auto' }}
                    border={{ radius: '1rem', width: '1px', style: 'solid', color: Theme.background.main }}
                  >
                    <i-scom-token-input
                      id="firstTokenInput"
                      placeholder='0.0'
                      value='-'
                      tokenReadOnly={false}
                      isBalanceShown={false}
                      isBtnMaxShown={false}
                      isCommonShown={true}
                      background={{ color: Theme.input.background }}
                      border={{ radius: '1rem' }}
                      height={'auto'} width={'100%'}
                      display='flex'
                      font={{ size: '1.25rem' }}
                      padding={{ left: '0.75rem', right: '0.75rem' }}
                      tokenButtonStyles={{
                        background: { color: Theme.background.main },
                        padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                        border: { radius: 8 },
                        font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                        lineHeight: 1.5,
                        opacity: 1
                      }}
                      class={customTokenInputStyle}
                      onInputAmountChanged={this.onTokenInputChange}
                      onSelectToken={(token: ITokenObject) => this.onSelectToken(token, true)}
                    ></i-scom-token-input>
                  </i-panel>
                </i-vstack>
              </i-panel>
              <i-hstack id="minSwapHintLabel" gap={4} verticalAlignment="start" opacity={0.9}>
                <i-icon name="star" fill={Theme.colors.primary.main} width={13} height={13} />
                <i-label caption="$no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token" font={{ size: '0.8rem', color: Theme.colors.primary.main }} />
              </i-hstack>
              <i-panel class="token-box">
                <i-vstack id="xchainReceiveContainer" class={inputTokenContainerStyle} >
                  <i-vstack class="balance-info" width="100%" margin={{ left: 'auto' }}>
                    <i-hstack
                      gap={4}
                      margin={{ top: 8, bottom: 8 }}
                      verticalAlignment="center"
                      horizontalAlignment="space-between"
                      wrap="wrap"
                    >
                      <i-label caption="$you_receive" font={{ size: '1.125rem', color: Theme.text.primary }} />
                    </i-hstack>
                    <i-panel class={btnDropdownStyle} width="auto" margin={{ bottom: 8 }}>
                      <i-button
                        id="btnDestinationChain"
                        class="btn-chain--selection"
                        rightIcon={{ name: 'angle-down', cursor: 'pointer' }}
                        caption="$destination_chain"
                        width="calc(100% - 1px)"
                        onClick={this.onShowDestinationChain}
                      />
                      <i-modal
                        id="mdDestinationChain"
                        class="md--chain-selection"
                        showBackdrop={false}
                        onClose={this.onCloseDesChain}
                        width="100%"
                        height="auto"
                        popupPlacement="bottom"
                      >
                        <i-vstack id="listElmDesChain" gap={2} />
                      </i-modal>
                    </i-panel>
                    <i-vstack class="text-right" width="100%">
                      <i-label id="receiveBalance" class="text--grey ml-auto" caption="$balance:_0"></i-label>
                    </i-vstack>
                  </i-vstack>
                  <i-panel
                    id="xchainReceiveCol"
                    background={{ color: Theme.input.background }}
                    width="100%"
                    margin={{ top: 'auto' }}
                    border={{ radius: '1rem', width: '1px', style: 'solid', color: Theme.background.main }}
                  >
                    <i-scom-token-input
                      id="secondTokenInput"
                      value='-'
                      placeholder='0.0'
                      inputReadOnly={true}
                      tokenReadOnly={false}
                      isBalanceShown={false}
                      isBtnMaxShown={false}
                      isCommonShown={true}
                      background={{ color: Theme.input.background }}
                      border={{ radius: '1rem' }}
                      height={'auto'} width={'100%'}
                      display='flex'
                      font={{ size: '1.25rem' }}
                      padding={{ left: '0.75rem', right: '0.75rem' }}
                      tokenButtonStyles={{
                        background: { color: Theme.background.main },
                        padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                        border: { radius: 8 },
                        font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                        lineHeight: 1.5,
                        opacity: 1
                      }}
                      class={customTokenInputStyle}
                      onInputAmountChanged={this.onTokenInputChange}
                      onSelectToken={(token: ITokenObject) => this.onSelectToken(token, false)}
                    ></i-scom-token-input>
                  </i-panel>
                </i-vstack>
              </i-panel>
            </i-panel>
            <i-panel class="swap-btn-container" width="100%">
              <i-button
                id="swapBtn" class="btn-swap btn-os hidden" height={67} caption={this.swapButtonText}
                rightIcon={{ spin: true, visible: false }}
                onClick={this.onClickSwapButton.bind(this)}
              ></i-button>
            </i-panel>
          </i-panel>

          <i-modal id="swapModal" class="custom-modal" title="$confirm_swap" closeIcon={{ name: 'times' }}>
            <i-hstack verticalAlignment="center" horizontalAlignment="start" wrap="wrap" gap="0.25rem">
              <i-panel id="srcChainFirstPanel" class="row-chain">
                <i-image id="srcChainTokenImage" width="30px" height="30px" url="#" />
                <i-label id="srcChainTokenLabel" class="token-name" caption="" />
                <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
              </i-panel>
              <i-panel class="row-chain">
                <i-image id="fromTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                <i-label id="fromTokenLabel" class="token-name" caption=""></i-label>
              </i-panel>
              <i-label id="fromTokenValue" padding={{ left: '0.5rem' }} class="token-value" caption=" - "></i-label>
            </i-hstack>
            <i-icon name="arrow-down" class="arrow-down" fill={Theme.input.fontColor} width={28} height={28} />
            <i-panel id="targetChainSecondPanel">
              <i-hstack verticalAlignment="center" horizontalAlignment="start" wrap="wrap" gap="0.25rem">
                <i-panel class="row-chain">
                  <i-image id="targetChainVaultImage" width="30px" height="30px" url="#" />
                  <i-label id="targetChainVaultLabel" class="token-name" caption="" />
                  <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
                </i-panel>
                <i-panel class="row-chain">
                  <i-image id="targetVaultTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                  <i-label id="targetVaultTokenLabel" class="token-name" caption="" />
                </i-panel>
                <i-label id="targetVaultTokenValue" class="token-value" caption="-" />
              </i-hstack>
              <i-vstack class="text-right">
                <i-label id="crossChainSoftCapLabel1" class="text--grey ml-auto"></i-label>
                <i-label id="targetVaultAssetBalanceLabel1" class="text--grey ml-auto" caption="$vault_asset_balance:_0"></i-label>
                <i-label id="targetVaultBondBalanceLabel1" class="text--grey ml-auto" caption="$vault_bond_balance:_0"></i-label>
              </i-vstack>
              <i-icon name="arrow-down" class="arrow-down" fill={Theme.input.fontColor} width={28} height={28} />
            </i-panel>
            <i-hstack class="mb-1" verticalAlignment="center" horizontalAlignment="start" wrap="wrap" gap="0.25rem">
              <i-panel id="targetChainFirstPanel" class="row-chain">
                <i-image id="targetChainTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                <i-label id="targetChainTokenLabel" class="token-name" caption="" />
                <i-icon name="minus" fill={Theme.input.fontColor} width={28} height={10} />
              </i-panel>
              <i-panel class="row-chain">
                <i-image id="toTokenImage" fallbackUrl={tokenAssets.fallbackUrl} width="30px" height="30px" url="#" />
                <i-label id="toTokenLabel" class="token-name" caption=""></i-label>
              </i-panel>
              <i-label id="toTokenValue" padding={{ left: '0.5rem' }} class="token-value text-primary bold" caption=" - "></i-label>
            </i-hstack>
            <i-vstack id="crossChainVaultInfoVstack" class="text-right">
              <i-label id="crossChainSoftCapLabel2" class="text--grey ml-auto"></i-label>
              <i-label id="targetVaultAssetBalanceLabel2" class="text--grey ml-auto" caption="$vault_asset_balance:_0"></i-label>
              <i-label id="targetVaultBondBalanceLabel2" class="text--grey ml-auto" caption="$vault_bond_balance:_0"></i-label>
            </i-vstack>
            <i-panel class="mb-1">
              <i-label caption={this.estimateMsg}></i-label>
            </i-panel>
            <i-panel class="mb-1">
              <i-label caption={this.payOrReceiveText}></i-label>
              <i-label id="payOrReceiveValue" class="text-primary bold" caption=""></i-label>
              <i-label id="payOrReceiveToken" caption=""></i-label>
            </i-panel>
            <i-panel id="priceInfoContainer" background={{ color: Theme.background.modal }} class="bg-box mt-1 mb-1" width="100%">
            </i-panel>
            <i-panel>
              <i-hstack id="pnlReminderRejected" margin={{ top: 8, bottom: 16 }} display='inline'>
                <i-label caption="$if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is" display='inline' />
                <i-label id="lbReminderRejectedValue" font={{ color: Theme.colors.primary.main, bold: true }} display='inline' padding={{ left: '0.25rem' }} />
              </i-hstack>
            </i-panel>
            <i-panel class="swap-btn-container" width="100%" margin={{ top: '0.5rem' }}>
              <i-button id="swapModalConfirmBtn" class="btn-swap btn-os" height="auto" caption="$confirm_swap" onClick={this.doSwap}></i-button>
            </i-panel>
          </i-modal>

          <i-modal
            id="modalViewOrder"
            class="bg-modal custom-modal custom-md--view"
            title="Cross Chain"
            closeIcon={{ name: 'times' }}
          >
            <i-panel class="i-modal_content">
              <i-panel class="mt-1">
                <i-hstack verticalAlignment="center" horizontalAlignment="center" class="mb-1">
                  <i-image width={50} height={50} url={Assets.fullPath('img/success-icon.svg')} />
                </i-hstack>
                <i-vstack verticalAlignment="center" horizontalAlignment="center">
                  <i-label caption="$the_order_was_created_successfully" />
                  <i-label caption="Do you want to view the record?" />
                </i-vstack>
                <i-hstack verticalAlignment="center" horizontalAlignment="center" class="mt-1">
                  <i-button
                    caption="$cancel"
                    class="btn-os btn-cancel"
                    onClick={this.closeViewOrderModal}
                  />
                  <i-button
                    caption="View Order"
                    class="btn-os btn-submit"
                    onClick={this.onViewOrder}
                  />
                </i-hstack>
              </i-panel>
            </i-panel>
          </i-modal>

          <i-modal
            id="modalSwitchNetwork"
            class="bg-modal custom-modal custom-md--view"
            title="$switch_network"
            closeIcon={{ name: 'times' }}
          >
            <i-panel class="i-modal_content">
              <i-panel class="mt-1">
                <i-hstack verticalAlignment="center">
                  <i-label id="lbSwitchNetwork" />
                </i-hstack>
                <i-hstack gap={10} verticalAlignment="center" horizontalAlignment="center" class="mt-1">
                  <i-button
                    caption="$cancel"
                    class="btn-os btn-cancel"
                    onClick={this.closeSwitchNetwork}
                  />
                  <i-button
                    caption="$switch_network"
                    class="btn-os btn-submit"
                    onClick={this.switchNetwork}
                  />
                </i-hstack>
              </i-panel>
            </i-panel>
          </i-modal>

          <i-modal
            id="modalFees"
            class="bg-modal custom-modal"
            title="$transaction_fee_details"
            closeIcon={{ name: 'times' }}
          >
            <i-panel class="i-modal_content">
              <i-panel>
                <i-vstack id="feesInfo" />
                <i-hstack verticalAlignment="center" horizontalAlignment="center" margin={{ top: 16, bottom: 8 }}>
                  <i-button
                    id="btnCloseFees"
                    caption="$close"
                    class="btn-os btn-submit"
                    onClick={this.closeModalFees}
                  />
                </i-hstack>
              </i-panel>
            </i-panel>
          </i-modal>
          <i-scom-tx-status-modal id="txStatusModal" />
        </i-panel>
        <i-scom-wallet-modal id="mdWallet" wallets={[]} />
      </i-scom-dapp-container>
    )
  }
}