import controller from './loginModal.controller';

const loginModal = {
  controller,
  bindings: {
    closeModal: '&'
  },
  template: `
    <div class="login-modal-container"
      ng-click="$ctrl.hideModalMarkup($event)">
        <htc-sign-in></htc-sign-in>
    </div>
  `
};

    export default loginModal;
