import controller from './account.controller';

const AccountComponent = {
  controller,
  bindings: {
    user: '<'
  },
  template: `
    <title-block
      title="My Profile"
      subtitle="">
    </title-block>
    <div ng-if="!$ctrl.userData.user.id">
      <htc-sign-in>
      </htc-sign-in>
    </div>
    <div class="account-form-cont" ng-if="$ctrl.userData.user.id">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" ng-model="$ctrl.userData.user.name">
        <label>Profile Image</label>
        <div class="upload-cont">
          <div class="img-cont">
            <img ng-src="{{$ctrl.profileImage[0] || $ctrl.userData.user.image || $ctrl.defaultImage}}">
          </div>
          <label class="upload">
            <input type="file" accept="image" name="profile_image" fileread="$ctrl.profileImage"/>
            <span>Upload</span>
          </label>
        </div>
        <label>Email</label>
        <input type="text" placeholder="Email" ng-model="$ctrl.userData.user.email">

        <div
          class="change-password-wrapper"
          ng-if="$ctrl.userData.user.provider === 'password'"
        >
          <button class="change-pass" ng-click="$ctrl.triggerChangePassword()" ng-if="!$ctrl.changePassActive">
            Change Password
          </button>
          <div ng-if="$ctrl.changePassActive">
            <label>Old Password</label>
            <input type="password" ng-model="$ctrl.changePassData.oldPass">
            <label>New Password</label>
            <input type="password" ng-model="$ctrl.changePassData.newPass">
            <label>Repeat Password</label>
            <input type="password" ng-model="$ctrl.changePassData.repeatPass">
            <button class="change-pass" ng-click="$ctrl.changePassword()">
              Save New Password
            </button>
          </div>
        </div>
        <span class="feedback-text" ng-class="{'error': $ctrl.error}">
          {{$ctrl.feedbackText}}
        </span>

        <button class="submit" ng-click="$ctrl.save()">
          <span ng-if="!$ctrl.loading">Save</span>
          <htc-spinner ng-if="$ctrl.loading"></htc-spinner>
        </button>
      </form>
    </div>
  `
};

export default AccountComponent;
