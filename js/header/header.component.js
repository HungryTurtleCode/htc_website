const HeaderComponent = {
  template: `
    <div class="header-panel">
      <div class="sign-in-register" htc-controller="headerCtrl">

        <a href="{{site.baseurl}}/account" htc-if="$ctrl.loggedIn" class="account auth-button">Account</a>

        <button
          htc-if="!$ctrl.loggedIn"
          htc-track="header-signin-btn"
          htc-click="$ctrl.showModal('sign-in')"
          class="auth-button">
            Log In / Register
        </button>

        <button
          htc-if="$ctrl.loggedIn"
          htc-track="header-logout"
          htc-click="$ctrl.showModal('sign-out')"
          class="auth-button signout">
            Sign Out
        </button>

      </div>
    </div>
  `
};

export default HeaderComponent;
