import { Button, HStack, Module, VStack, Styles } from "@ijstech/components";
import { ICommissionInfo, INetworkConfig, ITokenConfig, IXchainWidgetData } from "../global/index";
import { State } from "../store/index";
import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { getBuilderSchema, getProjectOwnerSchema } from "../formSchema";
import { getCommissionRate } from "../crosschain-utils/index";
import ScomCommissionFeeSetup from "@scom/scom-commission-fee-setup";
import { ChainNativeTokenByChainId, ITokenObject, tokenStore } from "@scom/scom-token-list";
import configData from '../data.json';

const Theme = Styles.Theme.ThemeVars;

interface IConfigOptions {
  refreshWidget: () => Promise<void>;
  resetRpcWallet: () => void;
  setContainerTag: (value: any) => void;
  updateTheme: () => void;
}

export class ConfigModel {
  private module: Module;
  private options: IConfigOptions = {
    refreshWidget: async () => { },
    resetRpcWallet: () => { },
    setContainerTag: (value: any) => { },
    updateTheme: () => { }
  };
  private state: State;
  private _tokens: ITokenObject[] = [];
  private _data: IXchainWidgetData = {
    defaultChainId: 0,
    wallets: [],
    tokens: [],
    networks: []
  }
  private supportedChainIds: number[];

  constructor(module: Module, state: State, options: IConfigOptions) {
    this.state = state;
    this.module = module;
    this.options = options;
  }

  get defaultChainId() {
    return this._data.defaultChainId;
  }

  set defaultChainId(value: number) {
    this._data.defaultChainId = value;
  }

  get wallets() {
    return this._data.wallets ?? [];
  }

  set wallets(value: IWalletPlugin[]) {
    this._data.wallets = value;
  }

  get networks() {
    return this._data.networks ?? [];
  }

  set networks(value: INetworkConfig[]) {
    this._data.networks = value;
  }

  get showHeader() {
    return this._data.showHeader ?? true;
  }

  set showHeader(value: boolean) {
    this._data.showHeader = value;
  }

  get showFooter() {
    return this._data.showFooter ?? true;
  }

  set showFooter(value: boolean) {
    this._data.showFooter = value;
  }

  get currentURLHash() {
    return this._data.currentURLHash ?? '';
  }

  set currentURLHash(value: string) {
    this._data.currentURLHash = value;
  }

  get recordUrl() {
    return this._data.recordUrl ?? '';
  }

  set recordUrl(value: string) {
    this._data.recordUrl = value;
  }

  get urlParamsEnabled() {
    return this._data.urlParamsEnabled;
  }

  set urlParamsEnabled(value: boolean) {
    this._data.urlParamsEnabled = value;
  }

  get campaignId() {
    return this._data.campaignId;
  }

  get defaultInputToken() {
    return this._data.defaultInputToken;
  }

  get tokens() {
    return this._tokens || [];
  }

  async setData(value: IXchainWidgetData) {
    this._data = value;
    this.state.setNetworkConfig(value.networks);
    for (let network of this._data.networks) {
      tokenStore.updateTokenMapData(network.chainId);
    }
    this._tokens = this.getTokenObjArr(this._data.tokens);
    await this.options.resetRpcWallet();
    await this.options.refreshWidget();
  }

  getData() {
    return this._data;
  }

  getTag() {
    return this.module.tag;
  }

  setTag(value: any) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        if (prop === 'light' || prop === 'dark')
          this.updateTag(prop, newValue[prop]);
        else
          this.module.tag[prop] = newValue[prop];
      }
    }
    this.options.setContainerTag(this.module.tag);
    this.options.updateTheme();
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this.module.tag[type] = this.module.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.module.tag[type][prop] = value[prop];
    }
  }

  private async loadCommissionFee() {
    if (this._data.campaignId && this.state.embedderCommissionFee === undefined) {
      const commissionRate = await getCommissionRate(this.state, this._data.campaignId);
      this.state.embedderCommissionFee = commissionRate;
    }
  }

  private getTokenObjArr = (tokens: ITokenConfig[]) => {
    let tokenObjArr: ITokenObject[] = [];
    for (let token of tokens) {
      let tokenMap = tokenStore.getTokenMapByChainId(token.chainId);
      const tokenAddress = token.address?.startsWith('0x') ? token.address.toLowerCase() : ChainNativeTokenByChainId[token.chainId].symbol;
      const tokenObj = tokenMap[tokenAddress];
      if (tokenObj) {
        tokenObjArr.push({ ...tokenObj, chainId: token.chainId });
      }
    }
    return tokenObjArr;
  }

  private getBuilderActions(category?: string) {
    const formSchema: any = getBuilderSchema();
    const dataSchema = formSchema.dataSchema;
    const uiSchema = formSchema.uiSchema;
    const customControls = formSchema.customControls();
    let self = this;
    const actions: any[] = [
      {
        name: 'Commissions',
        icon: 'dollar-sign',
        command: (builder: any, userInputData: any) => {
          let _oldData: IXchainWidgetData = {
            defaultChainId: 0,
            wallets: [],
            networks: []
          }
          return {
            execute: async () => {
              _oldData = { ...this._data };
              if (userInputData.commissions) this._data.commissions = userInputData.commissions;
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);
            },
            undo: () => {
              this._data = { ..._oldData };
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);
            },
            redo: () => { }
          }
        },
        customUI: {
          render: async (data?: any, onConfirm?: (result: boolean, data: any) => void) => {
            const vstack = new VStack();
            await self.loadCommissionFee();
            const config = new ScomCommissionFeeSetup(null, {
              commissions: self._data.commissions || [],
              fee: self.state.embedderCommissionFee,
              networks: self._data.networks
            });
            const hstack = new HStack(null, {
              verticalAlignment: 'center',
            });
            const button = new Button(hstack, {
              caption: 'Confirm',
              width: '100%',
              height: 40,
              font: { color: Theme.colors.primary.contrastText }
            });
            vstack.append(config);
            vstack.append(hstack);
            button.onClick = async () => {
              const commissions = config.commissions;
              if (onConfirm) onConfirm(true, { commissions });
            }
            return vstack;
          }
        }
      }
    ]
    if (category && category !== 'offers') {
      actions.push({
        name: 'Edit',
        icon: 'edit',
        command: (builder: any, userInputData: any) => {
          let oldData: any = {
            defaultChainId: 0,
            wallets: [],
            networks: []
          };
          let oldTag = {};
          return {
            execute: async () => {
              oldData = JSON.parse(JSON.stringify(this._data));
              const {
                networks,
                tokens,
                ...themeSettings
              } = userInputData;

              const generalSettings = {
                networks,
                tokens
              };

              this._data.networks = generalSettings.networks;
              this._data.defaultChainId = this._data.networks[0].chainId;
              this._tokens = this._data.tokens = [];
              if (generalSettings.tokens) {
                this._data.tokens = generalSettings.tokens;
                this._tokens = this.getTokenObjArr(generalSettings.tokens);
              }
              await this.options.resetRpcWallet();
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);

              oldTag = JSON.parse(JSON.stringify(this.module.tag));
              if (builder?.setTag) builder.setTag(themeSettings);
              else this.setTag(themeSettings);
              this.options.setContainerTag(themeSettings);
            },
            undo: () => {
              this._data = JSON.parse(JSON.stringify(oldData));
              this.options.refreshWidget();
              if (builder?.setData) builder.setData(this._data);

              this.module.tag = JSON.parse(JSON.stringify(oldTag));
              if (builder?.setTag) builder.setTag(this.module.tag);
              else this.setTag(this.module.tag);
              this.options.setContainerTag(this.module.tag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: dataSchema,
        userInputUISchema: uiSchema,
        customControls: customControls
      });
    }
    return actions
  }

  private getProjectOwnerActions() {
    const formSchema: any = getProjectOwnerSchema();
    if (!formSchema) return [];
    const propertiesDataSchema = formSchema.general.dataSchema;
    const propertiesUISchema = formSchema.general.uiSchema;
    const actions: any[] = [
      {
        name: 'Settings',
        userInputDataSchema: propertiesDataSchema,
        userInputUISchema: propertiesUISchema
      }
    ];
    return actions
  }

  private determineActionsByTarget(target: 'builder' | 'projectOwner', category?: string) {
    if (target === 'builder') {
      return this.getBuilderActions(category);
    }
    else {
      return this.getProjectOwnerActions();
    }
  }

  getConfigurators() {
    let self = this;
    return [
      {
        name: 'Project Owner Configurator',
        target: 'Project Owners',
        getActions: (category?: string) => {
          return this.determineActionsByTarget('projectOwner', category);
        },
        getData: this.getData.bind(this),
        setData: async (value: any) => {
          this.setData(value);
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: (category?: string) => {
          return this.determineActionsByTarget('builder', category);
        },
        getData: this.getData.bind(this),
        setData: async (value: any) => {
          const defaultData = configData.defaultBuilderData;
          this.setData({ ...defaultData, ...value });
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Embedder Configurator',
        target: 'Embedders',
        elementName: 'i-scom-commission-fee-setup',
        getLinkParams: () => {
          const commissions = this._data.commissions || [];
          return {
            data: window.btoa(JSON.stringify(commissions))
          }
        },
        bindOnChanged: (element: ScomCommissionFeeSetup, callback: (data: any) => Promise<void>) => {
          element.onChanged = async (data: any) => {
            const commissions: ICommissionInfo[] = data.commissions;
            if (commissions) {
              this.supportedChainIds = commissions.map(v => v.chainId).filter((v, i, a) => a.indexOf(v) === i);
            }
            let resultingData = {
              ...self._data,
              ...data
            };

            await this.setData(resultingData);
            await callback(data);
          }
        },
        getData: async () => {
          await self.loadCommissionFee();
          const fee = this.state.embedderCommissionFee;
          return { ...this._data, fee }
        },
        setData: async (properties: IXchainWidgetData, linkParams?: Record<string, any>) => {
          let resultingData = {
            ...properties
          }
          if (linkParams?.data) {
            const decodedString = window.atob(linkParams.data);
            const commissions = JSON.parse(decodedString);
            resultingData.commissions = commissions;

          }
          await this.setData(resultingData);
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Editor',
        target: 'Editor',
        getActions: (category?: string) => {
          const actions = this.determineActionsByTarget('builder', 'category');
          const editAction = actions.find(action => action.name === 'Edit');
          return editAction ? [editAction] : [];
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

}