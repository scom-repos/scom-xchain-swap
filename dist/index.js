var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Avalanche = void 0;
    ///<amd-module name='@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts'/> 
    exports.Tokens_Avalanche = [
        {
            "name": "OpenSwap",
            "symbol": "OSWAP",
            "address": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
            "decimals": 18,
            "isCommon": true
        },
        { "address": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
            "name": "Tether USD",
            "symbol": "USDT.e",
            "decimals": 6,
            "isCommon": true
        },
    ];
});
define("@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC = void 0;
    ///<amd-module name='@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts'/> 
    exports.Tokens_BSC = [
        {
            "name": "OpenSwap",
            "symbol": "OSWAP",
            "address": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
            "decimals": 18,
            "isCommon": true
        },
        {
            "name": "Binance Pegged USDT",
            "symbol": "USDT",
            "address": "0x55d398326f99059fF775485246999027B3197955",
            "decimals": 18,
            "isCommon": true
        }
    ];
});
define("@scom/scom-xchain-swap/store/data/tokens/mainnet/index.ts", ["require", "exports", "@scom/scom-xchain-swap/store/data/tokens/mainnet/avalanche.ts", "@scom/scom-xchain-swap/store/data/tokens/mainnet/bsc.ts"], function (require, exports, avalanche_1, bsc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC = exports.Tokens_Avalanche = void 0;
    Object.defineProperty(exports, "Tokens_Avalanche", { enumerable: true, get: function () { return avalanche_1.Tokens_Avalanche; } });
    Object.defineProperty(exports, "Tokens_BSC", { enumerable: true, get: function () { return bsc_1.Tokens_BSC; } });
});
define("@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC_Testnet = void 0;
    ///<amd-module name='@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts'/> 
    exports.Tokens_BSC_Testnet = [
        {
            "name": "USDT",
            "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
            "symbol": "USDT",
            "decimals": 6,
            "isCommon": true
        },
        {
            "name": "OpenSwap",
            "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
            "symbol": "OSWAP",
            "decimals": 18,
            "isCommon": true
        },
        {
            name: "ABC",
            symbol: "ABC",
            address: "0xE36d2875B3C02ACFeFB8F20F2FeFCD727222B73F",
            decimals: 18,
            isCommon: true
        }
    ];
});
define("@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Fuji = void 0;
    ///<amd-module name='@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts'/> 
    exports.Tokens_Fuji = [
        {
            "name": "OpenSwap",
            "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
            "symbol": "OSWAP",
            "decimals": 18,
            "isCommon": true
        },
        {
            "name": "Tether USD",
            "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
            "symbol": "USDT.e",
            "decimals": 6
        },
        {
            name: "ABC",
            symbol: "ABC",
            address: "0x34eCa87583F451eaA4672ce3E1F921C7fD3F5D03",
            decimals: 18,
            isCommon: true
        }
    ];
});
define("@scom/scom-xchain-swap/store/data/tokens/testnet/index.ts", ["require", "exports", "@scom/scom-xchain-swap/store/data/tokens/testnet/bsc-testnet.ts", "@scom/scom-xchain-swap/store/data/tokens/testnet/fuji.ts"], function (require, exports, bsc_testnet_1, fuji_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Fuji = exports.Tokens_BSC_Testnet = void 0;
    Object.defineProperty(exports, "Tokens_BSC_Testnet", { enumerable: true, get: function () { return bsc_testnet_1.Tokens_BSC_Testnet; } });
    Object.defineProperty(exports, "Tokens_Fuji", { enumerable: true, get: function () { return fuji_1.Tokens_Fuji; } });
});
define("@scom/scom-xchain-swap/store/data/tokens/index.ts", ["require", "exports", "@scom/scom-xchain-swap/store/data/tokens/mainnet/index.ts", "@scom/scom-xchain-swap/store/data/tokens/testnet/index.ts"], function (require, exports, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChainNativeTokenByChainId = exports.DefaultERC20Tokens = void 0;
    const DefaultERC20Tokens = {
        56: index_1.Tokens_BSC,
        97: index_2.Tokens_BSC_Testnet,
        43113: index_2.Tokens_Fuji,
        43114: index_1.Tokens_Avalanche,
    };
    exports.DefaultERC20Tokens = DefaultERC20Tokens;
    //TODO
    const ChainNativeTokenByChainId = {
        56: { address: undefined, decimals: 18, symbol: "BNB", name: 'BNB', isNative: true },
        97: { address: undefined, decimals: 18, symbol: "BNB", name: 'BNB', isNative: true },
        43114: { address: undefined, decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true },
        43113: { address: undefined, decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true }, //Avalanche FUJI C-Chain
    };
    exports.ChainNativeTokenByChainId = ChainNativeTokenByChainId;
});
define("@scom/scom-xchain-swap/store/data/core.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VaultGroupList = exports.VaultType = exports.orderMinOutRate = exports.CoreContractStore = exports.Testnets = exports.Mainnets = exports.TestnetMainChain = exports.MainnetMainChain = void 0;
    exports.MainnetMainChain = 56;
    exports.TestnetMainChain = 97;
    exports.Mainnets = [56, 43114];
    exports.Testnets = [97, 43113];
    exports.CoreContractStore = {
        56: {
            GOV_TOKEN: "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
            WETH9: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        },
        97: {
            GOV_TOKEN: "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
            WETH9: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        },
        43114: {
            GOV_TOKEN: "0x29E65d6f3e7a609E0138a1331D42D23159124B8E",
            WETH9: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        },
        43113: {
            GOV_TOKEN: "0x27eF998b96c9A66937DBAc38c405Adcd7fa5e7DB",
            WETH9: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        },
    };
    exports.orderMinOutRate = "0.005";
    var VaultType;
    (function (VaultType) {
        VaultType["Project"] = "Project";
        VaultType["Exchange"] = "Exchange";
    })(VaultType = exports.VaultType || (exports.VaultType = {}));
    ;
    exports.VaultGroupList = [
        {
            assetName: "OSWAP",
            vaultType: VaultType.Project,
            vaults: {
                97: {
                    chainId: 97,
                    assetToken: {
                        name: "OpenSwap",
                        symbol: "OSWAP",
                        address: "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x6991c11980C2F2096f6a9017c7032F4394aFdf94",
                    vaultAddress: "0x6E10d62dd0FD6e7A9F4Dd027F5BCf107663cb73f",
                    softCap: 30000,
                    baseFee: "1",
                    protocolFee: "0.001",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
                43113: {
                    chainId: 43113,
                    assetToken: {
                        name: "OpenSwap",
                        symbol: "OSWAP",
                        address: "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x1a90D8aEAd171C58adf3De15b814d51A65829D60",
                    vaultAddress: "0xB788b29C563D464486C52DA476098e880C0c1fA8",
                    softCap: 30000,
                    baseFee: "1",
                    protocolFee: "0.001",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
            }
        },
        {
            assetName: "ABC",
            vaultType: VaultType.Project,
            vaults: {
                97: {
                    chainId: 97,
                    assetToken: {
                        name: "ABC",
                        symbol: "ABC",
                        address: "0xE36d2875B3C02ACFeFB8F20F2FeFCD727222B73F",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x010a273131428538005602555C24fb58737A71A4",
                    vaultAddress: "0x358664aa6c270C250e1664482655142ea5a2Cda0",
                    softCap: 30000,
                    baseFee: "0",
                    protocolFee: "0.002",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
                43113: {
                    chainId: 43113,
                    assetToken: {
                        name: "ABC",
                        symbol: "ABC",
                        address: "0x34eCa87583F451eaA4672ce3E1F921C7fD3F5D03",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x06f66a062cc94feab258f4cbdfd7020d9e7ebe10",
                    vaultAddress: "0xb985cc325aa7ec630d52065b6620f1bc336c85bf",
                    softCap: 30000,
                    baseFee: "0",
                    protocolFee: "0.002",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
            }
        }
    ];
});
define("@scom/scom-xchain-swap/store/data/index.ts", ["require", "exports", "@scom/scom-xchain-swap/store/data/tokens/index.ts", "@scom/scom-xchain-swap/store/data/core.ts"], function (require, exports, index_3, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChainNativeTokenByChainId = exports.DefaultERC20Tokens = void 0;
    Object.defineProperty(exports, "DefaultERC20Tokens", { enumerable: true, get: function () { return index_3.DefaultERC20Tokens; } });
    Object.defineProperty(exports, "ChainNativeTokenByChainId", { enumerable: true, get: function () { return index_3.ChainNativeTokenByChainId; } });
    __exportStar(core_1, exports);
});
define("@scom/scom-xchain-swap/global/helper.ts", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showResultMessage = exports.getAPI = exports.limitDecimals = exports.limitInputNumber = exports.isInvalidInput = exports.formatNumberWithSeparators = exports.formatNumber = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.SITE_ENV = void 0;
    var SITE_ENV;
    (function (SITE_ENV) {
        SITE_ENV["DEV"] = "dev";
        SITE_ENV["TESTNET"] = "testnet";
        SITE_ENV["MAINNET"] = "mainnet";
    })(SITE_ENV = exports.SITE_ENV || (exports.SITE_ENV = {}));
    exports.DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
    exports.DefaultDateFormat = 'DD/MM/YYYY';
    const formatDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = (0, components_1.moment)(date).format(formatType);
        if (showTimezone) {
            let offsetHour = (0, components_1.moment)().utcOffset() / 60;
            //will look like UTC-2 UTC+2 UTC+0
            return `${formatted} (UTC${offsetHour >= 0 ? "+" : ""}${offsetHour})`;
        }
        return formatted;
    };
    exports.formatDate = formatDate;
    const formatNumber = (value, decimals, options) => {
        let val = value;
        const { min = '0.0000001', sign = '' } = options || {};
        const minValue = min;
        if (typeof value === 'string') {
            val = new eth_wallet_1.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        if (val != 0 && new eth_wallet_1.BigNumber(val).lt(minValue)) {
            return `< ${sign}${minValue}`;
        }
        return `${sign}${(0, exports.formatNumberWithSeparators)(val, decimals || 4)}`;
    };
    exports.formatNumber = formatNumber;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision) {
            let outputStr = '';
            if (value >= 1) {
                const unit = Math.pow(10, precision);
                const rounded = Math.floor(value * unit) / unit;
                outputStr = rounded.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            if (outputStr.length > 18) {
                outputStr = outputStr.substring(0, 18) + '...';
            }
            return outputStr;
        }
        return value.toLocaleString('en-US');
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const isInvalidInput = (val) => {
        const value = new eth_wallet_1.BigNumber(val);
        if (value.lt(0))
            return true;
        return (val || '').toString().substring(0, 2) === '00' || val === '-';
    };
    exports.isInvalidInput = isInvalidInput;
    const limitInputNumber = (input, decimals) => {
        const amount = input.value;
        if ((0, exports.isInvalidInput)(amount)) {
            input.value = '0';
            return;
        }
        if (!new eth_wallet_1.BigNumber(amount).isNaN()) {
            input.value = (0, exports.limitDecimals)(amount, decimals || 18);
        }
    };
    exports.limitInputNumber = limitInputNumber;
    const limitDecimals = (value, decimals) => {
        let val = value;
        if (typeof value !== 'string') {
            val = val.toString();
        }
        let chart;
        if (val.includes('.')) {
            chart = '.';
        }
        else if (val.includes(',')) {
            chart = ',';
        }
        else {
            return value;
        }
        const parts = val.split(chart);
        let decimalsPart = parts[1];
        if (decimalsPart && decimalsPart.length > decimals) {
            parts[1] = decimalsPart.substr(0, decimals);
        }
        return parts.join(chart);
    };
    exports.limitDecimals = limitDecimals;
    async function getAPI(url, paramsObj) {
        let queries = '';
        if (paramsObj) {
            try {
                queries = new URLSearchParams(paramsObj).toString();
            }
            catch (err) {
                console.log('err', err);
            }
        }
        let fullURL = url + (queries ? `?${queries}` : '');
        const response = await fetch(fullURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.json();
    }
    exports.getAPI = getAPI;
    const showResultMessage = (result, status, content) => {
        if (!result)
            return;
        let params = { status };
        if (status === 'success') {
            params.txtHash = content;
        }
        else {
            params.content = content;
        }
        result.message = { ...params };
        result.showModal();
    };
    exports.showResultMessage = showResultMessage;
});
define("@scom/scom-xchain-swap/global/common.ts", ["require", "exports", "@ijstech/eth-wallet"], function (require, exports, eth_wallet_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerSendTxEvents = void 0;
    const registerSendTxEvents = (sendTxEventHandlers) => {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        wallet.registerSendTxEvents({
            transactionHash: (error, receipt) => {
                if (sendTxEventHandlers.transactionHash) {
                    sendTxEventHandlers.transactionHash(error, receipt);
                }
            },
            confirmation: (receipt) => {
                if (sendTxEventHandlers.confirmation) {
                    sendTxEventHandlers.confirmation(receipt);
                }
            },
        });
    };
    exports.registerSendTxEvents = registerSendTxEvents;
});
define("@scom/scom-xchain-swap/global/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-xchain-swap/global/index.ts", ["require", "exports", "@scom/scom-xchain-swap/global/helper.ts", "@scom/scom-xchain-swap/global/common.ts", "@scom/scom-xchain-swap/global/interface.ts"], function (require, exports, helper_1, common_1, interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerSendTxEvents = exports.showResultMessage = exports.SITE_ENV = exports.isInvalidInput = exports.limitInputNumber = exports.limitDecimals = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.formatNumberWithSeparators = exports.formatNumber = exports.getAPI = void 0;
    ;
    Object.defineProperty(exports, "getAPI", { enumerable: true, get: function () { return helper_1.getAPI; } });
    Object.defineProperty(exports, "formatNumber", { enumerable: true, get: function () { return helper_1.formatNumber; } });
    Object.defineProperty(exports, "formatNumberWithSeparators", { enumerable: true, get: function () { return helper_1.formatNumberWithSeparators; } });
    Object.defineProperty(exports, "DefaultDateTimeFormat", { enumerable: true, get: function () { return helper_1.DefaultDateTimeFormat; } });
    Object.defineProperty(exports, "DefaultDateFormat", { enumerable: true, get: function () { return helper_1.DefaultDateFormat; } });
    Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return helper_1.formatDate; } });
    Object.defineProperty(exports, "limitDecimals", { enumerable: true, get: function () { return helper_1.limitDecimals; } });
    Object.defineProperty(exports, "limitInputNumber", { enumerable: true, get: function () { return helper_1.limitInputNumber; } });
    Object.defineProperty(exports, "isInvalidInput", { enumerable: true, get: function () { return helper_1.isInvalidInput; } });
    Object.defineProperty(exports, "SITE_ENV", { enumerable: true, get: function () { return helper_1.SITE_ENV; } });
    Object.defineProperty(exports, "showResultMessage", { enumerable: true, get: function () { return helper_1.showResultMessage; } });
    Object.defineProperty(exports, "registerSendTxEvents", { enumerable: true, get: function () { return common_1.registerSendTxEvents; } });
    __exportStar(interface_1, exports);
});
define("@scom/scom-xchain-swap/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/data.json.ts'/> 
    const InfuraId = "adc596bf88b648e2a8902bc9093930c5";
    exports.default = {
        "infuraId": InfuraId,
        "defaultBuilderData": {
            "tokens": [
                {
                    "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                    "chainId": 97
                },
                {
                    "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
                    "chainId": 97
                },
                {
                    "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "chainId": 43113
                },
                {
                    "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                    "chainId": 43113
                }
            ],
            "defaultChainId": 43113,
            "networks": [
                {
                    "chainId": 43113
                },
                {
                    "chainId": 97
                }
            ],
            "wallets": [
                {
                    "name": "metamask"
                }
            ],
            "showHeader": true,
            "showFooter": true
        },
        "supportedNetworks": [
            {
                "chainId": 56,
                "isMainChain": true,
                "isCrossChainSupported": true
            },
            {
                "chainId": 97,
                "isMainChain": true,
                "isCrossChainSupported": true,
                "isTestnet": true
            },
            {
                "chainId": 43113,
                "isCrossChainSupported": true,
                "isTestnet": true
            },
            {
                "chainId": 43114,
                "isCrossChainSupported": true
            }
        ]
    };
});
define("@scom/scom-xchain-swap/store/utils.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-xchain-swap/store/data/core.ts", "@scom/scom-network-list", "@scom/scom-xchain-swap/data.json.ts"], function (require, exports, components_2, eth_wallet_3, core_2, scom_network_list_1, data_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchNetwork = exports.isWalletConnected = exports.getWalletProvider = exports.State = exports.VaultOrderStatus = exports.ContractVaultOrderStatus = exports.forEachNumberIndex = exports.forEachNumberIndexAwait = exports.getNetworksByType = exports.getNetworkType = exports.NetworkType = exports.WalletPlugin = void 0;
    var WalletPlugin;
    (function (WalletPlugin) {
        WalletPlugin["MetaMask"] = "metamask";
        WalletPlugin["Coin98"] = "coin98";
        WalletPlugin["TrustWallet"] = "trustwallet";
        WalletPlugin["BinanceChainWallet"] = "binancechainwallet";
        WalletPlugin["ONTOWallet"] = "onto";
        WalletPlugin["WalletConnect"] = "walletconnect";
        WalletPlugin["BitKeepWallet"] = "bitkeepwallet";
        WalletPlugin["FrontierWallet"] = "frontierwallet";
    })(WalletPlugin = exports.WalletPlugin || (exports.WalletPlugin = {}));
    var NetworkType;
    (function (NetworkType) {
        NetworkType[NetworkType["Mainnet"] = 0] = "Mainnet";
        NetworkType[NetworkType["Testnet"] = 1] = "Testnet";
        NetworkType[NetworkType["NotSupported"] = 2] = "NotSupported";
    })(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
    function getNetworkType(chainId) {
        if (core_2.Mainnets.some(network => network === chainId)) {
            return NetworkType.Mainnet;
        }
        if (core_2.Testnets.some(network => network === chainId)) {
            return NetworkType.Testnet;
        }
        return NetworkType.NotSupported;
    }
    exports.getNetworkType = getNetworkType;
    function getNetworksByType(chainId) {
        switch (getNetworkType(chainId)) {
            case NetworkType.Mainnet:
                return core_2.Mainnets;
            case NetworkType.Testnet:
                return core_2.Testnets;
        }
        return [];
    }
    exports.getNetworksByType = getNetworksByType;
    async function forEachNumberIndexAwait(list, callbackFn) {
        for (const chainId in list) {
            if (Object.prototype.hasOwnProperty.call(list, chainId)
                && new eth_wallet_3.BigNumber(chainId).isInteger())
                await callbackFn(list[chainId], Number(chainId));
        }
    }
    exports.forEachNumberIndexAwait = forEachNumberIndexAwait;
    function forEachNumberIndex(list, callbackFn) {
        for (const chainId in list) {
            if (Object.prototype.hasOwnProperty.call(list, chainId)
                && new eth_wallet_3.BigNumber(chainId).isInteger())
                callbackFn(list[chainId], Number(chainId));
        }
    }
    exports.forEachNumberIndex = forEachNumberIndex;
    var ContractVaultOrderStatus;
    (function (ContractVaultOrderStatus) {
        //copied from contract interface IOSWAP_BridgeVault, 
        //must not be changed
        ContractVaultOrderStatus[ContractVaultOrderStatus["NotSpecified"] = 0] = "NotSpecified";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Pending"] = 1] = "Pending";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Executed"] = 2] = "Executed";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RequestCancel"] = 3] = "RequestCancel";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RefundApproved"] = 4] = "RefundApproved";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Cancelled"] = 5] = "Cancelled";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RequestAmend"] = 6] = "RequestAmend";
    })(ContractVaultOrderStatus = exports.ContractVaultOrderStatus || (exports.ContractVaultOrderStatus = {}));
    var VaultOrderStatus;
    (function (VaultOrderStatus) {
        VaultOrderStatus[VaultOrderStatus["Pending"] = 0] = "Pending";
        VaultOrderStatus[VaultOrderStatus["Executed"] = 1] = "Executed";
        VaultOrderStatus[VaultOrderStatus["RequestCancel"] = 2] = "RequestCancel";
        VaultOrderStatus[VaultOrderStatus["RefundApproved"] = 3] = "RefundApproved";
        VaultOrderStatus[VaultOrderStatus["Cancelled"] = 4] = "Cancelled";
        VaultOrderStatus[VaultOrderStatus["RequestAmend"] = 5] = "RequestAmend";
        VaultOrderStatus[VaultOrderStatus["Expired"] = 6] = "Expired";
    })(VaultOrderStatus = exports.VaultOrderStatus || (exports.VaultOrderStatus = {}));
    class State {
        constructor(options) {
            this.defaultChainId = 0;
            this.isExpertMode = false;
            this.slippageTolerance = new eth_wallet_3.BigNumber(core_2.orderMinOutRate).shiftedBy(2).toFixed();
            this.crossChainTransactionDeadline = 72 * 60; //72 hours
            this.proxyAddresses = {};
            this.infuraId = "";
            this.rpcWalletId = "";
            this.networkMap = {};
            this.networkConfig = [];
            this.vaultGroups = initVaultGroupsStore(core_2.VaultGroupList);
            this.getNetworkInfo = (chainId) => {
                return this.networkMap[chainId];
            };
            this.getFilteredNetworks = (filter) => {
                let networkFullList = Object.values(this.networkMap);
                return networkFullList.filter(filter);
            };
            this.getSiteSupportedNetworks = () => {
                let networkFullList = Object.values(this.networkMap);
                let list = networkFullList.filter(network => !this.getNetworkInfo(network.chainId)?.isDisabled);
                return list;
            };
            this.getMatchNetworks = (conditions) => {
                let networkFullList = Object.values(this.networkMap);
                let out = matchFilter(networkFullList, conditions);
                return out;
            };
            this.getNetworkExplorerName = (chainId) => {
                if (this.getNetworkInfo(chainId)) {
                    return this.getNetworkInfo(chainId).explorerName;
                }
                return 'Unknown';
            };
            this.viewOnExplorerByTxHash = (chainId, txHash) => {
                let network = this.getNetworkInfo(chainId);
                if (network && network.explorerTxUrl) {
                    let url = `${network.explorerTxUrl}${txHash}`;
                    window.open(url);
                }
            };
            this.viewOnExplorerByAddress = (chainId, address) => {
                let network = this.getNetworkInfo(chainId);
                if (network && network.explorerAddressUrl) {
                    let url = `${network.explorerAddressUrl}${address}`;
                    window.open(url);
                }
            };
            this.getSlippageTolerance = () => {
                return Number(this.slippageTolerance) || 0;
            };
            this.setSlippageTolerance = (value) => {
                this.slippageTolerance = new eth_wallet_3.BigNumber(value).toFixed();
            };
            this.getCrossChainTransactionDeadline = () => {
                return this.crossChainTransactionDeadline;
            };
            this.setCrossChainTransactionDeadline = (value) => {
                this.crossChainTransactionDeadline = value;
            };
            this.setVaultGroups = (vaultGroups) => {
                this.vaultGroups = vaultGroups;
            };
            this.getVaultGroups = () => {
                return this.vaultGroups;
            };
            this.setNetworkConfig = (networks) => {
                this.networkConfig = networks;
            };
            this.getNetworkConfig = () => {
                return this.networkConfig;
            };
            this.initData(options);
        }
        initRpcWallet(defaultChainId) {
            this.defaultChainId = defaultChainId;
            if (this.rpcWalletId) {
                return this.rpcWalletId;
            }
            const clientWallet = eth_wallet_3.Wallet.getClientInstance();
            const networkList = Object.values(components_2.application.store?.networkMap || []);
            const instanceId = clientWallet.initRpcWallet({
                networks: networkList,
                defaultChainId,
                infuraId: components_2.application.store?.infuraId,
                multicalls: components_2.application.store?.multicalls
            });
            this.rpcWalletId = instanceId;
            if (clientWallet.address) {
                const rpcWallet = eth_wallet_3.Wallet.getRpcWalletInstance(instanceId);
                rpcWallet.address = clientWallet.address;
            }
            const defaultNetworkList = (0, scom_network_list_1.default)();
            const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
                acc[cur.chainId] = cur;
                return acc;
            }, {});
            const supportedNetworks = data_json_1.default.supportedNetworks || [];
            for (let network of networkList) {
                const networkInfo = defaultNetworkMap[network.chainId];
                const supportedNetwork = supportedNetworks.find(v => v.chainId == network.chainId);
                if (!networkInfo || !supportedNetwork)
                    continue;
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
            return this.rpcWalletId ? eth_wallet_3.Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
        }
        isRpcWalletConnected() {
            const wallet = this.getRpcWallet();
            return wallet?.isConnected;
        }
        getProxyAddress(chainId) {
            const _chainId = chainId || eth_wallet_3.Wallet.getInstance().chainId;
            const proxyAddresses = this.proxyAddresses;
            if (proxyAddresses) {
                return proxyAddresses[_chainId];
            }
            return null;
        }
        getChainId() {
            const rpcWallet = this.getRpcWallet();
            return rpcWallet?.chainId;
        }
        toggleExpertMode() {
            this.isExpertMode = !this.isExpertMode;
        }
        initData(options) {
            if (options.infuraId) {
                this.infuraId = options.infuraId;
            }
            if (options.proxyAddresses) {
                this.proxyAddresses = options.proxyAddresses;
            }
        }
        async setApprovalModelAction(options) {
            const approvalOptions = {
                ...options,
                spenderAddress: ''
            };
            let wallet = this.getRpcWallet();
            this.approvalModel = new eth_wallet_3.ERC20ApprovalModel(wallet, approvalOptions);
            let approvalModelAction = this.approvalModel.getAction();
            return approvalModelAction;
        }
    }
    exports.State = State;
    function castToVaultStore(vc) {
        return {
            ...vc,
            tokenBalance: new eth_wallet_3.BigNumber("0"),
            imbalance: new eth_wallet_3.BigNumber("0"),
            userTokenAmount: new eth_wallet_3.BigNumber("0"),
            userOrders: [],
            ordersLength: 0
        };
    }
    function castToVaultGroupStore(vgc) {
        let vaults = {};
        forEachNumberIndex(vgc.vaults, (v, chainId) => vaults[chainId] = castToVaultStore(v));
        return {
            ...vgc,
            vaults,
        };
    }
    function initVaultGroupsStore(vgcs) {
        return vgcs.map(g => castToVaultGroupStore(g));
    }
    function matchFilter(list, filter) {
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
                    console.log(`matchFilter do not support ${typeof filter[f]} yet!`);
                    return false;
            }
        }));
    }
    // wallet
    function getWalletProvider() {
        return localStorage.getItem('walletProvider') || WalletPlugin.MetaMask;
    }
    exports.getWalletProvider = getWalletProvider;
    function isWalletConnected() {
        const wallet = eth_wallet_3.Wallet.getClientInstance();
        return wallet.isConnected;
    }
    exports.isWalletConnected = isWalletConnected;
    async function switchNetwork(chainId) {
        const wallet = eth_wallet_3.Wallet.getClientInstance();
        await wallet.switchNetwork(chainId);
        if (!isWalletConnected()) {
            components_2.application.EventBus.dispatch("chainChanged" /* EventId.chainChanged */, chainId);
        }
    }
    exports.switchNetwork = switchNetwork;
});
define("@scom/scom-xchain-swap/store/index.ts", ["require", "exports", "@scom/scom-xchain-swap/store/data/index.ts", "@scom/scom-xchain-swap/store/utils.ts"], function (require, exports, index_4, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/store/index.ts'/> 
    __exportStar(index_4, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-xchain-swap/crosschain-utils/crosschain-utils.types.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-xchain-swap/crosschain-utils/API.ts", ["require", "exports", "@scom/scom-xchain-swap/store/index.ts", "@ijstech/eth-wallet", "@scom/oswap-cross-chain-bridge-contract", "@scom/scom-multicall", "@ijstech/eth-contract"], function (require, exports, index_5, eth_wallet_4, oswap_cross_chain_bridge_contract_1, scom_multicall_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findVaultGroupByToken = exports.getVaultAssetBalance = exports.getRoute = exports.createBridgeVaultOrder = exports.initCrossChainWallet = exports.getBond = exports.getVaultTokenMap = exports.getVaultGroups = exports.getFeeAmounts = exports.isSupportedCrossChain = void 0;
    const initCrossChainWallet = (state, chainId) => {
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        const networkInfo = state.getNetworkInfo(chainId);
        let rpcEndpoint = networkInfo.rpcUrls[0];
        let crossChainWallet = new eth_wallet_4.Wallet(rpcEndpoint, { address: wallet.address });
        let mul = (0, scom_multicall_1.getMulticallInfoList)().find(x => x.chainId === chainId);
        crossChainWallet.multicallInfoMap = { [chainId]: mul };
        return crossChainWallet;
    };
    exports.initCrossChainWallet = initCrossChainWallet;
    function isSupportedCrossChain(fromChain, toChain) {
        try {
            if ([fromChain, toChain].some(c => c <= 0))
                return false;
            if (fromChain === toChain)
                return false;
            if (index_5.Mainnets.includes(fromChain))
                return index_5.Mainnets.includes(toChain);
            if (index_5.Testnets.includes(fromChain))
                return index_5.Testnets.includes(toChain);
        }
        catch (error) { }
        return false;
    }
    exports.isSupportedCrossChain = isSupportedCrossChain;
    const getVaultTokenMap = () => {
        let vaultTokenMap = {};
        index_5.VaultGroupList.forEach((vaultGroup) => {
            for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
                vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
                vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.assetToken.address.toLowerCase();
            }
        });
        return vaultTokenMap;
    };
    exports.getVaultTokenMap = getVaultTokenMap;
    //MARK: Bond
    async function getBond(state, vault) {
        //FIXME need to minus pending withdraw
        let govToken = new oswap_cross_chain_bridge_contract_1.Contracts.ERC20(initCrossChainWallet(state, vault.chainId), index_5.CoreContractStore[vault.chainId].GOV_TOKEN);
        return (await govToken.balanceOf(vault.vaultRegistryAddress)).shiftedBy(-vault.assetToken.decimals);
    }
    exports.getBond = getBond;
    async function createBridgeVaultOrder(state, params) {
        try {
            const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut } = params;
            const wallet = eth_wallet_4.Wallet.getClientInstance();
            const amountInTokenAmount = (0, eth_wallet_4.BigNumber)(amountIn).shiftedBy(tokenIn.decimals);
            const minAmountOutTokenAmount = (0, eth_wallet_4.BigNumber)(minAmountOut).shiftedBy(tokenOut.decimals).dp(0, 1);
            const vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
            const transactionDeadlineInMinutes = state.getCrossChainTransactionDeadline();
            const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
            let receipt = await vaultContract.newOrder({
                peerChain: targetChainId,
                inAmount: amountInTokenAmount,
                outToken: tokenOut.address,
                minOutAmount: minAmountOutTokenAmount,
                to: wallet.address,
                expire: transactionDeadline
            });
            return { receipt, error: null };
        }
        catch (error) {
            return { receipt: null, error: error };
        }
    }
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
    // Return the current vault asset balance by given chainId and address
    const getVaultAssetBalance = async (state, chainId, vaultAddress) => {
        let targetChainWallet = initCrossChainWallet(state, chainId);
        const vault = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
        const asset = new eth_wallet_4.Contracts.ERC20(targetChainWallet, await vault.asset());
        return (await asset.balanceOf(vault.address));
    };
    exports.getVaultAssetBalance = getVaultAssetBalance;
    // CrossChain
    function getFeeAmounts(vault, amountIn) {
        let deci = vault.assetToken.decimals;
        let weiAmountIn = amountIn.shiftedBy(deci);
        let baseFeeAmount = new eth_wallet_4.BigNumber(vault.baseFee).shiftedBy(-deci);
        let protocolFeeAmount = new eth_wallet_4.BigNumber(weiAmountIn).times(vault.protocolFee).dp(0, eth_wallet_4.BigNumber.ROUND_DOWN).shiftedBy(-deci);
        let transactionFeeAmount = new eth_wallet_4.BigNumber(weiAmountIn).times(vault.transactionFee).dp(0, eth_wallet_4.BigNumber.ROUND_DOWN).shiftedBy(-deci);
        let imbalance = new eth_wallet_4.BigNumber(vault.imbalance).minus(weiAmountIn);
        let imbalanceFeeAmount = imbalance.lt(0) ? imbalance.times(-vault.imbalanceFee).dp(0, eth_wallet_4.BigNumber.ROUND_DOWN).shiftedBy(-deci) : new eth_wallet_4.BigNumber("0");
        return {
            totalFeeAmount: baseFeeAmount.plus(protocolFeeAmount).plus(transactionFeeAmount).plus(imbalanceFeeAmount),
            baseFeeAmount,
            protocolFeeAmount,
            transactionFeeAmount,
            imbalanceFeeAmount,
        };
    }
    exports.getFeeAmounts = getFeeAmounts;
    function getRoute(swapInfo) {
        let fromVault = findVault(swapInfo.vaultGroup, swapInfo.fromChainId);
        let toVault = findVault(swapInfo.vaultGroup, swapInfo.toChainId);
        if (!fromVault || !toVault)
            return null;
        let feeAmounts = getFeeAmounts(fromVault, swapInfo.inAmount);
        return {
            fromVault,
            fromAmount: swapInfo.inAmount,
            toVault,
            toAmount: swapInfo.inAmount.minus(feeAmounts.totalFeeAmount),
            feeAmounts,
        };
    }
    exports.getRoute = getRoute;
    async function findVaultGroupByToken(state, chainId, tokenAddress) {
        return (await getVaultGroups(state)).find(group => group.vaults[chainId]?.assetToken.address.toLowerCase() == tokenAddress.toLowerCase());
    }
    exports.findVaultGroupByToken = findVaultGroupByToken;
    function findVault(vaultGroup, chainId) {
        try {
            return vaultGroup?.vaults[chainId];
        }
        catch (error) {
            return undefined;
        }
    }
    async function getVaultGroups(state, isUpdate) {
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        if (!wallet.address) {
            // for noto fan when wallet is not connected
            return getVaultGroupsWithoutWallet(state, isUpdate);
        }
        let walletChainId = eth_wallet_4.Wallet.getClientInstance().chainId;
        let networks = (0, index_5.getNetworksByType)(walletChainId);
        let vaultGroupsStore = state.getVaultGroups();
        if (!vaultGroupsStore || vaultGroupsStore.length < 1) {
            //vaultGroupsStore = VaultGroupList.map(g => castToVaultGroupStore(g));
            state.setVaultGroups(vaultGroupsStore);
        }
        if (!isUpdate)
            return vaultGroupsStore;
        let chainTask = {};
        //only update DYNAMIC items in VaultGroupList
        for (let i = 0; i < vaultGroupsStore.length; i++) {
            const group = vaultGroupsStore[i];
            await (0, index_5.forEachNumberIndexAwait)(group.vaults, async (vault, chainId) => {
                if (networks.every(n => n !== chainId))
                    return;
                if (!chainTask[chainId]) {
                    chainTask[chainId] = {
                        assetNames: [],
                        wallet: initCrossChainWallet(state, Number(chainId)),
                        calls: [],
                    };
                }
                let vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(chainTask[chainId].wallet, vault.vaultAddress);
                let tokenContract = new oswap_cross_chain_bridge_contract_1.Contracts.ERC20(chainTask[chainId].wallet, vault.assetToken.address);
                chainTask[chainId].assetNames.push(group.assetName);
                chainTask[chainId].calls.push({
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "lpAssetBalance",
                    params: []
                }, {
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "imbalance",
                    params: []
                }, {
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "ordersLength",
                    params: []
                }, {
                    to: vault.assetToken.address,
                    contract: tokenContract,
                    methodName: "balanceOf",
                    params: [chainTask[chainId].wallet.address]
                });
            });
        }
        await (0, index_5.forEachNumberIndexAwait)(chainTask, async (x, chainId) => {
            try {
                let res = await x.wallet.doMulticall(x.calls);
                if (!res)
                    throw new Error(`doMulticall result is empty`);
                vaultGroupsStore.forEach((group, gIndex) => {
                    let callIndex = x.assetNames.findIndex(asset => asset === group.assetName);
                    if (callIndex < 0)
                        return;
                    group.vaults[chainId].tokenBalance = res[callIndex * 4]; //TODO decimal offset
                    group.vaults[chainId].imbalance = res[callIndex * 4 + 1]; //TODO decimal offset
                    group.vaults[chainId].ordersLength = res[callIndex * 4 + 2];
                    group.vaults[chainId].userTokenAmount = res[callIndex * 4 + 3]; //TODO decimal offset
                });
            }
            catch (error) {
                console.log(`Error on getVaultGroups chainId ${chainId}.`, error, x);
            }
        });
        state.setVaultGroups(vaultGroupsStore);
        return vaultGroupsStore;
    }
    exports.getVaultGroups = getVaultGroups;
    // Support noto fan if wallet is not connected
    async function getVaultGroupsWithoutWallet(state, isUpdate) {
        let walletChainId = eth_wallet_4.Wallet.getClientInstance().chainId;
        let networks = (0, index_5.getNetworksByType)(walletChainId);
        let vaultGroupsStore = state.getVaultGroups();
        if (!isUpdate)
            return vaultGroupsStore;
        for (let i = 0; i < vaultGroupsStore.length; i++) {
            const group = vaultGroupsStore[i];
            await (0, index_5.forEachNumberIndexAwait)(group.vaults, async (vault, chainId) => {
                if (networks.every(n => n !== chainId))
                    return;
                const wallet = initCrossChainWallet(state, chainId);
                const vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(wallet, vault.vaultAddress);
                vaultGroupsStore[i].vaults[chainId].tokenBalance = await vaultContract.lpAssetBalance();
                vaultGroupsStore[i].vaults[chainId].imbalance = await vaultContract.imbalance();
                vaultGroupsStore[i].vaults[chainId].ordersLength = (await vaultContract.ordersLength()).toNumber();
                if (wallet.address) {
                    const tokenContract = new oswap_cross_chain_bridge_contract_1.Contracts.ERC20(wallet, vault.assetToken.address);
                    vaultGroupsStore[i].vaults[chainId].userTokenAmount = await tokenContract.balanceOf(wallet.address);
                }
            });
        }
        state.setVaultGroups(vaultGroupsStore);
        return vaultGroupsStore;
    }
});
define("@scom/scom-xchain-swap/crosschain-utils/index.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/scom-commission-proxy-contract", "@scom/scom-xchain-swap/crosschain-utils/API.ts"], function (require, exports, eth_wallet_5, scom_commission_proxy_contract_1, API_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCommissionRate = void 0;
    const getCommissionRate = async (state, campaignId) => {
        const rpcWallet = state.getRpcWallet();
        const proxyAddress = state.getProxyAddress();
        await rpcWallet.init();
        let commissionRate = await scom_commission_proxy_contract_1.ContractUtils.getCommissionRate(rpcWallet, proxyAddress, campaignId);
        return eth_wallet_5.Utils.fromDecimals(commissionRate, 6).toFixed();
    };
    exports.getCommissionRate = getCommissionRate;
    __exportStar(API_1, exports);
});
define("@scom/scom-xchain-swap/price-info/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_3.Styles.Theme.ThemeVars;
    components_3.Styles.cssRule('.price-info', {
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.75,
        $nest: {
            'i-hstack > i-label:first-child': {
                marginRight: '0.5rem'
            },
            '.xchain-rounded-icon': {
                display: 'inline-flex',
                padding: 0,
                marginLeft: 'auto'
            }
        }
    });
});
define("@scom/scom-xchain-swap/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_4.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        fullPath
    };
});
define("@scom/scom-xchain-swap/languages/main.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/languages/main.json.ts'/> 
    exports.default = {
        "en": {
            "last_updated_(s)_ago": "Last updated {{value}}(s) ago",
            "confirm_swap": "Confirm Swap",
            "transaction_fee_details": "Transaction Fee Details",
            "close": "Close",
            "cancel": "Cancel",
            "vault_bond_balance": "Vault Bond Balance",
            "vault_asset_balance": "Vault Asset Balance",
            "vault_bond_balance:_0": "Vault Bond Balance: 0",
            "vault_asset_balance:_0": "Vault Asset Balance: 0",
            "balance:_0": "Balance: 0",
            "swapping_from_to:": "Swapping {{from}} to {{to}}",
            "no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token": "No crosschain routes are found. You may try updating the input amount or selecting another token.",
            "no_routing": "No routing",
            "balance": "Balance",
            "you_receive": "You Receive",
            "you_pay": "You Pay",
            "destination_chain": "Destination Chain",
            "source_chain": "Source Chain",
            "you_swap": "You Swap",
            "total_transaction_fee": "Total Transaction Fee",
            "exceed_vault_asset_balance_or_bond_balance": "Exceed Vault Asset Balance or Bond Balance",
            "cap_reached": "Cap Reached",
            "cap": "Cap",
            "you_will_pay_at_most": "You will pay at most",
            "you_will_receive_at_least": "You will receive at least",
            "input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "Input is estimated. If the price changes unfavorably by more than {{value}}% your transaction will revert.",
            "output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "Output is estimated. If the price changes unfavorably by more than {{value}}% your transaction will revert.",
            "if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is": "If the order is not executed in the target chain, the estimated withdrawalble amount is",
            "swapping": "Swapping",
            "approving": "Approving",
            "max": "Max",
            "xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet": "Xchain dapp supports this network {{chainName}} ({{chainId}}), please switch network in the connected wallet.",
            "do_you_want_to_switch_network_to_network": "Do you want to switch network to {{network}}?",
            "connect_wallet": "Connect Wallet",
            "switch_network": "Switch Network",
            "approve": "Approve",
            "swap": "Swap",
            "create_order": "Create Order",
            "turn_on_expert_mode": "Turn On Expert Mode",
            "insufficient_balance": "Insufficient {{symbol}} balance",
            "invalid_pair": "Invalid pair",
            "circuit_breaker_triggered": "Circuit breaker triggered",
            "amount_lower_than_base_fee": "Amount lower than base fee",
            "base_fee": "Base Fee",
            "this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain": "This fee is paid to the trolls to cover gas fee on the Target Chain",
            "bridge_vault_liquidity_fee": "Bridge Vault Liquidity Fee",
            "this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain": "This fee is paid to the Bridge Vault Liquidity Provider on Target Chain",
            "protocol_fee": "Protocol Fee",
            "this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network": "This fee is paid to the troll owners on the Cross Chain Network",
            "imbalance_fee": "Imbalance Fee",
            "this_fee_is_acted_as_an_incentive_to_balance_the_vault": "This fee is acted as an incentive to balance the vault",
            "the_order_was_created_successfully!": "The order was created successfully!",
            "do_you_want_to_view_the_record": "Do you want to view the record?",
            "current_url_hash": "Current URL Hash",
            "record_url": "Bridge Record URL",
            "enable_url_params": "Enable URL Params?",
            "networks": "Networks",
            "chain_id": "Chain Id",
            "tokens": "Tokens",
            "address": "Address",
            "general": "General",
            "the_target_chain_cannot_be_the_same_as_the_source_chain": "The target chain cannot be the same as the source chain",
        },
        "zh-hant": {
            "last_updated_(s)_ago": "上次更新 {{value}} 秒前",
            "approve": "批准",
            "approving": "批准中",
            "balance": "餘額",
            "cap_reached": "達到上限",
            "cap": "上限",
            "circuit_breaker_triggered": "觸發斷路器",
            "amount_lower_than_base_fee": "金額低於基本費用",
            "close": "關閉",
            "cancel": "取消",
            "confirm_swap": "確認交換",
            "connect_wallet": "連接錢包",
            "create_order": "創建訂單",
            "destination_chain": "目標鏈",
            "exceed_vault_asset_balance_or_bond_balance": "超過保險庫資產餘額或債券餘額",
            "if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is": "如果訂單未在目標鏈上執行，預計可提取的金額為",
            "input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "輸入是估計的。如果價格變動超過{{value}}%，您的交易將被撤銷。",
            "insufficient_balance": "不足的{{symbol}}餘額",
            "invalid_pair": "無效的配對",
            "max": "最大",
            "xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet": "Xchain DApp 支援這個網絡 {{chainName}} ({{chainId}})，請在已連接的錢包中切換網絡。",
            "do_you_want_to_switch_network_to_network": "您是否想切換到 {{network}} 網絡？",
            "no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token": "未找到跨鏈路徑。您可以嘗試更新輸入金額或選擇其他代幣。",
            "no_routing": "無路由",
            "output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "輸出是估計的。如果價格變動超過{{value}}%，您的交易將被撤銷。",
            "source_chain": "源鏈",
            "swap_supports_this_network_please_switch_network_in_the_connected_wallet": "交換支持此網絡{{chainName}} ({{chainId}})，請在連接的錢包中切換網絡。",
            "swap": "交換",
            "swapping": "交換中",
            "switch_network": "切換網絡",
            "total_transaction_fee": "總交易費",
            "transaction_fee_details": "交易費詳情",
            "turn_on_expert_mode": "開啟專家模式",
            "vault_asset_balance": "保險庫資產餘額",
            "vault_bond_balance": "保險庫債券餘額",
            "you_pay": "您支付",
            "you_receive": "您收到",
            "you_swap": "您交換",
            "you_will_pay_at_most": "您最多將支付",
            "you_will_receive_at_least": "您至少將收到",
            "vault_bond_balance:_0": "保險庫債券餘額: 0",
            "vault_asset_balance:_0": "保險庫資產餘額: 0",
            "balance:_0": "餘額: 0",
            "swapping_from_to:": "交換中 {{from}} 至 {{to}}",
            "base_fee": "基本費用",
            "bridge_vault_liquidity_fee": "橋樑保險庫流動性費用",
            "protocol_fee": "協議費用",
            "imbalance_fee": "不平衡費用",
            "this_fee_is_acted_as_an_incentive_to_balance_the_vault": "此費用作為平衡保險庫的激勵。",
            "this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain": "此費用支付給目標鏈上的橋樑保險庫流動性提供者。",
            "this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network": "此費用支付給跨鏈網絡上的troll擁有者。",
            "this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain": "此費用支付給troll以覆蓋目標鏈上的燃氣費。",
            "the_order_was_created_successfully!": "訂單已成功創建！",
            "do_you_want_to_view_the_record": "您是否想查看記錄？",
            "current_url_hash": "當前 URL 哈希",
            "record_url": "橋樑記錄 URL",
            "enable_url_params": "啟用 URL 參數？",
            "networks": "網絡",
            "chain_id": "鏈 ID",
            "tokens": "代幣",
            "address": "地址",
            "general": "一般",
            "the_target_chain_cannot_be_the_same_as_the_source_chain": "目標鏈不能與源鏈相同",
        },
        "vi": {
            "last_updated_(s)_ago": "Lần cập nhật cuối cách đây {{value}}(giây)",
            "confirm_swap": "Xác nhận Hoán đổi",
            "transaction_fee_details": "Chi tiết Phí Giao dịch",
            "close": "Đóng",
            "cancel": "Hủy",
            "vault_bond_balance": "Dư nợ trái phiếu",
            "vault_asset_balance": "Tổng tài sản",
            "vault_bond_balance:_0": "Dư nợ trái phiếu: 0",
            "vault_asset_balance:_0": "Tổng tài sản: 0",
            "balance:_0": "Số dư: 0",
            "swapping_from_to:": "Đang hoán đổi từ {{from}} đến {{to}}",
            "no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token": "Không tìm thấy tuyến đường crosschain. Bạn có thể thử cập nhật số tiền đã nhập hoặc chọn token khác.",
            "no_routing": "Không có định tuyến",
            "balance": "Số dư",
            "you_receive": "Bạn Nhận",
            "you_pay": "Bạn Trả",
            "destination_chain": "Chuỗi Đích",
            "source_chain": "Chuỗi Nguồn",
            "you_swap": "Bạn Hoán đổi",
            "total_transaction_fee": "Tổng Phí Giao dịch",
            "exceed_vault_asset_balance_or_bond_balance": "Vượt quá Tổng tài sản hoặc Dư nợ trái phiếu",
            "cap_reached": "Đã đạt Giới hạn",
            "cap": "Giới hạn",
            "you_will_pay_at_most": "Bạn sẽ trả tối đa",
            "you_will_receive_at_least": "Bạn sẽ nhận ít nhất",
            "input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "Số tiền nhập là ước tính. Nếu giá thay đổi không thuận lợi nhiều hơn {{value}}%, giao dịch của bạn sẽ bị hoàn tác.",
            "output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert": "Số tiền đầu ra là ước tính. Nếu giá thay đổi không thuận lợi nhiều hơn {{value}}%, giao dịch của bạn sẽ bị hoàn tác.",
            "if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is": "Nếu đơn hàng không được thực hiện trong chuỗi đích, số tiền có thể rút ước tính là",
            "swapping": "Đang Hoán đổi",
            "approving": "Đang Chấp thuận",
            "max": "Tối đa",
            "xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet": "Xchain dapp hỗ trợ mạng lưới {{chainName}} ({{chainId}}), vui lòng chuyển mạng trong ví đã kết nối.",
            "do_you_want_to_switch_network_to_network": "Bạn có muốn chuyển sang mạng {{network}} không?",
            "price_impact_too_high_if_you_want_to_bypass_this_check_please_turn_on_expert_mode": "Tác động giá quá cao. Nếu bạn muốn bỏ qua kiểm tra này, hãy bật chế độ Chuyên gia.",
            "connect_wallet": "Kết nối Ví",
            "switch_network": "Chuyển Mạng",
            "approve": "Phê duyệt",
            "swap": "Hoán đổi",
            "create_order": "Tạo Đơn hàng",
            "turn_on_expert_mode": "Bật Chế độ Chuyên gia",
            "insufficient_balance": "Số dư {{symbol}} không đủ",
            "invalid_pair": "Cặp này không hợp lệ",
            "circuit_breaker_triggered": "Cầu dao đã kích hoạt",
            "amount_lower_than_base_fee": "Số tiền thấp hơn phí cơ bản",
            "base_fee": "Phí Cơ bản",
            "this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain": "Phí này được trả cho các trolls để trang trải phí gas trên Chuỗi Đích.",
            "imbalance_fee": "Phí Mất Cân bằng",
            "this_fee_is_acted_as_an_incentive_to_balance_the_vault": "Phí này hoạt động như một động lực để cân bằng kho tiền.",
            "bridge_vault_liquidity_fee": "Phí Thanh khoản Kho Vault Cầu Nối",
            "this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain": "Phí này được trả cho Nhà cung cấp Thanh khoản Kho Vault Cầu Nối trên Chuỗi Đích.",
            "protocol_fee": "Phí Giao thức",
            "this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network": "Phí này được trả cho chủ sở hữu trolls trên Mạng Lưới Chuỗi Chéo.",
            "the_order_was_created_successfully!": "Đơn hàng đã được tạo thành công!",
            "do_you_want_to_view_the_record": "Bạn có muốn xem lại bản ghi không?",
            "current_url_hash": "Mã URL Hiện Tại",
            "record_url": "URL Bản Ghi Cầu Nối",
            "enable_url_params": "Kích Hoạt Tham Số URL?",
            "networks": "Mạng Lưới",
            "chain_id": "ID Chuỗi",
            "tokens": "Mã Token",
            "address": "Địa Chỉ",
            "general": "Cơ Bản",
            "the_target_chain_cannot_be_the_same_as_the_source_chain": "Chuỗi mục tiêu không thể giống với chuỗi nguồn",
        }
    };
});
define("@scom/scom-xchain-swap/languages/expertMode.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/languages/expertMode.json.ts'/> 
    exports.default = {
        "en": {
            "expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds": "Expert mode allows high slippage trades that often result in bad rates and lost funds.",
            "only_use_this_mode_if_you_know_what_you_are_doing": "Only use this mode if you know what you are doing.",
            "turn_on_expert_mode": "Turn On Expert Mode"
        },
        "zh-hant": {
            "expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds": "專家模式允許高滑點交易，這些交易通常會導致不良匯率和資金損失。",
            "only_use_this_mode_if_you_know_what_you_are_doing": "只有在您知道自己在做什麼的情況下才使用此模式。",
            "turn_on_expert_mode": "開啟專家模式"
        },
        "vi": {
            "expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds": "Chế độ chuyên gia cho phép giao dịch với độ trượt giá cao, thường dẫn đến tỷ giá không tốt và mất tiền.",
            "only_use_this_mode_if_you_know_what_you_are_doing": "Chỉ sử dụng chế độ này nếu bạn biết rõ mình đang làm gì.",
            "turn_on_expert_mode": "Bật chế độ chuyên gia"
        }
    };
});
define("@scom/scom-xchain-swap/languages/priceInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/languages/priceInfo.json.ts'/> 
    exports.default = {
        "en": {
            "price_info": "Price Info",
            "click_to_view_details": "Click to view details",
            "transaction_fee": "Transaction Fee",
            "estimated_time": "Estimated Time",
            "30_seconds": "30 seconds",
        },
        "zh-hant": {
            "price_info": "價格資訊",
            "click_to_view_details": "點擊查看詳情",
            "transaction_fee": "交易費用",
            "estimated_time": "預計時間",
            "30_seconds": "30秒",
        },
        "vi": {
            "price_info": "Thông tin giá",
            "click_to_view_details": "Nhấp để xem chi tiết",
            "transaction_fee": "Phí giao dịch",
            "estimated_time": "Thời gian ước tính",
            "30_seconds": "30 giây",
        }
    };
});
define("@scom/scom-xchain-swap/languages/transactions.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-swap/languages/transactions.json.ts'/> 
    exports.default = {
        "en": {
            "transaction_settings": "Transaction Settings",
            "please_enter_a_valid_transaction_deadline": "Please enter a valid transaction deadline",
            "please_enter_a_valid_slippage_percentage": "Please enter a valid slippage percentage",
            "your_transaction_may_fail": "Your transaction may fail",
            "your_transaction_may_be_frontrun": "Your transaction may be frontrun",
            "toggle_expert_mode": "Toggle Expert Mode",
            "your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage": "Your transaction will revert if the price changes unfavorably by more than this percentage.",
            "slippage_tolerance": "Slippage Tolerance",
            "cross_chain_transaction_deadline": "Cross chain transaction deadline",
            "your_transaction_will_revert_if_it_is_pending_for_more_than_this_long": "Your transaction will revert if it is pending for more than this long.",
            "off": "Off",
            "on": "On",
            "hours": "hours"
        },
        "zh-hant": {
            "transaction_settings": "交易設定",
            "please_enter_a_valid_transaction_deadline": "請輸入有效的交易期限",
            "please_enter_a_valid_slippage_percentage": "請輸入有效的滑點百分比",
            "your_transaction_may_fail": "您的交易可能會失敗",
            "your_transaction_may_be_frontrun": "您的交易可能會被前置交易",
            "toggle_expert_mode": "切換專家模式",
            "your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage": "如果價格不利變動超過此百分比，您的交易將會回滾。",
            "slippage_tolerance": "滑點容忍度",
            "cross_chain_transaction_deadline": "跨鏈交易期限",
            "your_transaction_will_revert_if_it_is_pending_for_more_than_this_long": "如果您的交易待處理超過此時間，將會回滾。",
            "off": "關閉",
            "on": "開啟",
            "hours": "小時"
        },
        "vi": {
            "transaction_settings": "Cài đặt giao dịch",
            "please_enter_a_valid_transaction_deadline": "Vui lòng nhập thời hạn giao dịch hợp lệ",
            "please_enter_a_valid_slippage_percentage": "Vui lòng nhập tỷ lệ trượt giá hợp lệ",
            "your_transaction_may_fail": "Giao dịch của bạn có thể thất bại",
            "your_transaction_may_be_frontrun": "Giao dịch của bạn có thể bị chạy trước",
            "toggle_expert_mode": "Chuyển đổi chế độ chuyên gia",
            "your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage": "Giao dịch của bạn sẽ bị hoàn lại nếu giá thay đổi bất lợi quá mức tỷ lệ này.",
            "slippage_tolerance": "Độ trượt giá cho phép",
            "cross_chain_transaction_deadline": "Thời hạn giao dịch chuỗi chéo",
            "your_transaction_will_revert_if_it_is_pending_for_more_than_this_long": "Giao dịch của bạn sẽ bị hoàn lại nếu chờ quá thời gian này.",
            "off": "Tắt",
            "on": "Bật",
            "hours": "giờ"
        }
    };
});
define("@scom/scom-xchain-swap/languages/index.ts", ["require", "exports", "@scom/scom-xchain-swap/languages/main.json.ts", "@scom/scom-xchain-swap/languages/expertMode.json.ts", "@scom/scom-xchain-swap/languages/priceInfo.json.ts", "@scom/scom-xchain-swap/languages/transactions.json.ts"], function (require, exports, main_json_1, expertMode_json_1, priceInfo_json_1, transactions_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transactionsJson = exports.priceInfoJson = exports.expertModeJson = exports.mainJson = void 0;
    exports.mainJson = main_json_1.default;
    exports.expertModeJson = expertMode_json_1.default;
    exports.priceInfoJson = priceInfo_json_1.default;
    exports.transactionsJson = transactions_json_1.default;
});
define("@scom/scom-xchain-swap/price-info/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-swap/assets.ts", "@scom/scom-xchain-swap/languages/index.ts", "@scom/scom-xchain-swap/price-info/index.css.ts"], function (require, exports, components_5, assets_1, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainSwapPriceInfo = void 0;
    ;
    let XchainSwapPriceInfo = class XchainSwapPriceInfo extends components_5.Module {
        constructor(parent, options) {
            super(parent, options);
            this.renderItems = async () => {
                if (this.items.length && this.priceContent?.children?.length === this.items.length) {
                    this.updateItems();
                    return;
                }
                this.priceContent.clearInnerHTML();
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    const row = new components_5.HStack(undefined, {
                        gap: 2,
                        wrap: 'wrap',
                        verticalAlignment: 'center',
                        padding: { top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 }
                    });
                    if (item.isHidden) {
                        row.classList.add('hidden');
                    }
                    const titleLabel = new components_5.Label(row, { caption: item.title });
                    row.appendChild(titleLabel);
                    if (item.tooltip) {
                        const iconTooltip = this.renderIconTooltip(row, item);
                        row.appendChild(await iconTooltip);
                    }
                    const hStack = new components_5.HStack(row, {
                        verticalAlignment: 'center',
                        margin: { left: 'auto' }
                    });
                    if (item.width) {
                        hStack.width = item.width;
                    }
                    const valueLabel = new components_5.Label(hStack, { caption: item.value });
                    valueLabel.classList.add('ml-auto', 'text-right');
                    if (item.isToggleShown) {
                        this.onRenderToggleBtn(hStack);
                    }
                    this.priceContent.appendChild(row);
                }
            };
            this.onRenderToggleBtn = (parent) => {
                const image = new components_5.Image(parent, {
                    width: 24,
                    height: 24,
                    url: assets_1.default.fullPath("img/swap/icon-swap.png"),
                    margin: { left: 5 },
                    display: 'flex'
                });
                image.classList.add("xchain-rounded-icon");
                image.style.transform = "rotate(90deg)";
                image.onClick = (source, event) => {
                    event.stopPropagation();
                    if (this.onTogglePrice)
                        this.onTogglePrice(this);
                };
                return image;
            };
            this.renderIconTooltip = async (parent, item) => {
                const iconTooltip = await components_5.Icon.create();
                iconTooltip.classList.add('icon-tooltip');
                iconTooltip.name = 'question-circle';
                iconTooltip.width = 15;
                iconTooltip.height = 15;
                iconTooltip.fill = '#fff';
                if (item.onClick) {
                    iconTooltip.cursor = 'pointer';
                    iconTooltip.tooltip.content = '$click_to_view_details';
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                    iconTooltip.onClick = item.onClick;
                }
                else {
                    iconTooltip.tooltip.content = item.tooltip;
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                }
                return iconTooltip;
            };
            this.updateItems = async () => {
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    const row = this.priceContent.children[i];
                    const iconTooltip = row.querySelector('.icon-tooltip');
                    const titleLabel = row.firstChild;
                    const hStack = row.children[iconTooltip ? 2 : 1];
                    const valueLabel = hStack.firstChild;
                    if (titleLabel?.caption && item.title != titleLabel.caption) {
                        titleLabel.caption = item.title;
                    }
                    if (valueLabel?.caption && item.value != valueLabel.caption) {
                        valueLabel.caption = item.value;
                    }
                    if (iconTooltip) {
                        row.removeChild(iconTooltip);
                    }
                    if (item.tooltip) {
                        const _iconTooltip = this.renderIconTooltip(row, item);
                        row.insertBefore(await _iconTooltip, row.children[1]);
                    }
                    if (item.isToggleShown && hStack.children.length <= 1) {
                        this.onRenderToggleBtn(hStack);
                    }
                    else if (!item.isToggleShown && hStack.children.length > 1 && !item.tooltip) {
                        hStack.removeChild(hStack.children[1]);
                    }
                    setTimeout(function () {
                        const iconTooltips = row.querySelectorAll(".icon-tooltip");
                        if (iconTooltips && iconTooltips.length > 1) {
                            row.removeChild(iconTooltips[1]);
                        }
                    }, 2000);
                }
            };
        }
        get items() {
            return this._items;
        }
        set items(value) {
            this._items = value;
            this.renderItems();
        }
        init() {
            this.i18n.init({ ...index_6.priceInfoJson });
            super.init();
        }
        render() {
            return (this.$render("i-panel", { class: "price-info", width: "auto" },
                this.$render("i-label", { class: "header", caption: "$price_info", padding: { bottom: '0.5rem' }, font: { size: '1.125rem' } }),
                this.$render("i-panel", { id: "priceContent" })));
        }
    };
    XchainSwapPriceInfo = __decorate([
        (0, components_5.customElements)('xchain-swap-price-info')
    ], XchainSwapPriceInfo);
    exports.XchainSwapPriceInfo = XchainSwapPriceInfo;
});
define("@scom/scom-xchain-swap/expert-mode-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_6.Styles.Theme.ThemeVars;
    exports.default = components_6.Styles.style({
        textAlign: 'center',
        $nest: {
            '.modal': {
                borderRadius: '1rem',
                padding: '1rem',
                width: 327
            },
            '.i-modal_header': {
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: `2px solid ${Theme.background.default}`,
                $nest: {
                    '&> span': {
                        margin: 'auto',
                        padding: '0 2rem',
                        color: Theme.colors.primary.main,
                        fontWeight: 700,
                    }
                }
            },
            '.i-modal-close': {
                fill: `${Theme.colors.primary.main} !important`,
            },
            '.expert-content': {
                fontWeight: 'bold',
                $nest: {
                    '.warning-box': {
                        padding: '0.75rem 1rem',
                        marginBottom: '1.25rem',
                        background: 'linear-gradient(90deg,#df5869 -19.25%,#bc4c7b 116.5%)',
                        border: `1px solid ${Theme.colors.primary.main}`,
                        borderRadius: '0.5rem',
                    },
                    '.warning-box i-label *': {
                        color: Theme.text.primary,
                        fontSize: '1rem',
                    },
                    'i-label.warning-text *': {
                        color: Theme.colors.secondary.main,
                        fontSize: '1.05rem',
                    },
                    'i-button': {
                        padding: '0.75rem',
                        margin: '1.25rem 0 0.5rem',
                        background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
                    }
                }
            }
        }
    });
});
define("@scom/scom-xchain-swap/expert-mode-settings/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-swap/expert-mode-settings/index.css.ts", "@scom/scom-xchain-swap/languages/index.ts"], function (require, exports, components_7, index_css_1, index_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainSwapExpertModeSettings = void 0;
    ;
    let XchainSwapExpertModeSettings = class XchainSwapExpertModeSettings extends components_7.Module {
        constructor(state, parent, options) {
            super(parent, options);
            this.state = state;
            this.$eventBus = components_7.application.EventBus;
        }
        ;
        async init() {
            this.i18n.init({ ...index_7.expertModeJson });
            this.classList.add(index_css_1.default);
            super.init();
            this.onToggle = this.onToggle.bind(this);
        }
        closeModal() {
            this.expertModal.visible = false;
        }
        showModal() {
            this.expertModal.visible = true;
        }
        onToggle() {
            this.state.toggleExpertMode();
            this.closeModal();
            this.$eventBus.dispatch("expertModeChanged" /* EventId.ExpertModeChanged */);
        }
        render() {
            return (this.$render("i-modal", { id: "expertModal", class: 'dark-modal', title: "Expert Mode", closeIcon: { name: 'times' } },
                this.$render("i-panel", { class: "expert-content" },
                    this.$render("i-panel", { class: "warning-box" },
                        this.$render("i-label", { caption: "$expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds" })),
                    this.$render("i-label", { class: "warning-text", caption: "$only_use_this_mode_if_you_know_what_you_are_doing" }),
                    this.$render("i-button", { width: "100%", height: "auto", caption: "$turn_on_expert_mode", onClick: this.onToggle }))));
        }
    };
    XchainSwapExpertModeSettings = __decorate([
        components_7.customModule,
        (0, components_7.customElements)('xchain-swap-expert-mode-settings')
    ], XchainSwapExpertModeSettings);
    exports.XchainSwapExpertModeSettings = XchainSwapExpertModeSettings;
    ;
});
///<amd-module name='@scom/scom-xchain-swap/transaction-settings-layout/index.css.ts'/> 
define("@scom/scom-xchain-swap/transaction-settings-layout/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_8.Styles.Theme.ThemeVars;
    exports.default = components_8.Styles.style({
        textAlign: 'center',
        $nest: {
            '.settings-content i-icon': {
                marginLeft: '4px'
            },
            '#slippageGroup': {
                marginTop: '0.75rem',
                gap: 12,
                $nest: {
                    '.transaction-input > input': {
                        paddingRight: '1.35rem',
                        textAlign: 'right',
                    }
                }
            },
            '.pill-slippage': {
                background: Theme.input.background,
                lineHeight: '2.25rem',
                borderRadius: '0.75rem',
                border: '2px solid transparent',
                $nest: {
                    '&:not(.disabled):hover': {
                        borderColor: '#a7a9ac',
                        background: Theme.background.default
                    },
                }
            },
            'i-label *': {
                fontSize: '1rem'
            },
            '.trans-title': {
                marginTop: '1.5rem',
                marginBottom: '0.5rem'
            },
            '.slippage-input__warning': {
                position: 'absolute',
                top: 'calc(50% - 1px)',
                left: '10px',
                transform: 'translateY(-50%)'
            },
            '.transaction-input': {
                position: 'relative',
                minWidth: '5rem',
                maxWidth: '5.5rem',
                width: '100%',
                background: Theme.input.background,
                borderRadius: '0.75rem',
                $nest: {
                    '&> input': {
                        width: 'inherit',
                        background: 'transparent',
                        border: '2px solid transparent',
                        borderRadius: '0.75rem',
                        color: '#fff',
                        textAlign: 'center',
                        padding: 0
                    },
                    '&> i-label': {
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: '8px',
                    }
                }
            },
            '.transaction-input__error input': {
                color: Theme.colors.error.main,
                borderColor: Theme.colors.error.main,
            },
            '.transaction-input__error input:focus': {
                borderColor: `${Theme.colors.error.main} !important`
            },
            '.transaction-input input:hover, .transaction-input input:focus': {
                borderColor: '#a7a9ac'
            },
            '.pill-slippage.active, .transaction-input.active>input': {
                borderColor: `${Theme.colors.info.main} !important`
            },
            '.slippage-message': {
                paddingTop: '7px',
                $nest: {
                    '*': {
                        color: Theme.colors.primary.dark,
                        fontSize: '14px',
                    }
                }
            },
            'i-switch': {
                $nest: {
                    '.wrapper': {
                        display: 'flex',
                        position: 'relative',
                        width: '88.625px',
                        height: '40px',
                        borderRadius: '12px',
                        background: Theme.input.background,
                        outline: 'none',
                        padding: 0,
                    },
                    '.thumb': {
                        margin: '3px',
                        borderRadius: '50%',
                        background: 'linear-gradient(255deg,#f15e61,#b52082)',
                        color: '#565a69',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        transition: 'all .3s ease-in-out',
                        width: '2rem',
                        height: '2rem',
                        padding: 0
                    },
                    '.switch-base.checked': {
                        transform: 'translateX(48px)',
                    },
                    '.track': {
                        color: Theme.text.primary,
                        $nest: {
                            "&::before, &::after": {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                top: 'auto',
                                transform: 'none',
                                fontSize: 'inherit',
                                color: Theme.text.primary,
                                opacity: '1 !important'
                            },
                            "&::before": {
                                width: '50%',
                                left: 'auto',
                            },
                            "&::after": {
                                right: 0,
                                left: '50%',
                            }
                        }
                    }
                }
            },
        }
    });
});
define("@scom/scom-xchain-swap/transaction-settings-layout/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-swap/transaction-settings-layout/index.css.ts", "@scom/scom-xchain-swap/languages/index.ts"], function (require, exports, components_9, index_css_2, index_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainSwapTransactionSettingsLayout = void 0;
    const Theme = components_9.Styles.Theme.ThemeVars;
    ;
    const listSlippage = [0.1, 0.5, 1];
    let XchainSwapTransactionSettingsLayout = class XchainSwapTransactionSettingsLayout extends components_9.Module {
        constructor(state, parent, options) {
            super(parent, options);
            this.onActiveItem = (source) => {
                const activeItem = this.slippageGroup.querySelector('.active');
                if (activeItem) {
                    if (source.isSameNode(activeItem))
                        return;
                    activeItem.classList.remove('active');
                }
                source.classList.add('active');
            };
            this.onSelectSlippage = (source, val) => {
                this.inputSlippageTolerance(source, val);
                if (listSlippage.includes(val)) {
                    this.slippageInput.value = '';
                }
            };
            this.inputSlippageTolerance = (source, val) => {
                if (val) {
                    const value = Number(+val);
                    const hasWarningIcon = this.slippageInput.contains(this.warningIcon);
                    if (!source.isSameNode(this.slippageInput)) {
                        this.slippageInput.value = value;
                    }
                    this.slippageInput.placeholder = isNaN(value) ? '0.00' : value.toFixed(2);
                    if (value < 50) {
                        this.state.setSlippageTolerance(value);
                        this.$eventBus.dispatch("slippageToleranceChanged" /* EventId.SlippageToleranceChanged */);
                        this.setSlippageToleranceMessage();
                        this.slippageInput.classList.remove('transaction-input__error');
                        if (value > 5) {
                            if (!hasWarningIcon)
                                this.slippageInput.prepend(this.warningIcon);
                        }
                        else if (hasWarningIcon)
                            this.slippageInput.removeChild(this.warningIcon);
                    }
                    else {
                        this.slippageToleranceMessage = '$please_enter_a_valid_slippage_percentage';
                        this.slippageInput.classList.add('transaction-input__error');
                        if (hasWarningIcon)
                            this.slippageInput.removeChild(this.warningIcon);
                    }
                }
                const index = listSlippage.concat().reverse().indexOf(Number(+val));
                if (index >= 0 && source.isSameNode(this.slippageInput)) {
                    const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
                    this.onActiveItem(buttons[index]);
                }
                else {
                    this.onActiveItem(source);
                }
            };
            this.blurSlippageTolerance = (source) => {
                const val = source.value;
                if (val && val >= 50) {
                    this.inputSlippageTolerance(source, 0.5);
                }
                else if (!this.slippageInput.value) {
                    this.inputSlippageTolerance(source, this.state.getSlippageTolerance());
                }
            };
            this.setSlippageToleranceMessage = () => {
                const slippageTolerance = this.state.getSlippageTolerance();
                if (slippageTolerance < 0.5) {
                    return (this.slippageToleranceMessage = '$your_transaction_may_fail');
                }
                else if (slippageTolerance >= 0.5 && slippageTolerance <= 5) {
                    return (this.slippageToleranceMessage = '');
                }
                else if (slippageTolerance > 5 && slippageTolerance < 50) {
                    return (this.slippageToleranceMessage = '$your_transaction_may_be_frontrun');
                }
                else {
                    return (this.slippageToleranceMessage = '$please_enter_a_valid_slippage_percentage');
                }
            };
            this.inputCrossChainDeadline = (source, event) => {
                const val = source.value;
                this.state.setCrossChainTransactionDeadline(val * 60);
                const hasMessage = this.crossChainDeadlineGroup.contains(this.crossChainDeadlineMessage);
                if (val > 168) {
                    this.crossChainDeadlineInput.classList.add('transaction-input__error');
                    if (!hasMessage)
                        this.crossChainDeadlineGroup.appendChild(this.crossChainDeadlineMessage);
                }
                else {
                    this.crossChainDeadlineInput.classList.remove('transaction-input__error');
                    if (hasMessage)
                        this.crossChainDeadlineGroup.removeChild(this.crossChainDeadlineMessage);
                }
            };
            this.blurCrossChainTransactionDeadline = (source) => {
                const val = source.value;
                const newVal = val > 168 || val < 1 ? 72 : parseFloat(val);
                source.value = newVal;
                this.state.setCrossChainTransactionDeadline(newVal * 60);
                if (val > 168 && this.crossChainDeadlineGroup.contains(this.crossChainDeadlineMessage)) {
                    this.crossChainDeadlineGroup.removeChild(this.crossChainDeadlineMessage);
                }
                this.crossChainDeadlineInput.classList.remove('transaction-input__error');
            };
            this.handleProcessExpertMode = () => {
                if (this.state.isExpertMode) {
                    this.state.toggleExpertMode();
                    this.$eventBus.dispatch("expertModeChanged" /* EventId.ExpertModeChanged */);
                    return;
                }
                this.$eventBus.dispatch("showExpertModal" /* EventId.ShowExpertModal */);
            };
            this.state = state;
            this.$eventBus = components_9.application.EventBus;
            this.registerEvent();
        }
        ;
        get showSlippageOnly() {
            return this._showSlippageOnly;
        }
        set showSlippageOnly(value) {
            this._showSlippageOnly = value;
            if (value) {
                this.slippageRow.visible = false;
                this.crossChainDeadlineRow.visible = false;
                this.crossChainDeadlineInputRow.visible = false;
                this.switchBoxRow.visible = false;
            }
            else {
                this.slippageRow.visible = true;
                this.crossChainDeadlineRow.visible = this.showCrossChain;
                this.crossChainDeadlineInputRow.visible = this.showCrossChain;
                this.switchBoxRow.visible = true;
            }
        }
        get showCrossChain() {
            return this._showCrossChain;
        }
        set showCrossChain(value) {
            if (!this.crossChainDeadlineRow)
                return;
            this.crossChainDeadlineRow.visible = value && !this.showSlippageOnly;
            this.crossChainDeadlineInputRow.visible = value && !this.showSlippageOnly;
        }
        async init() {
            this.i18n.init({ ...index_8.transactionsJson });
            this.classList.add(index_css_2.default);
            super.init();
            this.switchBox.checked = this.state.isExpertMode;
            this.crossChainDeadlineRow.visible = this.showCrossChain && !this.showSlippageOnly;
            this.crossChainDeadlineInputRow.visible = this.showCrossChain && !this.showSlippageOnly;
            await this.onRenderSlippage();
            await this.onRenderWarningElm();
            this.setDefaultTransactionSettings();
        }
        registerEvent() {
            this.$eventBus.register(this, "expertModeChanged" /* EventId.ExpertModeChanged */, () => {
                if (this.switchBox)
                    this.switchBox.checked = this.state.isExpertMode;
            });
        }
        async onRenderSlippage() {
            listSlippage.map(async (value) => {
                const button = await components_9.Button.create({
                    height: 'auto',
                    width: '4rem',
                    caption: `${value}%`
                });
                button.classList.add('pill-slippage');
                button.onClick = (source) => this.onSelectSlippage(source, value);
                this.slippageGroup.prepend(button);
            });
            const label = await components_9.Label.create();
            label.caption = '%';
            this.slippageInput.appendChild(label);
        }
        async onRenderWarningElm() {
            this.crossChainDeadlineMessage = await components_9.Label.create();
            this.crossChainDeadlineMessage.caption = '$please_enter_a_valid_transaction_deadline';
            this.crossChainDeadlineMessage.classList.add('slippage-message');
            this.warningIcon = await components_9.Icon.create({
                name: 'exclamation-triangle',
                fill: Theme.colors.primary.dark,
                width: 15.75,
                height: 14,
            });
            this.warningIcon.classList.add('slippage-input__warning');
        }
        setDefaultTransactionSettings() {
            const slippageTolerance = this.state.getSlippageTolerance();
            const index = listSlippage.indexOf(slippageTolerance);
            if (index >= 0) {
                const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
                this.onActiveItem(buttons[index]);
                this.slippageInput.value = '';
            }
            else {
                this.slippageInput.value = slippageTolerance;
                this.onActiveItem(this.slippageInput);
            }
            this.slippageInput.placeholder = slippageTolerance.toFixed(2);
            const crossChainTransactionDeadline = this.state.getCrossChainTransactionDeadline();
            this.crossChainDeadlineInput.value = crossChainTransactionDeadline / 60;
        }
        render() {
            return (this.$render("i-panel", { class: "settings-content" },
                this.$render("i-hstack", { id: "slippageRow", verticalAlignment: 'center' },
                    this.$render("i-label", { caption: "$slippage_tolerance" }),
                    this.$render("i-icon", { width: 16, height: 16, name: "question-circle", fill: "rgba(255,255,255,0.55)", tooltip: {
                            content: '$your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage'
                        } })),
                this.$render("i-hstack", { id: "slippageGroup", gap: "0.5rem" },
                    this.$render("i-input", { id: "slippageInput", height: 40, width: "100%", inputType: "number", class: 'transaction-input', onChanged: (source, event) => this.inputSlippageTolerance(source, source.value), onBlur: this.blurSlippageTolerance })),
                this.$render("i-hstack", null,
                    this.$render("i-label", { class: "slippage-message", caption: this.slippageToleranceMessage })),
                this.$render("i-hstack", { id: "crossChainDeadlineRow", visible: false, verticalAlignment: 'center', class: "trans-title" },
                    this.$render("i-label", { caption: "$cross_chain_transaction_deadline" }),
                    this.$render("i-icon", { width: 16, height: 16, name: "question-circle", fill: "rgba(255,255,255,0.55)", tooltip: {
                            content: '$your_transaction_will_revert_if_it_is_pending_for_more_than_this_long'
                        } })),
                this.$render("i-hstack", { id: "crossChainDeadlineInputRow", visible: false, verticalAlignment: 'center' },
                    this.$render("i-input", { id: "crossChainDeadlineInput", height: 40, width: "100%", class: "transaction-input", inputType: "number", onChanged: this.inputCrossChainDeadline, onBlur: this.blurCrossChainTransactionDeadline }),
                    this.$render("i-label", { class: "ml-1", caption: "$hours" }),
                    this.$render("i-hstack", { id: "crossChainDeadlineGroup" })),
                this.$render("i-hstack", { id: "switchBoxRow", visible: false, horizontalAlignment: 'space-between', verticalAlignment: 'center', class: "mt-1" },
                    this.$render("i-label", { class: "toggle-text", caption: "$toggle_expert_mode" }),
                    this.$render("i-switch", { id: "switchBox", checkedTrackColor: "transparent", uncheckedTrackColor: "transparent", checkedThumbText: "$off", uncheckedThumbText: "$on", checkedText: "$off", uncheckedText: "$on", checked: this.state?.isExpertMode, onClick: this.handleProcessExpertMode }))));
        }
    };
    __decorate([
        (0, components_9.observable)()
    ], XchainSwapTransactionSettingsLayout.prototype, "slippageToleranceMessage", void 0);
    XchainSwapTransactionSettingsLayout = __decorate([
        (0, components_9.customElements)('xchain-swap-transaction-settings-layout')
    ], XchainSwapTransactionSettingsLayout);
    exports.XchainSwapTransactionSettingsLayout = XchainSwapTransactionSettingsLayout;
    ;
});
define("@scom/scom-xchain-swap/transaction-settings/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_10.Styles.Theme.ThemeVars;
    exports.default = components_10.Styles.style({
        textAlign: 'center',
        $nest: {
            '.modal': {
                borderRadius: '1rem',
                padding: '1rem',
                width: 405
            },
            '.i-modal_header': {
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: `2px solid ${Theme.background.default}`,
                $nest: {
                    '&> span': {
                        paddingRight: '2rem',
                        color: Theme.colors.primary.main,
                        fontWeight: 700,
                    }
                }
            },
            '.i-modal-close': {
                fill: `${Theme.colors.primary.main} !important`,
            },
        }
    });
});
define("@scom/scom-xchain-swap/transaction-settings/index.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-swap/transaction-settings-layout/index.tsx", "@scom/scom-xchain-swap/transaction-settings/index.css.ts", "@scom/scom-xchain-swap/languages/index.ts"], function (require, exports, components_11, index_9, index_css_3, index_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainSwapTransactionSettings = void 0;
    ;
    let XchainSwapTransactionSettings = class XchainSwapTransactionSettings extends components_11.Module {
        get showCrossChain() {
            return this._showCrossChain;
        }
        set showCrossChain(value) {
            this._showCrossChain = value;
            if (this.transactionLayout) {
                this.transactionLayout.showCrossChain = value;
            }
        }
        constructor(state, parent, options) {
            super(parent, options);
            this.state = state;
        }
        async init() {
            this.i18n.init({ ...index_10.transactionsJson });
            this.classList.add(index_css_3.default);
            super.init();
            this.transactionLayout = new index_9.XchainSwapTransactionSettingsLayout(this.state);
            this.mainContent.appendChild(this.transactionLayout);
            this.transactionLayout.showCrossChain = this.showCrossChain;
            this.transactionModal.title = this.i18n.get('$transaction_settings');
        }
        closeModal() {
            this.transactionModal.visible = false;
        }
        showModal() {
            this.transactionModal.visible = true;
        }
        render() {
            return (this.$render("i-modal", { id: "transactionModal", class: 'dark-modal', title: "$transaction_settings", closeIcon: { name: 'times' } },
                this.$render("i-panel", { id: "mainContent" })));
        }
    };
    XchainSwapTransactionSettings = __decorate([
        components_11.customModule,
        (0, components_11.customElements)('xchain-swap-transaction-settings')
    ], XchainSwapTransactionSettings);
    exports.XchainSwapTransactionSettings = XchainSwapTransactionSettings;
    ;
});
define("@scom/scom-xchain-swap/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customSecondTokenInputStyle = exports.customTokenInputStyle = exports.inputTokenContainerStyle = exports.contentXchainSwap = exports.btnDropdownStyle = exports.xchainSwapContainerStyle = exports.xchainSwapStyle = void 0;
    const Theme = components_12.Styles.Theme.ThemeVars;
    exports.xchainSwapStyle = components_12.Styles.style({
        $nest: {
            'i-icon': {
                display: 'inline-block',
                cursor: 'default'
            },
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: Theme.colors.primary.main,
                borderRadius: '5px',
            },
            '*': {
                boxSizing: 'border-box'
            },
            '.ml-auto': {
                marginLeft: 'auto'
            },
            'i-label.text--grey *': {
                color: Theme.text.primary,
                opacity: 0.7
            },
            'i-label.text--limit *': {
                color: `${Theme.colors.secondary.main} !important`
            },
            '.btn-os': {
                background: 'var(--primary-button-background)',
                transition: 'background .3s ease'
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: 'var(--primary-button-hover-background)',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
                outline: 0
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: 'var(--primary-button-disabled-background)',
                opacity: 0.4
            },
            '.btn-max:not(.disabled):hover': {
                transition: 'all .2s ease-out',
                background: 'var(--max-button-hover-background)'
            },
            '.btn-max': {
                position: 'relative',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                padding: '0 0.5rem',
                marginLeft: '0.5rem',
                bottom: '1.5px',
                background: 'var(--max-button-background)',
                color: Theme.text.primary
            },
            '.bg-box': {
                margin: '0.5rem 0',
                border: `1px solid ${Theme.divider}`,
                borderRadius: '0.75rem'
            },
            '.bg-box-radius': {
                borderRadius: '0.75rem'
            },
            '.xchain-rounded-icon': {
                display: 'inline-block',
                padding: '3px',
                background: Theme.background.modal,
                border: '2px solid transparent',
                borderRadius: '50%',
                cursor: 'pointer'
            },
            '.swap-btn-container': {
                marginBottom: '1.5rem',
                $nest: {
                    '.btn-swap': {
                        position: 'relative',
                        width: '100%',
                        borderRadius: '0.65rem',
                        fontSize: '1.125rem',
                        padding: '1.25rem 0.75rem',
                        opacity: 1,
                        color: Theme.text.primary
                    }
                }
            },
            '.cursor-input--default': {
                cursor: 'default',
                $nest: {
                    'input': {
                        cursor: 'default'
                    }
                }
            },
            '.hidden': {
                display: 'none !important'
            },
            '#gridCommonToken': {
                gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))'
            },
            '.custom-modal': {
                $nest: {
                    '.modal': {
                        // background: Theme.background.main,
                        width: 490,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: Theme.text.primary
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px solid ${Theme.divider}`,
                        color: Theme.colors.primary.main,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > i-icon': {
                        fill: `${Theme.colors.primary.main} !important`,
                        cursor: 'pointer'
                    },
                    '.i-modal_header ~ i-icon': {
                        display: 'inline-block',
                        margin: '0.75rem 0',
                        background: Theme.background.modal,
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        padding: '0.25rem'
                    },
                }
            },
            '#swapModal': {
                $nest: {
                    '.icon-swap': {
                        margin: 0
                    },
                    'i-image:not(.xchain-rounded-icon)': {
                        display: 'inline-block',
                        marginRight: '0.5rem'
                    },
                    '#tokenReceiveValue': {
                        margin: '0 5px'
                    },
                    '#payOrReceiveValue': {
                        marginInline: '0.25rem',
                    },
                    '.text-primary *': {
                        color: Theme.colors.primary.main,
                    },
                    '.price-info': {
                        padding: '1rem'
                    },
                    '.arrow-down': {
                        display: 'inline-block',
                        margin: '0.75rem 0',
                        background: Theme.background.modal,
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        padding: '0.25rem'
                    },
                    '.arrow-down--chain': {
                        margin: '0.75rem 6rem !important',
                    },
                    '.token-value': {
                        marginLeft: 'auto',
                    },
                    '.token-value > *, #swapModal .token-name > *': {
                        fontSize: '1.1rem'
                    },
                    '.row-chain': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                }
            },
            '.custom-md--view': {
                $nest: {
                    'i-label > *': {
                        fontSize: '.875rem',
                        wordBreak: 'normal'
                    },
                    '.i-modal_content': {
                        padding: '0 1rem 1rem',
                    },
                    'i-button': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '150px',
                        height: '50px !important',
                        fontWeight: 600,
                        borderRadius: 5,
                        margin: '0.5rem',
                    },
                    '.btn-cancel': {
                        background: '#eaecef',
                        color: `${Theme.background.default} !important`,
                        $nest: {
                            '&:hover': {
                                background: '#eaecef !important',
                                color: `${Theme.background.default} !important`
                            }
                        }
                    },
                    '.btn-submit': {
                        textAlign: 'center',
                    },
                    '.btn-submit > *': {
                        color: `${Theme.text.primary} !important`,
                    },
                }
            },
            '#modalFees': {
                $nest: {
                    '.i-modal_header': {
                        marginBottom: '0.5rem !important',
                    },
                    '.i-modal_content': {
                        $nest: {
                            'i-label *': {
                                fontSize: '0.875rem',
                            },
                            'i-button': {
                                width: '150px',
                                paddingBlock: '0.25rem',
                            },
                        },
                    },
                },
            },
            '.xchain-action-setting': {
                display: 'flex',
                margin: 'auto 0 0 auto',
                alignItems: 'center',
                $nest: {
                    '> i-icon': {
                        marginLeft: '0.5rem'
                    },
                    '> i-label': {
                        opacity: 0.75
                    }
                }
            }
        }
    });
    exports.xchainSwapContainerStyle = components_12.Styles.style({
        width: 500,
        maxWidth: '100%',
        padding: '1rem',
        margin: '1.5rem auto 2rem',
        $nest: {
            'i-button': {
                fontWeight: 600,
                verticalAlign: 'middle',
                lineHeight: 1.5,
            },
            'i-button.disabled': {
                opacity: 0.4,
            },
            'i-button:not(.disabled):hover': {
                transition: 'all .2s ease-out',
            },
            'i-button:focus': {
                outline: 0,
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '.input--token-box': {
                padding: '0.75rem 1rem',
                $nest: {
                    '#btnToken': {
                        height: 'auto !important'
                    },
                    'i-button.custom-btn': {
                        background: Theme.background.main,
                        padding: '0.5rem',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: 1.5,
                        alignSelf: 'center',
                        textAlign: 'center',
                        opacity: 1,
                        color: Theme.text.primary,
                        $nest: {
                            '&:not(.disabled):hover': {
                                background: Theme.background.main
                            },
                            '&> span': {
                                verticalAlign: 'middle',
                            },
                            '&> i-icon': {
                                maxWidth: 10,
                                height: '16px !important',
                                opacity: 0.5,
                                marginRight: 'unset',
                                fill: Theme.text.primary
                            },
                            '&> :not(:last-child)': {
                                marginRight: '0.5rem'
                            }
                        }
                    },
                    '.text-value': {
                        display: 'block',
                        $nest: {
                            '> *': {
                                fontSize: '1.25rem',
                                paddingRight: '0.25rem'
                            }
                        }
                    },
                    '.token-input': {
                        width: '100%',
                        background: 'transparent'
                    },
                    '.token-input > input': {
                        width: '100%',
                        height: 'auto !important',
                        padding: '.375rem .75rem',
                        paddingRight: '0.25rem',
                        paddingLeft: 0,
                        borderRadius: '0.25rem',
                        border: 'none',
                        background: 'transparent',
                        color: Theme.text.primary,
                        fontSize: '1.25rem',
                        textAlign: 'right'
                    }
                }
            },
        }
    });
    exports.btnDropdownStyle = components_12.Styles.style({
        marginBlock: '.25rem',
        $nest: {
            '> i-button': {
                background: Theme.background.main,
                boxShadow: 'none',
                opacity: 0.9,
                border: 'none',
                borderRadius: '0.5rem',
                height: 'auto',
                padding: '0.5rem',
                justifyContent: 'space-between',
                $nest: {
                    'span': {
                        marginInline: '8px auto',
                        fontWeight: 'normal'
                    },
                    '&:hover': {
                        background: `${Theme.background.main} !important`,
                        opacity: 1
                    }
                }
            },
            'i-modal': {
                width: '100%'
            },
            '.modal': {
                padding: '0.25rem 0',
                marginTop: 0,
                border: `2px solid ${Theme.action.focusBackground}`,
                background: Theme.background.modal,
                borderRadius: 4,
                minWidth: 0,
                maxHeight: '50vh',
                overflow: 'auto',
                $nest: {
                    '&::-webkit-scrollbar': {
                        width: '3px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '5px',
                    },
                    'i-hstack': {
                        padding: '0.35rem 0.5rem',
                        fontSize: '0.875rem',
                        $nest: {
                            '&:hover': {
                                background: Theme.action.focusBackground,
                            },
                            '&.disabled': {
                                cursor: 'default !important',
                                opacity: '0.5',
                                $nest: {
                                    '&:hover': {
                                        background: 'transparent'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    exports.contentXchainSwap = components_12.Styles.style({
        padding: '1.25rem',
        marginTop: '0.5rem',
        marginBottom: '2rem',
        background: Theme.background.modal,
        borderRadius: '1rem'
    });
    exports.inputTokenContainerStyle = components_12.Styles.style({
        padding: '0.5rem 1rem',
        marginInline: '-15px'
    });
    exports.customTokenInputStyle = components_12.Styles.style({
        $nest: {
            '#inputAmount input': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        }
    });
    exports.customSecondTokenInputStyle = components_12.Styles.style({
        opacity: 0.6,
        $nest: {
            '#inputAmount input': {
                cursor: 'default !important'
            },
            'i-button': {
                cursor: 'default !important',
                opacity: '0.8 !important'
            }
        }
    });
});
define("@scom/scom-xchain-swap/formSchema.ts", ["require", "exports", "@scom/scom-network-picker", "@scom/scom-token-input", "@scom/scom-xchain-swap/store/index.ts", "@scom/scom-xchain-swap/data.json.ts", "@scom/scom-token-list"], function (require, exports, scom_network_picker_1, scom_token_input_1, index_11, data_json_2, scom_token_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getProjectOwnerSchema = exports.getBuilderSchema = void 0;
    const chainIds = (data_json_2.default.supportedNetworks || []).map(v => v.chainId);
    const networks = chainIds.map(v => { return { chainId: v }; });
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
    };
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
    };
    function getBuilderSchema() {
        return {
            dataSchema: {
                type: 'object',
                properties: {
                    // currentURLHash: {
                    //     title: '$current_url_hash',
                    //     type: 'string'
                    // },
                    // urlParamsEnabled: {
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
                            //     scope: '#/properties/urlParamsEnabled'
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
                let networkPickers = [];
                let tokenInputs = [];
                return {
                    '#/properties/networks/properties/chainId': {
                        render: () => {
                            const networkPicker = new scom_network_picker_1.default(undefined, {
                                type: 'combobox',
                                networks
                            });
                            return networkPicker;
                        },
                        getData: (control) => {
                            return control.selectedNetwork?.chainId;
                        },
                        setData: async (control, value) => {
                            await control.ready();
                            control.setNetworkByChainId(value);
                        }
                    },
                    '#/properties/tokens/properties/chainId': {
                        render: () => {
                            const idx = networkPickers.length;
                            networkPickers[idx] = new scom_network_picker_1.default(undefined, {
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
                        getData: (control) => {
                            return control.selectedNetwork?.chainId;
                        },
                        setData: async (control, value) => {
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
                            tokenInputs[idx] = new scom_token_input_1.default(undefined, {
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
                        getData: (control) => {
                            return control.token?.address || control.token?.symbol;
                        },
                        setData: (control, value, rowData) => {
                            if (rowData)
                                control.chainId = rowData.chainId;
                            if (!control.chainId && value) {
                                let chainId;
                                let token;
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
                                }
                                else {
                                    for (const network of networks) {
                                        if (scom_token_list_1.ChainNativeTokenByChainId[network.chainId]?.symbol?.toLowerCase() === address) {
                                            chainId = network.chainId;
                                            break;
                                        }
                                    }
                                }
                                control.chainId = chainId;
                                control.tokenDataListProp = getSupportedTokens(chainId);
                                if (token) {
                                    control.token = token;
                                }
                                else {
                                    control.address = value;
                                }
                            }
                            else {
                                control.address = value;
                            }
                        }
                    }
                };
            }
        };
    }
    exports.getBuilderSchema = getBuilderSchema;
    const getSupportedTokens = (chainId) => {
        return index_11.DefaultERC20Tokens[chainId] || [];
    };
    function getProjectOwnerSchema() {
        return null;
    }
    exports.getProjectOwnerSchema = getProjectOwnerSchema;
});
define("@scom/scom-xchain-swap/model/configModel.ts", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-swap/formSchema.ts", "@scom/scom-xchain-swap/crosschain-utils/index.ts", "@scom/scom-commission-fee-setup", "@scom/scom-token-list", "@scom/scom-xchain-swap/data.json.ts"], function (require, exports, components_13, formSchema_1, index_12, scom_commission_fee_setup_1, scom_token_list_2, data_json_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigModel = void 0;
    const Theme = components_13.Styles.Theme.ThemeVars;
    class ConfigModel {
        constructor(module, state, options) {
            this.options = {
                refreshWidget: async () => { },
                resetRpcWallet: () => { },
                setContainerTag: (value) => { },
                updateTheme: () => { }
            };
            this._tokens = [];
            this._data = {
                defaultChainId: 0,
                wallets: [],
                tokens: [],
                networks: []
            };
            this.getTokenObjArr = (tokens) => {
                let tokenObjArr = [];
                for (let token of tokens) {
                    let tokenMap = scom_token_list_2.tokenStore.getTokenMapByChainId(token.chainId);
                    const tokenAddress = token.address?.startsWith('0x') ? token.address.toLowerCase() : scom_token_list_2.ChainNativeTokenByChainId[token.chainId].symbol;
                    const tokenObj = tokenMap[tokenAddress];
                    if (tokenObj) {
                        tokenObjArr.push({ ...tokenObj, chainId: token.chainId });
                    }
                }
                return tokenObjArr;
            };
            this.state = state;
            this.module = module;
            this.options = options;
        }
        get defaultChainId() {
            return this._data.defaultChainId;
        }
        set defaultChainId(value) {
            this._data.defaultChainId = value;
        }
        get wallets() {
            return this._data.wallets ?? [];
        }
        set wallets(value) {
            this._data.wallets = value;
        }
        get networks() {
            return this._data.networks ?? [];
        }
        set networks(value) {
            this._data.networks = value;
        }
        get showHeader() {
            return this._data.showHeader ?? true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        get showFooter() {
            return this._data.showFooter ?? true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
        }
        get currentURLHash() {
            return this._data.currentURLHash ?? '';
        }
        set currentURLHash(value) {
            this._data.currentURLHash = value;
        }
        get recordUrl() {
            return this._data.recordUrl ?? '';
        }
        set recordUrl(value) {
            this._data.recordUrl = value;
        }
        get urlParamsEnabled() {
            return this._data.urlParamsEnabled;
        }
        set urlParamsEnabled(value) {
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
        async setData(value) {
            this._data = value;
            this.state.setNetworkConfig(value.networks);
            for (let network of this._data.networks) {
                scom_token_list_2.tokenStore.updateTokenMapData(network.chainId);
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
        setTag(value) {
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
        updateTag(type, value) {
            this.module.tag[type] = this.module.tag[type] ?? {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.module.tag[type][prop] = value[prop];
            }
        }
        async loadCommissionFee() {
            if (this._data.campaignId && this.state.embedderCommissionFee === undefined) {
                const commissionRate = await (0, index_12.getCommissionRate)(this.state, this._data.campaignId);
                this.state.embedderCommissionFee = commissionRate;
            }
        }
        getBuilderActions(category) {
            const formSchema = (0, formSchema_1.getBuilderSchema)();
            const dataSchema = formSchema.dataSchema;
            const uiSchema = formSchema.uiSchema;
            const customControls = formSchema.customControls();
            let self = this;
            const actions = [
                {
                    name: 'Commissions',
                    icon: 'dollar-sign',
                    command: (builder, userInputData) => {
                        let _oldData = {
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        return {
                            execute: async () => {
                                _oldData = { ...this._data };
                                if (userInputData.commissions)
                                    this._data.commissions = userInputData.commissions;
                                this.options.refreshWidget();
                                if (builder?.setData)
                                    builder.setData(this._data);
                            },
                            undo: () => {
                                this._data = { ..._oldData };
                                this.options.refreshWidget();
                                if (builder?.setData)
                                    builder.setData(this._data);
                            },
                            redo: () => { }
                        };
                    },
                    customUI: {
                        render: async (data, onConfirm) => {
                            const vstack = new components_13.VStack();
                            await self.loadCommissionFee();
                            const config = new scom_commission_fee_setup_1.default(null, {
                                commissions: self._data.commissions || [],
                                fee: self.state.embedderCommissionFee,
                                networks: self._data.networks
                            });
                            const hstack = new components_13.HStack(null, {
                                verticalAlignment: 'center',
                            });
                            const button = new components_13.Button(hstack, {
                                caption: 'Confirm',
                                width: '100%',
                                height: 40,
                                font: { color: Theme.colors.primary.contrastText }
                            });
                            vstack.append(config);
                            vstack.append(hstack);
                            button.onClick = async () => {
                                const commissions = config.commissions;
                                if (onConfirm)
                                    onConfirm(true, { commissions });
                            };
                            return vstack;
                        }
                    }
                }
            ];
            if (category && category !== 'offers') {
                actions.push({
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { networks, tokens, ...themeSettings } = userInputData;
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
                                if (builder?.setData)
                                    builder.setData(this._data);
                                oldTag = JSON.parse(JSON.stringify(this.module.tag));
                                if (builder?.setTag)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                                this.options.setContainerTag(themeSettings);
                            },
                            undo: () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.options.refreshWidget();
                                if (builder?.setData)
                                    builder.setData(this._data);
                                this.module.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder?.setTag)
                                    builder.setTag(this.module.tag);
                                else
                                    this.setTag(this.module.tag);
                                this.options.setContainerTag(this.module.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: uiSchema,
                    customControls: customControls
                });
            }
            return actions;
        }
        getProjectOwnerActions() {
            const formSchema = (0, formSchema_1.getProjectOwnerSchema)();
            if (!formSchema)
                return [];
            const propertiesDataSchema = formSchema.general.dataSchema;
            const propertiesUISchema = formSchema.general.uiSchema;
            const actions = [
                {
                    name: 'Settings',
                    userInputDataSchema: propertiesDataSchema,
                    userInputUISchema: propertiesUISchema
                }
            ];
            return actions;
        }
        determineActionsByTarget(target, category) {
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
                    getActions: (category) => {
                        return this.determineActionsByTarget('projectOwner', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        this.setData(value);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: (category) => {
                        return this.determineActionsByTarget('builder', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        const defaultData = data_json_3.default.defaultBuilderData;
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
                        };
                    },
                    bindOnChanged: (element, callback) => {
                        element.onChanged = async (data) => {
                            const commissions = data.commissions;
                            if (commissions) {
                                this.supportedChainIds = commissions.map(v => v.chainId).filter((v, i, a) => a.indexOf(v) === i);
                            }
                            let resultingData = {
                                ...self._data,
                                ...data
                            };
                            await this.setData(resultingData);
                            await callback(data);
                        };
                    },
                    getData: async () => {
                        await self.loadCommissionFee();
                        const fee = this.state.embedderCommissionFee;
                        return { ...this._data, fee };
                    },
                    setData: async (properties, linkParams) => {
                        let resultingData = {
                            ...properties
                        };
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
                    getActions: (category) => {
                        const actions = this.determineActionsByTarget('builder', 'category');
                        const editAction = actions.find(action => action.name === 'Edit');
                        return editAction ? [editAction] : [];
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
    }
    exports.ConfigModel = ConfigModel;
});
define("@scom/scom-xchain-swap/model/xchainModel.ts", ["require", "exports", "@scom/scom-xchain-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-xchain-swap/global/index.ts", "@ijstech/eth-contract"], function (require, exports, index_13, scom_token_list_3, index_14, eth_contract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainModel = void 0;
    const ROUNDING_NUMBER = eth_contract_1.BigNumber.ROUND_DOWN;
    class XchainModel {
        constructor(module, state, configModel, options) {
            this.options = {
                showModalFees: () => { },
            };
            this._supportedChainList = [];
            this.getSupportedTokens = (tokens, chainId) => {
                return tokens.filter(token => token.chainId === chainId) || [];
            };
            this.getSupportedChainList = (updateList) => {
                const list = this.state.getMatchNetworks({ isDisabled: false });
                const testnetSupportedList = list.filter(v => v.isTestnet && this.configModel.networks.some(n => n.chainId == v.chainId));
                const mainnetSupportedList = list.filter(v => !v.isTestnet && this.configModel.networks.some(n => n.chainId == v.chainId));
                const isMainnet = mainnetSupportedList.some((item) => item.chainId == this.chainId);
                const supportList = isMainnet ? mainnetSupportedList : testnetSupportedList;
                if (updateList)
                    this._supportedChainList = supportList;
                return supportList;
            };
            this.onUpdateEstimatedPosition = (isFrom, reverseRouting = false) => {
                if (this.isFrom != isFrom) {
                    this.isFrom = isFrom;
                }
            };
            this.isEstimated = (tokenPosition, strict = false) => {
                if (tokenPosition === 'from') {
                    return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
                }
                else if (tokenPosition === 'to') {
                    return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
                }
                else {
                    return false;
                }
            };
            this.isMaxDisabled = () => {
                const address = this.fromToken?.address || this.fromToken?.symbol;
                let balance = this.getBalance(this.fromToken);
                return !address || new eth_contract_1.BigNumber(balance).isLessThanOrEqualTo(0);
            };
            this.module = module;
            this.state = state;
            this.configModel = configModel;
            this.options = options;
            this.fromInputValue = new eth_contract_1.BigNumber(0);
            this.toInputValue = new eth_contract_1.BigNumber(0);
        }
        get isFrom() {
            return this._isFrom;
        }
        set isFrom(value) {
            this._isFrom = value;
        }
        get fromInputValue() {
            return this._fromInputValue;
        }
        set fromInputValue(value) {
            this._fromInputValue = value;
        }
        get toInputValue() {
            return this._toInputValue;
        }
        set toInputValue(value) {
            this._toInputValue = value;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            this._record = value;
        }
        get fromToken() {
            return this._fromToken;
        }
        set fromToken(token) {
            this._fromToken = token;
        }
        get toToken() {
            return this._toToken;
        }
        set toToken(token) {
            this._toToken = token;
        }
        get desChain() {
            return this._desChain;
        }
        set desChain(value) {
            this._desChain = value;
        }
        get srcChain() {
            return this._srcChain;
        }
        set srcChain(value) {
            this._srcChain = value;
        }
        get targetChainId() {
            return this._targetChainId;
        }
        set targetChainId(value) {
            this._targetChainId = value;
        }
        get urlParamsEnabled() {
            return this.configModel.urlParamsEnabled;
        }
        get urlParams() {
            return this._urlParams;
        }
        set urlParams(value) {
            this._urlParams = value;
        }
        get isInsufficientBalance() {
            if (!this.fromToken && !this.record)
                return false;
            const balance = this.getBalance(this.fromToken);
            return this.record?.fromAmount && this.record.fromAmount.gt(balance);
        }
        get isValidToken() {
            try {
                return !!this.fromToken.symbol && !!this.toToken.symbol;
            }
            catch {
                return false;
            }
        }
        get targetTokenMap() {
            const chainId = this.desChain?.chainId || this.targetChainId || this.state.getChainId();
            // return tokenStore.getTokenMapByChainId(chainId);
            return index_13.DefaultERC20Tokens[chainId];
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
        set chainId(value) {
            this._chainId = value;
        }
        get fromTokenSymbol() {
            return this._fromTokenSymbol;
        }
        set fromTokenSymbol(value) {
            this._fromTokenSymbol = value;
        }
        get toTokenSymbol() {
            return this._toTokenSymbol;
        }
        set toTokenSymbol(value) {
            this._toTokenSymbol = value;
        }
        getBalance(token) {
            if (!token)
                return '0';
            let tokenBalances = scom_token_list_3.tokenStore.getTokenBalancesByChainId(token.chainId);
            if (!tokenBalances)
                return '0';
            const address = token.address || '';
            let balance = address ? tokenBalances[address.toLowerCase()] ?? '0' : tokenBalances[token.symbol] || '0';
            return balance;
        }
        getInputValue(isFrom) {
            const token = isFrom ? this.fromToken : this.toToken;
            const value = isFrom ? this.fromInputValue : this.toInputValue;
            if (!value || value.isNaN())
                return '';
            const newValue = value.dp(token?.decimals || 18, ROUNDING_NUMBER).toFixed();
            return newValue;
        }
        calculateDefaultTokens() {
            let firstDefaultToken;
            let secondDefaultToken;
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
            };
        }
        updateToken(token, isFrom, tokenInput) {
            if (!token)
                return;
            if (isFrom) {
                this.fromToken = token;
                if (this.fromInputValue.gt(0)) {
                    const formattedValue = new eth_contract_1.BigNumber(this.fromInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
                    if (!this.fromInputValue.eq(formattedValue)) {
                        if (tokenInput) {
                            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
                        }
                        this.fromInputValue = new eth_contract_1.BigNumber(formattedValue);
                    }
                }
                else if (this.fromInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(true);
                }
            }
            else {
                this.toToken = token;
                if (this.toInputValue.gt(0)) {
                    const formattedValue = new eth_contract_1.BigNumber(this.toInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
                    if (!this.toInputValue.eq(formattedValue)) {
                        if (tokenInput) {
                            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
                        }
                        this.toInputValue = new eth_contract_1.BigNumber(formattedValue);
                    }
                }
                else if (this.toInputValue.isZero()) {
                    this.onUpdateEstimatedPosition(false);
                }
            }
        }
        async updateChain(network) {
            const oldDestination = this.desChain;
            try {
                this.desChain = network;
                this.targetChainId = this.desChain.chainId;
                await scom_token_list_3.tokenStore.updateTokenBalancesByChainId(this.targetChainId);
            }
            catch (err) {
                console.log('err', err);
                if (oldDestination) {
                    this.desChain = oldDestination;
                }
                else {
                    this.desChain = this._supportedChainList[0];
                }
            }
        }
        getTradeFeeExactAmount() {
            const tradeFee = this.record?.feeAmounts.totalFeeAmount;
            if (tradeFee) {
                return `${(0, index_14.formatNumber)(tradeFee)} ${this.fromToken?.symbol}`;
            }
            return '-';
        }
        getFeeDetails() {
            if (this.record) {
                let feeAmounts = this.record.feeAmounts;
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
                ];
                return detail;
            }
            return [];
        }
        getPriceInfo() {
            const tradeFeeExactAmount = this.getTradeFeeExactAmount();
            const fees = this.getFeeDetails();
            const countFees = fees.length;
            let feeTooltip;
            if (countFees === 1) {
                const fee = fees[0];
                feeTooltip = `${fee.description}`;
            }
            else if (countFees > 1) {
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
            return info.filter((f) => !f.isHidden);
        }
        getAddressFromUrl() {
            if (!this.urlParamsEnabled)
                return;
            const chainId = this.state.getChainId();
            const wHref = window.location.href;
            const startIdx = wHref.indexOf('?');
            const search = wHref.substring(startIdx, wHref.length);
            const queryString = search;
            const urlParams = new URLSearchParams(queryString);
            const tokenAddress = (urlParams.get('token') || '').toLowerCase();
            const tokenList = scom_token_list_3.tokenStore.getTokenList(chainId);
            const token = tokenList.find(f => f.address?.toLowerCase() === tokenAddress) || tokenList.find(f => f.address);
            this.fromTokenSymbol = token?.symbol || '';
            this.toTokenSymbol = token?.symbol || '';
            const targetId = Number(urlParams.get('toChainId'));
            this.targetChainId = (targetId === 0 || targetId === chainId) ? this.defaultTargetChainId : targetId;
            if (this.fromInputValue.eq(0) && this.toInputValue.eq(0)) {
                const fromAmount = new eth_contract_1.BigNumber(urlParams.get('fromAmount'));
                this.fromInputValue = fromAmount.isNaN() || fromAmount.isZero() ? new eth_contract_1.BigNumber(1) : fromAmount.abs();
            }
        }
        redirectToken() {
            if (!this.urlParamsEnabled)
                return;
            const token = this.fromToken ?? scom_token_list_3.tokenStore.getTokenList(this.chainId).find(v => v.address?.toLowerCase() === this.fromTokenSymbol?.toLowerCase() || v.symbol.toLowerCase() === this.fromTokenSymbol?.toLowerCase());
            let queryRouter = {
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
            }
            else {
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
            if (!this.configModel.currentURLHash || !window.location.hash.includes(this.configModel.currentURLHash))
                return;
            const queryString = new URLSearchParams(queryRouter).toString();
            let newURL = window.location.protocol + "//" + window.location.host;
            if (location.hash.split("?")[0]) {
                newURL += '/' + location.hash.split("?")[0];
            }
            newURL += '?' + queryString;
            window.history.replaceState({}, '', newURL);
        }
    }
    exports.XchainModel = XchainModel;
});
define("@scom/scom-xchain-swap/model/index.ts", ["require", "exports", "@scom/scom-xchain-swap/model/configModel.ts", "@scom/scom-xchain-swap/model/xchainModel.ts"], function (require, exports, configModel_1, xchainModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XchainModel = exports.ConfigModel = void 0;
    Object.defineProperty(exports, "ConfigModel", { enumerable: true, get: function () { return configModel_1.ConfigModel; } });
    Object.defineProperty(exports, "XchainModel", { enumerable: true, get: function () { return xchainModel_1.XchainModel; } });
});
define("@scom/scom-xchain-swap", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-xchain-swap/store/index.ts", "@scom/scom-xchain-swap/global/index.ts", "@scom/scom-xchain-swap/crosschain-utils/index.ts", "@scom/scom-xchain-swap/price-info/index.tsx", "@scom/scom-token-list", "@scom/scom-xchain-swap/expert-mode-settings/index.tsx", "@scom/scom-xchain-swap/transaction-settings/index.tsx", "@scom/scom-xchain-swap/index.css.ts", "@scom/scom-xchain-swap/data.json.ts", "@scom/scom-blocknote-sdk", "@scom/scom-xchain-swap/languages/index.ts", "@scom/scom-xchain-swap/model/index.ts", "@scom/scom-xchain-swap/assets.ts"], function (require, exports, components_14, eth_wallet_6, index_15, index_16, index_17, index_18, scom_token_list_4, index_19, index_20, index_css_4, data_json_4, scom_blocknote_sdk_1, index_21, index_22, assets_2) {
    "use strict";
    var ScomXchainSwap_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApprovalStatus = void 0;
    const Theme = components_14.Styles.Theme.ThemeVars;
    var ApprovalStatus;
    (function (ApprovalStatus) {
        ApprovalStatus[ApprovalStatus["TO_BE_APPROVED"] = 0] = "TO_BE_APPROVED";
        ApprovalStatus[ApprovalStatus["APPROVING"] = 1] = "APPROVING";
        ApprovalStatus[ApprovalStatus["NONE"] = 2] = "NONE";
    })(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
    const defaultInput = '1';
    let ScomXchainSwap = ScomXchainSwap_1 = class ScomXchainSwap extends components_14.Module {
        constructor(parent, options) {
            super(parent, options);
            this.swapButtonText = '';
            this._lastUpdated = 0;
            this.lastUpdatedText = '';
            this.estimateMsg = '';
            this.payOrReceiveText = '';
            // Cross Chain
            this.crossChainApprovalStatus = ApprovalStatus.NONE;
            this.oldSupportedChainList = [];
            this.isInited = false;
            this.isVaultEmpty = false;
            this.tag = {};
            this.closeSwitchNetwork = () => {
                this.modalSwitchNetwork.visible = false;
            };
            this.switchNetwork = async () => {
                const urlParams = this.xchainModel.urlParams;
                const _chainId = urlParams.get('chainId');
                const chainId = Number(_chainId);
                if (this.chainId === chainId)
                    return;
                if ((0, index_15.isWalletConnected)()) {
                    const chainId = this.state.getChainId();
                    const clientWallet = eth_wallet_6.Wallet.getClientInstance();
                    await clientWallet.switchNetwork(chainId);
                }
                this.modalSwitchNetwork.visible = false;
                if (!this.xchainModel.urlParamsEnabled)
                    return;
                const networkList = this.state.getSiteSupportedNetworks();
                const _targetId = Number(urlParams.get('toChainId'));
                const tokenAddress = urlParams.get('token') || '';
                const tokenList = scom_token_list_4.tokenStore.getTokenList(this.state.getChainId());
                const token = tokenList.find(f => f.address?.toLowerCase() === tokenAddress) || tokenList.find(f => f.address);
                this.xchainModel.fromTokenSymbol = token?.symbol || '';
                this.xchainModel.toTokenSymbol = token?.symbol || '';
                const targetId = (_targetId === 0 || _targetId === chainId) ? this.defaultTargetChainId : _targetId;
                if (token) {
                    this.xchainModel.fromToken = token;
                    this.xchainModel.toToken = scom_token_list_4.tokenStore.getTokenList(targetId).find(f => f.symbol?.toLowerCase() === token.symbol.toLowerCase());
                }
                this.xchainModel.chainId = chainId;
                const srcChain = networkList.find(f => f.chainId === chainId);
                if (!(0, index_15.isWalletConnected)()) {
                    await this.selectSourceChain(srcChain);
                }
                this.xchainModel.srcChain = srcChain;
                this.xchainModel.targetChainId = targetId;
                this.xchainModel.desChain = networkList.find(f => f.chainId === targetId);
                this.selectDestinationChain(this.xchainModel.desChain);
                this.xchainModel.redirectToken();
            };
            this.fixedNumber = (value) => {
                const val = typeof value === 'object' ? value : new eth_wallet_6.BigNumber(value);
                if (val.isNaN())
                    return '0';
                let formatted = '';
                if (val.gte(1)) {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumFractionDigits: 4 });
                }
                else {
                    formatted = val.toNumber().toLocaleString('en-US', { maximumSignificantDigits: 4 });
                }
                return formatted.replace(/,/g, '');
            };
            this.initWallet = async () => {
                try {
                    await eth_wallet_6.Wallet.getClientInstance().init();
                    const rpcWallet = this.state.getRpcWallet();
                    await rpcWallet.init();
                }
                catch (err) {
                    console.log(err);
                }
            };
            this.initializeWidgetConfig = async () => {
                setTimeout(async () => {
                    await this.initWallet();
                    this.xchainModel.getAddressFromUrl();
                    this.xchainModel.calculateDefaultTokens();
                    this.xchainModel.chainId = this.state.getChainId();
                    this.swapButtonText = this.getSwapButtonText();
                    await this.updateBalances();
                    await this.renderChainList();
                    await (0, index_17.getVaultGroups)(this.state, true);
                    this.initRoutes();
                    this.xchainModel.toInputValue = new eth_wallet_6.BigNumber(0);
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
                    }
                    else if (this.xchainModel.toInputValue.isGreaterThanOrEqualTo(0)) {
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
                    }, 1000);
                    this.lastUpdated = 0;
                    if (!this.xchainModel.record)
                        this.swapBtn.visible = false;
                    await this.onRenderPriceInfo();
                    this.xchainModel.redirectToken();
                    await this.handleAddRoute();
                });
            };
            this.onChainChange = async () => {
                this.xchainModel.chainId = this.state.getChainId();
                scom_token_list_4.tokenStore.updateTokenMapData(this.chainId);
                if (this.chainId != null && this.chainId != undefined)
                    this.swapBtn.visible = true;
                this.initializeWidgetConfig();
                this.swapButtonText = this.getSwapButtonText();
            };
            this.setDefaultToken = () => {
                const { desChain, targetChainId: mTargetChainId, targetTokenMap } = this.xchainModel;
                let lstTokenMap = Object.values(scom_token_list_4.tokenStore.getTokenMapByChainId(this.chainId));
                const supportedTokens = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.chainId) || [];
                lstTokenMap = lstTokenMap.filter(v => supportedTokens.some(token => token.address?.toLowerCase() === v.address?.toLowerCase()));
                const defaultCrossChainToken = lstTokenMap.find((v) => v.address);
                const targetChainId = desChain?.chainId || mTargetChainId || this.state.getChainId();
                const supportedTargetTokens = this.xchainModel.getSupportedTokens(this.configModel.tokens, targetChainId) || [];
                let lstTargetTokenMap = Object.values(targetTokenMap);
                lstTargetTokenMap = lstTargetTokenMap.filter((v) => supportedTargetTokens.some(token => token.address?.toLowerCase() === v.address?.toLowerCase()));
                const oswapIndex = lstTargetTokenMap.findIndex((item) => item.symbol === 'OSWAP');
                if (oswapIndex > 0) {
                    [lstTargetTokenMap[0], lstTargetTokenMap[oswapIndex]] = [lstTargetTokenMap[oswapIndex], lstTargetTokenMap[0]];
                }
                const { urlParamsEnabled, fromToken, toToken, fromTokenSymbol, toTokenSymbol } = this.xchainModel;
                const fromSymbol = urlParamsEnabled ? fromTokenSymbol : (fromTokenSymbol || fromToken?.symbol);
                const toSymbol = urlParamsEnabled ? toTokenSymbol : (toTokenSymbol || toToken?.symbol);
                const needToRedirectToken = urlParamsEnabled && (!fromTokenSymbol || !toTokenSymbol);
                if (fromSymbol && toSymbol) {
                    const firstObj = supportedTokens.find((item) => fromSymbol === item.symbol || fromSymbol === item.address);
                    const secondObj = lstTargetTokenMap.find((item) => toSymbol === item.symbol || toSymbol === item.address);
                    this.xchainModel.fromToken = firstObj || defaultCrossChainToken;
                    this.xchainModel.toToken = (secondObj || lstTargetTokenMap[0]);
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
                    this.xchainModel.fromInputValue = new eth_wallet_6.BigNumber(this.xchainModel.fromInputValue.toNumber() || defaultInput);
                    if (needToRedirectToken) {
                        this.xchainModel.redirectToken();
                    }
                }
                else {
                    this.xchainModel.fromInputValue = new eth_wallet_6.BigNumber(defaultInput);
                    const { firstDefaultToken, secondDefaultToken } = this.xchainModel.calculateDefaultTokens();
                    if (firstDefaultToken && secondDefaultToken) {
                        this.xchainModel.fromInputValue = new eth_wallet_6.BigNumber(defaultInput);
                        this.onUpdateToken(firstDefaultToken, true);
                        this.onUpdateToken(secondDefaultToken, false);
                        this.firstTokenInput.token = this.xchainModel.fromToken;
                        this.secondTokenInput.token = this.xchainModel.toToken;
                    }
                    this.xchainModel.redirectToken();
                }
            };
            this.getMinReceivedMaxSold = () => {
                const slippageTolerance = this.state.getSlippageTolerance();
                if (!slippageTolerance || !this.xchainModel.record)
                    return null;
                const amount = new eth_wallet_6.BigNumber(this.xchainModel.isFrom ? this.xchainModel.record.fromAmount : this.xchainModel.record.toAmount);
                if (amount.isZero())
                    return null;
                const minReceivedMaxSold = amount.dividedBy(1 + slippageTolerance / 100).toNumber();
                return minReceivedMaxSold;
            };
            this.onSwapConfirming = () => {
                if (!this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = true;
                this.swapButtonText = this.getSwapButtonText();
            };
            this.onSwapConfirmed = async () => {
                if (this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = false;
                this.swapButtonText = this.getSwapButtonText();
                await this.handleAddRoute();
                this.showViewOrderModal();
            };
            this.onSubmit = async () => {
                try {
                    this.swapModal.visible = false;
                    (0, index_16.showResultMessage)(this.txStatusModal, 'warning', this.i18n.get('$swapping', {
                        from: `${(0, index_16.formatNumber)(this.xchainModel.fromInputValue, 4)} ${this.xchainModel.fromToken?.symbol} `,
                        to: `${(0, index_16.formatNumber)(this.xchainModel.toInputValue, 4)} ${this.xchainModel.toToken?.symbol} `
                    }));
                    if (this.xchainModel.toToken && this.xchainModel.fromToken && this.xchainModel.desChain) {
                        const { error } = await (0, index_17.createBridgeVaultOrder)(this.state, {
                            vaultAddress: this.xchainModel.record.fromVault.vaultAddress,
                            targetChainId: this.xchainModel.desChain.chainId,
                            tokenIn: this.xchainModel.fromToken,
                            tokenOut: this.xchainModel.toToken,
                            amountIn: this.xchainModel.record.fromAmount.toFixed(),
                            minAmountOut: this.xchainModel.record.toAmount.dividedBy(new eth_wallet_6.BigNumber("1").plus(index_15.orderMinOutRate)).toFixed(),
                        });
                        if (error) {
                            (0, index_16.showResultMessage)(this.txStatusModal, 'error', error);
                        }
                    }
                }
                catch (error) {
                    console.error(error);
                }
            };
            this.onApproveRouterMax = () => {
                (0, index_16.showResultMessage)(this.txStatusModal, 'warning', this.i18n.get('$approving'));
                this.setApprovalModalSpenderAddress();
                this.approvalModelAction.doApproveAction(this.xchainModel.fromToken, this.xchainModel.fromInputValue.toString(), this.xchainModel.record);
            };
            this.onSetMaxBalance = async (value) => {
                if (!this.xchainModel.fromToken?.symbol)
                    return;
                this.xchainModel.isFrom = false;
                const address = this.xchainModel.fromToken?.address || this.xchainModel.fromToken?.symbol;
                let balance = this.xchainModel.getBalance(this.xchainModel.fromToken);
                let inputVal = new eth_wallet_6.BigNumber(balance);
                if (!address) {
                    inputVal = new eth_wallet_6.BigNumber(0);
                }
                if (value == 0 || value) {
                    inputVal = inputVal.multipliedBy(value).dividedBy(100);
                }
                if (inputVal.eq(this.xchainModel.fromInputValue))
                    return;
                this.xchainModel.fromInputValue = inputVal;
                this.firstTokenInput.value = this.xchainModel.fromInputValue.toString();
                if (this.xchainReceiveContainer && this.xchainReceiveContainer.childNodes[1]) {
                    this.xchainModel.redirectToken();
                }
                await this.handleAddRoute();
            };
            this.onRefresh = async (source) => {
                source.enabled = false;
                await this.updateBalances();
                await this.handleAddRoute();
                source.enabled = true;
            };
            this.onSetting = () => {
                this.transactionModal.showModal();
            };
            this.onShowSourceChain = () => {
                if (this.isSrcOpened) {
                    this.mdSourceChain.visible = false;
                }
                else {
                    this.isSrcOpened = true;
                    this.mdSourceChain.visible = true;
                    setTimeout(() => {
                        this.mdSourceChain.refresh();
                    }, 1);
                }
            };
            this.onCloseSourceChain = () => {
                setTimeout(() => {
                    this.isSrcOpened = false;
                });
            };
            this.onShowDestinationChain = () => {
                if (this.isDesOpened) {
                    this.mdDestinationChain.visible = false;
                }
                else {
                    this.isDesOpened = true;
                    this.mdDestinationChain.visible = true;
                    setTimeout(() => {
                        this.mdDestinationChain.refresh();
                    }, 1);
                }
            };
            this.onCloseDesChain = () => {
                setTimeout(() => {
                    this.isDesOpened = false;
                });
            };
            this.disableSelectChain = (disabled, isDes) => {
                const btnChain = isDes ? this.btnDestinationChain : this.btnSourceChain;
                if (btnChain)
                    btnChain.enabled = !disabled;
            };
            this.selectSourceChain = async (network) => {
                const { chainId, isCrossChainSupported } = network;
                const srcChain = this.xchainModel.srcChain;
                if ((srcChain && srcChain.chainId != chainId) || !srcChain) {
                    const rpcWallet = this.state.getRpcWallet();
                    await rpcWallet.switchNetwork(network.chainId);
                    if (!isCrossChainSupported) {
                        this.selectDestinationChain(network);
                    }
                    this.xchainModel.srcChain = network;
                    const networkImg = this.btnSourceChain.querySelector('i-image');
                    if (networkImg)
                        this.btnSourceChain.removeChild(networkImg);
                    this.btnSourceChain.prepend(this.$render("i-image", { width: 30, height: 30, url: this.xchainModel.srcChain.image }));
                    this.btnSourceChain.caption = `${this.xchainModel.srcChain.chainId} - ${this.xchainModel.srcChain.chainName} `;
                }
            };
            this.selectDestinationChain = async (network) => {
                this.disableSelectChain(true, true);
                await this.xchainModel.updateChain(network);
                const networkImg = this.btnDestinationChain.querySelector('i-image');
                if (networkImg)
                    this.btnDestinationChain.removeChild(networkImg);
                if (this.xchainModel.desChain) {
                    this.xchainModel.targetChainId = this.xchainModel.desChain.chainId;
                    this.btnDestinationChain.prepend(this.$render("i-image", { width: 30, height: 30, url: this.xchainModel.desChain.image }));
                    this.btnDestinationChain.caption = `${this.xchainModel.desChain.chainId} - ${this.xchainModel.desChain.chainName} `;
                }
                else {
                    this.btnDestinationChain.caption = '$destination_chain';
                }
                this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId);
                this.disableSelectChain(false, true);
            };
            this.onSourceChainChanged = () => {
                this.xchainModel.getSupportedChainList(true);
                if (!this.chainId)
                    this.xchainModel.chainId = this.supportedChainList[0].chainId;
                const currentNetwork = this.supportedChainList.find((f) => f.chainId == this.chainId);
                this.xchainModel.srcChain = currentNetwork;
                const networkImg = this.btnSourceChain.querySelector('i-image');
                if (networkImg)
                    this.btnSourceChain.removeChild(networkImg);
                if (this.xchainModel.srcChain) {
                    this.btnSourceChain.prepend(this.$render("i-image", { width: 30, height: 30, url: this.xchainModel.srcChain.image }));
                    this.btnSourceChain.caption = `${this.xchainModel.srcChain.chainId} - ${this.xchainModel.srcChain.chainName} `;
                }
                else {
                    this.btnSourceChain.caption = '$source_chain';
                }
            };
            this.onSelectSourceChain = async (obj) => {
                this.mdSourceChain.visible = false;
                if (obj.chainId === this.xchainModel.srcChain?.chainId)
                    return;
                this.firstTokenInput.chainId = obj.chainId;
                await this.selectSourceChain(obj);
            };
            this.onSelectDestinationChain = async (obj) => {
                this.mdDestinationChain.visible = false;
                if (obj.chainId === this.xchainModel.desChain?.chainId)
                    return;
                this.secondTokenInput.chainId = obj.chainId;
                await this.selectDestinationChain(obj);
                this.initializeWidgetConfig();
            };
            this.setDefaultChain = async () => {
                if (this.supportedChainList && this.supportedChainList.length) {
                    let obj = this.supportedChainList.find((f) => f.chainId == this.chainId);
                    if (!obj)
                        obj = this.supportedChainList[0];
                    if (!this.xchainModel.srcChain && obj) {
                        await this.selectSourceChain(obj);
                    }
                    this.onSourceChainChanged();
                    const targetId = this.xchainModel.targetChainId === this.chainId ? this.defaultTargetChainId : (this.xchainModel.targetChainId || this.defaultTargetChainId);
                    const targetChain = this.supportedChainList.find((f) => f.chainId == targetId);
                    const isSupported = targetChain && targetChain.isCrossChainSupported;
                    if ((!this.xchainModel.desChain || this.xchainModel.desChain?.chainId === this.chainId) && isSupported) {
                        await this.selectDestinationChain(targetChain);
                    }
                    else if (!isSupported && obj) {
                        await this.selectDestinationChain(obj);
                    }
                    else {
                        await scom_token_list_4.tokenStore.updateTokenBalancesByChainId(this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
                        if (this.xchainModel.toToken) {
                            const balance = this.xchainModel.getBalance(this.xchainModel.toToken);
                            this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${(0, index_16.formatNumber)(balance, 4)} ${this.xchainModel.toToken.symbol} `;
                        }
                        this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
                    }
                    const networkImg = this.btnDestinationChain.querySelector('i-image');
                    if (networkImg)
                        this.btnDestinationChain.removeChild(networkImg);
                    if (this.xchainModel.desChain) {
                        this.btnDestinationChain.prepend(this.$render("i-image", { width: 30, height: 30, url: this.xchainModel.desChain.image }));
                        this.btnDestinationChain.caption = `${this.xchainModel.desChain.chainId} - ${this.xchainModel.desChain.chainName} `;
                    }
                    else {
                        this.btnDestinationChain.caption = '$destination_chain';
                    }
                }
                else {
                    this.secondTokenInput.tokenDataListProp = this.xchainModel.getSupportedTokens(this.configModel.tokens, this.xchainModel.desChain?.chainId || this.xchainModel.targetChainId);
                }
            };
            this.initChainElm = (network, isDes) => {
                const { image, chainName, chainId } = network;
                const hStack = new components_14.HStack(undefined, {
                    gap: 8,
                    verticalAlignment: 'center',
                    cursor: 'pointer'
                });
                const img = new components_14.Image(undefined, {
                    url: image,
                    width: 30,
                    height: 30
                });
                const lb = new components_14.Label(undefined, {
                    caption: `${chainId} - ${chainName} `
                });
                hStack.appendChild(img);
                hStack.appendChild(lb);
                if (isDes) {
                    this.listElmDesChain.appendChild(hStack);
                    if (network.chainId === this.chainId) {
                        hStack.classList.add('disabled');
                        hStack.tooltip.content = this.i18n.get('$the_target_chain_cannot_be_the_same_as_the_source_chain');
                    }
                    else {
                        hStack.onClick = () => this.onSelectDestinationChain(network);
                    }
                }
                else {
                    if (!this.isMetaMask && (0, index_15.isWalletConnected)()) {
                        hStack.tooltip.content = this.i18n.get('$xchain_dapp_supports_this_network_please_switch_network_in_the_connected_wallet', {
                            chainName,
                            chainId: `${chainId}`
                        });
                        hStack.style.cursor = 'default';
                    }
                    hStack.onClick = () => this.onSelectSourceChain(network);
                    this.listElmSrcChain.appendChild(hStack);
                }
            };
            this.renderChainList = async () => {
                this.oldSupportedChainList = this.supportedChainList;
                this.xchainModel.getSupportedChainList(true);
                if (this.oldSupportedChainList[0]?.chainId !== this.supportedChainList[0]?.chainId) {
                    this.xchainModel.srcChain = undefined;
                    this.xchainModel.desChain = undefined;
                }
                ;
                this.listElmSrcChain.clearInnerHTML();
                this.listElmDesChain.clearInnerHTML();
                this.supportedChainList.forEach((network) => {
                    this.initChainElm(network);
                    if (network.isCrossChainSupported) {
                        this.initChainElm(network, true);
                    }
                });
                await this.setDefaultChain();
            };
            this.showViewOrderModal = () => {
                if (!this.configModel.recordUrl)
                    return;
                this.modalViewOrder.visible = true;
            };
            this.closeViewOrderModal = () => {
                this.modalViewOrder.visible = false;
            };
            this.onViewOrder = () => {
                this.modalViewOrder.visible = false;
                window.open(this.configModel.recordUrl);
            };
            this.showModalFees = () => {
                const fees = this.xchainModel.getFeeDetails();
                this.feesInfo.clearInnerHTML();
                fees.forEach((fee) => {
                    this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 10 }, border: { bottom: { color: Theme.colors.info.light, width: '2px', style: 'solid' } }, padding: { bottom: 16 } },
                        this.$render("i-hstack", { verticalAlignment: "center" },
                            this.$render("i-label", { caption: fee.title, margin: { right: 4 } }),
                            this.$render("i-icon", { name: "question-circle", width: 15, height: 15, fill: Theme.text.primary, tooltip: { content: fee.description }, "data-placement": "right" })),
                        this.$render("i-label", { class: "ml-auto", caption: `${(0, index_16.formatNumber)(fee.value)} ${this.xchainModel.fromToken?.symbol} ` })));
                });
                this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 16 } },
                    this.$render("i-hstack", { verticalAlignment: "center" },
                        this.$render("i-label", { caption: this.i18n.get('$total_transaction_fee') })),
                    this.$render("i-label", { class: "ml-auto", caption: this.xchainModel.getTradeFeeExactAmount() })));
                this.btnCloseFees.caption = this.i18n.get('$close');
                this.modalFees.title = this.i18n.get('$transaction_fee_details');
                this.modalFees.visible = true;
            };
            this.closeModalFees = () => {
                this.modalFees.visible = false;
            };
            this.initModels();
        }
        onLoad() {
            this.checkUrl();
            this.xchainModel.redirectToken();
        }
        addBlock(blocknote, executeFn, callbackFn) {
            const blockType = 'xchain-swap';
            const moduleData = {
                name: "@scom/scom-xchain-swap",
                localPath: "scom-xchain-swap"
            };
            function getData(href) {
                const widgetData = (0, scom_blocknote_sdk_1.parseUrl)(href);
                if (widgetData) {
                    const { module, properties } = widgetData;
                    if (module.localPath === moduleData.localPath)
                        return { ...properties };
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
            }, {
                render: (block) => {
                    const wrapper = new components_14.Panel();
                    const props = JSON.parse(JSON.stringify(block.props));
                    const customElm = new ScomXchainSwap_1(wrapper, { ...props });
                    if (typeof callbackFn === 'function')
                        callbackFn(customElm, block);
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
                            getAttrs: (element) => {
                                if (typeof element === "string") {
                                    return false;
                                }
                                const href = element.getAttribute('href');
                                if (href)
                                    return getData(href);
                                return false;
                            },
                            priority: 402,
                            node: blockType
                        },
                        {
                            tag: "p",
                            getAttrs: (element) => {
                                if (typeof element === "string") {
                                    return false;
                                }
                                const child = element.firstChild;
                                if (child?.nodeName === 'A' && child.getAttribute('href')) {
                                    const href = child.getAttribute('href');
                                    return getData(href);
                                }
                                return false;
                            },
                            priority: 403,
                            node: blockType
                        },
                    ];
                },
                toExternalHTML: (block, editor) => {
                    const link = document.createElement("a");
                    const url = (0, scom_blocknote_sdk_1.getWidgetEmbedUrl)({
                        type: blockType,
                        props: { ...(block.props || {}) }
                    }, moduleData);
                    link.setAttribute("href", url);
                    link.textContent = blockType;
                    const wrapper = document.createElement("p");
                    wrapper.appendChild(link);
                    return { dom: wrapper };
                }
            });
            const XchainSwapSlashItem = {
                name: "Xchain-swap",
                execute: (editor) => {
                    const block = {
                        type: blockType,
                        props: data_json_4.default.defaultBuilderData
                    };
                    if (typeof executeFn === 'function') {
                        executeFn(editor, block);
                    }
                },
                aliases: [blockType, "widget"],
                group: "Widget",
                icon: { name: 'exchange-alt' },
                hint: "Insert an xchain swap",
            };
            return {
                block: XchainSwapBlock,
                slashItem: XchainSwapSlashItem,
                moduleData
            };
        }
        removeRpcWalletEvents() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet)
                rpcWallet.unregisterAllWalletEvents();
        }
        onHide() {
            this.dappContainer.onHide();
            this.removeRpcWalletEvents();
        }
        get lastUpdated() {
            return this._lastUpdated;
        }
        set lastUpdated(value) {
            this._lastUpdated = value;
            this.lastUpdatedText = this.i18n.get('$last_updated_(s)_ago', { value: `${this._lastUpdated}` });
        }
        get defaultTargetChainId() {
            return this.xchainModel.defaultTargetChainId;
        }
        get supportedChainList() {
            return this.xchainModel.supportedChainList;
        }
        get defaultChainId() {
            return this.configModel.defaultChainId;
        }
        set defaultChainId(value) {
            this.configModel.defaultChainId = value;
        }
        get wallets() {
            return this.configModel.wallets ?? [];
        }
        set wallets(value) {
            this.configModel.wallets = value;
        }
        get networks() {
            return this.configModel.networks ?? [];
        }
        set networks(value) {
            this.configModel.networks = value;
        }
        get showHeader() {
            return this.configModel.showHeader ?? true;
        }
        set showHeader(value) {
            this.configModel.showHeader = value;
        }
        get showFooter() {
            return this.configModel.showFooter ?? true;
        }
        set showFooter(value) {
            this.configModel.showFooter = value;
        }
        get chainId() {
            return this.xchainModel.chainId;
        }
        getConfigurators() {
            this.initModels();
            return this.configModel.getConfigurators();
        }
        async resetRpcWallet() {
            this.removeRpcWalletEvents();
            const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
            const rpcWallet = this.state.getRpcWallet();
            const chainChangedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_6.Constants.RpcWalletEvent.ChainChanged, async (chainId) => {
                this.onChainChange();
            });
            const connectedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_6.Constants.RpcWalletEvent.Connected, async (connected) => {
                if (this.swapBtn)
                    this.swapBtn.visible = true;
                await this.initializeWidgetConfig();
            });
            const data = {
                defaultChainId: this.defaultChainId,
                wallets: this.wallets,
                networks: this.networks,
                showHeader: this.showHeader,
                showFooter: this.showFooter,
                rpcWalletId: rpcWallet.instanceId
            };
            if (this.dappContainer?.setData)
                this.dappContainer.setData(data);
        }
        getData() {
            return this.configModel.getData();
        }
        async setData(value) {
            this.configModel.setData(value);
        }
        getTag() {
            return this.tag;
        }
        async setTag(value) {
            this.configModel.setTag(value);
        }
        setContainerTag(value) {
            if (this.dappContainer)
                this.dappContainer.setTag(value);
        }
        updateStyle(name, value) {
            value ?
                this.style.setProperty(name, value) :
                this.style.removeProperty(name);
        }
        updateTheme() {
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
        async refreshUI() {
            await this.initData();
            await this.initializeWidgetConfig();
        }
        checkUrl() {
            if (!this.xchainModel.urlParamsEnabled)
                return;
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
                    if ((0, index_15.isWalletConnected)()) {
                        this.lbSwitchNetwork.caption = this.i18n.get('$do_you_want_to_switch_network_to_network', { network: `${newNetwork.chainName} (${newNetwork.chainId})` });
                        this.modalSwitchNetwork.visible = true;
                    }
                    else {
                        this.switchNetwork();
                    }
                }
            }
        }
        async initData() {
            if (!this.isInited) {
                await this.initApprovalModelAction();
                this.isInited = true;
            }
        }
        isEmptyData(value) {
            return !value || !value.networks || value.networks.length === 0;
        }
        initModels() {
            if (!this.state) {
                this.state = new index_15.State(data_json_4.default);
            }
            if (!this.configModel) {
                this.configModel = new index_22.ConfigModel(this, this.state, {
                    updateTheme: this.updateTheme.bind(this),
                    refreshWidget: this.refreshUI.bind(this),
                    resetRpcWallet: this.resetRpcWallet.bind(this),
                    setContainerTag: this.setContainerTag.bind(this)
                });
            }
            if (!this.xchainModel) {
                this.xchainModel = new index_22.XchainModel(this, this.state, this.configModel, {
                    showModalFees: this.showModalFees.bind(this)
                });
            }
        }
        async init() {
            this.i18n.init({ ...index_21.mainJson });
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
            }
            ;
            this.executeReadyCallback();
        }
        async initApprovalModelAction() {
            this.approvalModelAction = await this.state.setApprovalModelAction({
                sender: this,
                payAction: this.onSubmit,
                onToBeApproved: async (token) => {
                    this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
                    this.swapBtn.enabled = true;
                },
                onToBePaid: async (token) => {
                    this.crossChainApprovalStatus = ApprovalStatus.NONE;
                },
                onApproving: async (token, receipt, data) => {
                    this.crossChainApprovalStatus = ApprovalStatus.APPROVING;
                    (0, index_16.showResultMessage)(this.txStatusModal, 'success', receipt);
                    if (!this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = true;
                },
                onApproved: async (token, data) => {
                    this.crossChainApprovalStatus = ApprovalStatus.NONE;
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                    await this.handleAddRoute();
                },
                onApprovingError: async (token, err) => {
                    (0, index_16.showResultMessage)(this.txStatusModal, 'error', err);
                    this.crossChainApprovalStatus = ApprovalStatus.TO_BE_APPROVED;
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                },
                onPaying: async (receipt, data) => {
                    (0, index_16.showResultMessage)(this.txStatusModal, 'success', receipt);
                    this.onSwapConfirming();
                },
                onPaid: async (data) => {
                    components_14.application.EventBus.dispatch("Paid" /* EventId.Paid */);
                    this.onSwapConfirmed();
                    await this.updateBalances();
                },
                onPayingError: async (err) => {
                    (0, index_16.showResultMessage)(this.txStatusModal, 'error', err);
                }
            });
        }
        // TODO Only allow Oswap to be selected in Mainnet Oswap2Oswap Pilot launch, BSC <-> AVAX, should be changed when any2any is ready
        setGroupToken(isFrom) {
            const { targetTokenMap, desChain } = this.xchainModel;
            if ((0, index_17.isSupportedCrossChain)(this.chainId, desChain?.chainId)) {
                const token = isFrom ? this.xchainModel.fromToken : this.xchainModel.toToken;
                const targetToken = isFrom ? this.xchainModel.toToken : this.xchainModel.fromToken;
                const chainId = isFrom ? this.chainId : desChain.chainId;
                const targetChainId = isFrom ? desChain.chainId : this.chainId;
                const vaultGroups = this.state.getVaultGroups();
                const vaults = vaultGroups.map(v => v.vaults);
                const vault = vaults.find(v => v[chainId]?.assetToken.address.toLowerCase() === token.address.toLowerCase());
                const targetVault = vault ? vault[targetChainId] : null;
                let listTargetTokenMap = Object.values(isFrom ? targetTokenMap : scom_token_list_4.tokenStore.getTokenMapByChainId(targetChainId));
                if (isFrom && !targetVault && token) {
                    let _targetToken;
                    if (token.symbol.includes('USDT')) {
                        _targetToken = listTargetTokenMap.find(v => v.symbol.includes('USDT'));
                    }
                    else {
                        _targetToken = listTargetTokenMap.find(v => v.symbol === token.symbol);
                    }
                    if (_targetToken && !_targetToken.chainId) {
                        _targetToken.chainId = targetChainId;
                    }
                    if (_targetToken) {
                        this.secondTokenInput.token = _targetToken;
                        this.onUpdateToken(_targetToken, false);
                    }
                }
                else if (targetVault && targetVault.assetToken.address.toLowerCase() !== targetToken.address.toLowerCase()) {
                    const _token = listTargetTokenMap.find(v => v.address?.toLowerCase() === targetVault.assetToken.address.toLowerCase());
                    const tokenSelection = isFrom ? this.secondTokenInput : this.firstTokenInput;
                    if (_token && !_token.chainId) {
                        _token.chainId = targetChainId;
                    }
                    tokenSelection.token = _token;
                    this.onUpdateToken(_token, !isFrom);
                }
                this.isVaultEmpty = !targetVault;
            }
            else {
                // Reset firstTokenSelection tokenDataListProp to empty array to allow bypass in TokenSelection get tokenDataList, and get show all token selection
                this.firstTokenInput.tokenDataListProp = [];
                this.secondTokenInput.tokenDataListProp = [];
            }
        }
        setupCrossChainPopup() {
            const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
            arrows.forEach((arrow) => {
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
                    this.lbReminderRejectedValue.caption = `${(0, index_16.formatNumber)(toAmount)} ${toToken.symbol} `;
                }
                this.targetChainSecondPanel.classList.add('hidden');
                // Show vault info at the end if vaultTokenSymbol same as toToken
                this.crossChainVaultInfoVstack.classList.remove('hidden');
            }
            else {
                this.srcChainFirstPanel.classList.add('hidden');
                this.targetChainFirstPanel.classList.add('hidden');
                this.targetChainSecondPanel.classList.add('hidden');
                this.crossChainVaultInfoVstack.classList.add('hidden');
            }
        }
        handleSwapPopup() {
            if (!this.xchainModel.record)
                return;
            this.setupCrossChainPopup();
            const { desChain, fromToken, toToken, fromInputValue, toInputValue, isFrom } = this.xchainModel;
            const slippageTolerance = this.state.getSlippageTolerance();
            this.fromTokenImage.url = scom_token_list_4.assets.tokenPath(fromToken, this.chainId);
            this.fromTokenLabel.caption = fromToken?.symbol ?? '';
            this.fromTokenValue.caption = (0, index_16.formatNumber)(fromInputValue, 4);
            this.toTokenImage.url = scom_token_list_4.assets.tokenPath(toToken, desChain?.chainId);
            this.toTokenLabel.caption = toToken?.symbol ?? '';
            this.toTokenValue.caption = (0, index_16.formatNumber)(toInputValue, 4);
            this.payOrReceiveValue.caption = (0, index_16.formatNumber)(this.getMinReceivedMaxSold());
            this.payOrReceiveToken.caption = isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
            const lgKey = isFrom ? '$input_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert' : '$output_is_estimated_if_the_price_change_by_more_than_your_transaction_will_revert';
            this.estimateMsg = this.i18n.get(lgKey, { value: `${slippageTolerance} ` });
            this.payOrReceiveText = isFrom ? '$you_will_pay_at_most' : '$you_will_receive_at_least';
            this.priceInfo2.items = this.xchainModel.getPriceInfo();
            this.swapModal.title = this.i18n.get('$confirm_swap');
            this.swapModal.visible = true;
        }
        doSwap() {
            this.approvalModelAction.doPayAction(this.xchainModel.record);
        }
        onUpdateToken(token, isFrom) {
            if (!token)
                return;
            const balance = this.xchainModel.getBalance(token);
            if (isFrom) {
                const enabled = !this.xchainModel.isMaxDisabled();
                this.maxButton.enabled = enabled;
                this.xchainModel.updateToken(token, isFrom, this.firstTokenInput);
                this.payBalance.caption = `${this.i18n.get('$balance')}: ${(0, index_16.formatNumber)(balance, 4)} ${token.symbol} `;
                this.updateTokenInput(true);
            }
            else {
                this.xchainModel.updateToken(token, isFrom, this.secondTokenInput);
                this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${(0, index_16.formatNumber)(balance, 4)} ${token.symbol} `;
                this.updateTokenInput(false);
            }
        }
        async onSelectToken(token, isFrom) {
            if (!token)
                return;
            this.firstTokenInput.enabled = false;
            this.secondTokenInput.enabled = false;
            this.onUpdateToken(token, isFrom);
            this.setGroupToken(isFrom);
            this.xchainModel.redirectToken();
            await this.handleAddRoute();
            this.firstTokenInput.enabled = true;
            this.secondTokenInput.enabled = true;
        }
        setApprovalModalSpenderAddress() {
            const item = this.xchainModel.record;
            this.state.approvalModel.spenderAddress = item.fromVault.vaultAddress;
        }
        async updateTokenInput(isFrom) {
            const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
            if (inputEl)
                inputEl.value = this.xchainModel.getInputValue(isFrom);
        }
        async onSelectRouteItem(item) {
            if (this.xchainModel.isFrom) {
                if (this.xchainPayCol.children) {
                    let balanceValue = item?.fromAmount || '';
                    this.xchainModel.fromInputValue = typeof balanceValue !== 'object' ? new eth_wallet_6.BigNumber(balanceValue) : balanceValue;
                    this.firstTokenInput.value = this.fixedNumber(balanceValue);
                }
            }
            else {
                if (this.xchainReceiveCol.children) {
                    let balanceValue = item?.toAmount || '';
                    this.xchainModel.toInputValue = typeof balanceValue !== 'object' ? new eth_wallet_6.BigNumber(balanceValue) : balanceValue;
                    this.secondTokenInput.value = this.fixedNumber(balanceValue);
                    this.secondTokenInput.inputReadOnly = true;
                    this.secondTokenInput.classList.add('cursor-input--default');
                }
            }
            this.swapBtn.visible = !!item;
            this.xchainModel.record = item;
            if (this.xchainModel.fromToken && !this.xchainModel.fromToken.isNative && (0, index_15.isWalletConnected)() && item) {
                try {
                    this.setApprovalModalSpenderAddress();
                    await this.approvalModelAction.checkAllowance(this.xchainModel.fromToken, this.xchainModel.fromInputValue.toFixed());
                }
                catch (e) {
                    console.log('Cannot check the Approval status (Cross Chain)', e);
                }
            }
            if (!item) {
                this.crossChainApprovalStatus = ApprovalStatus.NONE;
            }
            this.swapButtonText = this.getSwapButtonText();
            const enabled = !this.isSwapButtonDisabled();
            this.swapBtn.enabled = enabled || !(0, index_15.isWalletConnected)() || !this.state.isRpcWalletConnected();
            this.swapBtn.rightIcon.visible = false;
            this.priceInfo.items = this.xchainModel.getPriceInfo();
        }
        onTokenInputChange(source) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(async () => {
                const fromInput = this.xchainPayCol.getElementsByTagName('I-INPUT')?.[0];
                const toInput = this.xchainReceiveCol.getElementsByTagName('I-INPUT')?.[0];
                const isFrom = source.isSameNode(fromInput);
                const amount = source.value;
                if ((0, index_16.isInvalidInput)(amount)) {
                    this.resetValuesByInput();
                    if (fromInput)
                        fromInput.value = '0';
                    if (toInput)
                        toInput.value = '0';
                    return;
                }
                const limit = isFrom ? this.xchainModel.fromToken?.decimals : this.xchainModel.toToken?.decimals;
                const value = new eth_wallet_6.BigNumber((0, index_16.limitDecimals)(amount, limit || 18));
                if (!value.gt(0)) {
                    this.resetValuesByInput();
                    if (isFrom && toInput) {
                        toInput.value = '0';
                    }
                    else if (!isFrom && fromInput) {
                        fromInput.value = '0';
                    }
                }
                else {
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
                    }
                    else {
                        if (!this.xchainModel.toInputValue.eq(value)) {
                            this.xchainModel.toInputValue = value;
                            this.xchainModel.onUpdateEstimatedPosition(true, true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            toInput.value = value.toFixed();
                    }
                    this.xchainModel.redirectToken();
                    if (valueChanged)
                        await this.handleAddRoute();
                }
            }, 1000);
        }
        resetValuesByInput() {
            this.initRoutes();
            this.priceInfo.items = this.xchainModel.getPriceInfo();
            this.xchainModel.fromInputValue = new eth_wallet_6.BigNumber(0);
            this.xchainModel.toInputValue = new eth_wallet_6.BigNumber(0);
            this.xchainModel.redirectToken();
        }
        initRoutes() {
            this.xchainModel.record = null;
            this.isPriceToggled = false;
            this.swapBtn.visible = false;
        }
        async handleAddRoute() {
            if (!this.xchainModel.fromToken || !this.xchainModel.toToken || !(this.xchainModel.fromInputValue.gt(0) || this.xchainModel.toInputValue.gt(0)))
                return;
            this.initRoutes();
            this.disableSelectChain(true);
            this.disableSelectChain(true, true);
            const { srcChain, desChain } = this.xchainModel;
            if (!srcChain || !desChain)
                return;
            let vaultGroup = this.isVaultEmpty ? null : await (0, index_17.findVaultGroupByToken)(this.state, srcChain.chainId, this.xchainModel.fromToken.address || this.xchainModel.fromToken.symbol);
            let route = (0, index_17.getRoute)({
                vaultGroup,
                toChainId: desChain.chainId,
                fromChainId: srcChain.chainId,
                inAmount: new eth_wallet_6.BigNumber(this.xchainModel.fromInputValue)
            });
            if (route) {
                this.minSwapHintLabel?.classList.add('hidden');
            }
            else {
                this.minSwapHintLabel?.classList.remove('hidden');
            }
            this.xchainModel.record = route;
            this.swapModalConfirmBtn.caption = '$confirm_swap';
            this.swapModalConfirmBtn.enabled = true;
            if (this.xchainModel.record) {
                const assetSymbol = this.xchainModel.record.toVault.assetToken.symbol;
                const vaultAddress = this.xchainModel.record.toVault.vaultAddress;
                const softCap = vaultGroup.vaults[srcChain.chainId].softCap;
                const bond = await (0, index_17.getBond)(this.state, route.toVault);
                const vaultAssetBalance = await (0, index_17.getVaultAssetBalance)(this.state, desChain.chainId, vaultAddress);
                const assetBalance = vaultAssetBalance ?? 0;
                const assetDecimal = this.xchainModel.record.toVault.assetToken.decimals;
                const targetVaultAssetBalance = (new eth_wallet_6.BigNumber(assetBalance)).shiftedBy(-assetDecimal);
                const toAmount = this.xchainModel.record.toAmount;
                //const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
                //const oswapToUsdPrice = oraclePriceMap[bridgeVaultConstantMap['OSWAP'][this.desChain!.chainId].tokenAddress.toLowerCase()];
                //const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
                this.targetVaultAssetBalanceLabel1.caption = `${this.i18n.get('$vault_asset_balance')}: ${(0, index_16.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol} `;
                this.targetVaultAssetBalanceLabel2.caption = `${this.i18n.get('$vault_asset_balance')}: ${(0, index_16.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol} `;
                this.targetVaultBondBalanceLabel1.caption = `${this.i18n.get('$vault_bond_balance')}: ${(0, index_16.formatNumber)(bond.toNumber(), 4)} ${assetSymbol} `;
                this.targetVaultBondBalanceLabel2.caption = `${this.i18n.get('$vault_bond_balance')}: ${(0, index_16.formatNumber)(bond.toNumber(), 4)} ${assetSymbol} `;
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
                this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${(0, index_16.formatNumber)(softCap)} ${assetSymbol} ` : "-";
                this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${(0, index_16.formatNumber)(softCap)} ${assetSymbol} ` : "-";
                const minValue = eth_wallet_6.BigNumber.min(targetVaultAssetBalance, bond, softCap);
                if (minValue.eq(targetVaultAssetBalance)) {
                    this.targetVaultAssetBalanceLabel1.classList.add('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else if (minValue.eq(bond)) {
                    this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.add('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else {
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
                }
                else {
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
                    this.xchainModel.toInputValue = new eth_wallet_6.BigNumber(0);
                    if (input) {
                        input.value = '-';
                        input.inputReadOnly = true;
                        input.classList.add('cursor-input--default');
                    }
                }
                else {
                    const input = this.firstTokenInput;
                    this.xchainModel.fromInputValue = new eth_wallet_6.BigNumber(0);
                    if (input)
                        input.value = '-';
                }
            }
            if (this.xchainModel.record)
                this.setApprovalModalSpenderAddress();
        }
        // Price Info
        onTogglePrice(priceInfo) {
            this.isPriceToggled = !this.isPriceToggled;
            priceInfo.items = this.xchainModel.getPriceInfo();
        }
        async updateBalances() {
            const chainIds = [...new Set([this.chainId, this.xchainModel.targetChainId])];
            for (let chainId of chainIds) {
                await scom_token_list_4.tokenStore.updateTokenBalancesByChainId(chainId);
            }
            if (this.xchainModel.fromToken) {
                const balance = this.xchainModel.getBalance(this.xchainModel.fromToken);
                this.payBalance.caption = `${this.i18n.get('$balance')}: ${(0, index_16.formatNumber)(balance, 4)} ${this.xchainModel.fromToken.symbol} `;
            }
            if (this.xchainModel.toToken) {
                const balance = this.xchainModel.getBalance(this.xchainModel.toToken);
                this.receiveBalance.caption = `${this.i18n.get('$balance')}: ${(0, index_16.formatNumber)(balance, 4)} ${this.xchainModel.toToken.symbol} `;
            }
            const enabled = !this.xchainModel.isMaxDisabled();
            this.maxButton.enabled = enabled;
        }
        getSwapButtonText() {
            const isApproveButtonShown = this.crossChainApprovalStatus !== ApprovalStatus.NONE;
            if (!(0, index_15.isWalletConnected)()) {
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
            if (this.xchainModel.record?.toAmount.lte(0)) {
                return this.i18n.get('$amount_lower_than_base_fee');
            }
            return this.i18n.get('$create_order');
        }
        getWarningMessageText() {
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
            let balance = this.xchainModel.getBalance(this.xchainModel.fromToken);
            if (this.xchainModel.record.fromAmount.gt(balance)) {
                return this.i18n.get('$insufficient_balance', { symbol: this.xchainModel.fromToken?.symbol });
            }
            if (this.xchainModel.record.toAmount.lte(0)) {
                return this.i18n.get('$amount_lower_than_base_fee');
            }
            return '';
        }
        isSwapButtonDisabled() {
            const warningMessageText = this.getWarningMessageText();
            return ((0, index_15.isWalletConnected)() && warningMessageText != '');
        }
        async switchNetworkByWallet() {
            if (this.mdWallet) {
                await components_14.application.loadPackage('@scom/scom-wallet-modal', '*');
                this.mdWallet.networks = this.networks;
                this.mdWallet.wallets = this.wallets;
                this.mdWallet.showModal();
            }
        }
        async onClickSwapButton() {
            if (!(0, index_15.isWalletConnected)()) {
                this.switchNetworkByWallet();
                return;
            }
            else if (!this.state.isRpcWalletConnected()) {
                const chainId = this.state.getChainId();
                const clientWallet = eth_wallet_6.Wallet.getClientInstance();
                await clientWallet.switchNetwork(chainId);
                return;
            }
            if (!this.xchainModel.record || this.isSwapButtonDisabled())
                return;
            const isApproveButtonShown = this.crossChainApprovalStatus !== ApprovalStatus.NONE;
            if (isApproveButtonShown) {
                this.onApproveRouterMax();
                return;
            }
            this.handleSwapPopup();
        }
        async onRenderPriceInfo() {
            if (!this.priceInfo) {
                this.priceInfo = new index_18.XchainSwapPriceInfo();
                this.priceInfo.width = 'auto';
                this.priceInfo.height = 'auto';
                this.xchainSwapContainer.appendChild(this.priceInfo);
                this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
                await this.priceInfo.ready();
            }
            this.priceInfo.items = this.xchainModel.getPriceInfo();
            if (!this.priceInfo2) {
                this.priceInfo2 = new index_18.XchainSwapPriceInfo();
                this.priceInfo2.width = 'auto';
                this.priceInfo2.height = 'auto';
                this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
                await this.priceInfo2.ready();
            }
            this.priceInfoContainer.appendChild(this.priceInfo2);
        }
        get isMetaMask() {
            return (0, index_15.getWalletProvider)() === index_15.WalletPlugin.MetaMask;
        }
        initExpertModal() {
            if (this.expertModal)
                return;
            this.expertModal = new index_19.XchainSwapExpertModeSettings(this.state);
            this.appendChild(this.expertModal);
        }
        initTransactionModal() {
            if (this.transactionModal)
                return;
            this.transactionModal = new index_20.XchainSwapTransactionSettings(this.state);
            this.transactionModal.showCrossChain = true;
            this.appendChild(this.transactionModal);
        }
        render() {
            return (this.$render("i-scom-dapp-container", { id: "dappContainer" },
                this.$render("i-panel", { class: index_css_4.xchainSwapStyle },
                    this.$render("i-panel", { id: "xchainSwapContainer", class: index_css_4.xchainSwapContainerStyle },
                        this.$render("i-hstack", { horizontalAlignment: "end", verticalAlignment: "center" },
                            this.$render("i-panel", { id: "actionSetting", class: "xchain-action-setting hidden" },
                                this.$render("i-label", { minWidth: 160, caption: this.lastUpdatedText }),
                                this.$render("i-icon", { width: 26, height: 26, class: "xchain-rounded-icon", name: "sync-alt", fill: Theme.text.primary, onClick: this.onRefresh }),
                                this.$render("i-icon", { width: 26, height: 26, class: "xchain-rounded-icon", name: "cog", fill: Theme.text.primary, onClick: this.onSetting }))),
                        this.$render("i-panel", { class: index_css_4.contentXchainSwap },
                            this.$render("i-hstack", { gap: 4, margin: { top: 8, bottom: 8 }, verticalAlignment: "center", horizontalAlignment: "space-between", wrap: "wrap" },
                                this.$render("i-label", { caption: "$you_pay", font: { size: '1.125rem', color: Theme.text.primary } })),
                            this.$render("i-panel", { class: index_css_4.btnDropdownStyle, width: "auto", margin: { bottom: 4 } },
                                this.$render("i-button", { id: "btnSourceChain", class: "btn-chain--selection", rightIcon: { name: 'angle-down', cursor: 'pointer' }, caption: "$source_chain", width: "calc(100% - 1px)", onClick: this.onShowSourceChain }),
                                this.$render("i-modal", { id: "mdSourceChain", class: "md--chain-selection", showBackdrop: false, onClose: this.onCloseSourceChain, width: "100%", height: "auto", popupPlacement: "bottom" },
                                    this.$render("i-vstack", { id: "listElmSrcChain", gap: 2 }))),
                            this.$render("i-panel", { class: "token-box" },
                                this.$render("i-vstack", { id: "xchainPayContainer", class: index_css_4.inputTokenContainerStyle },
                                    this.$render("i-hstack", { class: "balance-info", horizontalAlignment: "space-between", verticalAlignment: "center", width: "100%", margin: { bottom: '0.5rem' } },
                                        this.$render("i-label", { id: "payBalance", class: "text--grey ml-auto", caption: "$balance:_0" }),
                                        this.$render("i-button", { id: "maxButton", class: "btn-max", caption: "$max", enabled: false, onClick: () => this.onSetMaxBalance() })),
                                    this.$render("i-panel", { id: "xchainPayCol", class: "bg-box-radius", background: { color: Theme.input.background }, width: "100%", margin: { top: 'auto' }, border: { radius: '1rem', width: '1px', style: 'solid', color: Theme.background.main } },
                                        this.$render("i-scom-token-input", { id: "firstTokenInput", placeholder: '0.0', value: '-', tokenReadOnly: false, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, height: 'auto', width: '100%', display: 'flex', font: { size: '1.25rem' }, padding: { left: '0.75rem', right: '0.75rem' }, tokenButtonStyles: {
                                                background: { color: Theme.background.main },
                                                padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                                                border: { radius: 8 },
                                                font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                                                lineHeight: 1.5,
                                                opacity: 1
                                            }, class: index_css_4.customTokenInputStyle, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, true) })))),
                            this.$render("i-hstack", { id: "minSwapHintLabel", gap: 4, verticalAlignment: "start", opacity: 0.9 },
                                this.$render("i-icon", { name: "star", fill: Theme.colors.primary.main, width: 13, height: 13 }),
                                this.$render("i-label", { caption: "$no_crosschain_routes_are_found_you_may_try_updating_the_input_amount_or_selecting_another_token", font: { size: '0.8rem', color: Theme.colors.primary.main } })),
                            this.$render("i-panel", { class: "token-box" },
                                this.$render("i-vstack", { id: "xchainReceiveContainer", class: index_css_4.inputTokenContainerStyle },
                                    this.$render("i-vstack", { class: "balance-info", width: "100%", margin: { left: 'auto' } },
                                        this.$render("i-hstack", { gap: 4, margin: { top: 8, bottom: 8 }, verticalAlignment: "center", horizontalAlignment: "space-between", wrap: "wrap" },
                                            this.$render("i-label", { caption: "$you_receive", font: { size: '1.125rem', color: Theme.text.primary } })),
                                        this.$render("i-panel", { class: index_css_4.btnDropdownStyle, width: "auto", margin: { bottom: 8 } },
                                            this.$render("i-button", { id: "btnDestinationChain", class: "btn-chain--selection", rightIcon: { name: 'angle-down', cursor: 'pointer' }, caption: "$destination_chain", width: "calc(100% - 1px)", onClick: this.onShowDestinationChain }),
                                            this.$render("i-modal", { id: "mdDestinationChain", class: "md--chain-selection", showBackdrop: false, onClose: this.onCloseDesChain, width: "100%", height: "auto", popupPlacement: "bottom" },
                                                this.$render("i-vstack", { id: "listElmDesChain", gap: 2 }))),
                                        this.$render("i-vstack", { class: "text-right", width: "100%" },
                                            this.$render("i-label", { id: "receiveBalance", class: "text--grey ml-auto", caption: "$balance:_0" }))),
                                    this.$render("i-panel", { id: "xchainReceiveCol", background: { color: Theme.input.background }, width: "100%", margin: { top: 'auto' }, border: { radius: '1rem', width: '1px', style: 'solid', color: Theme.background.main } },
                                        this.$render("i-scom-token-input", { id: "secondTokenInput", value: '-', placeholder: '0.0', inputReadOnly: true, tokenReadOnly: true, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, height: 'auto', width: '100%', display: 'flex', font: { size: '1.25rem' }, padding: { left: '0.75rem', right: '0.75rem' }, tokenButtonStyles: {
                                                background: { color: Theme.background.main },
                                                padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                                                border: { radius: 8 },
                                                font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                                                lineHeight: 1.5,
                                                opacity: 1
                                            }, class: `${index_css_4.customTokenInputStyle} ${index_css_4.customSecondTokenInputStyle}`, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, false) }))))),
                        this.$render("i-panel", { class: "swap-btn-container", width: "100%" },
                            this.$render("i-button", { id: "swapBtn", class: "btn-swap btn-os", height: 67, caption: this.swapButtonText, visible: false, rightIcon: { spin: true, visible: false }, onClick: this.onClickSwapButton.bind(this) }))),
                    this.$render("i-modal", { id: "swapModal", class: "custom-modal", title: "$confirm_swap", closeIcon: { name: 'times' } },
                        this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "start", wrap: "wrap", gap: "0.25rem" },
                            this.$render("i-panel", { id: "srcChainFirstPanel", class: "row-chain" },
                                this.$render("i-image", { id: "srcChainTokenImage", width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "srcChainTokenLabel", class: "token-name", caption: "" }),
                                this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                            this.$render("i-panel", { class: "row-chain" },
                                this.$render("i-image", { id: "fromTokenImage", fallbackUrl: scom_token_list_4.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "fromTokenLabel", class: "token-name", caption: "" })),
                            this.$render("i-label", { id: "fromTokenValue", padding: { left: '0.5rem' }, class: "token-value", caption: " - " })),
                        this.$render("i-icon", { name: "arrow-down", class: "arrow-down", fill: Theme.input.fontColor, width: 28, height: 28 }),
                        this.$render("i-panel", { id: "targetChainSecondPanel" },
                            this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "start", wrap: "wrap", gap: "0.25rem" },
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "targetChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "targetChainVaultLabel", class: "token-name", caption: "" }),
                                    this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                                this.$render("i-panel", { class: "row-chain" },
                                    this.$render("i-image", { id: "targetVaultTokenImage", fallbackUrl: scom_token_list_4.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                    this.$render("i-label", { id: "targetVaultTokenLabel", class: "token-name", caption: "" })),
                                this.$render("i-label", { id: "targetVaultTokenValue", class: "token-value", caption: "-" })),
                            this.$render("i-vstack", { class: "text-right" },
                                this.$render("i-label", { id: "crossChainSoftCapLabel1", class: "text--grey ml-auto" }),
                                this.$render("i-label", { id: "targetVaultAssetBalanceLabel1", class: "text--grey ml-auto", caption: "$vault_asset_balance:_0" }),
                                this.$render("i-label", { id: "targetVaultBondBalanceLabel1", class: "text--grey ml-auto", caption: "$vault_bond_balance:_0" })),
                            this.$render("i-icon", { name: "arrow-down", class: "arrow-down", fill: Theme.input.fontColor, width: 28, height: 28 })),
                        this.$render("i-hstack", { class: "mb-1", verticalAlignment: "center", horizontalAlignment: "start", wrap: "wrap", gap: "0.25rem" },
                            this.$render("i-panel", { id: "targetChainFirstPanel", class: "row-chain" },
                                this.$render("i-image", { id: "targetChainTokenImage", fallbackUrl: scom_token_list_4.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "targetChainTokenLabel", class: "token-name", caption: "" }),
                                this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                            this.$render("i-panel", { class: "row-chain" },
                                this.$render("i-image", { id: "toTokenImage", fallbackUrl: scom_token_list_4.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                this.$render("i-label", { id: "toTokenLabel", class: "token-name", caption: "" })),
                            this.$render("i-label", { id: "toTokenValue", padding: { left: '0.5rem' }, class: "token-value text-primary bold", caption: " - " })),
                        this.$render("i-vstack", { id: "crossChainVaultInfoVstack", class: "text-right" },
                            this.$render("i-label", { id: "crossChainSoftCapLabel2", class: "text--grey ml-auto" }),
                            this.$render("i-label", { id: "targetVaultAssetBalanceLabel2", class: "text--grey ml-auto", caption: "$vault_asset_balance:_0" }),
                            this.$render("i-label", { id: "targetVaultBondBalanceLabel2", class: "text--grey ml-auto", caption: "$vault_bond_balance:_0" })),
                        this.$render("i-panel", { class: "mb-1" },
                            this.$render("i-label", { caption: this.estimateMsg })),
                        this.$render("i-panel", { class: "mb-1" },
                            this.$render("i-label", { caption: this.payOrReceiveText }),
                            this.$render("i-label", { id: "payOrReceiveValue", class: "text-primary bold", caption: "" }),
                            this.$render("i-label", { id: "payOrReceiveToken", caption: "" })),
                        this.$render("i-panel", { id: "priceInfoContainer", background: { color: Theme.background.modal }, class: "bg-box mt-1 mb-1", width: "100%" }),
                        this.$render("i-panel", null,
                            this.$render("i-hstack", { id: "pnlReminderRejected", margin: { top: 8, bottom: 16 }, display: 'inline' },
                                this.$render("i-label", { caption: "$if_the_order_is_not_executed_in_the_target_chain_the_estimated_withdrawalble_amount_is", display: 'inline' }),
                                this.$render("i-label", { id: "lbReminderRejectedValue", font: { color: Theme.colors.primary.main, bold: true }, display: 'inline', padding: { left: '0.25rem' } }))),
                        this.$render("i-panel", { class: "swap-btn-container", width: "100%", margin: { top: '0.5rem' } },
                            this.$render("i-button", { id: "swapModalConfirmBtn", class: "btn-swap btn-os", height: "auto", caption: "$confirm_swap", onClick: this.doSwap }))),
                    this.$render("i-modal", { id: "modalViewOrder", class: "bg-modal custom-modal custom-md--view", title: "Cross Chain", closeIcon: { name: 'times' } },
                        this.$render("i-panel", { class: "i-modal_content" },
                            this.$render("i-panel", { class: "mt-1" },
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", class: "mb-1" },
                                    this.$render("i-image", { width: 50, height: 50, url: assets_2.default.fullPath('img/success-icon.svg') })),
                                this.$render("i-vstack", { verticalAlignment: "center", horizontalAlignment: "center" },
                                    this.$render("i-label", { caption: "$the_order_was_created_successfully" }),
                                    this.$render("i-label", { caption: "Do you want to view the record?" })),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", class: "mt-1" },
                                    this.$render("i-button", { caption: "$cancel", class: "btn-os btn-cancel", onClick: this.closeViewOrderModal }),
                                    this.$render("i-button", { caption: "View Order", class: "btn-os btn-submit", onClick: this.onViewOrder }))))),
                    this.$render("i-modal", { id: "modalSwitchNetwork", class: "bg-modal custom-modal custom-md--view", title: "$switch_network", closeIcon: { name: 'times' } },
                        this.$render("i-panel", { class: "i-modal_content" },
                            this.$render("i-panel", { class: "mt-1" },
                                this.$render("i-hstack", { verticalAlignment: "center" },
                                    this.$render("i-label", { id: "lbSwitchNetwork" })),
                                this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "center", class: "mt-1" },
                                    this.$render("i-button", { caption: "$cancel", class: "btn-os btn-cancel", onClick: this.closeSwitchNetwork }),
                                    this.$render("i-button", { caption: "$switch_network", class: "btn-os btn-submit", onClick: this.switchNetwork }))))),
                    this.$render("i-modal", { id: "modalFees", class: "bg-modal custom-modal", title: "$transaction_fee_details", closeIcon: { name: 'times' } },
                        this.$render("i-panel", { class: "i-modal_content" },
                            this.$render("i-panel", null,
                                this.$render("i-vstack", { id: "feesInfo" }),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { top: 16, bottom: 8 } },
                                    this.$render("i-button", { id: "btnCloseFees", caption: "$close", class: "btn-os btn-submit", onClick: this.closeModalFees }))))),
                    this.$render("i-scom-tx-status-modal", { id: "txStatusModal" })),
                this.$render("i-scom-wallet-modal", { id: "mdWallet", wallets: [] })));
        }
    };
    __decorate([
        (0, components_14.observable)()
    ], ScomXchainSwap.prototype, "swapButtonText", void 0);
    __decorate([
        (0, components_14.observable)()
    ], ScomXchainSwap.prototype, "lastUpdatedText", void 0);
    __decorate([
        (0, components_14.observable)()
    ], ScomXchainSwap.prototype, "estimateMsg", void 0);
    __decorate([
        (0, components_14.observable)()
    ], ScomXchainSwap.prototype, "payOrReceiveText", void 0);
    ScomXchainSwap = ScomXchainSwap_1 = __decorate([
        components_14.customModule,
        (0, components_14.customElements)('i-scom-xchain-swap')
    ], ScomXchainSwap);
    exports.default = ScomXchainSwap;
});
