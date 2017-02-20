import controller from './header.controller';

const HeaderComponent = {
  controller,
  template: `
    <div class="header-panel">
      <div class="sign-in-register">

        <a href="{{site.baseurl}}/account" ng-if="$ctrl.loggedIn" class="account auth-button">Account</a>

        <button
          ng-if="!$ctrl.loggedIn && !$ctrl.loading"
          ng-click="$ctrl.showSignIn = true"
          class="auth-button">
            Log In / Register
        </button>

        <button
          ng-if="$ctrl.loggedIn"
          ng-click="$ctrl.showModal('sign-out')"
          class="auth-button signout">
            Sign Out
        </button>

      </div>
    </div>

    <login-modal
      ng-if="$ctrl.showSignIn === true"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
  `
};

export default HeaderComponent;
