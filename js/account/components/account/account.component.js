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
      <htc-sign-in></htc-sign-in>
    </div>
    <div class="account-form-cont" ng-if="$ctrl.user">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" ng-model="$ctrl.user.name">
        <label>Profile Image</label>
        <div class="upload-cont">
          <div class="img-cont">
            <img ng-src="{{$ctrl.user.image || $ctrl.defaultImage}}">
          </div>
          <label class="upload">
            <input type="file"/>
            <span>Upload</span>
          </label>
        </div>
        <label>Email</label>
        <input type="text" placeholder="Email" ng-model="$ctrl.user.email">
        <button class="submit" ng-click="$ctrl.save()">Save</button>
      </form>
    </div>
  `
};

export default AccountComponent;
