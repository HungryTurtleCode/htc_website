import controller from './reset.controller';

const ResetComponent = {
  controller,
  template: `
    <h1>Enter New Password</h1>
    <div class="info-box">
      <div class="info"
        ng-class="{'active': $ctrl.infoMessage, 'success': $ctrl.infoType === 'success', 'error': $ctrl.infoType === 'error'}">
          {{$ctrl.infoMessage}}
      </div>
    </div>
    <div ng-if="$ctrl.infoType === 'success'">
      Redirecting home...
    </div>
    <div class="reset-cont" ng-if="$ctrl.infoType !== 'success'">
      <label>Password:</label>
      <input type="password"
        class="space"
        name="password"
        placeholder="Enter New Password..."
        ng-model="$ctrl.password"/>

      <label>Repeat:</label>
      <input type="password"
        name="password2"
        placeholder="Repeat Password..."
        ng-model="$ctrl.password2"/>

      <button
        ng-click="$ctrl.submit()"
        class="forgot-btn">
          Update Password
      </button>
    </div>
  `
};

export default ResetComponent;
