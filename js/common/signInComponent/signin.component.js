import controller from './signin.controller';

const SignInComponent = {
  controller,
  bindings: {
    forgotPass: '&',
    hide: '&'
  },
  template: `
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
            <a class="fb authbtn" ng-href="{{$ctrl.fbAuthURL}}">
              Facebook
            </a>
            <a class="gl authbtn" ng-href="{{$ctrl.glAuthURL}}">
              Google
            </a>
            <a class="tw authbtn" ng-href="{{$ctrl.twAuthURL}}">
              Twitter
            </a>
            <a class="gh authbtn" ng-href="{{$ctrl.ghAuthURL}}">
              Github
            </a>
            <div class="user-pass">
              <div class="divider">
                <span>OR</span>
              </div>
              <div class="error-msg">
                {{$ctrl.errors.login}}
              </div>
              <input type="text"
                placeholder="Email"
                ng-model="$ctrl.loginEmail">
              <input type="password"
                placeholder="Password"
                ng-model="$ctrl.loginPass">
              <button id="sign-in-button"
                class="authbtn"
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
            <a class="fb authbtn" ng-href="{{$ctrl.fbAuthURL}}">
                Facebook
            </a>
            <a class="gl authbtn" ng-href="{{$ctrl.glAuthURL}}">
                Google
            </a>
            <a class="tw authbtn" ng-href="{{$ctrl.twAuthURL}}">
              Twitter
            </a>
            <a class="gh authbtn" ng-href="{{$ctrl.ghAuthURL}}">
                Github
            </a>
            <div class="user-pass">
              <div class="divider">
                <span>OR</span>
              </div>
              <div class="error-msg">
                {{$ctrl.errors.email}}
              </div>
              <input type="text"
                ng-class="{'error': $ctrl.errors.email}"
                placeholder="Email"
                ng-model="$ctrl.signupEmail">
              <div class="error-msg">
                {{$ctrl.errors.password}}
              </div>
              <input type="password"
                ng-class="{'error': $ctrl.errors.password}"
                placeholder="Password"
                ng-model="$ctrl.signupPass">
              <div class="error-msg">
                {{$ctrl.errors.password2}}
              </div>
              <input type="password"
                ng-class="{'error': $ctrl.errors.password2}"
                placeholder="Repeat Password"
                ng-model="$ctrl.signupPass1">
              <button id="sign-in-button"
                class="authbtn"
                ng-click="$ctrl.signUp()">
                  Sign Up
              </button>
            </div>
        </div>
      </div>
`
};

export default SignInComponent;
