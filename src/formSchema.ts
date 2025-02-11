import ScomNetworkPicker from '@scom/scom-network-picker';
import ScomTokenInput from '@scom/scom-token-input';
import { DefaultERC20Tokens } from './store/index';
import Config from './data.json';
import { ChainNativeTokenByChainId, ITokenObject } from '@scom/scom-token-list';

const chainIds = (Config.supportedNetworks || []).map(v => v.chainId);
const networks = chainIds.map(v => { return { chainId: v } });

const theme = {
    type: 'object',
    properties: {
        backgroundColor: {
            type: 'string',
            format: 'color'
        },
        fontColor: {
            type: 'string',
            format: 'color'
        },
        inputBackgroundColor: {
            type: 'string',
            format: 'color'
        },
        inputFontColor: {
            type: 'string',
            format: 'color'
        },
        maxButtonBackground: {
            type: 'string',
            format: 'color'
        },
        maxButtonHoverBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonHoverBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonDisabledBackground: {
            type: 'string',
            format: 'color'
        }
    }
}

const themeUISchema = {
    type: 'Category',
    label: 'Theme',
    elements: [
        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Group',
                    label: 'Dark',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/backgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/fontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/inputBackgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/inputFontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/maxButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/maxButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonDisabledBackground'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'Group',
                    label: 'Light',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/backgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/fontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/inputBackgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/inputFontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/maxButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/maxButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonDisabledBackground'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export function getBuilderSchema() {
    return {
        dataSchema: {
            type: 'object',
            properties: {
                // currentURLHash: {
                //     title: '$current_url_hash',
                //     type: 'string'
                // },
                // enableUrlParams: {
                //     title: '$enable_url_params',
                //     type: 'boolean'
                // },
                recordUrl: {
                    title: '$record_url',
                    type: 'string'
                },
                networks: {
                    title: '$networks',
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        maxItems: chainIds.length,
                        properties: {
                            chainId: {
                                title: '$chain_id',
                                type: 'number',
                                enum: chainIds,
                                required: true
                            }
                        }
                    }
                },
                tokens: {
                    title: '$tokens',
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        properties: {
                            chainId: {
                                title: '$chain_id',
                                type: 'number',
                                enum: chainIds,
                                required: true
                            },
                            address: {
                                title: '$address',
                                type: 'string'
                            }
                        }
                    }
                },
                // dark: theme,
                // light: theme
            }
        },
        uiSchema: {
            type: 'Categorization',
            elements: [
                {
                    type: 'Category',
                    label: '$general',
                    elements: [
                        // {
                        //     type: 'Control',
                        //     scope: '#/properties/currentURLHash'
                        // },
                        // {
                        //     type: 'Control',
                        //     scope: '#/properties/enableUrlParams'
                        // },
                        {
                            type: 'Control',
                            scope: '#/properties/recordUrl'
                        }
                    ]
                },
                {
                    type: 'Category',
                    label: '$networks',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/networks',
                            options: {
                                detail: {
                                    type: 'VerticalLayout'
                                }
                            }
                        }
                    ]
                },
                {
                    type: 'Category',
                    label: '$tokens',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/tokens'
                        }
                    ]
                },
                // themeUISchema
            ]
        },
        customControls() {
            let networkPickers: ScomNetworkPicker[] = [];
            let tokenInputs: ScomTokenInput[] = [];
            return {
                '#/properties/networks/properties/chainId': {
                    render: () => {
                        const networkPicker = new ScomNetworkPicker(undefined, {
                            type: 'combobox',
                            networks
                        });
                        return networkPicker;
                    },
                    getData: (control: ScomNetworkPicker) => {
                        return control.selectedNetwork?.chainId;
                    },
                    setData: async (control: ScomNetworkPicker, value: number) => {
                        await control.ready();
                        control.setNetworkByChainId(value);
                    }
                },
                '#/properties/tokens/properties/chainId': {
                    render: () => {
                        const idx = networkPickers.length;
                        networkPickers[idx] = new ScomNetworkPicker(undefined, {
                            type: 'combobox',
                            networks,
                            onCustomNetworkSelected: () => {
                                const chainId = networkPickers[idx].selectedNetwork?.chainId;
                                tokenInputs[idx].chainId = chainId;
                                tokenInputs[idx].tokenDataListProp = getSupportedTokens(chainId);
                            }
                        });
                        return networkPickers[idx];
                    },
                    getData: (control: ScomNetworkPicker) => {
                        return control.selectedNetwork?.chainId;
                    },
                    setData: async (control: ScomNetworkPicker, value: number) => {
                        await control.ready();
                        control.setNetworkByChainId(value);
                        const idx = networkPickers.findIndex(f => f === control);
                        if (tokenInputs[idx]) {
                            tokenInputs[idx].chainId = value;
                            tokenInputs[idx].tokenDataListProp = getSupportedTokens(value);
                        }
                    }
                },
                '#/properties/tokens/properties/address': {
                    render: () => {
                        const idx = tokenInputs.length;
                        tokenInputs[idx] = new ScomTokenInput(undefined, {
                            type: 'combobox',
                            isBalanceShown: false,
                            isBtnMaxShown: false,
                            isInputShown: false,
                            supportValidAddress: true
                        });
                        const chainId = networkPickers[idx]?.selectedNetwork?.chainId;
                        tokenInputs[idx].chainId = chainId;
                        tokenInputs[idx].tokenDataListProp = getSupportedTokens(chainId);
                        return tokenInputs[idx];
                    },
                    getData: (control: ScomTokenInput) => {
                        return control.token?.address || control.token?.symbol;
                    },
                    setData: (control: ScomTokenInput, value: string, rowData: any) => {
                        if (rowData) control.chainId = rowData.chainId;
                        if (!control.chainId && value) {
                            let chainId: number;
                            let token: ITokenObject;
                            let address = value.toLowerCase();
                            if (value.startsWith('0x')) {
                                for (const network of networks) {
                                    const _token = getSupportedTokens(network.chainId).find(v => v.address?.toLowerCase() === address);
                                    if (_token) {
                                        chainId = network.chainId;
                                        token = _token;
                                        break;
                                    }
                                }
                            } else {
                                for (const network of networks) {
                                    if (ChainNativeTokenByChainId[network.chainId]?.symbol?.toLowerCase() === address) {
                                        chainId = network.chainId;
                                        break;
                                    }
                                }
                            }
                            control.chainId = chainId;
                            control.tokenDataListProp = getSupportedTokens(chainId);
                            if (token) {
                                control.token = token;
                            } else {
                                control.address = value;
                            }
                        } else {
                            control.address = value;
                        }
                    }
                }
            }
        }
    }
}

const getSupportedTokens = (chainId: number) => {
    return DefaultERC20Tokens[chainId] || [];
}

export function getProjectOwnerSchema() {
    return null
}