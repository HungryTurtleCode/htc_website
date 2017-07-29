import controller from './forgot.controller';

const forgotComponent = {
  controller,
  template: `
    <h1>Enter Email To Reset Password</h1>
    <div class="info-box">
      <div class="info"
        ng-class="{'active': $ctrl.infoMessage, 'success': $ctrl.infoType === 'success', 'error': $ctrl.infoType === 'error'}">
          {{$ctrl.infoMessage}}
      </div>
    </div>
    <div class="reset-cont">
      <label>Email:</label>
      <input type="text"
        name="email"
        placeholder="Enter Email..."
        ng-class="{'error': $ctrl.error && !$ctrl.emailValid, 'success': $ctrl.error && $ctrl.emailValid}"
        ng-change="$ctrl.isEmailValid()"
        ng-model="$ctrl.email"/>
      <button
        ng-click="$ctrl.submit()"
        class="forgot-btn">
          Submit
      </button>
    </div>
  `
};

export default forgotComponent;
