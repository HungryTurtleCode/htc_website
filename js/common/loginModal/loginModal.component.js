import controller from './loginModal.controller';

const loginModal = {
  controller,
  bindings: {
    bgClose: '<'
  },
  template: `
    <div class="login-modal-container"
      ng-hide="$ctrl.hideModal"
      ng-click="$ctrl.hideModalMarkup($event)">
        <htc-sign-in></htc-sign-in>
    </div>
  `
};

    export default loginModal;
