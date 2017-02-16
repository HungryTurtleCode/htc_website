import controller from './loginModal.controller';

const loginModal = {
  controller,
  bindings: {
    bgClose: '<'
  },
  template: `

    <!--<div class="login-modal-container"
      ng-hide="$ctrl.hideModal"
      ng-click="$ctrl.decideToHideModal($event)">-->
      <div class="modal"
        ng-click="$ctrl.stopPropagation($event)">

          <div class="header">
            <button class="log-in-header-btn active"
              ng-class="{active: $ctrl.activeTab === 0}"
              ng-click="$ctrl.activeTab = 0">
                Log In
            </button>
            <button class="log-in-header-btn"
              ng-class="{active: $ctrl.activeTab === 1}"
              ng-click="$ctrl.activeTab = 1">
                Sign Up
            </button>
          </div>

          <div class="container log-in"
            ng-class="{active: $ctrl.activeTab === 0}"
            id="log-in-box">
              <h4>Log In</h4>
              <button class="fb"
                ng-click="$ctrl.authService.facebookSignIn()">
                  Facebook
              </button>
              <button class="gl"
                ng-click="$ctrl.authService.googleSignIn()">
                  Google
              </button>
              <button class="gh"
                ng-click="$ctrl.authService.githubSignIn()">
                  Github
              </button>
              <div class="user-pass">
                <div class="divider">
                  <span>OR</span>
                </div>
                <input type="text"
                  placeholder="Email"
                  ng-model="loginEmail">
                <input type="password"
                  placeholder="Password"
                  ng-model="loginPass">
                <button id="sign-in-button"
                  ng-click="$ctrl.logIn()">
                    Log In
                </button>
                <a id="forgot-pass-btn"
                  ng-click="$ctrl.showForgottenPassModal()">
                    Forgotten Password
                </a>
              </div>
          </div>
          <div class="container sign-up" id="sign-up-box"
            ng-class="{active: $ctrl.activeTab === 1}">
              <h4>Sign Up</h4>
              <button class="fb"
                ng-click="$ctrl.authService.facebookSignIn()">
                  Facebook
              </button>
              <button class="gl"
                ng-click="$ctrl.authService.googleSignIn()">
                  Google
              </button>
              <button class="gh"
                ng-click="$ctrl.authService.githubSignIn()">
                  Github
              </button>
              <div class="user-pass">
                <div class="divider">
                  <span>OR</span>
                </div>
                <input type="text"
                  placeholder="Email"
                  ng-model="signupEmail">
                <input type="password"
                  placeholder="Password"
                  ng-model="signupPass">
                <input type="password"
                  placeholder="Repeat Password"
                  ng-model="signupPass1">
                <button id="sign-in-button"
                  ng-click="$ctrl.signUp()">
                    Sign Up
                </button>
              </div>
          </div>
        </div>
    <!--</div>-->
  `
};

    export default loginModal;
