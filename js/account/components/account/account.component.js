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
    <div ng-if="!$ctrl.user">
      <htc-sign-in
        forgot-pass="$ctrl.forgotPass()"
        ng-if="!$ctrl.forgotPassword">
      </htc-sign-in>
      <div class="forgot-container"
        ng-if="$ctrl.forgotPassword">
          <htc-forgot-pass
            close-modal="$ctrl.closeForgot()"
            text="Sign In">
          </htc-forgot-pass>
      </div>
    </div>
    <div class="account-form-cont" ng-if="$ctrl.user">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" ng-model="$ctrl.user.name">
        <label>Profile Image</label>
        <div class="upload-cont">
          <div class="img-cont">
            <img ng-src="{{$ctrl.profileImage[0] || $ctrl.user.image || $ctrl.defaultImage}}">
          </div>
          <label class="upload">
            <input type="file" accept="image" name="profile_image" fileread="$ctrl.profileImage"/>
            <span>Upload</span>
          </label>
        </div>
        <label>Email</label>
        <input type="text" placeholder="Email" ng-model="$ctrl.user.email">
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