import {
  customElements,
  Module,
  Control,
  ControlElement,
  observable,
  Button,
  Input,
  Label,
  Icon,
  Switch,
  application,
  IEventBus,
  Panel,
  Container,
  Styles
} from '@ijstech/components';
import { EventId } from '../global/index';
import { State } from '../store/index';
import styleClass from './index.css';
import { transactionsJson } from '../languages/index';
const Theme = Styles.Theme.ThemeVars;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['xchain-swap-transaction-settings-layout']: ControlElement;
    }
  }
};

const listSlippage = [0.1, 0.5, 1];

@customElements('xchain-swap-transaction-settings-layout')
export class XchainSwapTransactionSettingsLayout extends Module {
  private slippageGroup: Panel;
  private slippageInput: Input;
  private warningIcon: Icon;
  private switchBox: Switch;
  private slippageRow: Panel;
  private switchBoxRow: Panel;

  // Cross chain
  private crossChainDeadlineInput: Input;
  private crossChainDeadlineGroup: Panel;
  private crossChainDeadlineMessage: Label;
  private crossChainDeadlineRow: Panel;
  private crossChainDeadlineInputRow: Panel;

  private _showSlippageOnly: boolean;
  private _showCrossChain: boolean;
  private state: State;

  private $eventBus: IEventBus;
  @observable()
  private slippageToleranceMessage: string;

  constructor(state: State, parent?: Container, options?: any) {
    super(parent, options);
    this.state = state;
    this.$eventBus = application.EventBus;
    this.registerEvent();
  };

  get showSlippageOnly() {
    return this._showSlippageOnly;
  }

  set showSlippageOnly(value: boolean) {
    this._showSlippageOnly = value;
    if (value) {
      this.slippageRow.visible = false;
      this.crossChainDeadlineRow.visible = false;
      this.crossChainDeadlineInputRow.visible = false;
      this.switchBoxRow.visible = false;
    } else {
      this.slippageRow.visible = true;
      this.crossChainDeadlineRow.visible = this.showCrossChain;
      this.crossChainDeadlineInputRow.visible = this.showCrossChain;
      this.switchBoxRow.visible = true;
    }
  }

  get showCrossChain() {
    return this._showCrossChain;
  }

  set showCrossChain(value: boolean) {
    if (!this.crossChainDeadlineRow) return;
    this.crossChainDeadlineRow.visible = value && !this.showSlippageOnly;
    this.crossChainDeadlineInputRow.visible = value && !this.showSlippageOnly;
  }

  async init() {
    this.i18n.init({...transactionsJson});
    this.classList.add(styleClass);
    super.init();
    this.switchBox.checked = this.state.isExpertMode;
    this.crossChainDeadlineRow.visible = this.showCrossChain && !this.showSlippageOnly;
    this.crossChainDeadlineInputRow.visible = this.showCrossChain && !this.showSlippageOnly;
    await this.onRenderSlippage();
    await this.onRenderWarningElm();
    this.setDefaultTransactionSettings();
  }

  private registerEvent() {
    this.$eventBus.register(this, EventId.ExpertModeChanged, () => {
      if (this.switchBox)
        this.switchBox.checked = this.state.isExpertMode;
    });
  }

  private async onRenderSlippage() {
    listSlippage.map(async value => {
      const button = await Button.create({
        height: 'auto',
        width: '4rem',
        caption: `${value}%`
      });
      button.classList.add('pill-slippage');
      button.onClick = (source: Control) => this.onSelectSlippage(source, value);
      this.slippageGroup.prepend(button);
    })

    const label = await Label.create();
    label.caption = '%';
    this.slippageInput.appendChild(label);
  }

  private async onRenderWarningElm() {
    this.crossChainDeadlineMessage = await Label.create();
    this.crossChainDeadlineMessage.caption = '$please_enter_a_valid_transaction_deadline';
    this.crossChainDeadlineMessage.classList.add('slippage-message');

    this.warningIcon = await Icon.create({
      name: 'exclamation-triangle',
      fill: Theme.colors.primary.dark,
      width: 15.75,
      height: 14,
    });
    this.warningIcon.classList.add('slippage-input__warning');
  }

  private onActiveItem = (source: Control) => {
    const activeItem = this.slippageGroup.querySelector('.active');
    if (activeItem) {
      if (source.isSameNode(activeItem)) return;
      activeItem.classList.remove('active');
    }
    source.classList.add('active');
  }

  private onSelectSlippage = (source: Control, val: number) => {
    this.inputSlippageTolerance(source, val);
    if (listSlippage.includes(val)) {
      this.slippageInput.value = '';
    }
  }

  private inputSlippageTolerance = (source: Control, val: number | string) => {
    if (val) {
      const value = Number(+val);
      const hasWarningIcon = this.slippageInput.contains(this.warningIcon);
      if (!source.isSameNode(this.slippageInput)) {
        this.slippageInput.value = value;
      }
      this.slippageInput.placeholder = isNaN(value) ? '0.00' : value.toFixed(2);
      if (value < 50) {
        this.state.setSlippageTolerance(value);
        this.$eventBus.dispatch(EventId.SlippageToleranceChanged);
        this.setSlippageToleranceMessage();
        this.slippageInput.classList.remove('transaction-input__error');
        if (value > 5) {
          if (!hasWarningIcon)
            this.slippageInput.prepend(this.warningIcon);
        } else if (hasWarningIcon)
          this.slippageInput.removeChild(this.warningIcon);
      } else {
        this.slippageToleranceMessage = '$please_enter_a_valid_slippage_percentage';
        this.slippageInput.classList.add('transaction-input__error');
        if (hasWarningIcon)
          this.slippageInput.removeChild(this.warningIcon);
      }
    }
    const index = listSlippage.concat().reverse().indexOf(Number(+val));
    if (index >= 0 && source.isSameNode(this.slippageInput)) {
      const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
      this.onActiveItem(buttons[index] as Button)
    } else {
      this.onActiveItem(source);
    }
  }

  private blurSlippageTolerance = (source: Input) => {
    const val = source.value;
    if (val && val >= 50) {
      this.inputSlippageTolerance(source, 0.5);
    } else if (!this.slippageInput.value) {
      this.inputSlippageTolerance(source, this.state.getSlippageTolerance());
    }
  }

  private setSlippageToleranceMessage = () => {
    const slippageTolerance = this.state.getSlippageTolerance();
    if (slippageTolerance < 0.5) {
      return (this.slippageToleranceMessage = '$your_transaction_may_fail');
    } else if (slippageTolerance >= 0.5 && slippageTolerance <= 5) {
      return (this.slippageToleranceMessage = '');
    } else if (slippageTolerance > 5 && slippageTolerance < 50) {
      return (this.slippageToleranceMessage = '$your_transaction_may_be_frontrun');
    } else {
      return (this.slippageToleranceMessage = '$please_enter_a_valid_slippage_percentage');
    }
  }

  private inputCrossChainDeadline = (source: Control, event: Event) => {
    const val = (source as Input).value;
    this.state.setCrossChainTransactionDeadline(val * 60);
    const hasMessage = this.crossChainDeadlineGroup.contains(this.crossChainDeadlineMessage);
    if (val > 168) {
      this.crossChainDeadlineInput.classList.add('transaction-input__error');
      if (!hasMessage)
        this.crossChainDeadlineGroup.appendChild(this.crossChainDeadlineMessage);
    } else {
      this.crossChainDeadlineInput.classList.remove('transaction-input__error');
      if (hasMessage)
        this.crossChainDeadlineGroup.removeChild(this.crossChainDeadlineMessage);
    }
  }

  private blurCrossChainTransactionDeadline = (source: Input) => {
    const val = source.value;
    const newVal = val > 168 || val < 1 ? 72 : parseFloat(val);
    source.value = newVal;
    this.state.setCrossChainTransactionDeadline(newVal * 60);
    if (val > 168 && this.crossChainDeadlineGroup.contains(this.crossChainDeadlineMessage)) {
      this.crossChainDeadlineGroup.removeChild(this.crossChainDeadlineMessage);
    }
    this.crossChainDeadlineInput.classList.remove('transaction-input__error');
  }

  private handleProcessExpertMode = () => {
    if (this.state.isExpertMode) {
      this.state.toggleExpertMode();
      this.$eventBus.dispatch(EventId.ExpertModeChanged);
      return;
    }
    this.$eventBus.dispatch(EventId.ShowExpertModal);
  }

  private setDefaultTransactionSettings() {
    const slippageTolerance = this.state.getSlippageTolerance();
    const index = listSlippage.indexOf(slippageTolerance);
    if (index >= 0) {
      const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
      this.onActiveItem(buttons[index] as Button);
      this.slippageInput.value = '';
    } else {
      this.slippageInput.value = slippageTolerance;
      this.onActiveItem(this.slippageInput)
    }
    this.slippageInput.placeholder = slippageTolerance.toFixed(2);

    const crossChainTransactionDeadline = this.state.getCrossChainTransactionDeadline();
    this.crossChainDeadlineInput.value = crossChainTransactionDeadline / 60;
  }

  render() {
    return (
      <i-panel class="settings-content">
        <i-hstack id="slippageRow" verticalAlignment='center'>
          <i-label caption="$slippage_tolerance"></i-label>
          <i-icon
            width={16}
            height={16}
            name="question-circle"
            fill="rgba(255,255,255,0.55)"
            tooltip={{
              content: '$your_transaction_will_revert_if_the_price_changes_unfavorably_by_more_than_this_percentage'
            }}
          ></i-icon>
        </i-hstack>
        <i-hstack id="slippageGroup" gap="0.5rem">
          <i-input
            id="slippageInput"
            height={40}
            width="100%"
            inputType="number"
            class='transaction-input'
            onChanged={(source: Control, event: Event) => this.inputSlippageTolerance(source, (source as Input).value)}
            onBlur={this.blurSlippageTolerance}
          ></i-input>
        </i-hstack>
        <i-hstack>
          <i-label class="slippage-message" caption={this.slippageToleranceMessage}></i-label>
        </i-hstack>
        <i-hstack id="crossChainDeadlineRow" visible={false} verticalAlignment='center' class="trans-title">
          <i-label caption="$cross_chain_transaction_deadline"></i-label>
          <i-icon
            width={16}
            height={16}
            name="question-circle"
            fill="rgba(255,255,255,0.55)"
            tooltip={{
              content: '$your_transaction_will_revert_if_it_is_pending_for_more_than_this_long'
            }}
          ></i-icon>
        </i-hstack>
        <i-hstack id="crossChainDeadlineInputRow" visible={false} verticalAlignment='center'>
          <i-input
            id="crossChainDeadlineInput"
            height={40}
            width="100%"
            class="transaction-input"
            inputType="number"
            onChanged={this.inputCrossChainDeadline}
            onBlur={this.blurCrossChainTransactionDeadline}
          ></i-input>
          <i-label class="ml-1" caption="$hours"></i-label>
          <i-hstack id="crossChainDeadlineGroup"></i-hstack>
        </i-hstack>
        <i-hstack id="switchBoxRow" visible={false} horizontalAlignment='space-between' verticalAlignment='center' class="mt-1">
          <i-label class="toggle-text" caption="$toggle_expert_mode"></i-label>
          <i-switch
            id="switchBox"
            checkedTrackColor="transparent"
            uncheckedTrackColor="transparent"
            checkedThumbText="$off"
            uncheckedThumbText="$on"
            checkedText="$off"
            uncheckedText="$on"
            checked={this.state?.isExpertMode}
            onClick={this.handleProcessExpertMode}
          ></i-switch>
        </i-hstack>
      </i-panel>
    )
  }
};
