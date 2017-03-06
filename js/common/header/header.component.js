import controller from './header.controller';

const HeaderComponent = {
  controller,
  template: `
    <div class="header-panel">
      <div class="sign-in-register">

        <div class="relative">
          <button class="notification-btn"
            ng-click="$ctrl.notificationClick($event)"
            ng-if="$ctrl.loggedIn && !$ctrl.loading">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 88.516 88.516" style="enable-background:new 0 0 88.516 88.516;" xml:space="preserve" data-inboxsdk-session-id="1488814308998-0.6025413539877926">
            <g>
              <g>
                  <path d="M67.512,36.822C56.11,12.287,50.184,2.97,31.553,3.355c-6.635,0.137-5.041-4.805-10.1-2.93    c-5.055,1.876-0.717,4.62-5.889,8.863C1.051,21.2,2.389,32.221,9.119,58.487c2.838,11.062-6.836,11.605-3.008,22.33    c2.793,7.819,23.393,11.093,45.127,3.028c21.734-8.063,35.453-24.07,32.66-31.889C80.069,41.231,72.317,47.152,67.512,36.822z     M48.879,77.238c-19.41,7.202-35.363,2.965-36.037,1.083c-1.162-3.248,6.266-14.081,28.457-22.316    c22.193-8.234,34.576-5.181,35.871-1.553C77.936,56.594,68.291,70.036,48.879,77.238z M42.641,59.764    C32.493,63.53,25.44,67.837,20.877,71.715c3.211,2.918,9.23,3.63,15.23,1.404c7.637-2.833,12.326-9.337,10.471-14.526    c-0.021-0.063-0.055-0.119-0.078-0.181C45.248,58.826,43.963,59.274,42.641,59.764z"/>
                    </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <head/></svg>
            <span ng-if="$ctrl.notifications.length">
              {{$ctrl.notifications.length}}
            </span>
          </button>
          <div class="popover"
            ng-click="$ctrl.stopPropagation($event)"
            ng-if="$ctrl.notificationActive">
              <div class="arrow"></div>

              <div class="notification-item"
                ng-click="$ctrl.clickNotificationItem(notif)"
                ng-repeat="notif in $ctrl.notifications">
                  <div class="top">
                    <img ng-src="{{notif.image}}">
                    <p class="reply-text">
                      <span ng-if="notif.notification_type === 'comment_reply'">
                        <strong>{{notif.user_name}}</strong> said something in a discussion you are involved in on <strong>{{notif.page_name}}</strong>
                      </span>
                    </p>
                  </div>
                  <div class="bottom">
                    <p class="date">{{notif.date | date}}</p>
                  </div>
              </div>

              <div ng-if="!$ctrl.notifications.length">
                Nothing To Show
              </div>
          </div>
        </div>

        <a href="{{site.baseurl}}/account" ng-if="$ctrl.loggedIn" class="account">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" data-inboxsdk-session-id="1488815250232-0.448238553788453">
          <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
          <g><path d="M602.4,558.7H397.6C222.2,558.7,80,708.5,80,892.9v21.5c0,75.5,142.1,75.6,317.6,75.6h204.9c175.3,0,317.6-2.8,317.6-75.6v-21.5C920,708.5,777.8,558.7,602.4,558.7L602.4,558.7z M251.9,264.8c0-33.4,6.4-66.7,18.9-97.5c12.4-30.8,30.8-59.1,53.8-82.6C347.5,61,375,42.1,405,29.4c30-12.8,62.5-19.4,95-19.4c32.5,0,64.9,6.6,95,19.4c30,12.7,57.5,31.6,80.5,55.2c23,23.6,41.3,51.8,53.8,82.6c12.4,30.8,18.9,64.2,18.9,97.5s-6.4,66.7-18.9,97.5c-12.4,30.8-30.8,59.1-53.8,82.6c-23,23.6-50.5,42.5-80.5,55.2c-30,12.8-62.5,19.4-95,19.4c-32.5,0-64.9-6.7-95-19.4c-30-12.8-57.5-31.6-80.5-55.2c-23-23.5-41.3-51.8-53.8-82.6C258.3,331.4,251.9,298.1,251.9,264.8L251.9,264.8z"/></g>
          <head/></svg>
        </a>

        <button
          ng-if="!$ctrl.loggedIn && !$ctrl.loading"
          ng-click="$ctrl.showSignIn = true"
          class="auth-button">
            Log In / Register
        </button>

        <button
          ng-if="$ctrl.loggedIn"
          ng-click="$ctrl.showLogOut = true"
          class="auth-button signout">
            Sign Out
        </button>

      </div>
    </div>

    <login-modal
      ng-if="$ctrl.showSignIn"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>

    <logout-modal
      ng-if="$ctrl.showLogOut"
      close-modal="$ctrl.closeLogOut()">
    </logout-modal>
  `
};

export default HeaderComponent;
