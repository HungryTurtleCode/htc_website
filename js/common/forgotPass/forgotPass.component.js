import controller from './forgotPass.controller';

const forgotPass = {
  controller,
  bindings: {
    closeModal: '&'
  },
  template: `
    <div class="modal"
      ng-click="$ctrl.stopPropagation($event)">
        <div class="forgot-cont"
          ng-if="!$ctrl.forgotSuccess">
            <h3>Enter Email To Reset Your Password</h3>
            <input
              ng-model="$ctrl.email"
              type="text"
              placeholder="Email"/>

            <button
              ng-click="$ctrl.resetPass()">
                Reset Password
            </button>
        </div>
        <div class="forgot-success"
          ng-if="$ctrl.forgotSuccess">
            <h3>Check Your Email For A Link To Reset Your Email</h3>
            <button ng-click="$ctrl.closeModal()">Close</button>
        </div>
    </div>
  `
};

export default forgotPass;
