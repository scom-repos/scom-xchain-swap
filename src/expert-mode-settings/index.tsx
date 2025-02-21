import { customElements, customModule, Module, Container, ControlElement, Modal, application, IEventBus } from '@ijstech/components';
import { EventId } from '../global/index';
import { State } from '../store/index';
import styleClass from './index.css';
import { expertModeJson } from '../languages/index';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['xchain-swap-expert-mode-settings']: ControlElement;
    }
  }
};

@customModule
@customElements('xchain-swap-expert-mode-settings')
export class XchainSwapExpertModeSettings extends Module {
  private expertModal: Modal;
  private $eventBus: IEventBus;
  private state: State;

  constructor(state: State, parent?: Container, options?: any) {
    super(parent, options);
    this.state = state;
    this.$eventBus = application.EventBus;
  };

  async init() {
    this.i18n.init({...expertModeJson});
    this.classList.add(styleClass);
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
    this.$eventBus.dispatch(EventId.ExpertModeChanged)
  }

  render() {
    return (
      <i-modal id="expertModal" class='dark-modal' title="Expert Mode" closeIcon={{ name: 'times' }}>
        <i-panel class="expert-content">
          <i-panel class="warning-box">
            <i-label caption="$expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds"></i-label>
          </i-panel>
          <i-label class="warning-text" caption="$only_use_this_mode_if_you_know_what_you_are_doing"></i-label>
          <i-button width="100%" height="auto" caption="$turn_on_expert_mode" onClick={this.onToggle}></i-button>
        </i-panel>
      </i-modal>
    )
  }
};