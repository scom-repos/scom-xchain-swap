import {
  customElements,
  customModule,
  Module,
  Container,
  ControlElement,
  Modal,
  Panel,
} from '@ijstech/components';
import { XchainSwapTransactionSettingsLayout } from '../transaction-settings-layout/index';
import styleClass from './index.css';
import { State } from '../store/index';
import { transactionsJson } from '../languages/index';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['xchain-swap-transaction-settings']: ControlElement;
    }
  }
};

@customModule
@customElements('xchain-swap-transaction-settings')
export class XchainSwapTransactionSettings extends Module {
  private transactionModal: Modal;
  private transactionLayout: XchainSwapTransactionSettingsLayout;
  private mainContent: Panel;
  private state: State;

  private _showCrossChain: boolean;

  get showCrossChain() {
    return this._showCrossChain;
  }

  set showCrossChain(value: boolean) {
    this._showCrossChain = value;
    if (this.transactionLayout) {
      this.transactionLayout.showCrossChain = value;
    }
  }

  constructor(state: State, parent?: Container, options?: any) {
    super(parent, options);
    this.state = state;
  }

  async init() {
    this.i18n.init({...transactionsJson});
    this.classList.add(styleClass);
    super.init();
    this.transactionLayout = new XchainSwapTransactionSettingsLayout(this.state);
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
    return (
      <i-modal
        id="transactionModal"
        class='dark-modal'
        title="$transaction_settings"
        closeIcon={{ name: 'times' }}
      >
        <i-panel id="mainContent"></i-panel>
      </i-modal>
    )
  }
};