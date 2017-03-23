webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lessons = __webpack_require__(113);

	var _lessons2 = _interopRequireDefault(_lessons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _spinner = __webpack_require__(38);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var spinnerComponent = _angular2.default.module('spinner', []).component('htcSpinner', _spinner2.default).name;

	exports.default = spinnerComponent;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Spinner = {
	  template: "\n    <div class=\"loading-spinner\">Loading...</div>\n  "
	};

	exports.default = Spinner;

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(75);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(82);

	var _components2 = _interopRequireDefault(_components);

	var _header = __webpack_require__(83);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppComponent = _angular2.default.module('htcheader', [_common2.default, _components2.default]).component('headerPanel', _header2.default).name;

	exports.default = AppComponent;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularAnimate = __webpack_require__(5);

	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

	var _userData = __webpack_require__(7);

	var _userData2 = _interopRequireDefault(_userData);

	var _firebaseService = __webpack_require__(9);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	var _auth = __webpack_require__(18);

	var _auth2 = _interopRequireDefault(_auth);

	var _loginModal = __webpack_require__(76);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _logoutModal = __webpack_require__(79);

	var _logoutModal2 = _interopRequireDefault(_logoutModal);

	var _trackingPixels = __webpack_require__(39);

	var _trackingPixels2 = _interopRequireDefault(_trackingPixels);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = _angular2.default.module('header.common.module', [_userData2.default, _angularAnimate2.default, _trackingPixels2.default, _firebaseService2.default, _auth2.default, _loginModal2.default, _logoutModal2.default]).name;

	exports.default = CommonModule;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _loginModal = __webpack_require__(77);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _signInComponent = __webpack_require__(54);

	var _signInComponent2 = _interopRequireDefault(_signInComponent);

	var _forgotPass = __webpack_require__(28);

	var _forgotPass2 = _interopRequireDefault(_forgotPass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loginModalComponent = _angular2.default.module('loginModal', [_signInComponent2.default, _forgotPass2.default]).component('loginModal', _loginModal2.default).name;

	exports.default = loginModalComponent;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loginModal = __webpack_require__(78);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loginModal = {
	  controller: _loginModal2.default,
	  bindings: {
	    closeModal: '&'
	  },
	  template: '\n    <div class="login-modal-container"\n      ng-if="!$ctrl.showForgotPass"\n      ng-click="$ctrl.hideModalMarkup($event)">\n        <htc-sign-in\n          forgot-pass="$ctrl.forgotPass()">\n        </htc-sign-in>\n    </div>\n    <div class="login-modal-container"\n      ng-if="$ctrl.showForgotPass"\n      ng-click="$ctrl.hideModalMarkup($event)">\n        <htc-forgot-pass close-modal="$ctrl.closeModal()"></htc-forgot-pass>\n    </div>\n  '
	};

	exports.default = loginModal;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginModalController = function () {
	  function LoginModalController() {
	    _classCallCheck(this, LoginModalController);
	  }

	  _createClass(LoginModalController, [{
	    key: "$onInit",
	    value: function $onInit() {
	      this.hideModal = false;
	      this.showForgotPass = false;
	    }
	  }, {
	    key: "hideModalMarkup",
	    value: function hideModalMarkup($event) {
	      $event.stopPropagation();
	      this.closeModal($event);
	    }
	  }, {
	    key: "forgotPass",
	    value: function forgotPass() {
	      this.showForgotPass = true;
	    }
	  }]);

	  return LoginModalController;
	}();

	exports.default = LoginModalController;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _logoutModal = __webpack_require__(80);

	var _logoutModal2 = _interopRequireDefault(_logoutModal);

	var _auth = __webpack_require__(18);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logOutComponent = _angular2.default.module('logOutModal.module', [_auth2.default]).component('logoutModal', _logoutModal2.default).name;

	exports.default = logOutComponent;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logoutModal = __webpack_require__(81);

	var _logoutModal2 = _interopRequireDefault(_logoutModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LogOutComponent = {
	  controller: _logoutModal2.default,
	  bindings: {
	    closeModal: '&'
	  },
	  template: '\n    <div class="login-modal-container" ng-click="$ctrl.hide($event)">\n      <div class="modal" ng-click="$ctrl.stopPropagation($event)">\n        <div class="logout-cont">\n          <h3>Are you sure you want to sign out?</h3>\n          <div class="buttons">\n            <button class="yes"\n              ng-click="$ctrl.signOut($event)">\n                Yes\n            </button>\n            <button class="no"\n              ng-click="$ctrl.hide($event)">\n                No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	};

	exports.default = LogOutComponent;

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LogOutController = function () {
	  function LogOutController(auth) {
	    _classCallCheck(this, LogOutController);

	    this.auth = auth;
	  }

	  _createClass(LogOutController, [{
	    key: 'hide',
	    value: function hide($event) {
	      this.stopPropagation($event);
	      this.closeModal();
	    }
	  }, {
	    key: 'stopPropagation',
	    value: function stopPropagation($event) {
	      $event.stopPropagation();
	    }
	  }, {
	    key: 'signOut',
	    value: function signOut($event) {
	      this.auth.signOut();
	      this.hide($event);
	    }
	  }]);

	  return LogOutController;
	}();

	LogOutController.$inject = ['auth'];

	exports.default = LogOutController;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComponentModule = _angular2.default.module('header.component.module', []).name;

	exports.default = ComponentModule;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _header = __webpack_require__(84);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeaderComponent = {
	  controller: _header2.default,
	  template: '\n    <div class="header-panel">\n      <div class="sign-in-register">\n\n        <div class="cart-icon">\n          <button class="notification-btn"\n            ng-click="$ctrl.cartClick()"\n            ng-if="!$ctrl.loading">\n            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1792 1792" id="svg2989" version="1.1" inkscape:version="0.48.3.1 r9886" width="100%" height="100%" sodipodi:docname="shopping_cart_font_awesome.svg" data-inboxsdk-session-id="1488913123475-0.7579071169318441">\n              <metadata id="metadata2999">\n                  <rdf:RDF>\n                        <cc:Work rdf:about="">\n                                <dc:format>image/svg+xml</dc:format>\n                                        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>\n                                              </cc:Work>\n                                                  </rdf:RDF>\n                                                    </metadata>\n                                                      <defs id="defs2997"/>\n                                                        <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview2995" showgrid="false" inkscape:zoom="0.13169643" inkscape:cx="896" inkscape:cy="896" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0" inkscape:current-layer="svg2989"/>\n                                                          <g transform="matrix(1,0,0,-1,68.338983,1209.4915)" id="g2991">\n                                                              <path d="M 640,0 Q 640,-53 602.5,-90.5 565,-128 512,-128 459,-128 421.5,-90.5 384,-53 384,0 384,53 421.5,90.5 459,128 512,128 565,128 602.5,90.5 640,53 640,0 z m 896,0 q 0,-53 -37.5,-90.5 -37.5,-37.5 -90.5,-37.5 -53,0 -90.5,37.5 Q 1280,-53 1280,0 q 0,53 37.5,90.5 37.5,37.5 90.5,37.5 53,0 90.5,-37.5 Q 1536,53 1536,0 z m 128,1088 V 576 q 0,-24 -16,-42.5 Q 1632,515 1607,512 L 563,390 q 1,-7 4.5,-21.5 3.5,-14.5 6,-26.5 2.5,-12 2.5,-22 0,-16 -24,-64 h 920 q 26,0 45,-19 19,-19 19,-45 0,-26 -19,-45 -19,-19 -45,-19 H 448 q -26,0 -45,19 -19,19 -19,45 0,14 11,39.5 11,25.5 29.5,59.5 18.5,34 20.5,38 L 268,1152 H 64 q -26,0 -45,19 -19,19 -19,45 0,26 19,45 19,19 45,19 h 256 q 16,0 28.5,-6.5 12.5,-6.5 20,-15.5 7.5,-9 13,-24.5 5.5,-15.5 7.5,-26.5 2,-11 5.5,-29.5 3.5,-18.5 4.5,-25.5 h 1201 q 26,0 45,-19 19,-19 19,-45 z" id="path2993" inkscape:connector-curvature="0"/>\n                                                                </g>\n            <head/></svg>\n            <span ng-if="$ctrl.userData.cart.length">\n              {{$ctrl.userData.cart.length}}\n            </span>\n          </button>\n        </div>\n\n        <div class="relative">\n          <button class="notification-btn"\n            ng-click="$ctrl.notificationClick($event)"\n            ng-if="$ctrl.loggedIn && !$ctrl.loading">\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 88.516 88.516" style="enable-background:new 0 0 88.516 88.516;" xml:space="preserve" data-inboxsdk-session-id="1488814308998-0.6025413539877926">\n            <g>\n              <g>\n                  <path d="M67.512,36.822C56.11,12.287,50.184,2.97,31.553,3.355c-6.635,0.137-5.041-4.805-10.1-2.93    c-5.055,1.876-0.717,4.62-5.889,8.863C1.051,21.2,2.389,32.221,9.119,58.487c2.838,11.062-6.836,11.605-3.008,22.33    c2.793,7.819,23.393,11.093,45.127,3.028c21.734-8.063,35.453-24.07,32.66-31.889C80.069,41.231,72.317,47.152,67.512,36.822z     M48.879,77.238c-19.41,7.202-35.363,2.965-36.037,1.083c-1.162-3.248,6.266-14.081,28.457-22.316    c22.193-8.234,34.576-5.181,35.871-1.553C77.936,56.594,68.291,70.036,48.879,77.238z M42.641,59.764    C32.493,63.53,25.44,67.837,20.877,71.715c3.211,2.918,9.23,3.63,15.23,1.404c7.637-2.833,12.326-9.337,10.471-14.526    c-0.021-0.063-0.055-0.119-0.078-0.181C45.248,58.826,43.963,59.274,42.641,59.764z"/>\n                    </g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <head/></svg>\n            <span ng-if="$ctrl.notifications.length">\n              {{$ctrl.notifications.length}}\n            </span>\n          </button>\n          <div class="popover"\n            ng-click="$ctrl.stopPropagation($event)"\n            ng-if="$ctrl.notificationActive">\n              <div class="arrow"></div>\n\n              <div class="notification-item"\n                ng-click="$ctrl.clickNotificationItem(notif)"\n                ng-repeat="notif in $ctrl.notifications">\n                  <div class="top">\n                    <img ng-src="{{notif.image}}">\n                    <p class="reply-text">\n                      <span ng-if="notif.notification_type === \'comment_reply\'">\n                        <strong>{{notif.user_name}}</strong> said something in a discussion you are involved in on <strong>{{notif.page_name}}</strong>\n                      </span>\n                    </p>\n                  </div>\n                  <div class="bottom">\n                    <p class="date">{{notif.date | date}}</p>\n                  </div>\n              </div>\n\n              <div ng-if="!$ctrl.notifications.length">\n                Nothing To Show\n              </div>\n          </div>\n        </div>\n\n        <a href="{{site.baseurl}}/account" ng-if="$ctrl.loggedIn" class="account">\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" data-inboxsdk-session-id="1488815250232-0.448238553788453">\n          <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n          <g><path d="M602.4,558.7H397.6C222.2,558.7,80,708.5,80,892.9v21.5c0,75.5,142.1,75.6,317.6,75.6h204.9c175.3,0,317.6-2.8,317.6-75.6v-21.5C920,708.5,777.8,558.7,602.4,558.7L602.4,558.7z M251.9,264.8c0-33.4,6.4-66.7,18.9-97.5c12.4-30.8,30.8-59.1,53.8-82.6C347.5,61,375,42.1,405,29.4c30-12.8,62.5-19.4,95-19.4c32.5,0,64.9,6.6,95,19.4c30,12.7,57.5,31.6,80.5,55.2c23,23.6,41.3,51.8,53.8,82.6c12.4,30.8,18.9,64.2,18.9,97.5s-6.4,66.7-18.9,97.5c-12.4,30.8-30.8,59.1-53.8,82.6c-23,23.6-50.5,42.5-80.5,55.2c-30,12.8-62.5,19.4-95,19.4c-32.5,0-64.9-6.7-95-19.4c-30-12.8-57.5-31.6-80.5-55.2c-23-23.5-41.3-51.8-53.8-82.6C258.3,331.4,251.9,298.1,251.9,264.8L251.9,264.8z"/></g>\n          <head/></svg>\n        </a>\n\n        <button\n          ng-if="!$ctrl.loggedIn && !$ctrl.loading"\n          ng-click="$ctrl.showSignIn = true"\n          class="auth-button">\n            Log In / Register\n        </button>\n\n        <button\n          ng-if="$ctrl.loggedIn"\n          ng-click="$ctrl.showLogOut = true"\n          class="auth-button signout">\n            Sign Out\n        </button>\n\n      </div>\n    </div>\n\n    <login-modal\n      ng-if="$ctrl.showSignIn"\n      close-modal="$ctrl.closeSignIn()">\n    </login-modal>\n\n    <logout-modal\n      ng-if="$ctrl.showLogOut"\n      close-modal="$ctrl.closeLogOut()">\n    </logout-modal>\n  '
	};

	exports.default = HeaderComponent;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderController = function () {
	  function HeaderController(auth, userData, $timeout) {
	    _classCallCheck(this, HeaderController);

	    this.auth = auth;
	    this.userData = userData;
	    this.$timeout = $timeout;
	  }

	  _createClass(HeaderController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;

	      this.loggedIn = false;
	      this.loading = true;
	      this.showSignIn = false;
	      this.showLogOut = false;
	      this.notificationActive = false;
	      this.cart = [];

	      this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
	      this.userData.getNotifications(function (notifications) {
	        _this.$timeout(function () {
	          _this.notifications = notifications;
	        });
	      });

	      window.addEventListener('click', function (event) {
	        _this.$timeout(function () {
	          _this.notificationActive = false;
	        });
	      });
	    }
	  }, {
	    key: 'notificationClick',
	    value: function notificationClick(e) {
	      this.stopPropagation(e);
	      this.notificationActive = !this.notificationActive;
	    }
	  }, {
	    key: 'stopPropagation',
	    value: function stopPropagation(e) {
	      e.stopPropagation();
	    }
	  }, {
	    key: 'onAuthChange',
	    value: function onAuthChange(user) {
	      this.loading = false;
	      if (user) {
	        this.loggedIn = !user.isAnonymous;
	      } else {
	        this.loggedIn = false;
	      }
	    }
	  }, {
	    key: 'closeSignIn',
	    value: function closeSignIn() {
	      this.showSignIn = false;
	    }
	  }, {
	    key: 'closeLogOut',
	    value: function closeLogOut() {
	      this.showLogOut = false;
	    }
	  }, {
	    key: 'cartClick',
	    value: function cartClick() {
	      window.location.href = '/checkout';
	    }
	  }, {
	    key: 'clickNotificationItem',
	    value: function clickNotificationItem(item) {
	      this.userData.markNotificationRead(item.notif_id);
	      if (item.notification_type === 'comment_reply') {
	        window.location.href = item.location + '?comment=' + item.firebase_id;
	      }
	    }
	  }]);

	  return HeaderController;
	}();

	HeaderController.$inject = ['auth', 'userData', '$timeout'];

	exports.default = HeaderController;

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _lesson = __webpack_require__(114);

	var _lesson2 = _interopRequireDefault(_lesson);

	var _common = __webpack_require__(116);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(121);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lessonComponent = _angular2.default.module('lesson', [_components2.default, _common2.default]).component('lesson', _lesson2.default).name;

	exports.default = lessonComponent;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lesson = __webpack_require__(115);

	var _lesson2 = _interopRequireDefault(_lesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LessonComponent = {
	  controller: _lesson2.default,
	  template: '\n    <div id="lesson-container">\n      <div class="sidebar-container">\n        <div class="logo">\n          <a href="/">\n            <img ng-src="{{::$ctrl.mascotImg}}"/>\n            <h4>hungry<span class="turtle">turtle</span><span class="code">code</span></h4>\n            <h6>A Sea Of Information</h6>\n          </a>\n        </div>\n\n        <div id="lesson-list-cont" class="u-fancy-scrollbar">\n          <ul class="lesson-list">\n            <li ng-repeat="section in $ctrl.lessonList | orderBy:\'position\'" class="section">\n              <h3 ng-click="section.show = !section.show">{{section.name}}</h3>\n              <ul class="section"\n                ng-if="section.show">\n                  <a ui-sref="lesson({course: $ctrl.lessonService.course, lesson: $ctrl.slugify(lesson.title)})"\n                    ng-repeat="lesson in section.lessons | orderBy:\'position\'">\n                    <li class="lesson-item" ng-class="{active: $ctrl.slugify(lesson.title) === $ctrl.lessonService.lesson}">\n                      <p>{{lesson.title}}</p>\n                      <p class="length">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" data-inboxsdk-session-id="1485829018686-0.44899969075421664">\n                        <path d="M236.6,271.6c4.6,5.7,11.5,9.4,19.4,9.4c13.8,0,25-11.2,25-25c0-7.3-3.2-13.8-8.2-18.4c-0.6-0.7-1.3-1.5-2.2-2.2  c0,0-117.7-87.5-120.3-85.2c-2.6,2.3,85.3,120.2,85.3,120.2C235.8,270.8,236.3,271.2,236.6,271.6z"/>\n                        <path d="M256.2,48L256.2,48H256v112h16V65.3c97.8,8.3,175.3,90.5,175.3,190.5c0,105.5-85.7,191.4-191.2,191.4  c-105.5,0-191.3-85.8-191.3-191.3c0-52.8,21.5-100.6,56.1-135.2L109,108.9C71.3,146.6,48,198.6,48,256c0,114.9,93.1,208,208,208  c114.9,0,208-93.1,208-208C464,141.1,371,48,256.2,48z"/>\n                        </svg>\n                        {{lesson.length}}\n                        <div class="complete-mark" ng-if="$ctrl.completeLessons[$ctrl.slugify(lesson.title)]">\n                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient y2="157.23" x2="0" y1="211.23" gradientUnits="userSpaceOnUse" id="0"><stop stop-color="#2fae61"/><stop offset="1" stop-color="#4bdf88"/></linearGradient></defs><circle r="28" cy="184.55" cx="768.86" fill="url(#0)" transform="matrix(.92857 0 0 .92857-681.94-139.37)"/><path d="m773.85 193.97l-1.89-1.89c-.259-.259-.574-.389-.945-.389-.371 0-.686.13-.945.389l-9.116 9.13-4.085-4.099c-.259-.259-.574-.389-.945-.389-.371 0-.686.13-.945.389l-1.89 1.89c-.259.259-.389.574-.389.945 0 .37.13.686.389.945l5.03 5.03 1.89 1.89c.259.259.574.389.945.389.37 0 .685-.13.945-.389l1.89-1.89 10.06-10.06c.259-.259.389-.574.389-.945 0-.37-.13-.685-.389-.945" fill="#fff" fill-opacity=".851" transform="matrix(1.33268 0 0 1.33268-985.46-232.86)"/></svg>\n                        </div>\n                      </p>\n                    </li>\n                  </a>\n              </ul>\n            </li>\n          </ul>\n        </div>\n\n\n      </div>\n      <div class="main-container">\n        <header class="top-nav">\n          <nav class="lesson-nav">\n            <ul>\n              <li><a href="/">Home</a></li>\n              <li><a href="/account">My Account</a></li>\n              <li><a href="/courses">Courses</a></li>\n            </ul>\n          </nav>\n        </header>\n        <main class="lesson-content"\n          ui-view>\n        </main>\n      </div>\n    </div>\n  '
	};

	exports.default = LessonComponent;

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LessonController = function () {
	  function LessonController(firebaseService, $rootScope, lessonService, $state, userData) {
	    _classCallCheck(this, LessonController);

	    this.fb = firebaseService;
	    this.$rootScope = $rootScope;
	    this.lessonService = lessonService;
	    this.$state = $state;
	    this.userData = userData;

	    this.lessonList = [];
	    this.mascotImg = window.mascotImg;
	  }

	  _createClass(LessonController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.onStateChange();
	    }
	  }, {
	    key: 'setActiveSection',
	    value: function setActiveSection() {
	      var _this = this;

	      this.lessonList.forEach(function (section) {
	        section.lessons.forEach(function (lesson) {
	          if (_this.slugify(lesson.title) === _this.lessonService.lesson) {
	            section.show = true;
	            return;
	          }
	        });
	      });
	    }
	  }, {
	    key: 'onStateChange',
	    value: function onStateChange() {
	      var _this2 = this;

	      this.$rootScope.$on('$stateChangeStart', function (e, to, params) {
	        if (params.course) {
	          _this2.lessonService.getLessonList(params.course).then(function (list) {
	            _this2.lessonList = list;
	            _this2.setActiveSection();
	          });

	          _this2.userData.getCompleteLessons(params.course, function (lessons) {
	            _this2.completeLessons = lessons;
	            _this2.lessonService.completeLessons = lessons;
	          });

	          _this2.lessonService.setMeta(params.course, params.lesson);
	        }
	      });
	    }
	  }, {
	    key: 'goToLesson',
	    value: function goToLesson(lesson) {
	      this.$state.go('lesson', { course: this.lessonService.course, lesson: lesson });
	    }
	  }, {
	    key: 'slugify',
	    value: function slugify(name) {
	      return name.toLowerCase().split(' ').join('-');
	    }
	  }]);

	  return LessonController;
	}();

	LessonController.$inject = ['firebaseService', '$rootScope', 'lessonService', '$state', 'userData'];

	exports.default = LessonController;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularAnimate = __webpack_require__(5);

	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

	var _firebaseService = __webpack_require__(9);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	var _lessonService = __webpack_require__(117);

	var _lessonService2 = _interopRequireDefault(_lessonService);

	var _userData = __webpack_require__(7);

	var _userData2 = _interopRequireDefault(_userData);

	var _dataService = __webpack_require__(26);

	var _dataService2 = _interopRequireDefault(_dataService);

	var _signInComponent = __webpack_require__(54);

	var _signInComponent2 = _interopRequireDefault(_signInComponent);

	var _analytics = __webpack_require__(20);

	var _analytics2 = _interopRequireDefault(_analytics);

	var _trackingPixels = __webpack_require__(39);

	var _trackingPixels2 = _interopRequireDefault(_trackingPixels);

	var _cursorDirective = __webpack_require__(119);

	var _cursorDirective2 = _interopRequireDefault(_cursorDirective);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonComponent = _angular2.default.module('lessons.common.module', [_firebaseService2.default, _angularAnimate2.default, _lessonService2.default, _userData2.default, _dataService2.default, _cursorDirective2.default, _signInComponent2.default, _trackingPixels2.default, _analytics2.default]).name;

	exports.default = CommonComponent;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _lesson = __webpack_require__(118);

	var _lesson2 = _interopRequireDefault(_lesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lessonServiceComponent = _angular2.default.module('lessonService', []).service('lessonService', _lesson2.default).name;

	exports.default = lessonServiceComponent;

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LessonService = function () {
	  function LessonService(firebaseService, $state, userData) {
	    _classCallCheck(this, LessonService);

	    this.fb = firebaseService;
	    this.$state = $state;
	    this.userData = userData;

	    this.course = '';
	    this.lesson = '';
	  }

	  _createClass(LessonService, [{
	    key: 'setMeta',
	    value: function setMeta(course, lesson) {
	      this.course = course;
	      this.lesson = lesson;
	    }
	  }, {
	    key: 'getMeta',
	    value: function getMeta() {
	      return {
	        course: this.course,
	        lesson: this.lesson
	      };
	    }
	  }, {
	    key: 'slugify',
	    value: function slugify(name) {
	      return name.toLowerCase().split(' ').join('-');
	    }
	  }, {
	    key: 'isLessonComplete',
	    value: function isLessonComplete(lesson) {
	      if (this.completeLessons) {
	        return this.completeLessons[this.slugify(lesson)];
	      }
	      return false;
	    }
	  }, {
	    key: 'goToNextLesson',
	    value: function goToNextLesson(currentLesson) {
	      var _this = this;

	      this.lessonList.forEach(function (section, secIndex) {
	        section.lessons.forEach(function (lesson, index) {
	          if (_this.slugify(lesson.title) === currentLesson) {
	            (function () {
	              var nextLesson = void 0;
	              var currentPos = lesson.position;
	              if (currentPos === section.lessons.length - 1) {
	                _this.lessonList.forEach(function (newSection) {
	                  if (newSection.position === section.position + 1) {
	                    newSection.lessons.forEach(function (lesson) {
	                      if (lesson.position === 0) {
	                        nextLesson = _this.slugify(lesson.title);
	                      }
	                    });
	                  }
	                });
	              } else {
	                section.lessons.forEach(function (lesson) {
	                  if (lesson.position === currentPos + 1) {
	                    nextLesson = _this.slugify(lesson.title);
	                  }
	                });
	              }
	              if (nextLesson) {
	                _this.$state.go('lesson', { course: _this.course, lesson: nextLesson });
	              }
	            })();
	          }
	        });
	      });
	    }
	  }, {
	    key: 'checkIfLastLesson',
	    value: function checkIfLastLesson(lesson, section) {
	      var _this2 = this;

	      var isLast = false;

	      this.lessonList.forEach(function (item) {
	        if (item.name === section) {
	          if (item.position === _this2.lessonList.length - 1) {
	            item.lessons.forEach(function (les) {
	              if (les.slug === lesson) {
	                isLast = true;
	              }
	            });
	          }
	        }
	      });
	      return isLast;
	    }
	  }, {
	    key: 'checkIfCourseComplete',
	    value: function checkIfCourseComplete() {
	      var numCompleted = Object.keys(this.completeLessons).length;

	      var numLessons = 0;
	      this.lessonList.forEach(function (section) {
	        numLessons += section.lessons.length;
	      });

	      if (numCompleted === numLessons) {
	        this.userData.markCourseComplete(this.course);
	      }
	    }
	  }, {
	    key: 'getLessonList',
	    value: function getLessonList(course) {
	      var _this3 = this;

	      if (this.lessonList && course === this.course) return Promise.resolve(this.lessonList);

	      var courseName = course || this.course;

	      return this.fb.getLessonList(courseName).then(function (list) {
	        _this3.lessonList = _this3.deepObjToArray(list);
	        return _this3.lessonList;
	      });
	    }
	  }, {
	    key: 'deepObjToArray',
	    value: function deepObjToArray(obj) {
	      var _this4 = this;

	      return Object.keys(obj).map(function (key) {
	        if (_typeof(obj[key]) === 'object') {
	          Object.keys(obj[key]).forEach(function (newKey) {
	            if (_typeof(obj[key][newKey]) === 'object') {
	              obj[key][newKey] = _this4.deepObjToArray(obj[key][newKey]);
	            }
	          });
	        }
	        return obj[key];
	      });
	    }
	  }]);

	  return LessonService;
	}();

	LessonService.$inject = ['firebaseService', '$state', 'userData'];

	exports.default = LessonService;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _cursor = __webpack_require__(120);

	var _cursor2 = _interopRequireDefault(_cursor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CursorDirectiveComponent = _angular2.default.module('CursorDirective', []).directive('videoCursor', _cursor2.default).name;

	exports.default = CursorDirectiveComponent;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoCursor = function VideoCursor($timeout) {
	  return {
	    restrict: 'A',
	    link: function link($scope, $element, $attrs) {
	      var overlayPlayContainer = void 0,
	          controlsContainer = void 0;

	      $timeout(function () {
	        overlayPlayContainer = _angular2.default.element($element[0].querySelector('.overlayPlayContainer'));
	        controlsContainer = _angular2.default.element($element[0].querySelector('.controls-container'));
	      });

	      $element.bind('mousemove', function () {
	        overlayPlayContainer.css('cursor', 'default');
	        if (controlsContainer.hasClass('hide-animation')) {
	          controlsContainer.addClass('show-animation');
	        }
	        resetTimer();
	      });
	      $element.bind('mouseleave', function () {
	        if (controlsContainer.hasClass('show-animation')) {
	          controlsContainer.removeClass('show-animation');
	        }
	      });

	      var timeoutId = void 0;

	      function startTimer() {
	        timeoutId = window.setTimeout(goInactive, 4000);
	      }
	      function resetTimer() {
	        window.clearTimeout(timeoutId);

	        startTimer();
	      }
	      function goInactive() {
	        controlsContainer.removeClass('show-animation');
	        overlayPlayContainer.css('cursor', 'none');
	      }
	    }
	  };
	};

	VideoCursor.$inject = ['$timeout'];

	exports.default = VideoCursor;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _lessonPage = __webpack_require__(122);

	var _lessonPage2 = _interopRequireDefault(_lessonPage);

	var _video = __webpack_require__(125);

	var _video2 = _interopRequireDefault(_video);

	var _lessonContent = __webpack_require__(138);

	var _lessonContent2 = _interopRequireDefault(_lessonContent);

	var _stateChangeScreen = __webpack_require__(154);

	var _stateChangeScreen2 = _interopRequireDefault(_stateChangeScreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Components = _angular2.default.module('components.module', [_lessonPage2.default, _video2.default, _stateChangeScreen2.default, _lessonContent2.default]).name;

	exports.default = Components;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _angularUiRouter = __webpack_require__(50);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _lessonPage = __webpack_require__(123);

	var _lessonPage2 = _interopRequireDefault(_lessonPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LessonPageComponent = _angular2.default.module('lessonPage', [_angularUiRouter2.default]).component('lessonPage', _lessonPage2.default).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('lesson', {
	    url: '/:course/:lesson',
	    template: '<lesson-page lesson-meta-data="$resolve.getLessonMeta" lesson-data="$resolve.signIn"></lesson-page>',
	    resolve: {
	      getLessonMeta: ['$stateParams', 'firebaseService', function ($stateParams, firebaseService) {
	        return firebaseService.getLessonMeta($stateParams.course, $stateParams.lesson);
	      }],
	      signIn: ['auth', 'userData', '$stateParams', 'firebaseService', function (auth, userData, $stateParams, firebaseService) {
	        return auth.waitForAuth().then(function (user) {
	          if (user && user.uid && !user.isAnonymous && $stateParams.lesson) {

	            return userData.isEnrolled($stateParams.course, user.uid).then(function (enrolled) {
	              if (enrolled) {
	                return firebaseService.getLessonContent($stateParams.course, $stateParams.lesson);
	              } else {
	                // not enrolled
	                window.location.href = '/courses/' + $stateParams.course;
	                return false;
	              }
	            });
	          } else {
	            return false;
	          }
	        });
	      }]
	    }
	  });
	  $urlRouterProvider.otherwise('/');
	}]).name;

	exports.default = LessonPageComponent;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lessonPage = __webpack_require__(124);

	var _lessonPage2 = _interopRequireDefault(_lessonPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LessonPage = {
	  controller: _lessonPage2.default,
	  bindings: {
	    lessonMetaData: '<',
	    lessonData: '<'
	  },
	  template: '\n    <h1 class="lesson-title">{{::$ctrl.lessonMetaData.title}}</h1>\n    <h3 class="course-title">{{::$ctrl.lessonMetaData.course}}</h3>\n    <div ng-if="$ctrl.lessonData">\n      <state-change></state-change>\n      <lesson-video\n        video-src="{{$ctrl.videoUrl}}"\n        poster="$ctrl.lessonData.video_poster"\n        next-video="$ctrl.nextLesson()"\n        lesson-complete="$ctrl.lessonComplete()">\n      </lesson-video>\n      <lesson-content\n        article="$ctrl.lessonData.article"\n        resources="$ctrl.lessonData.resources"\n        next-lesson="$ctrl.nextLesson()"\n        check-if-last-lesson="$ctrl.checkIfLastLesson()"\n        lesson-is-complete="$ctrl.lessonService.isLessonComplete($ctrl.lessonData.lesson)"\n        lesson-complete="$ctrl.lessonComplete()">\n      </lesson-content>\n    </div>\n    <div ng-if="!$ctrl.lessonData">\n      <htc-sign-in\n        forgot-pass="$ctrl.forgotPass()"\n        ng-if="!$ctrl.forgotPassword">\n      </htc-sign-in>\n      <div class="forgot-container"\n        ng-if="$ctrl.forgotPassword">\n          <htc-forgot-pass\n            close-modal="$ctrl.closeForgot()"\n            text="Sign In">\n          </htc-forgot-pass>\n      </div>\n    </div>\n  '
	};

	exports.default = LessonPage;

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LessonPageController = function () {
	  function LessonPageController(userData, lessonService) {
	    _classCallCheck(this, LessonPageController);

	    this.userData = userData;
	    this.lessonService = lessonService;
	  }

	  _createClass(LessonPageController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;

	      this.videoUrl = '';
	      this.forgotPassword = false;

	      if (this.lessonData && this.lessonData.video) {
	        this.userData.getSignedVideoUrl(this.lessonData.video).then(function (url) {
	          return _this.videoUrl = url;
	        });
	      }
	    }
	  }, {
	    key: 'forgotPass',
	    value: function forgotPass() {
	      this.forgotPassword = true;
	    }
	  }, {
	    key: 'closeForgot',
	    value: function closeForgot() {
	      this.forgotPassword = false;
	    }
	  }, {
	    key: 'lessonComplete',
	    value: function lessonComplete() {
	      var _this2 = this;

	      this.userData.completeLesson(this.lessonData.course, this.lessonData.lesson).then(function () {
	        _this2.lessonService.checkIfCourseComplete();
	      });
	    }
	  }, {
	    key: 'nextLesson',
	    value: function nextLesson() {
	      this.lessonService.goToNextLesson(this.lessonData.lesson);
	    }
	  }, {
	    key: 'checkIfLastLesson',
	    value: function checkIfLastLesson() {
	      return this.lessonService.checkIfLastLesson(this.lessonData.lesson, this.lessonData.section);
	    }
	  }]);

	  return LessonPageController;
	}();

	LessonPageController.$inject = ['userData', 'lessonService'];

	exports.default = LessonPageController;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _video = __webpack_require__(126);

	var _video2 = _interopRequireDefault(_video);

	var _videogular = __webpack_require__(128);

	var _videogular2 = _interopRequireDefault(_videogular);

	var _videogularControls = __webpack_require__(132);

	var _videogularControls2 = _interopRequireDefault(_videogularControls);

	var _videogularOverlayPlay = __webpack_require__(134);

	var _videogularOverlayPlay2 = _interopRequireDefault(_videogularOverlayPlay);

	var _videogularPoster = __webpack_require__(136);

	var _videogularPoster2 = _interopRequireDefault(_videogularPoster);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var videoComponent = _angular2.default.module('video.module', [_videogular2.default, _videogularControls2.default, _videogularOverlayPlay2.default, _videogularPoster2.default]).component('lessonVideo', _video2.default).name;

	exports.default = videoComponent;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _video = __webpack_require__(127);

	var _video2 = _interopRequireDefault(_video);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoComponent = {
	  bindings: {
	    videoSrc: '@',
	    lessonComplete: '&',
	    nextVideo: '&',
	    poster: '<'
	  },
	  controller: _video2.default,
	  template: '\n    <div class="video-container">\n      <div class="video">\n        <videogular vg-theme="$ctrl.config.theme"\n          video-cursor\n          data-vg-player-ready="$ctrl.onPlayerReady($API)"\n          data-vg-update-time="$ctrl.checkTime($currentTime, $duration)"\n          data-vg-complete="$ctrl.nextVideo()">\n          <vg-media\n            vg-src="$ctrl.lessonVid">\n          </vg-media>\n\n          <vg-controls vg-autohide="$ctrl.autohide" vg-autohide-time="$ctrl.autohideTime">\n            <vg-play-pause-button></vg-play-pause-button>\n            <vg-time-display>{{currentTime | date:\'mm:ss\'}}</vg-time-display>\n            <vg-scrub-bar>\n              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            </vg-scrub-bar>\n            <vg-time-display>{{totalTime | date:\'mm:ss\':\'+0000\'}}</vg-time-display>\n            <vg-volume>\n              <vg-mute-button</vg-mute-button>\n              <vg-volume-bar></vg-volume-bar>\n            </vg-volume>\n            <vg-playback-button></vg-playback-button>\n            <vg-fullscreen-button></vg-fullscreen-button>\n          </vg-controls>\n\n          <vg-overlay-play></vg-overlay-play>\n          <vg-poster vg-url="$ctrl.poster"></vg-poster>\n\n        </videogular>\n      </div>\n    </div>\n  '
	};

	exports.default = VideoComponent;

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VideoController = function () {
	  function VideoController() {
	    _classCallCheck(this, VideoController);

	    this.lessonVid = [];

	    // this.poster = 'https://artfiles.alphacoders.com/365/36568.gif';
	    // this.poster = 'http://www.freeiconspng.com/uploads/spinner-icon-0.gif';
	    this.poster = 'http://zellox.com/wp-content/uploads/2016/05/animated-gif-wallpaper-3.gif';

	    this.posterLoaded = false;
	  }

	  _createClass(VideoController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.config = {
	        theme: window.videogularCss
	      };

	      this.autohide = true;
	      this.autohideTime = 4000;
	    }
	  }, {
	    key: '$onChanges',
	    value: function $onChanges(change) {
	      if (this.videoSrc) {
	        this.lessonVid = [{
	          src: this.videoSrc,
	          type: 'video/mp4'
	        }];
	      }
	      if (change.poster && change.poster.currentValue) {
	        this.poster = change.poster.currentValue;
	        this.posterLoaded = true;
	      } else if (!this.posterLoaded) {
	        this.poster = 'http://zellox.com/wp-content/uploads/2016/05/animated-gif-wallpaper-3.gif';
	      }
	    }
	  }, {
	    key: 'onPlayerReady',
	    value: function onPlayerReady($API) {
	      this.API = $API;
	    }
	  }, {
	    key: 'checkTime',
	    value: function checkTime(time, duration) {
	      var currentTime = Math.round(time);

	      if (currentTime >= duration * 0.9) {
	        // mark video as complete
	        this.lessonComplete();
	      }
	      // look into adding $analytics to track % complete
	    }
	  }]);

	  return VideoController;
	}();

	exports.default = VideoController;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);		
	__webpack_require__(129);
	__webpack_require__(131);

	module.exports = 'com.2fdevs.videogular';


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130);
	module.exports = 'ngSanitize';


/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.6.2
	 * (c) 2010-2017 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var $sanitizeMinErr = angular.$$minErr('$sanitize');
	var bind;
	var extend;
	var forEach;
	var isDefined;
	var lowercase;
	var noop;
	var htmlParser;
	var htmlSanitizeWriter;

	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   Sanitizes an html string by stripping all potentially dangerous tokens.
	 *
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string.
	 *
	 *   The whitelist for URL sanitization of attribute values is configured using the functions
	 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
	 *   `$compileProvider`}.
	 *
	 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js" name="sanitize-service">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });

	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });

	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });

	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */


	/**
	 * @ngdoc provider
	 * @name $sanitizeProvider
	 * @this
	 *
	 * @description
	 * Creates and configures {@link $sanitize} instance.
	 */
	function $SanitizeProvider() {
	  var svgEnabled = false;

	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    if (svgEnabled) {
	      extend(validElements, svgElements);
	    }
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];


	  /**
	   * @ngdoc method
	   * @name $sanitizeProvider#enableSvg
	   * @kind function
	   *
	   * @description
	   * Enables a subset of svg to be supported by the sanitizer.
	   *
	   * <div class="alert alert-warning">
	   *   <p>By enabling this setting without taking other precautions, you might expose your
	   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
	   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
	   *   link). Such behavior can then result in phishing incidents.</p>
	   *
	   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
	   *   tags within the sanitized content:</p>
	   *
	   *   <br>
	   *
	   *   <pre><code>
	   *   .rootOfTheIncludedContent svg {
	   *     overflow: hidden !important;
	   *   }
	   *   </code></pre>
	   * </div>
	   *
	   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
	   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
	   *    without an argument or self for chaining otherwise.
	   */
	  this.enableSvg = function(enableSvg) {
	    if (isDefined(enableSvg)) {
	      svgEnabled = enableSvg;
	      return this;
	    } else {
	      return svgEnabled;
	    }
	  };

	  //////////////////////////////////////////////////////////////////////////////////////////////////
	  // Private stuff
	  //////////////////////////////////////////////////////////////////////////////////////////////////

	  bind = angular.bind;
	  extend = angular.extend;
	  forEach = angular.forEach;
	  isDefined = angular.isDefined;
	  lowercase = angular.lowercase;
	  noop = angular.noop;

	  htmlParser = htmlParserImpl;
	  htmlSanitizeWriter = htmlSanitizeWriterImpl;

	  // Regular Expressions for parsing tags and attributes
	  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	    // Match everything outside of normal chars and " (quote character)
	    NON_ALPHANUMERIC_REGEXP = /([^#-~ |!])/g;


	  // Good source of info about elements and attributes
	  // http://dev.w3.org/html5/spec/Overview.html#semantics
	  // http://simon.html5.org/html-elements

	  // Safe Void Elements - HTML5
	  // http://dev.w3.org/html5/spec/Overview.html#void-elements
	  var voidElements = toMap('area,br,col,hr,img,wbr');

	  // Elements that you can, intentionally, leave open (and which close themselves)
	  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
	  var optionalEndTagBlockElements = toMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
	      optionalEndTagInlineElements = toMap('rp,rt'),
	      optionalEndTagElements = extend({},
	                                              optionalEndTagInlineElements,
	                                              optionalEndTagBlockElements);

	  // Safe Block Elements - HTML5
	  var blockElements = extend({}, optionalEndTagBlockElements, toMap('address,article,' +
	          'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
	          'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));

	  // Inline Elements - HTML5
	  var inlineElements = extend({}, optionalEndTagInlineElements, toMap('a,abbr,acronym,b,' +
	          'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' +
	          'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));

	  // SVG Elements
	  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
	  // They can potentially allow for arbitrary javascript to be executed. See #11290
	  var svgElements = toMap('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,' +
	          'hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,' +
	          'radialGradient,rect,stop,svg,switch,text,title,tspan');

	  // Blocked Elements (will be stripped)
	  var blockedElements = toMap('script,style');

	  var validElements = extend({},
	                                     voidElements,
	                                     blockElements,
	                                     inlineElements,
	                                     optionalEndTagElements);

	  //Attributes that have href and hence need to be sanitized
	  var uriAttrs = toMap('background,cite,href,longdesc,src,xlink:href');

	  var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
	      'valign,value,vspace,width');

	  // SVG attributes (without "id" and "name" attributes)
	  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	  var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
	      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
	      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
	      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
	      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
	      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
	      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
	      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
	      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
	      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
	      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
	      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
	      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
	      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

	  var validAttrs = extend({},
	                                  uriAttrs,
	                                  svgAttrs,
	                                  htmlAttrs);

	  function toMap(str, lowercaseKeys) {
	    var obj = {}, items = str.split(','), i;
	    for (i = 0; i < items.length; i++) {
	      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
	    }
	    return obj;
	  }

	  var inertBodyElement;
	  (function(window) {
	    var doc;
	    if (window.document && window.document.implementation) {
	      doc = window.document.implementation.createHTMLDocument('inert');
	    } else {
	      throw $sanitizeMinErr('noinert', 'Can\'t create an inert html document');
	    }
	    var docElement = doc.documentElement || doc.getDocumentElement();
	    var bodyElements = docElement.getElementsByTagName('body');

	    // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
	    if (bodyElements.length === 1) {
	      inertBodyElement = bodyElements[0];
	    } else {
	      var html = doc.createElement('html');
	      inertBodyElement = doc.createElement('body');
	      html.appendChild(inertBodyElement);
	      doc.appendChild(html);
	    }
	  })(window);

	  /**
	   * @example
	   * htmlParser(htmlString, {
	   *     start: function(tag, attrs) {},
	   *     end: function(tag) {},
	   *     chars: function(text) {},
	   *     comment: function(text) {}
	   * });
	   *
	   * @param {string} html string
	   * @param {object} handler
	   */
	  function htmlParserImpl(html, handler) {
	    if (html === null || html === undefined) {
	      html = '';
	    } else if (typeof html !== 'string') {
	      html = '' + html;
	    }
	    inertBodyElement.innerHTML = html;

	    //mXSS protection
	    var mXSSAttempts = 5;
	    do {
	      if (mXSSAttempts === 0) {
	        throw $sanitizeMinErr('uinput', 'Failed to sanitize html because the input is unstable');
	      }
	      mXSSAttempts--;

	      // strip custom-namespaced attributes on IE<=11
	      if (window.document.documentMode) {
	        stripCustomNsAttrs(inertBodyElement);
	      }
	      html = inertBodyElement.innerHTML; //trigger mXSS
	      inertBodyElement.innerHTML = html;
	    } while (html !== inertBodyElement.innerHTML);

	    var node = inertBodyElement.firstChild;
	    while (node) {
	      switch (node.nodeType) {
	        case 1: // ELEMENT_NODE
	          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
	          break;
	        case 3: // TEXT NODE
	          handler.chars(node.textContent);
	          break;
	      }

	      var nextNode;
	      if (!(nextNode = node.firstChild)) {
	        if (node.nodeType === 1) {
	          handler.end(node.nodeName.toLowerCase());
	        }
	        nextNode = node.nextSibling;
	        if (!nextNode) {
	          while (nextNode == null) {
	            node = node.parentNode;
	            if (node === inertBodyElement) break;
	            nextNode = node.nextSibling;
	            if (node.nodeType === 1) {
	              handler.end(node.nodeName.toLowerCase());
	            }
	          }
	        }
	      }
	      node = nextNode;
	    }

	    while ((node = inertBodyElement.firstChild)) {
	      inertBodyElement.removeChild(node);
	    }
	  }

	  function attrToMap(attrs) {
	    var map = {};
	    for (var i = 0, ii = attrs.length; i < ii; i++) {
	      var attr = attrs[i];
	      map[attr.name] = attr.value;
	    }
	    return map;
	  }


	  /**
	   * Escapes all potentially dangerous characters, so that the
	   * resulting string can be safely inserted into attribute or
	   * element text.
	   * @param value
	   * @returns {string} escaped text
	   */
	  function encodeEntities(value) {
	    return value.
	      replace(/&/g, '&amp;').
	      replace(SURROGATE_PAIR_REGEXP, function(value) {
	        var hi = value.charCodeAt(0);
	        var low = value.charCodeAt(1);
	        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	      }).
	      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	        return '&#' + value.charCodeAt(0) + ';';
	      }).
	      replace(/</g, '&lt;').
	      replace(/>/g, '&gt;');
	  }

	  /**
	   * create an HTML/XML writer which writes to buffer
	   * @param {Array} buf use buf.join('') to get out sanitized html string
	   * @returns {object} in the form of {
	   *     start: function(tag, attrs) {},
	   *     end: function(tag) {},
	   *     chars: function(text) {},
	   *     comment: function(text) {}
	   * }
	   */
	  function htmlSanitizeWriterImpl(buf, uriValidator) {
	    var ignoreCurrentElement = false;
	    var out = bind(buf, buf.push);
	    return {
	      start: function(tag, attrs) {
	        tag = lowercase(tag);
	        if (!ignoreCurrentElement && blockedElements[tag]) {
	          ignoreCurrentElement = tag;
	        }
	        if (!ignoreCurrentElement && validElements[tag] === true) {
	          out('<');
	          out(tag);
	          forEach(attrs, function(value, key) {
	            var lkey = lowercase(key);
	            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	            if (validAttrs[lkey] === true &&
	              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	              out(' ');
	              out(key);
	              out('="');
	              out(encodeEntities(value));
	              out('"');
	            }
	          });
	          out('>');
	        }
	      },
	      end: function(tag) {
	        tag = lowercase(tag);
	        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
	          out('</');
	          out(tag);
	          out('>');
	        }
	        // eslint-disable-next-line eqeqeq
	        if (tag == ignoreCurrentElement) {
	          ignoreCurrentElement = false;
	        }
	      },
	      chars: function(chars) {
	        if (!ignoreCurrentElement) {
	          out(encodeEntities(chars));
	        }
	      }
	    };
	  }


	  /**
	   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
	   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
	   * to allow any of these custom attributes. This method strips them all.
	   *
	   * @param node Root element to process
	   */
	  function stripCustomNsAttrs(node) {
	    while (node) {
	      if (node.nodeType === window.Node.ELEMENT_NODE) {
	        var attrs = node.attributes;
	        for (var i = 0, l = attrs.length; i < l; i++) {
	          var attrNode = attrs[i];
	          var attrName = attrNode.name.toLowerCase();
	          if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
	            node.removeAttributeNode(attrNode);
	            i--;
	            l--;
	          }
	        }
	      }

	      var nextNode = node.firstChild;
	      if (nextNode) {
	        stripCustomNsAttrs(nextNode);
	      }

	      node = node.nextSibling;
	    }
	  }
	}

	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, noop);
	  writer.chars(chars);
	  return buf.join('');
	}


	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
	 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
	 *
	 *    Can be one of:
	 *
	 *    - `object`: A map of attributes
	 *    - `function`: Takes the url as a parameter and returns a map of attributes
	 *
	 *    If the map of attributes contains a value for `target`, it overrides the value of
	 *    the target parameter.
	 *
	 *
	 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js" name="linky-filter">
	     <file name="index.html">
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <th>Filter</th>
	           <th>Source</th>
	           <th>Rendered</th>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="linky-custom-attributes">
	          <td>linky custom attributes</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="script.js">
	       angular.module('linkyExample', ['ngSanitize'])
	         .controller('ExampleController', ['$scope', function($scope) {
	           $scope.snippet =
	             'Pretty text with some links:\n' +
	             'http://angularjs.org/,\n' +
	             'mailto:us@somewhere.org,\n' +
	             'another@somewhere.org,\n' +
	             'and one more: ftp://127.0.0.1/.';
	           $scope.snippetWithSingleURL = 'http://angularjs.org/';
	         }]);
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });

	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });

	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });

	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });

	       it('should optionally add custom attributes', function() {
	        expect(element(by.id('linky-custom-attributes')).
	            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	      MAILTO_REGEXP = /^mailto:/i;

	  var linkyMinErr = angular.$$minErr('linky');
	  var isDefined = angular.isDefined;
	  var isFunction = angular.isFunction;
	  var isObject = angular.isObject;
	  var isString = angular.isString;

	  return function(text, target, attributes) {
	    if (text == null || text === '') return text;
	    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

	    var attributesFn =
	      isFunction(attributes) ? attributes :
	      isObject(attributes) ? function getAttributesObject() {return attributes;} :
	      function getEmptyAttributesObject() {return {};};

	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));

	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }

	    function addLink(url, text) {
	      var key, linkAttributes = attributesFn(url);
	      html.push('<a ');

	      for (key in linkAttributes) {
	        html.push(key + '="' + linkAttributes[key] + '" ');
	      }

	      if (isDefined(target) && !('target' in linkAttributes)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * @license videogular v1.4.4 http://videogular.com
	 * Two Fucking Developers http://twofuckingdevelopers.com
	 * License: MIT
	 */
	"use strict";
	angular.module("com.2fdevs.videogular", ["ngSanitize"])
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-media-video", "<video></video>");
	        $templateCache.put("vg-templates/vg-media-audio", "<audio></audio>");

	        // Support for browsers that doesn't have .bind()
	        if (!Function.prototype.bind) {
	            Function.prototype.bind = function (oThis) {
	                if (typeof this !== 'function') {
	                    // closest thing possible to the ECMAScript 5
	                    // internal IsCallable function
	                    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	                }

	                var aArgs = Array.prototype.slice.call(arguments, 1),
	                    fToBind = this,
	                    fNOP = function () {
	                    },
	                    fBound = function () {
	                        return fToBind.apply(this instanceof fNOP
	                                ? this
	                                : oThis,
	                            aArgs.concat(Array.prototype.slice.call(arguments)));
	                    };

	                fNOP.prototype = this.prototype;
	                fBound.prototype = new fNOP();

	                return fBound;
	            };
	        }
	    }]
	);

	/**
	 * @ngdoc service
	 * @name com.2fdevs.videogular.constant:VG_STATES
	 *
	 * @description
	 * Possible video states:
	 *  - VG_STATES.PLAY: "play"
	 *  - VG_STATES.PAUSE: "pause"
	 *  - VG_STATES.STOP: "stop"
	 **/
	/**
	 * @ngdoc service
	 * @name com.2fdevs.videogular.constant:VG_VOLUME_KEY
	 *
	 * @description localStorage key name for persistent video play volume on a domain.
	 **/
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .constant("VG_STATES", {
	        PLAY: "play",
	        PAUSE: "pause",
	        STOP: "stop"
	    })
	    .constant("VG_VOLUME_KEY", "videogularVolume");

	"use strict";
	/**
	 * @ngdoc controller
	 * @name com.2fdevs.videogular.controller:vgController
	 * @description
	 * Videogular controller.
	 * This controller offers a public API:
	 *
	 * Methods
	 * - play(): Plays media.
	 * - pause(): Pause media.
	 * - stop(): Stops media.
	 * - playPause(): Toggles play and pause.
	 * - seekTime(value, byPercent): Seeks to a specified time position. Param value must be an integer representing the target position in seconds or a percentage. By default seekTime seeks by seconds, if you want to seek by percentage just pass byPercent to true.
	 * - setVolume(volume): Sets volume. Param volume must be a float number with a value between 0 and 1.
	 * - setPlayback(playback): Sets playback. Param plaback must be a float number with a value between 0 and 2.
	 * - setState(state): Sets a new state. Param state mus be an string with 'play', 'pause' or 'stop'. This method only changes the state of the player, but doesn't plays, pauses or stops the media file.
	 * - toggleFullScreen(): Toggles between fullscreen and normal mode.
	 * - updateTheme(css-url): Removes previous CSS theme and sets a new one.
	 * - clearMedia(): Cleans the current media file.
	 * - changeSource(array): Updates current media source. Param `array` must be an array of media source objects or a simple URL string.
	 * A media source is an object with two properties `src` and `type`. The `src` property must contains a trustful url resource.
	 * <pre>{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"}</pre>
	 *
	 * Properties
	 * - config: String with a url to JSON config file.
	 * - isReady: Boolean value with current player initialization state.
	 * - isBuffering: Boolean value to know if player is buffering media.
	 * - isCompleted: Boolean value to know if current media file has been completed.
	 * - isLive: Boolean value to know if current media file is a Live Streaming.
	 * - playsInline: Boolean value to know if Videogular is using inline playing or not.
	 * - nativeFullscreen: Boolean value to know if Videogular if fullscreen mode will use native mode or emulated mode.
	 * - mediaElement: Reference to video/audio object.
	 * - videogularElement: Reference to videogular tag.
	 * - sources: Array with current sources or a simple URL string.
	 * - tracks: Array with current tracks.
	 * - cuePoints: Object containing a list of timelines with cue points. Each property in the object represents a timeline, which is an Array of objects with the next definition:
	 * <pre>{
	 *    timeLapse:{
	 *      start: 0,
	 *      end: 10
	 *    },
	 *    onEnter: callback(currentTime, timeLapse, params),
	 *    onLeave: callback(currentTime, timeLapse, params),
	 *    onUpdate: callback(currentTime, timeLapse, params),
	 *    onComplete: callback(currentTime, timeLapse, params),
	 *    params: {
	 *      // Custom object with desired structure and data
	 *    }
	 * }</pre>
	 *
	 *    * **timeLapse:** Object with start and end properties to define in seconds when this timeline is active.\n
	 *    * **onEnter:** Callback function that will be called when progress reaches a cue point or being outside a cue point user seeks to a cue point manually.
	 *    * **onLeave:** Callback function that will be called when user seeks and the new time doesn't reach to the timeLapse.start property.
	 *    * **onUpdate:** Callback function that will be called when the progress is in the middle of timeLapse.start and timeLapse.end.
	 *    * **onComplete:** Callback function that will be called when the progress is bigger than timeLapse.end.
	 *    * **params:** Custom object with data to pass to the callbacks.
	 *
	 * - isFullScreen: Boolean value to know if we’re in fullscreen mode.
	 * - currentState: String value with “play”, “pause” or “stop”.
	 * - currentTime: Number value with current media time progress.
	 * - totalTime: Number value with total media time.
	 * - timeLeft: Number value with current media time left.
	 * - volume: Number value with current volume between 0 and 1.
	 * - playback: Number value with current playback between 0 and 2.
	 * - bufferEnd: Number value with latest buffer point in milliseconds.
	 * - buffered: Array of TimeRanges objects that represents current buffer state.
	 *
	 */
	angular.module("com.2fdevs.videogular")
	    .controller("vgController",
	    ['$scope', '$window', 'vgConfigLoader', 'vgFullscreen', 'VG_UTILS', 'VG_STATES', 'VG_VOLUME_KEY', function ($scope, $window, vgConfigLoader, vgFullscreen, VG_UTILS, VG_STATES, VG_VOLUME_KEY) {
	        var currentTheme = null;
	        var isFullScreenPressed = false;
	        var isMetaDataLoaded = false;
	        var hasStartTimePlayed = false;
	        var isVirtualClip = false;

	        // PUBLIC $API
	        this.videogularElement = null;

	        this.clearMedia = function () {
	            this.mediaElement[0].src = '';
	            this.mediaElement[0].removeEventListener("canplay", this.onCanPlay.bind(this), false);
	            this.mediaElement[0].removeEventListener("loadedmetadata", this.onLoadMetaData.bind(this), false);
	            this.mediaElement[0].removeEventListener("waiting", this.onStartBuffering.bind(this), false);
	            this.mediaElement[0].removeEventListener("ended", this.onComplete.bind(this), false);
	            this.mediaElement[0].removeEventListener("playing", this.onStartPlaying.bind(this), false);
	            this.mediaElement[0].removeEventListener("play", this.onPlay.bind(this), false);
	            this.mediaElement[0].removeEventListener("pause", this.onPause.bind(this), false);
	            this.mediaElement[0].removeEventListener("volumechange", this.onVolumeChange.bind(this), false);
	            this.mediaElement[0].removeEventListener("playbackchange", this.onPlaybackChange.bind(this), false);
	            this.mediaElement[0].removeEventListener("timeupdate", this.onUpdateTime.bind(this), false);
	            this.mediaElement[0].removeEventListener("progress", this.onProgress.bind(this), false);
	            this.mediaElement[0].removeEventListener("seeking", this.onSeeking.bind(this), false);
	            this.mediaElement[0].removeEventListener("seeked", this.onSeeked.bind(this), false);
	            this.mediaElement[0].removeEventListener("error", this.onVideoError.bind(this), false);
	        };

	        this.onRouteChange = function() {
	            if (this.clearMediaOnNavigate === undefined || this.clearMediaOnNavigate === true) {
	                this.clearMedia();
	            }
	        };

	        this.onCanPlay = function (evt) {
	            this.isBuffering = false;
	            $scope.$parent.$digest($scope.vgCanPlay({$event: evt}));

	            if (!hasStartTimePlayed && (this.startTime > 0 || this.startTime === 0)) {
	                this.seekTime(this.startTime);
	                hasStartTimePlayed = true;
	            }
	        };

	        this.onVideoReady = function () {
	            this.isReady = true;
	            this.autoPlay = $scope.vgAutoPlay;
	            this.playsInline = $scope.vgPlaysInline;
	            this.nativeFullscreen = $scope.vgNativeFullscreen || true;
	            this.cuePoints = $scope.vgCuePoints;
	            this.startTime = $scope.vgStartTime;
	            this.virtualClipDuration = $scope.vgVirtualClipDuration;
	            this.clearMediaOnNavigate = $scope.vgClearMediaOnNavigate || true;
	            this.currentState = VG_STATES.STOP;

	            isMetaDataLoaded = true;
	            isVirtualClip = this.startTime >= 0 && this.virtualClipDuration > 0;

	            //Set media volume from localStorage if available
	            if (VG_UTILS.supportsLocalStorage()) {
	                //Default to 100% volume if local storage setting does not exist.
	                this.setVolume(parseFloat($window.localStorage.getItem(VG_VOLUME_KEY) || '1'));
	            }

	            if ($scope.vgConfig) {
	                vgConfigLoader.loadConfig($scope.vgConfig).then(
	                    this.onLoadConfig.bind(this)
	                );
	            }
	            else {
	                $scope.vgPlayerReady({$API: this});
	            }
	        };

	        this.onLoadConfig = function (config) {
	            this.config = config;

	            $scope.vgTheme = this.config.theme;
	            $scope.vgAutoPlay = this.config.autoPlay;
	            $scope.vgPlaysInline = this.config.playsInline;
	            $scope.vgNativeFullscreen = this.config.nativeFullscreen;
	            $scope.vgCuePoints = this.config.cuePoints;
	            $scope.vgClearMediaOnNavigate = this.config.clearMediaOnNavigate;
	            $scope.vgStartTime = this.config.startTime;
	            $scope.vgVirtualClipDuration = this.config.virtualClipDuration;
	            isVirtualClip = $scope.vgStartTime >= 0 && $scope.vgVirtualClipDuration > 0;

	            $scope.vgPlayerReady({$API: this});
	        };

	        this.onLoadMetaData = function (evt) {
	            this.isBuffering = false;
	            this.onUpdateTime(evt);
	        };

	        this.onProgress = function (event) {
	            this.updateBuffer(event);

	            $scope.$parent.$digest();
	        };

	        this.updateBuffer = function getBuffer(event) {
	            if (event.target.buffered.length) {
	                this.buffered = event.target.buffered;
	                this.bufferEnd = 1000 * event.target.buffered.end(event.target.buffered.length - 1);

	                // Avoid bufferEnd overflow by virtual clips
	                if (this.bufferEnd > this.totalTime) this.bufferEnd = this.totalTime;
	            }
	        };

	        this.onUpdateTime = function (event) {
	            var targetTime = 1000 * event.target.currentTime;

	            this.updateBuffer(event);

	            if (event.target.duration != Infinity && event.target.duration != null && event.target.duration != undefined && event.target.duration != 1.7976931348623157e+308) {
	                // Fake the duration and current time for virtual clips
	                if (isVirtualClip) {
	                    if (hasStartTimePlayed && (event.target.currentTime < this.startTime || event.target.currentTime - this.startTime > this.virtualClipDuration)) {
	                        this.onComplete();
	                    }
	                    else {
	                        this.currentTime = Math.max(0, targetTime - (1000 * this.startTime));
	                        this.totalTime = 1000 * this.virtualClipDuration;
	                        this.timeLeft = (1000 * this.virtualClipDuration) - this.currentTime;
	                    }
	                }
	                else {
	                    this.currentTime = targetTime;
	                    this.totalTime = 1000 * event.target.duration;
	                    this.timeLeft = 1000 * (event.target.duration - event.target.currentTime);
	                }

	                this.isLive = false;
	            }
	            else {
	                // It's a live streaming without and end
	                this.currentTime = targetTime;
	                this.isLive = true;
	            }

	            var targetSeconds = isVirtualClip ? this.currentTime / 1000 : event.target.currentTime;
	            var targetDuration = isVirtualClip ? this.totalTime / 1000 : event.target.duration;

	            if (this.cuePoints) {
	                this.checkCuePoints(targetSeconds);
	            }

	            $scope.vgUpdateTime({$currentTime: targetSeconds, $duration: targetDuration});

	            // Safe apply just in case we're calling from a non-event
	            if ($scope.$$phase != '$apply' && $scope.$$phase != '$digest') {
	                $scope.$parent.$digest();
	            }
	        };

	        this.checkCuePoints = function checkCuePoints(currentTime) {
	            for (var tl in this.cuePoints) {
	                for (var i = 0, l = this.cuePoints[tl].length; i < l; i++) {
	                    var cp = this.cuePoints[tl][i];
	                    var currentSecond = parseInt(currentTime, 10);
	                    var start = parseInt(cp.timeLapse.start, 10);

	                    // If timeLapse.end is not defined we set it as 1 second length
	                    if (!cp.timeLapse.end) cp.timeLapse.end = cp.timeLapse.start + 1;

	                    if (currentTime < cp.timeLapse.end) cp.$$isCompleted = false;

	                    // Fire the onEnter event once reach to the cue point
	                    if(!cp.$$isDirty && currentSecond === start && (typeof cp.onEnter == 'function')) {
	                        cp.onEnter(currentTime, cp.timeLapse, cp.params);
	                        cp.$$isDirty = true;
	                    }

	                    // Check if we've been reached to the cue point
	                    if (currentTime > cp.timeLapse.start) {
	                        // We're in the timelapse
	                        if (currentTime < cp.timeLapse.end) {
	                            // Trigger onUpdate each time we enter here
	                            if (cp.onUpdate) cp.onUpdate(currentTime, cp.timeLapse, cp.params);

	                            // Trigger onEnter if we enter on the cue point by manually seeking
	                            if (!cp.$$isDirty && (typeof cp.onEnter === 'function')) {
	                                cp.onEnter(currentTime, cp.timeLapse, cp.params);
	                            }
	                        }

	                        // We've been passed the cue point
	                        if (currentTime >= cp.timeLapse.end) {
	                            if (cp.onComplete && !cp.$$isCompleted) {
	                                cp.$$isCompleted = true;
	                                cp.onComplete(currentTime, cp.timeLapse, cp.params);
	                            }
	                        }

	                        cp.$$isDirty = true;
	                    }
	                    else {
	                        if (cp.onLeave && cp.$$isDirty) {
	                            cp.onLeave(currentTime, cp.timeLapse, cp.params);
	                        }

	                        cp.$$isDirty = false;
	                    }
	                }
	            }
	        };

	        this.onPlay = function () {
	            this.setState(VG_STATES.PLAY);
	            $scope.$parent.$digest();
	        };

	        this.onPause = function () {
	            var currentTime = isVirtualClip ? this.currentTime : this.mediaElement[0].currentTime;

	            if (currentTime == 0) {
	                this.setState(VG_STATES.STOP);
	            }
	            else {
	                this.setState(VG_STATES.PAUSE);
	            }

	            $scope.$parent.$digest();
	        };

	        this.onVolumeChange = function () {
	            this.volume = this.mediaElement[0].volume;
	            $scope.$parent.$digest();
	        };

	        this.onPlaybackChange = function () {
	            this.playback = this.mediaElement[0].playbackRate;
	            $scope.$parent.$digest();
	        };

	        this.onSeeking = function (event) {
	            $scope.vgSeeking({$currentTime: event.target.currentTime, $duration: event.target.duration});
	        };

	        this.onSeeked = function (event) {
	            $scope.vgSeeked({$currentTime: event.target.currentTime, $duration: event.target.duration});
	        };

	        this.seekTime = function (value, byPercent) {
	            var second;
	            if (byPercent) {
	                if (isVirtualClip) {
	                    value = Math.max(0, Math.min(value, 100));
	                    second = (value * this.virtualClipDuration / 100);
	                    this.mediaElement[0].currentTime = this.startTime + second;
	                }
	                else {
	                    second = value * this.mediaElement[0].duration / 100;
	                    this.mediaElement[0].currentTime = second;
	                }
	            }
	            else {
	                if (isVirtualClip) {
	                    var durationPercent = value/this.mediaElement[0].duration;
	                    second = !hasStartTimePlayed ? 0 : this.virtualClipDuration * durationPercent;
	                    this.mediaElement[0].currentTime = !hasStartTimePlayed ? this.startTime : this.startTime + second;
	                }
	                else {
	                    second = value;
	                    this.mediaElement[0].currentTime = second;
	                }
	            }

	            this.currentTime = 1000 * second;
	        };

	        this.playPause = function () {
	            if (this.mediaElement[0].paused) {
	                this.play();
	            }
	            else {
	                this.pause();
	            }
	        };

	        this.setState = function (newState) {
	            if (newState && newState != this.currentState) {
	                $scope.vgUpdateState({$state: newState});

	                this.currentState = newState;
	            }

	            return this.currentState;
	        };

	        this.play = function () {
	            this.mediaElement[0].play();
	            this.setState(VG_STATES.PLAY);
	        };

	        this.pause = function () {
	            this.mediaElement[0].pause();
	            this.setState(VG_STATES.PAUSE);
	        };

	        this.stop = function () {
	            try {
	                this.mediaElement[0].pause();

	                var targetTime = isVirtualClip ? this.startTime : 0;
	                this.mediaElement[0].currentTime = targetTime;

	                this.currentTime = targetTime;
	                this.buffered = [];
	                this.bufferEnd = 0;
	                this.setState(VG_STATES.STOP);
	            }
	            catch (e) {
	                return e;
	            }
	        };

	        this.toggleFullScreen = function () {
	            // There is no native full screen support or we want to play inline
	            if (!vgFullscreen.isAvailable || !this.nativeFullscreen) {
	                if (this.isFullScreen) {
	                    this.videogularElement.removeClass("fullscreen");
	                    this.videogularElement.css("z-index", "auto");
	                }
	                else {
	                    this.videogularElement.addClass("fullscreen");
	                    this.videogularElement.css("z-index", VG_UTILS.getZIndex());
	                }

	                this.isFullScreen = !this.isFullScreen;
	            }
	            // Perform native full screen support
	            else {
	                if (this.isFullScreen) {
	                    if (!VG_UTILS.isMobileDevice()) {
	                        vgFullscreen.exit();
	                    }
	                }
	                else {
	                    // On mobile devices we should make fullscreen only the video object
	                    if (VG_UTILS.isMobileDevice()) {
	                        // On iOS we should check if user pressed before fullscreen button
	                        // and also if metadata is loaded
	                        if (VG_UTILS.isiOSDevice()) {
	                            if (isMetaDataLoaded) {
	                                this.enterElementInFullScreen(this.mediaElement[0]);
	                            }
	                            else {
	                                isFullScreenPressed = true;
	                                this.play();
	                            }
	                        }
	                        else {
	                            this.enterElementInFullScreen(this.mediaElement[0]);
	                        }
	                    }
	                    else {
	                        this.enterElementInFullScreen(this.videogularElement[0]);
	                    }
	                }
	            }
	        };

	        this.enterElementInFullScreen = function (element) {
	            vgFullscreen.request(element);
	        };

	        this.changeSource = function (newValue) {
	            $scope.vgChangeSource({$source: newValue});
	        };

	        this.setVolume = function (newVolume) {
	            newVolume = Math.max(Math.min(newVolume, 1), 0);
	            $scope.vgUpdateVolume({$volume: newVolume});

	            this.mediaElement[0].volume = newVolume;
	            this.volume = newVolume;

	            //Push volume updates to localStorage so that future instances resume volume
	            if (VG_UTILS.supportsLocalStorage()) {
	                //TODO: Improvement: concat key with current page or "video player id" to create separate stored volumes.
	                $window.localStorage.setItem(VG_VOLUME_KEY, newVolume.toString());
	            }
	        };

	        this.setPlayback = function (newPlayback) {
	            $scope.vgUpdatePlayback({$playBack: newPlayback});

	            this.mediaElement[0].playbackRate = newPlayback;
	            this.playback = newPlayback;
	        };

	        this.updateTheme = function (value) {
	            var links = document.getElementsByTagName("link");
	            var i;
	            var l;

	            // Remove previous theme
	            if (currentTheme) {
	                for (i = 0, l = links.length; i < l; i++) {
	                    if (links[i].outerHTML.indexOf(currentTheme) >= 0) {

	                        links[i].parentNode.removeChild(links[i]);
	                        break;
	                    }
	                }
	            }

	            if (value) {
	                var headElem = angular.element(document).find("head");
	                var exists = false;

	                // Look if theme already exists
	                for (i = 0, l = links.length; i < l; i++) {
	                    exists = (links[i].outerHTML.indexOf(value) >= 0);
	                    if (exists) break;
	                }

	                if (!exists) {
	                    headElem.append("<link rel='stylesheet' href='" + value + "'>");
	                }

	                currentTheme = value;
	            }
	        };

	        this.onStartBuffering = function (event) {
	            this.isBuffering = true;
	            $scope.$parent.$digest();
	        };

	        this.onStartPlaying = function (event) {
	            this.isBuffering = false;
	            $scope.$parent.$digest();
	        };

	        this.onComplete = function (event) {
	            $scope.vgComplete();

	            this.setState(VG_STATES.STOP);
	            this.isCompleted = true;

	            if (isVirtualClip) {
	                this.stop()
	            }

	            $scope.$parent.$digest();
	        };

	        this.onVideoError = function (event) {
	            $scope.vgError({$event: event});
	        };

	        this.addListeners = function () {
	            this.mediaElement[0].addEventListener("canplay", this.onCanPlay.bind(this), false);
	            this.mediaElement[0].addEventListener("loadedmetadata", this.onLoadMetaData.bind(this), false);
	            this.mediaElement[0].addEventListener("waiting", this.onStartBuffering.bind(this), false);
	            this.mediaElement[0].addEventListener("ended", this.onComplete.bind(this), false);
	            this.mediaElement[0].addEventListener("playing", this.onStartPlaying.bind(this), false);
	            this.mediaElement[0].addEventListener("play", this.onPlay.bind(this), false);
	            this.mediaElement[0].addEventListener("pause", this.onPause.bind(this), false);
	            this.mediaElement[0].addEventListener("volumechange", this.onVolumeChange.bind(this), false);
	            this.mediaElement[0].addEventListener("playbackchange", this.onPlaybackChange.bind(this), false);
	            this.mediaElement[0].addEventListener("timeupdate", this.onUpdateTime.bind(this), false);
	            this.mediaElement[0].addEventListener("progress", this.onProgress.bind(this), false);
	            this.mediaElement[0].addEventListener("seeking", this.onSeeking.bind(this), false);
	            this.mediaElement[0].addEventListener("seeked", this.onSeeked.bind(this), false);
	            this.mediaElement[0].addEventListener("error", this.onVideoError.bind(this), false);
	        };

	        this.init = function () {
	            this.isReady = false;
	            this.isCompleted = false;
	            this.buffered = [];
	            this.bufferEnd = 0;
	            this.currentTime = 0;
	            this.totalTime = 0;
	            this.timeLeft = 0;
	            this.isLive = false;
	            this.isFullScreen = false;
	            this.playback = 1;
	            this.isConfig = ($scope.vgConfig != undefined);
	            this.mediaElement = [{play:function(){}, pause:function(){}, stop:function(){}, addEventListener:function(){}, removeEventListener: function(){}}];

	            if (vgFullscreen.isAvailable) {
	                this.isFullScreen = vgFullscreen.isFullScreen();
	            }

	            this.updateTheme($scope.vgTheme);
	            this.addBindings();

	            if (vgFullscreen.isAvailable) {
	                document.addEventListener(vgFullscreen.onchange, this.onFullScreenChange.bind(this));
	            }
	        };

	        this.onUpdateTheme = function onUpdateTheme(newValue) {
	            this.updateTheme(newValue);
	        };

	        this.onUpdateAutoPlay = function onUpdateAutoPlay(newValue) {
	            if (newValue && !this.autoPlay) {
	                this.autoPlay = newValue;
	                this.play(this);
	            }
	        };

	        this.onUpdateStartTime = function onUpdateStartTime(newValue) {
	            if (newValue && (newValue != this.startTime)) {
	                this.mediaElement[0].currentTime = newValue;
	                this.startTime = newValue;
	                isVirtualClip = this.startTime >= 0 && this.virtualClipDuration > 0;

	                var fakeEvent = {
	                    target: this.mediaElement[0]
	                };
	                this.onUpdateTime(fakeEvent, true);
	            }
	        };

	        this.onUpdateVirtualClipDuration = function onUpdateVirtualClipDuration(newValue) {
	            if (newValue && (newValue != this.virtualClipDuration)) {
	                this.virtualClipDuration = newValue;
	                isVirtualClip = this.startTime >= 0 && this.virtualClipDuration > 0;

	                var fakeEvent = {
	                    target: this.mediaElement[0]
	                };
	                this.onUpdateTime(fakeEvent, true);
	            }
	        };

	        this.onUpdatePlaysInline = function onUpdatePlaysInline(newValue) {
	            this.playsInline = newValue;
	        };

	        this.onUpdateNativeFullscreen = function onUpdateNativeFullscreen(newValue) {
	            if (newValue == undefined) newValue = true;

	            this.nativeFullscreen = newValue;
	        };

	        this.onUpdateCuePoints = function onUpdateCuePoints(newValue) {
	            this.cuePoints = newValue;
	            this.checkCuePoints(this.currentTime);
	        };

	        this.onUpdateClearMediaOnNavigate = function onUpdateClearMediaOnNavigate(newValue) {
	            this.clearMediaOnNavigate = newValue;
	        };

	        this.addBindings = function () {
	            $scope.$watch("vgTheme", this.onUpdateTheme.bind(this));

	            $scope.$watch("vgAutoPlay", this.onUpdateAutoPlay.bind(this));

	            $scope.$watch("vgStartTime", this.onUpdateStartTime.bind(this));

	            $scope.$watch("vgVirtualClipDuration", this.onUpdateVirtualClipDuration.bind(this));

	            $scope.$watch("vgPlaysInline", this.onUpdatePlaysInline.bind(this));

	            $scope.$watch("vgNativeFullscreen", this.onUpdateNativeFullscreen.bind(this));

	            $scope.$watch("vgCuePoints", this.onUpdateCuePoints.bind(this));

	            $scope.$watch("vgClearMediaOnNavigate", this.onUpdateClearMediaOnNavigate.bind(this));
	        };

	        this.onFullScreenChange = function (event) {
	            this.isFullScreen = vgFullscreen.isFullScreen();
	            $scope.$parent.$digest();
	        };

	        // Empty mediaElement on destroy to avoid that Chrome downloads video even when it's not present
	        $scope.$on('$destroy', this.clearMedia.bind(this));

	        // Empty mediaElement when router changes
	        $scope.$on('$routeChangeStart', this.onRouteChange.bind(this));

	        this.init();
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:vgCrossorigin
	 * @restrict A
	 * @description
	 * Optional directive for `vg-media` to add or remove a crossorigin policy to the video object. Possible values are: "anonymous" and "use-credentials".
	 * This feature should be enabled if you want to have your subtitles or video files on a different domain than the video player. Additionally you need
	 * to add CORS policies to your video and track files to your server to make it work.
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgCrossorigin",
	    [function () {
	        return {
	            restrict: "A",
	            require: "^videogular",
	            link: {
	                pre: function (scope, elem, attr, API) {
	                    var crossorigin;

	                    scope.setCrossorigin = function setCrossorigin(value) {
	                        if (value) {
	                            API.mediaElement.attr("crossorigin", value);
	                        }
	                        else {
	                            API.mediaElement.removeAttr("crossorigin");
	                        }
	                    };

	                    if (API.isConfig) {
	                        scope.$watch(
	                            function () {
	                                return API.config;
	                            },
	                            function () {
	                                if (API.config) {
	                                    scope.setCrossorigin(API.config.crossorigin);
	                                }
	                            }
	                        );
	                    }
	                    else {
	                        scope.$watch(attr.vgCrossorigin, function (newValue, oldValue) {
	                            if ((!crossorigin || newValue != oldValue) && newValue) {
	                                crossorigin = newValue;
	                                scope.setCrossorigin(crossorigin);
	                            }
	                            else {
	                                scope.setCrossorigin();
	                            }
	                        });
	                    }
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:vgLoop
	 * @restrict A
	 * @description
	 * Optional directive for `vg-media` to add or remove loop in media files. Possible values are: "true" and "false"
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgLoop",
	    [function () {
	        return {
	            restrict: "A",
	            require: "^videogular",
	            link: {
	                pre: function (scope, elem, attr, API) {
	                    var loop;

	                    scope.setLoop = function setLoop(value) {
	                        if (value) {
	                            API.mediaElement.attr("loop", value);
	                        }
	                        else {
	                            API.mediaElement.removeAttr("loop");
	                        }
	                    };

	                    if (API.isConfig) {
	                        scope.$watch(
	                            function () {
	                                return API.config;
	                            },
	                            function () {
	                                if (API.config) {
	                                    scope.setLoop(API.config.loop);
	                                }
	                            }
	                        );
	                    }
	                    else {
	                        scope.$watch(attr.vgLoop, function (newValue, oldValue) {
	                            if ((!loop || newValue != oldValue) && newValue) {
	                                loop = newValue;
	                                scope.setLoop(loop);
	                            }
	                            else {
	                                scope.setLoop();
	                            }
	                        });
	                    }
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.direcitve:vgMedia
	 * @restrict E
	 * @description
	 * Directive to add a source of videos or audios. This directive will create a &lt;video&gt; or &lt;audio&gt; tag and usually will be above plugin tags.
	 *
	 * @param {array} vgSrc Bindable array with a list of media sources or a simple url string. A media source is an object with two properties `src` and `type`. The `src` property must contains a trustful url resource.
	 * @param {string} vgType String with "video" or "audio" values to set a <video> or <audio> tag inside <vg-media>.
	 * <pre>
	 * {
	 *    src: $sce.trustAsResourceUrl("path/to/video/videogular.mp4"),
	 *    type: "video/mp4"
	 * }
	 * </pre>
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgMedia",
	    ["$timeout", "VG_UTILS", "VG_STATES", function ($timeout, VG_UTILS, VG_STATES) {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            templateUrl: function (elem, attrs) {
	                var vgType = attrs.vgType || "video";
	                return attrs.vgTemplate || "vg-templates/vg-media-" + vgType;
	            },
	            scope: {
	                vgSrc: "=?",
	                vgType: "=?"
	            },
	            link: function (scope, elem, attrs, API) {
	                var sources;

	                // what type of media do we want? defaults to 'video'
	                if (!attrs.vgType || attrs.vgType === "video") {
	                    attrs.vgType = "video";
	                }
	                else {
	                    attrs.vgType = "audio";
	                }

	                // FUNCTIONS
	                scope.onChangeSource = function onChangeSource(newValue, oldValue) {
	                    if ((!sources || newValue != oldValue) && newValue) {
	                        sources = newValue;

	                        if (API.currentState !== VG_STATES.PLAY) {
	                            API.currentState = VG_STATES.STOP;
	                        }

	                        API.sources = sources;
	                        scope.changeSource();
	                    }
	                };

	                scope.changeSource = function changeSource() {

	                    if (angular.isArray(sources)) {
	                        var canPlay = "";

	                        // It's a cool browser
	                        if (API.mediaElement[0].canPlayType) {
	                            for (var i = 0, l = sources.length; i < l; i++) {
	                                canPlay = API.mediaElement[0].canPlayType(sources[i].type);

	                                if (canPlay == "maybe" || canPlay == "probably") {
	                                    API.mediaElement.attr("src", sources[i].src);
	                                    API.mediaElement.attr("type", sources[i].type);
	                                    //Trigger vgChangeSource($source) API callback in vgController
	                                    API.changeSource(sources[i]);
	                                    break;
	                                }
	                            }
	                        }
	                        // It's a crappy browser and it doesn't deserve any respect
	                        else {
	                            // Get H264 or the first one
	                            API.mediaElement.attr("src", sources[0].src);
	                            API.mediaElement.attr("type", sources[0].type);
	                            //Trigger vgChangeSource($source) API callback in vgController
	                            API.changeSource(sources[0]);
	                        }
	                    } else {
	                        API.mediaElement.attr("src", sources);
	                        //Trigger vgChangeSource($source) API callback in vgController
	                        API.changeSource(sources);
	                    }
	                    // Android 2.3 support: https://github.com/2fdevs/videogular/issues/187
	                    if (VG_UTILS.isMobileDevice()) API.mediaElement[0].load();

	                    $timeout(function () {
	                        if (API.autoPlay && (VG_UTILS.isCordova() || !VG_UTILS.isMobileDevice())) {
	                            API.play();
	                        }
	                    });

	                    if (canPlay == "") {
	                        API.onVideoError();
	                    }
	                };

	                // INIT
	                API.mediaElement = elem.find(attrs.vgType);
	                API.sources = scope.vgSrc;

	                API.addListeners();
	                API.onVideoReady();

	                scope.$watch("vgSrc", scope.onChangeSource);
	                scope.$watch(
	                    function() {
	                        return API.sources;
	                    },
	                    scope.onChangeSource
	                );

	                scope.$watch(
	                    function() {
	                        return API.playsInline;
	                    },
	                    function (newValue, oldValue) {
	                        if (newValue) API.mediaElement.attr("webkit-playsinline", "");
	                        else API.mediaElement.removeAttr("webkit-playsinline");
	                    }
	                );


	                if (API.isConfig) {
	                    scope.$watch(
	                        function () {
	                            return API.config;
	                        },
	                        function () {
	                            if (API.config) {
	                                scope.vgSrc = API.config.sources;
	                            }
	                        }
	                    );
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:vgNativeControls
	 * @restrict A
	 * @description
	 * Optional directive for `vg-media` to add or remove the native controls. Possible values are: "true" and "false"
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgNativeControls",
	    [function () {
	        return {
	            restrict: "A",
	            require: "^videogular",
	            link: {
	                pre: function (scope, elem, attr, API) {
	                    var controls;

	                    scope.setControls = function setControls(value) {
	                        if (value) {
	                            API.mediaElement.attr("controls", value);
	                        }
	                        else {
	                            API.mediaElement.removeAttr("controls");
	                        }
	                    };

	                    if (API.isConfig) {
	                        scope.$watch(
	                            function () {
	                                return API.config;
	                            },
	                            function () {
	                                if (API.config) {
	                                    scope.setControls(API.config.controls);
	                                }
	                            }
	                        );
	                    }
	                    else {
	                        scope.$watch(attr.vgNativeControls, function (newValue, oldValue) {
	                            if ((!controls || newValue != oldValue) && newValue) {
	                                controls = newValue;
	                                scope.setControls(controls);
	                            }
	                            else {
	                                scope.setControls();
	                            }
	                        });
	                    }
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:vgPreload
	 * @restrict A
	 * @description
	 * Optional directive for `vg-media` to preload media files. Possible values are: "auto", "none" and "preload"
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgPreload",
	    [function () {
	        return {
	            restrict: "A",
	            require: "^videogular",
	            link: {
	                pre: function (scope, elem, attr, API) {
	                    var preload;

	                    scope.setPreload = function setPreload(value) {
	                        if (value) {
	                            API.mediaElement.attr("preload", value);
	                        }
	                        else {
	                            API.mediaElement.removeAttr("preload");
	                        }
	                    };

	                    if (API.isConfig) {
	                        scope.$watch(
	                            function () {
	                                return API.config;
	                            },
	                            function () {
	                                if (API.config) {
	                                    scope.setPreload(API.config.preload);
	                                }
	                            }
	                        );
	                    }
	                    else {
	                        scope.$watch(attr.vgPreload, function (newValue, oldValue) {
	                            if ((!preload || newValue != oldValue) && newValue) {
	                                preload = newValue;
	                                scope.setPreload(preload);
	                            }
	                            else {
	                                scope.setPreload();
	                            }
	                        });
	                    }
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:vgTracks
	 * @restrict A
	 * @description
	 * Optional directive for `vg-media` to add a list of tracks.
	 *
	 * vgTracks Bindable array with a list of subtitles sources. A track source is an object with five properties: src, kind, srclang, label and default.
	 * <pre>
	 * {
	 *    src: "assets/subs/pale-blue-dot.vtt",
	 *    kind: "subtitles",
	 *    srclang: "en",
	 *    label: "English",
	 *    default: "true/false"
	 * }
	 * </pre>
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("vgTracks",
	    [function () {
	        return {
	            restrict: "A",
	            require: "^videogular",
	            link: {
	                pre: function (scope, elem, attr, API) {
	                    var isMetaDataLoaded = false;
	                    var tracks;
	                    var i;
	                    var l;

	                    scope.onLoadMetaData = function() {
	                        isMetaDataLoaded = true;
	                        scope.updateTracks();
	                    };

	                    scope.updateTracks = function() {
	                        // Remove previous tracks
	                        var oldTracks = API.mediaElement.children();

	                        for (i = 0, l = oldTracks.length; i < l; i++) {
	                            if (oldTracks[i].remove) {
	                                oldTracks[i].remove();
	                            }
	                        }

	                        // Add new tracks
	                        if (tracks) {
	                            for (i = 0, l = tracks.length; i < l; i++) {
	                                var track = document.createElement('track');
	                                for (var prop in tracks[i]) {
	                                    track[prop] = tracks[i][prop];
	                                }

	                                track.addEventListener('load', scope.onLoadTrack.bind(scope, track));

	                                API.mediaElement[0].appendChild(track);
	                            }
	                        }
	                    };

	                    scope.onLoadTrack = function(track) {
	                        if (track.default) track.mode = 'showing';
	                        else track.mode = 'hidden';

	                        for (var i=0, l=API.mediaElement[0].textTracks.length; i<l; i++) {
	                            if (track.label == API.mediaElement[0].textTracks[i].label) {
	                                if (track.default) {
	                                    API.mediaElement[0].textTracks[i].mode = 'showing';
	                                }
	                                else {
	                                    API.mediaElement[0].textTracks[i].mode = 'disabled';
	                                }
	                            }

	                        }

	                        track.removeEventListener('load', scope.onLoadTrack.bind(scope, track));
	                    };

	                    scope.setTracks = function setTracks(value) {
	                        // Add tracks to the API to have it available for other plugins (like controls)
	                        tracks = value;
	                        API.tracks = value;

	                        if (isMetaDataLoaded) {
	                            scope.updateTracks();
	                        }
	                        else {
	                            API.mediaElement[0].addEventListener("loadedmetadata", scope.onLoadMetaData.bind(scope), false);
	                        }
	                    };

	                    if (API.isConfig) {
	                        scope.$watch(
	                            function () {
	                                return API.config;
	                            },
	                            function () {
	                                if (API.config) {
	                                    scope.setTracks(API.config.tracks);
	                                }
	                            }
	                        );
	                    }
	                    else {
	                        scope.$watch(attr.vgTracks, function (newValue, oldValue) {
	                            if ((!tracks || newValue != oldValue)) {
	                                scope.setTracks(newValue);
	                            }
	                        }, true);
	                    }
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.directive:videogular
	 * @restrict E
	 * @description
	 * Main directive that must wrap a &lt;vg-media&gt; tag and all plugins.
	 *
	 * &lt;video&gt; tag usually will be above plugin tags, that's because plugins should be in a layer over the &lt;video&gt;.
	 *
	 * @param {string} vgTheme String with a scope name variable. This directive will inject a CSS link in the header of your page.
	 * **This parameter is required.**
	 *
	 * @param {boolean} [vgPlaysInline=false] vgPlaysInline Boolean value or a String with a scope name variable to use native fullscreen (default) or set fullscreen inside browser (true).
	 *
	 * @param {boolean} [vgClearMediaOnNavigate=true] vgClearMediaOnNavigate Boolean value or a String with a scope name variable to reset the video player when user navigates.
	 *
	 * This is useful to allow continuous playback between different routes.
	 *
	 * @param {boolean} [vgAutoPlay=false] vgAutoPlay Boolean value or a String with a scope name variable to auto start playing video when it is initialized.
	 *
	 * **This parameter is disabled in mobile devices** because user must click on content to prevent consuming mobile data plans.
	 *
	 * @param {boolean} [vgStartTime=-1] vgStartTime Number value or a String with a scope name variable to start playing the video at a certain time.
	 *
	 * @param {boolean} [vgVirtualClipDuration=-1] vgVirtualClipDuration Number value or a String with a scope name variable for a length to limit the video playback to.
	 *
	 * @param {object} vgCuePoints Bindable object containing a list of timelines with cue points objects. A timeline is an array of objects with the following properties:
	 * - `timeLapse` is an object with two properties `start` and `end` representing in seconds the period for this cue points.
	 * - `onEnter` callback called when user enters on a cue point. callback(currentTime, timeLapse, params)
	 * - `onLeave` callback called when user seeks backwards and leave the current cue point or a completed cue point. callback(currentTime, timeLapse, params)
	 * - `onUpdate` callback called when the current time is between timeLapse.start and timeLapse.end. callback(currentTime, timeLapse, params)
	 * - `onComplete` callback called when the user seek forward or the current time passes timeLapse.end property. callback(currentTime, timeLapse, params)
	 * - `params` an object with values available to receive in the callback..
	 *
	 * @param {function} vgConfig String with a url to a config file. Config file's must be a JSON file object with the following structure:
	 * <pre>
	 {
	   "controls": false,
	   "loop": false,
	   "autoplay": false,
	   "startTime": -1,
	   "virtualClipDuration": -1,
	   "preload": "auto",
	   "theme": "path/to/videogular.css",
	   "sources": [
	     {
	       "src": "path/to/videogular.mp4",
	       "type": "video/mp4"
	     },
	     {
	       "src": "path/to/videogular.webm",
	       "type": "video/webm"
	     },
	     {
	       "src": "path/to/videogular.ogg",
	       "type": "video/ogg"
	     }
	   ],
	   "tracks": [
	     {
	       "src": "path/to/pale-blue-dot.vtt",
	       "kind": "subtitles",
	       "srclang": "en",
	       "label": "English",
	       "default": ""
	     }
	   ],
	   "plugins": {
	     "controls": {
	       "autohide": true,
	       "autohideTime": 3000
	     },
	     "poster": {
	       "url": "path/to/earth.png"
	     },
	     "ima-ads": {
	       "companion": "companionAd",
	       "companionSize": [728, 90],
	       "network": "6062",
	       "unitPath": "iab_vast_samples",
	       "adTagUrl": "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F3510761%2FadRulesSampleTags&ciu_szs=160x600%2C300x250%2C728x90&cust_params=adrule%3Dpremidpostpodandbumpers&impl=s&gdfp_req=1&env=vp&ad_rule=1&vid=47570401&cmsid=481&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]",
	       "skipButton": "<div class='skipButton'>skip ad</div>"
	     },
	     "analytics": {
	       "category": "Videogular",
	       "label": "Main",
	       "events": {
	         "ready": true,
	         "play": true,
	         "pause": true,
	         "stop": true,
	         "complete": true,
	         "progress": 10
	       }
	     }
	   }
	 }
	 * </pre>
	 * @param {function} vgCanPlay Function name in controller's scope to call when video is able to begin playback
	 * @param {function} vgComplete Function name in controller's scope to call when video have been completed.
	 * @param {function} vgUpdateVolume Function name in controller's scope to call when volume changes. Receives a param with the new volume.
	 * @param {function} vgUpdatePlayback Function name in controller's scope to call when playback changes. Receives a param with the new playback rate.
	 * @param {function} vgUpdateTime Function name in controller's scope to call when video playback time is updated. Receives two params with current time and duration in milliseconds.
	 * @param {function} vgUpdateState Function name in controller's scope to call when video state changes. Receives a param with the new state. Possible values are "play", "stop" or "pause".
	 * @param {function} vgPlayerReady Function name in controller's scope to call when video have been initialized. Receives a param with the videogular API.
	 * @param {function} vgChangeSource Function name in controller's scope to change current video source. Receives a param with the new video.
	 * @param {function} vgPlaysInline Boolean to play video inline. Generally used in mobile devices.
	 * @param {function} vgNativeFullscreen Boolean to disable native fullscreen.
	 * @param {function} vgSeeking Function name in controller's scope to call when the video has finished jumping to a new time. Receives a param with the seeked time and duration in seconds.
	 * @param {function} vgSeeked Function name in controller's scope to call when the video is jumping to a new time. Receives two params with the seeked time and duration in seconds.
	 * @param {function} vgError Function name in controller's scope to receive an error from video object. Receives a param with the error event.
	 * This is a free parameter and it could be values like "new.mp4", "320" or "sd". This will allow you to use this to change a video or video quality.
	 * This callback will not change the video, you should do that by updating your sources scope variable.
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .directive("videogular",
	    [function () {
	        return {
	            restrict: "EA",
	            scope: {
	                vgTheme: "=?",
	                vgAutoPlay: "=?",
	                vgStartTime: "=?",
	                vgVirtualClipDuration: "=?",
	                vgPlaysInline: "=?",
	                vgNativeFullscreen: "=?",
	                vgClearMediaOnNavigate: "=?",
	                vgCuePoints: "=?",
	                vgConfig: "@",
	                vgCanPlay: "&",
	                vgComplete: "&",
	                vgUpdateVolume: "&",
	                vgUpdatePlayback: "&",
	                vgUpdateTime: "&",
	                vgUpdateState: "&",
	                vgPlayerReady: "&",
	                vgChangeSource: "&",
	                vgSeeking: "&",
	                vgSeeked: "&",
	                vgError: "&"
	            },
	            controller: "vgController",
	            controllerAs: "API",
	            link: {
	                pre: function (scope, elem, attr, controller) {
	                    controller.videogularElement = angular.element(elem);
	                }
	            }
	        }
	    }
	    ]);

	/**
	 * @ngdoc service
	 * @name com.2fdevs.videogular.service:vgConfigLoader
	 *
	 * @description
	 * Config loader service:
	 *
	 * vgConfigLoader.loadConfig(url): Param `url` is a url to a config JSON.
	 **/
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .service("vgConfigLoader", ["$http", "$q", "$sce", function ($http, $q, $sce) {
	        this.loadConfig = function loadConfig(url) {
	            var deferred = $q.defer();

	            $http({method: 'GET', url: url}).then(
	                function success(response) {
	                    var result = response.data;

	                    for (var i = 0, l = result.sources.length; i < l; i++) {
	                        result.sources[i].src = $sce.trustAsResourceUrl(result.sources[i].src);
	                    }

	                    deferred.resolve(result);
	                },
	                function reject() {
	                    deferred.reject();
	                }
	            );

	            return deferred.promise;
	        };
	    }]);

	/**
	 * @ngdoc service
	 * @name com.2fdevs.videogular.service:vgFullscreen
	 *
	 * @description
	 * Native fullscreen polyfill service.
	 *
	 *    * vgFullscreen.onchange: String with the onchange event name.
	 *    * vgFullscreen.onerror: String with the onerror event name.
	 *    * vgFullscreen.isAvailable: Boolean with fullscreen availability.
	 *    * vgFullscreen.isFullScreen: Boolean with current view mode.
	 *    * vgFullscreen.exit: Exit fullscreen function.
	 *    * vgFullscreen.request: Request for fullscreen access function.
	 **/
	"use strict";
	angular.module("com.2fdevs.videogular")
	    .service("vgFullscreen", ["VG_UTILS", function (VG_UTILS) {
	        // Native fullscreen polyfill
	        var element;
	        var polyfill = null;
	        var APIs = {
	            w3: {
	                enabled: "fullscreenEnabled",
	                element: "fullscreenElement",
	                request: "requestFullscreen",
	                exit: "exitFullscreen",
	                onchange: "fullscreenchange",
	                onerror: "fullscreenerror"
	            },
	            newWebkit: {
	                enabled: "webkitFullscreenEnabled",
	                element: "webkitFullscreenElement",
	                request: "webkitRequestFullscreen",
	                exit: "webkitExitFullscreen",
	                onchange: "webkitfullscreenchange",
	                onerror: "webkitfullscreenerror"
	            },
	            oldWebkit: {
	                enabled: "webkitIsFullScreen",
	                element: "webkitCurrentFullScreenElement",
	                request: "webkitRequestFullScreen",
	                exit: "webkitCancelFullScreen",
	                onchange: "webkitfullscreenchange",
	                onerror: "webkitfullscreenerror"
	            },
	            moz: {
	                enabled: "mozFullScreen",
	                element: "mozFullScreenElement",
	                request: "mozRequestFullScreen",
	                exit: "mozCancelFullScreen",
	                onchange: "mozfullscreenchange",
	                onerror: "mozfullscreenerror"
	            },
	            ios: {
	                enabled: "webkitFullscreenEnabled",
	                element: "webkitFullscreenElement",
	                request: "webkitEnterFullscreen",
	                exit: "webkitExitFullscreen",
	                onchange: "webkitfullscreenchange",
	                onerror: "webkitfullscreenerror"
	            },
	            ms: {
	                enabled: "msFullscreenEnabled",
	                element: "msFullscreenElement",
	                request: "msRequestFullscreen",
	                exit: "msExitFullscreen",
	                onchange: "MSFullscreenChange",
	                onerror: "MSFullscreenError"
	            }
	        };

	        for (var browser in APIs) {
	            if (APIs[browser].enabled in document) {
	                polyfill = APIs[browser];
	                break;
	            }
	        }

	        // Override APIs on iOS
	        if (VG_UTILS.isiOSDevice()) {
	            polyfill = APIs.ios;
	        }

	        function isFullScreen() {
	            var result = false;

	            if (element) {
	                result = (document[polyfill.element] != null || element.webkitDisplayingFullscreen)
	            }
	            else {
	                result = (document[polyfill.element] != null)
	            }

	            return result;
	        }

	        this.isAvailable = (polyfill != null);

	        if (polyfill) {
	            this.onchange = polyfill.onchange;
	            this.onerror = polyfill.onerror;
	            this.isFullScreen = isFullScreen;
	            this.exit = function () {
	                document[polyfill.exit]();
	            };
	            this.request = function (elem) {
	                element = elem;
	                element[polyfill.request]();
	            };
	        }
	    }]);

	"use strict";
	angular.module("com.2fdevs.videogular")
	    .service("VG_UTILS", ["$window", function ($window) {
	        this.fixEventOffset = function ($event) {
	            /**
	             * There's no offsetX in Firefox, so we fix that.
	             * Solution provided by Jack Moore in this post:
	             * http://www.jacklmoore.com/notes/mouse-position/
	             * @param $event
	             * @returns {*}
	             */
	            var matchedFF = navigator.userAgent.match(/Firefox\/(\d+)/i)
	            if (matchedFF && Number.parseInt(matchedFF.pop()) < 39) {
	                var style = $event.currentTarget.currentStyle || window.getComputedStyle($event.target, null);
	                var borderLeftWidth = parseInt(style['borderLeftWidth'], 10);
	                var borderTopWidth = parseInt(style['borderTopWidth'], 10);
	                var rect = $event.currentTarget.getBoundingClientRect();
	                var offsetX = $event.clientX - borderLeftWidth - rect.left;
	                var offsetY = $event.clientY - borderTopWidth - rect.top;

	                $event.offsetX = offsetX;
	                $event.offsetY = offsetY;
	            }

	            return $event;
	        };

	        /**
	         * Inspired by Paul Irish
	         * https://gist.github.com/paulirish/211209
	         * @returns {number}
	         */
	        this.getZIndex = function () {
	            var zIndex = 1;
	            var elementZIndex;

	            var tags = document.getElementsByTagName('*');

	            for (var i = 0, l = tags.length; i < l; i++) {
	                elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"]);

	                if (elementZIndex > zIndex) {
	                    zIndex = elementZIndex + 1;
	                }
	            }

	            return zIndex;
	        };

	        // Very simple mobile detection, not 100% reliable
	        this.isMobileDevice = function () {
	            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
	        };

	        this.isiOSDevice = function () {
	            return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
	        };

	        this.isCordova = function () {
	            return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
	        };

	        /**
	         * Test the browser's support for HTML5 localStorage.
	         * @returns {boolean}
	         */
	        this.supportsLocalStorage = function () {
	            var testKey = 'videogular-test-key';

	            try {
	                var storage = $window.sessionStorage;
	                storage.setItem(testKey, '1');
	                storage.removeItem(testKey);
	                return 'localStorage' in $window && $window['localStorage'] !== null;
	            } catch (e) {
	                return false;
	            }
	        };
	    }]);


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	__webpack_require__(133);

	module.exports = 'com.2fdevs.videogular.plugins.controls';


/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * @license videogular v1.4.4 http://videogular.com
	 * Two Fucking Developers http://twofuckingdevelopers.com
	 * License: MIT
	 */
	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgControls
	 * @restrict E
	 * @description
	 * This directive acts as a container and you will need other directives to control the media.
	 * Inside this directive you can add other directives like vg-play-pause-button and vg-scrub-bar.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'></vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 * @param {boolean=false} vgAutohide Boolean variable or value to activate autohide.
	 * @param {number=2000} vgAutohideTime Number variable or value that represents the time in milliseconds that will wait vgControls until it hides.
	 *
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular.plugins.controls", [])
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-controls",
	            '<div class="controls-container" ng-mousemove="onMouseMove()" ng-class="animationClass" ng-transclude></div>');
	    }]
	)
	    .directive("vgControls",
	    ["$timeout", "VG_STATES", function ($timeout, VG_STATES) {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            transclude: true,
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-controls';
	            },
	            scope: {
	                vgAutohide: "=?",
	                vgAutohideTime: "=?"
	            },
	            link: function (scope, elem, attr, API) {
	                var w = 0;
	                var h = 0;
	                var autoHideTime = 2000;
	                var hideInterval;

	                scope.API = API;

	                scope.onMouseMove = function onMouseMove() {
	                    if (scope.vgAutohide) scope.showControls();
	                };

	                scope.setAutohide = function setAutohide(value) {
	                    if (value && API.currentState == VG_STATES.PLAY) {
	                        hideInterval = $timeout(scope.hideControls, autoHideTime);
	                    }
	                    else {
	                        scope.animationClass = "";
	                        $timeout.cancel(hideInterval);
	                        scope.showControls();
	                    }
	                };

	                scope.setAutohideTime = function setAutohideTime(value) {
	                    autoHideTime = value;
	                };

	                scope.hideControls = function hideControls() {
	                    scope.animationClass = "hide-animation";
	                };

	                scope.showControls = function showControls() {
	                    scope.animationClass = "show-animation";
	                    $timeout.cancel(hideInterval);
	                    if (scope.vgAutohide && API.currentState == VG_STATES.PLAY) hideInterval = $timeout(scope.hideControls, autoHideTime);
	                };

	                if (API.isConfig) {
	                    scope.$watch("API.config",
	                        function () {
	                            if (scope.API.config) {
	                                var ahValue = scope.API.config.plugins.controls.autohide || false;
	                                var ahtValue = scope.API.config.plugins.controls.autohideTime || 2000;
	                                scope.vgAutohide = ahValue;
	                                scope.vgAutohideTime = ahtValue;
	                                scope.setAutohideTime(ahtValue);
	                                scope.setAutohide(ahValue);
	                            }
	                        }
	                    );
	                }
	                else {
	                    // If vg-autohide has been set
	                    if (scope.vgAutohide != undefined) {
	                        scope.$watch("vgAutohide", scope.setAutohide);
	                    }

	                    // If vg-autohide-time has been set
	                    if (scope.vgAutohideTime != undefined) {
	                        scope.$watch("vgAutohideTime", scope.setAutohideTime);
	                    }
	                }

	                scope.$watch(
	                    function () {
	                        return API.currentState;
	                    },
	                    function (newVal, oldVal) {
	                        if (scope.vgAutohide) scope.showControls();
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgFullscreenButton
	 * @restrict E
	 * @description
	 * Directive to switch between fullscreen and normal mode.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-fullscreen-button></vg-fullscreen-button>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-fullscreen-button",
	            '<button class="iconButton" ng-click="onClickFullScreen()" ng-class="fullscreenIcon" aria-label="Toggle full screen" type="button"> </button>');
	    }]
	)
	    .directive("vgFullscreenButton",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            scope: {},
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-fullscreen-button';
	            },
	            link: function (scope, elem, attr, API) {
	                scope.onChangeFullScreen = function onChangeFullScreen(isFullScreen) {
	                    scope.fullscreenIcon = {enter: !isFullScreen, exit: isFullScreen};
	                };

	                scope.onClickFullScreen = function onClickFullScreen() {
	                    API.toggleFullScreen();
	                };

	                scope.fullscreenIcon = {enter: true};

	                scope.$watch(
	                    function () {
	                        return API.isFullScreen;
	                    },
	                    function (newVal, oldVal) {
	                        if (newVal != oldVal) {
	                            scope.onChangeFullScreen(newVal);
	                        }
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgPlayPauseButton
	 * @restrict E
	 * @description
	 * Adds a button inside vg-controls to play and pause media.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-play-pause-button></vg-play-pause-button>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-play-pause-button",
	            '<button class="iconButton" ng-click="onClickPlayPause()" ng-class="playPauseIcon" aria-label="Play/Pause" type="button"></button>');
	    }]
	)
	    .directive("vgPlayPauseButton",
	    ["VG_STATES", function (VG_STATES) {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            scope: {},
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-play-pause-button';
	            },
	            link: function (scope, elem, attr, API) {
	                scope.setState = function setState(newState) {
	                    switch (newState) {
	                        case VG_STATES.PLAY:
	                            scope.playPauseIcon = {pause: true};
	                            break;

	                        case VG_STATES.PAUSE:
	                            scope.playPauseIcon = {play: true};
	                            break;

	                        case VG_STATES.STOP:
	                            scope.playPauseIcon = {play: true};
	                            break;
	                    }
	                };

	                scope.onClickPlayPause = function onClickPlayPause() {
	                    API.playPause();
	                };

	                scope.playPauseIcon = {play: true};

	                scope.$watch(
	                    function () {
	                        return API.currentState;
	                    },
	                    function (newVal, oldVal) {
	                        scope.setState(newVal);
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:ngPlaybackButton
	 * @restrict E
	 * @description
	 * Directive to display a playback buttom to control the playback rate.
	 *
	 * @param {array} vgSpeeds Bindable array with a list of speed options as strings. Default ['0.5', '1', '1.5', '2']
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-playback-button vg-speeds='config.playbackSpeeds'></vg-playback-button>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-playback-button",
	            '<button class="playbackValue iconButton" ng-click="onClickPlayback()">{{playback}}x</button>');
	    }]
	)
	    .directive("vgPlaybackButton",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-playback-button';
	            },
	            scope: {
	                vgSpeeds: '=?'
	            },
	            link: function (scope, elem, attr, API) {
	                scope.playback = '1';

	                scope.setPlayback = function(playback) {
	                    scope.playback = playback;
	                    API.setPlayback(parseFloat(playback));
	                };

	                scope.onClickPlayback = function onClickPlayback() {
	                    var playbackOptions = scope.vgSpeeds || ['0.5', '1', '1.5', '2'];
	                    var nextPlaybackRate = playbackOptions.indexOf(scope.playback.toString()) + 1;

	                    if (nextPlaybackRate >= playbackOptions.length) {
	                        scope.playback = playbackOptions[0];
	                    }
	                    else {
	                        scope.playback = playbackOptions[nextPlaybackRate];
	                    }

	                    scope.setPlayback(scope.playback);
	                };

	                scope.$watch(
	                    function () {
	                        return API.playback;
	                    },
	                    function(newVal, oldVal) {
	                        if (newVal != oldVal) {
	                            scope.setPlayback(newVal);
	                        }
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgScrubBarBuffer
	 * @restrict E
	 * @description
	 * Layer inside vg-scrub-bar to display the buffer.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-scrub-bar>
	 *            <vg-scrub-bar-buffer></vg-scrub-bar-buffer>
	 *        </vg-scrub-bar>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .directive("vgScrubBarBuffer",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            link: function (scope, elem, attr, API) {
	                var percentTime = 0;

	                scope.onUpdateBuffer = function onUpdateBuffer(newBuffer) {
	                    if (typeof newBuffer === 'number' && API.totalTime) {
	                        percentTime = 100 * (newBuffer / API.totalTime);
	                        elem.css("width", percentTime + "%");
	                    } else {
	                        elem.css("width", 0);
	                    }
	                };

	                scope.$watch(
	                    function () {
	                        return API.bufferEnd;
	                    },
	                    function (newVal, oldVal) {
	                        scope.onUpdateBuffer(newVal);
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgScrubBarCuePoints
	 * @restrict E
	 * @description
	 * Layer inside vg-scrub-bar to display a cue point timeline.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls>
	 *        <vg-scrub-bar>
	 *            <vg-scrub-bar-cue-points vg-cue-points='config.cuePoints[0]'></vg-scrub-bar-cue-points>
	 *        </vg-scrub-bar>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(["$templateCache",
	        function ($templateCache) {
	            $templateCache.put("vg-templates/vg-scrub-bar-cue-points",
	                '<div class="cue-point-timeline">' +
	                    '<div ng-repeat="cuePoint in vgCuePoints" class="cue-point" ng-style="cuePoint.$$style"></div>' +
	                '</div>');
	        }
	    ])
	    .directive("vgScrubBarCuePoints", [
	        function () {
	            return {
	                restrict: "E",
	                require: "^videogular",
	                templateUrl: function (elem, attrs) {
	                    return attrs.vgTemplate || 'vg-templates/vg-scrub-bar-cue-points';
	                },
	                scope: {
	                    "vgCuePoints": "="
	                },
	                link: function (scope, elem, attr, API) {
	                    scope.onPlayerReady = function onPlayerReady() {
	                        scope.updateCuePoints(scope.vgCuePoints);
	                    };
	                    scope.updateCuePoints = function onUpdateCuePoints(cuePoints) {
	                        var totalWidth;

	                        if (cuePoints) {
	                            totalWidth = parseInt(elem[0].clientWidth);

	                            for (var i = 0, l = cuePoints.length; i < l; i++) {
	                                var end = (cuePoints[i].timeLapse.end >= 0) ? cuePoints[i].timeLapse.end : cuePoints[i].timeLapse.start + 1;
	                                var cuePointDuration = (end - cuePoints[i].timeLapse.start) * 1000;
	                                var position = (cuePoints[i].timeLapse.start * 100 / (Math.round(API.totalTime / 1000))) + "%";
	                                var percentWidth = 0;

	                                if (typeof cuePointDuration === 'number' && API.totalTime) {
	                                    percentWidth = ((cuePointDuration * 100) / API.totalTime) + "%";
	                                }

	                                cuePoints[i].$$style = {
	                                    width: percentWidth,
	                                    left: position
	                                };
	                            }
	                        }
	                    };

	                    scope.$watch("vgCuePoints", scope.updateCuePoints);

	                    scope.$watch(
	                        function () {
	                            return API.totalTime;
	                        },
	                        function (newVal, oldVal) {
	                            if (newVal > 0) scope.onPlayerReady();
	                        }
	                    );
	                }
	            }
	        }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgScrubBarCurrentTime
	 * @restrict E
	 * @description
	 * Layer inside vg-scrub-bar to display the current time.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-scrub-bar>
	 *            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
	 *        </vg-scrub-bar>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .directive("vgScrubBarCurrentTime",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            link: function (scope, elem, attr, API) {
	                var percentTime = 0;

	                scope.onUpdateTime = function onUpdateTime(newCurrentTime) {
	                    if (typeof newCurrentTime === 'number' && API.totalTime) {
	                        percentTime = 100 * (newCurrentTime / API.totalTime);
	                        elem.css("width", percentTime + "%");
	                    } else {
	                        elem.css("width", 0);
	                    }
	                };

	                scope.$watch(
	                    function () {
	                        return API.currentTime;
	                    },
	                    function (newVal, oldVal) {
	                        scope.onUpdateTime(newVal);
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgScrubBarThumbnails
	 * @restrict E
	 * @description
	 * Layer inside vg-scrub-bar to display thumbnails.
	 *
	 * Param thumbnails could be a string url pointing to a strip of thumbnails or an array of objects with the same
	 * format that you can find in cue points.
	 *
	 * **Strip of thumbnails**
	 * Must be an image with exactly 100 thumbnails. Recommended size per each thumbnail 107x60
	 * Example of param value: "assets/images/strip-of-thumbnails.jpg"
	 *
	 * To create a strip of thumbnails you can use ffmpeg:
	 * ffmpeg -loglevel panic -y -i app/assets/videos/videogular.mp4 -frames 1 -q:v 1 -vf
	 * "select=not(mod(n\,29)),scale=-1:60,tile=100x1" app/assets/thumbnails/thumbnail.jpg
	 *
	 * **List of thumbnails**
	 * Array with a list of cue points as images. You can specify start or a lapse with start and end.
	 * Example of param value:
	 *
	 * [
	 *     {
	 *         "timeLapse": {
	 *             "start": 5
	 *         },
	 *         params: {
	 *             "thumbnail": "assets/thumbnails/thumbnail-shown-at-second-5.jpg"
	 *         }
	 *     },
	 *     {
	 *         "timeLapse": {
	 *             "start": 49,
	 *             "end": 60
	 *         },
	 *         "params": {
	 *             "thumbnail": "assets/thumbnails/thumbnail-shown-between-seconds-49-and-60.jpg"
	 *         }
	 *     }
	 * ]
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls>
	 *        <vg-scrub-bar>
	 *            <vg-scrub-bar-thumbnails vg-thumbnails='config.thumbnails'></vg-scrub-bar-thumbnails>
	 *        </vg-scrub-bar>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(["$templateCache",
	        function ($templateCache) {
	            $templateCache.put("vg-templates/vg-scrub-bar-thumbnails",
	                '<div class="vg-thumbnails" ng-show="thumbnails" ng-style="thumbnailContainer">' +
	                    '<div class="image-thumbnail" ng-style="thumbnails"></div>' +
	                '</div>' +
	                '<div class="background"></div>'
	            );
	        }
	    ])
	    .directive("vgScrubBarThumbnails", ["VG_UTILS",
	        function (VG_UTILS) {
	            return {
	                restrict: "E",
	                require: "^videogular",
	                templateUrl: function (elem, attrs) {
	                    return attrs.vgTemplate || 'vg-templates/vg-scrub-bar-thumbnails';
	                },
	                scope: {
	                    "vgThumbnails": "="
	                },
	                link: function (scope, elem, attr, API) {
	                    var thumbnailsWidth = 0;
	                    var thumbWidth = 0;
	                    var slider = elem[0].querySelector(".background");
	                    var isStrip = (typeof scope.vgThumbnails === "string");

	                    scope.thumbnails = false;
	                    scope.thumbnailContainer = {};

	                    scope.getOffset = function getOffset(event) {
	                        var el = event.target,
	                            x = 0;

	                        while (el && !isNaN(el.offsetLeft)) {
	                            x += el.offsetLeft - el.scrollLeft;
	                            el = el.offsetParent;
	                        }

	                        return event.clientX - x;
	                    };

	                    scope.onLoadThumbnails = function(event) {
	                        thumbnailsWidth = event.currentTarget.naturalWidth;
	                        thumbWidth = thumbnailsWidth / 100;
	                    };

	                    scope.onLoadThumbnail = function(event) {
	                        thumbWidth = event.currentTarget.naturalWidth;
	                    };

	                    scope.updateThumbnails = function(second) {
	                        var percentage = Math.round(second * 100 / (API.totalTime / 1000));
	                        var thPos = (slider.scrollWidth * percentage / 100) - (thumbWidth / 2);

	                        if (isStrip) {
	                            var bgPos = Math.round(thumbnailsWidth * percentage / 100);

	                            scope.thumbnailContainer = {
	                                "width": thumbWidth + "px",
	                                "left": thPos + "px"
	                            };

	                            scope.thumbnails = {
	                                "background-image": 'url("' + scope.vgThumbnails + '")',
	                                "background-position": -bgPos + "px 0px"
	                            };
	                        }
	                        else {
	                            var secondsByPixel = API.totalTime / slider.scrollWidth / 1000;
	                            var lapse = {
	                                start: Math.floor(second - (secondsByPixel / 2)),
	                                end: Math.ceil(second)
	                            };

	                            if (lapse.start < 0) lapse.start = 0;
	                            if (lapse.end > API.totalTime) lapse.end = API.totalTime;

	                            scope.thumbnailContainer = {
	                                "left": thPos + "px"
	                            };

	                            scope.thumbnails = {
	                                "background-image": 'none'
	                            };
	                            
	                            if (scope.vgThumbnails) {
	                                for (var i=0, l=scope.vgThumbnails.length; i<l; i++) {
	                                    var th = scope.vgThumbnails[i];

	                                    if (th.timeLapse.end >= 0) {
	                                        if (lapse.start >= th.timeLapse.start && (lapse.end <= th.timeLapse.end || lapse.end <= th.timeLapse.start)) {
	                                            scope.thumbnails = {
	                                                "background-image": 'url("' + th.params.thumbnail + '")'
	                                            };
	                                            break;
	                                        }
	                                    }
	                                    else {
	                                        if (th.timeLapse.start >= lapse.start && th.timeLapse.start <= lapse.end) {
	                                            scope.thumbnails = {
	                                                "background-image": 'url("' + th.params.thumbnail + '")'
	                                            };
	                                            break;
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    };

	                    scope.onMouseMove = function($event) {
	                        var second = Math.round($event.offsetX * API.mediaElement[0].duration / slider.scrollWidth);

	                        scope.updateThumbnails(second);

	                        scope.$digest();
	                    };

	                    scope.onTouchMove = function($event) {
	                        var touches = $event.touches;
	                        var touchX = scope.getOffset(touches[0]);
	                        var second = Math.round(touchX * API.mediaElement[0].duration / slider.scrollWidth);

	                        scope.updateThumbnails(second);

	                        scope.$digest();
	                    };

	                    scope.onMouseLeave = function(event) {
	                        scope.thumbnails = false;

	                        scope.$digest();
	                    };

	                    scope.onTouchLeave = function(event) {
	                        scope.thumbnails = false;

	                        scope.$digest();
	                    };

	                    scope.onDestroy = function() {
	                        elem.unbind("touchmove", scope.onTouchMove);
	                        elem.unbind("touchleave", scope.onTouchLeave);
	                        elem.unbind("touchend", scope.onTouchLeave);
	                        elem.unbind("mousemove", scope.onMouseMove);
	                        elem.unbind("mouseleave", scope.onMouseLeave);
	                    };

	                    var thLoader;
	                    if (isStrip) {
	                        thLoader = new Image();
	                        thLoader.onload = scope.onLoadThumbnails.bind(scope);
	                        thLoader.src = scope.vgThumbnails;
	                    }
	                    else {
	                        thLoader = new Image();
	                        thLoader.onload = scope.onLoadThumbnail.bind(scope);
	                        thLoader.src = scope.vgThumbnails[0].params.thumbnail;
	                    }

	                    // Touch move is really buggy in Chrome for Android, maybe we could use mouse move that works ok
	                    if (VG_UTILS.isMobileDevice()) {
	                        elem.bind("touchmove", scope.onTouchMove);
	                        elem.bind("touchleave", scope.onTouchLeave);
	                        elem.bind("touchend", scope.onTouchLeave);
	                    }
	                    else {
	                        elem.bind("mousemove", scope.onMouseMove);
	                        elem.bind("mouseleave", scope.onMouseLeave);
	                    }

	                    scope.$on('destroy', scope.onDestroy.bind(scope));
	                }
	            }
	        }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgScrubBar
	 * @restrict E
	 * @description
	 * Directive to control the time and display other information layers about the progress of the media.
	 * This directive acts as a container and you can add more layers to display current time, cuepoints, buffer or whatever you need.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-scrub-bar></vg-scrub-bar>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(["$templateCache",
	        function ($templateCache) {
	            $templateCache.put("vg-templates/vg-scrub-bar",
	                '<div role="slider" ' +
	                      'aria-valuemax="{{ariaTime(API.totalTime)}}" ' +
	                      'aria-valuenow="{{ariaTime(API.currentTime)}}" ' +
	                      'aria-valuemin="0" ' +
	                      'aria-label="Time scrub bar" ' +
	                      'tabindex="0" ' +
	                      'ng-keydown="onScrubBarKeyDown($event)">' +
	                '</div>' +
	                '<div class="container" ng-transclude></div>'
	            );
	        }]
	    )
	    .directive("vgScrubBar", ["VG_STATES", "VG_UTILS",
	        function (VG_STATES, VG_UTILS) {
	            return {
	                restrict: "E",
	                require: "^videogular",
	                transclude: true,
	                templateUrl: function (elem, attrs) {
	                    return attrs.vgTemplate || 'vg-templates/vg-scrub-bar';
	                },
	                scope: {
	                    vgThumbnails: "="
	                },
	                link: function (scope, elem, attr, API) {
	                    var isSeeking = false;
	                    var isPlaying = false;
	                    var isPlayingWhenSeeking = false;
	                    var LEFT = 37;
	                    var RIGHT = 39;
	                    var NUM_PERCENT = 5;
	                    var thumbnailsWidth = 0;
	                    var thumbWidth = 0;
	                    var slider = elem[0].querySelector("div[role=slider]");

	                    scope.thumbnails = false;
	                    scope.thumbnailContainer = {};

	                    scope.API = API;

	                    scope.onLoadThumbnails = function(event) {
	                        thumbnailsWidth = event.path[0].naturalWidth;
	                        thumbWidth = thumbnailsWidth / 100;
	                    };

	                    scope.ariaTime = function (time) {
	                        return Math.round(time / 1000);
	                    };

	                    scope.getOffset = function getOffset(event) {
	                        var el = event.target,
	                        x = 0;

	                        while (el && !isNaN(el.offsetLeft)) {
	                            x += el.offsetLeft - el.scrollLeft;
	                            el = el.offsetParent;
	                        }

	                        return event.clientX - x;
	                    };

	                    scope.onScrubBarTouchStart = function onScrubBarTouchStart($event) {
	                        var event = $event.originalEvent || $event;
	                        var touches = event.touches;
	                        var touchX = scope.getOffset(touches[0]);

	                        isSeeking = true;
	                        if (isPlaying) isPlayingWhenSeeking = true;
	                        API.pause();
	                        API.seekTime(touchX * API.mediaElement[0].duration / slider.scrollWidth);

	                        scope.$digest();
	                    };

	                    scope.onScrubBarTouchEnd = function onScrubBarTouchEnd($event) {
	                        var event = $event.originalEvent || $event;
	                        if (isPlayingWhenSeeking) {
	                            isPlayingWhenSeeking = false;
	                            API.play();
	                        }
	                        isSeeking = false;

	                        scope.$digest();
	                    };

	                    scope.onScrubBarTouchMove = function onScrubBarTouchMove($event) {
	                        var event = $event.originalEvent || $event;
	                        var touches = event.touches;
	                        var touchX = scope.getOffset(touches[0]);

	                        if (scope.vgThumbnails && scope.vgThumbnails.length) {
	                            var second = Math.round(touchX * API.mediaElement[0].duration / slider.scrollWidth);
	                            var percentage = Math.round(second * 100 / (API.totalTime / 1000));

	                            scope.updateThumbnails(percentage);
	                        }

	                        if (isSeeking) {
	                            API.seekTime(touchX * API.mediaElement[0].duration / slider.scrollWidth);
	                        }

	                        scope.$digest();
	                    };

	                    scope.onScrubBarTouchLeave = function onScrubBarTouchLeave(event) {
	                        isSeeking = false;
	                        scope.thumbnails = false;

	                        scope.$digest();
	                    };

	                    scope.onScrubBarMouseDown = function onScrubBarMouseDown(event) {
	                        event = VG_UTILS.fixEventOffset(event);

	                        isSeeking = true;
	                        if (isPlaying) isPlayingWhenSeeking = true;
	                        API.pause();

	                        API.seekTime(event.offsetX * API.mediaElement[0].duration / slider.scrollWidth);

	                        scope.$digest();
	                    };

	                    scope.onScrubBarMouseUp = function onScrubBarMouseUp(event) {
	                        //event = VG_UTILS.fixEventOffset(event);

	                        if (isPlayingWhenSeeking) {
	                            isPlayingWhenSeeking = false;
	                            API.play();
	                        }
	                        isSeeking = false;
	                        //API.seekTime(event.offsetX * API.mediaElement[0].duration / slider.scrollWidth);

	                        scope.$digest();
	                    };

	                    scope.onScrubBarMouseMove = function onScrubBarMouseMove(event) {
	                        if (scope.vgThumbnails && scope.vgThumbnails.length) {
	                            var second = Math.round(event.offsetX * API.mediaElement[0].duration / slider.scrollWidth);
	                            var percentage = Math.round(second * 100 / (API.totalTime / 1000));

	                            scope.updateThumbnails(percentage);
	                        }

	                        if (isSeeking) {
	                            event = VG_UTILS.fixEventOffset(event);
	                            API.seekTime(event.offsetX * API.mediaElement[0].duration / slider.scrollWidth);
	                        }

	                        scope.$digest();
	                    };

	                    scope.onScrubBarMouseLeave = function onScrubBarMouseLeave(event) {
	                        isSeeking = false;
	                        scope.thumbnails = false;

	                        scope.$digest();
	                    };

	                    scope.onScrubBarKeyDown = function onScrubBarKeyDown(event) {
	                        var currentPercent = (API.currentTime / API.totalTime) * 100;

	                        if (event.which === LEFT || event.keyCode === LEFT) {
	                            API.seekTime(currentPercent - NUM_PERCENT, true);
	                            event.preventDefault();
	                        }
	                        else if (event.which === RIGHT || event.keyCode === RIGHT) {
	                            API.seekTime(currentPercent + NUM_PERCENT, true);
	                            event.preventDefault();
	                        }
	                    };

	                    scope.updateThumbnails = function updateThumbnails(percentage) {
	                        var bgPos = Math.round(thumbnailsWidth * percentage / 100);
	                        var thPos = (slider.scrollWidth * percentage / 100) - (thumbWidth / 2);

	                        scope.thumbnailContainer = {
	                            "width": thumbWidth + "px",
	                            "left": thPos + "px"
	                        };

	                        scope.thumbnails = {
	                            "background-image": 'url("' + scope.vgThumbnails + '")',
	                            "background-position": -bgPos + "px 0px"
	                        };
	                    };

	                    scope.setState = function setState(newState) {
	                        if (!isSeeking) {
	                            switch (newState) {
	                                case VG_STATES.PLAY:
	                                    isPlaying = true;
	                                    break;

	                                case VG_STATES.PAUSE:
	                                    isPlaying = false;
	                                    break;

	                                case VG_STATES.STOP:
	                                    isPlaying = false;
	                                    break;
	                            }
	                        }
	                    };

	                    scope.onDestroy = function() {
	                        elem.unbind("touchstart", scope.onScrubBarTouchStart);
	                        elem.unbind("touchend", scope.onScrubBarTouchEnd);
	                        elem.unbind("touchmove", scope.onScrubBarTouchMove);
	                        elem.unbind("touchleave", scope.onScrubBarTouchLeave);
	                        elem.unbind("mousedown", scope.onScrubBarMouseDown);
	                        elem.unbind("mouseup", scope.onScrubBarMouseUp);
	                        elem.unbind("mousemove", scope.onScrubBarMouseMove);
	                        elem.unbind("mouseleave", scope.onScrubBarMouseLeave);
	                    };

	                    scope.$watch(
	                        function () {
	                            return API.currentState;
	                        },
	                        function (newVal, oldVal) {
	                            if (newVal != oldVal) {
	                                scope.setState(newVal);
	                            }
	                        }
	                    );

	                    if (scope.vgThumbnails) {
	                        var thLoader = new Image();
	                        thLoader.onload = scope.onLoadThumbnails.bind(scope);
	                        thLoader.src = scope.vgThumbnails;
	                    }

	                    // Touch move is really buggy in Chrome for Android, maybe we could use mouse move that works ok
	                    if (VG_UTILS.isMobileDevice()) {
	                        elem.bind("touchstart", scope.onScrubBarTouchStart);
	                        elem.bind("touchend", scope.onScrubBarTouchEnd);
	                        elem.bind("touchmove", scope.onScrubBarTouchMove);
	                        elem.bind("touchleave", scope.onScrubBarTouchLeave);
	                    }
	                    else {
	                        elem.bind("mousedown", scope.onScrubBarMouseDown);
	                        elem.bind("mouseup", scope.onScrubBarMouseUp);
	                        elem.bind("mousemove", scope.onScrubBarMouseMove);
	                        elem.bind("mouseleave", scope.onScrubBarMouseLeave);
	                    }

	                    scope.$on('destroy', scope.onDestroy.bind(scope));
	                }
	            }
	        }
	    ]);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgTimeDisplay
	 * @restrict E
	 * @description
	 * Adds a time display inside vg-controls to play and pause media.
	 * You have three scope variables to show current time, time left and total time.
	 *
	 * Those scope variables are in milliseconds, you can add a date filter to show the time as you wish.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-time-display>{{currentTime | date:'hh:mm'}}</vg-time-display>
	 *        <vg-time-display>{{timeLeft | date:'mm:ss'}}</vg-time-display>
	 *        <vg-time-display>{{totalTime | date:'hh:mm:ss'}}</vg-time-display>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .directive("vgTimeDisplay",
	    [function () {
	        return {
	            require: "^videogular",
	            restrict: "E",
	            link: function (scope, elem, attr, API) {
	                scope.currentTime = API.currentTime;
	                scope.timeLeft = API.timeLeft;
	                scope.totalTime = API.totalTime;
	                scope.isLive = API.isLive;

	                scope.$watch(
	                    function () {
	                        return API.currentTime;
	                    },
	                    function (newVal, oldVal) {
	                        scope.currentTime = newVal;
	                    }
	                );

	                scope.$watch(
	                    function () {
	                        return API.timeLeft;
	                    },
	                    function (newVal, oldVal) {
	                        scope.timeLeft = newVal;
	                    }
	                );

	                scope.$watch(
	                    function () {
	                        return API.totalTime;
	                    },
	                    function (newVal, oldVal) {
	                        scope.totalTime = newVal;
	                    }
	                );

	                scope.$watch(
	                    function () {
	                        return API.isLive;
	                    },
	                    function (newVal, oldVal) {
	                        scope.isLive = newVal;
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgMuteButton
	 * @restrict E
	 * @description
	 * Directive to display a button to mute volume.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-volume>
	 *            <vg-mute-button><vg-mute-button>
	 *        </vg-volume>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-mute-button",
	            '<button type="button" class="iconButton" ng-class="muteIcon" ng-click="onClickMute()" ng-focus="onMuteButtonFocus()" ng-blur="onMuteButtonLoseFocus()" ng-mouseleave="onMuteButtonLeave()" ng-keydown="onMuteButtonKeyDown($event)" aria-label="Mute"></button>');
	    }]
	)
	    .directive("vgMuteButton",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-mute-button';
	            },
	            link: function (scope, elem, attr, API) {
	                var isMuted = false;
	                var UP = 38;
	                var DOWN = 40;
	                var CHANGE_PER_PRESS = 0.05;

	                scope.onClickMute = function onClickMute() {
	                    if (isMuted) {
	                        scope.currentVolume = scope.defaultVolume;
	                    }
	                    else {
	                        scope.currentVolume = 0;
	                        scope.muteIcon = {mute: true};
	                    }

	                    isMuted = !isMuted;

	                    API.setVolume(scope.currentVolume);
	                };

	                scope.onMuteButtonFocus = function onMuteButtonFocus() {
	                    scope.volumeVisibility = "visible";
	                };

	                scope.onMuteButtonLoseFocus = function onMuteButtonLoseFocus() {
	                    scope.volumeVisibility = "hidden";
	                };

	                scope.onMuteButtonLeave = function onMuteButtonLeave() {
	                    document.activeElement.blur();
	                };

	                scope.onMuteButtonKeyDown = function onMuteButtonKeyDown(event) {
	                    var currentVolume = (API.volume != null) ? API.volume : 1;
	                    var newVolume;

	                    if (event.which === UP || event.keyCode === UP) {
	                        newVolume = currentVolume + CHANGE_PER_PRESS;
	                        if (newVolume > 1) newVolume = 1;

	                        API.setVolume(newVolume);
	                        event.preventDefault();
	                    }
	                    else if (event.which === DOWN || event.keyCode === DOWN) {
	                        newVolume = currentVolume - CHANGE_PER_PRESS;
	                        if (newVolume < 0) newVolume = 0;

	                        API.setVolume(newVolume);
	                        event.preventDefault();
	                    }
	                };

	                scope.onSetVolume = function onSetVolume(newVolume) {
	                    scope.currentVolume = newVolume;

	                    isMuted = (scope.currentVolume === 0);

	                    // if it's not muted we save the default volume
	                    if (!isMuted) {
	                        scope.defaultVolume = newVolume;
	                    }
	                    else {
	                        // if was muted but the user changed the volume
	                        if (newVolume > 0) {
	                            scope.defaultVolume = newVolume;
	                        }
	                    }

	                    var percentValue = Math.round(newVolume * 100);
	                    if (percentValue == 0) {
	                        scope.muteIcon = {mute: true};
	                    }
	                    else if (percentValue > 0 && percentValue < 25) {
	                        scope.muteIcon = {level0: true};
	                    }
	                    else if (percentValue >= 25 && percentValue < 50) {
	                        scope.muteIcon = {level1: true};
	                    }
	                    else if (percentValue >= 50 && percentValue < 75) {
	                        scope.muteIcon = {level2: true};
	                    }
	                    else if (percentValue >= 75) {
	                        scope.muteIcon = {level3: true};
	                    }
	                };

	                scope.defaultVolume = 1;
	                scope.currentVolume = scope.defaultVolume;
	                scope.muteIcon = {level3: true};

	                //Update the mute button on initialization, then watch for changes
	                scope.onSetVolume(API.volume);
	                scope.$watch(
	                    function () {
	                        return API.volume;
	                    },
	                    function (newVal, oldVal) {
	                        if (newVal != oldVal) {
	                            scope.onSetVolume(newVal);
	                        }
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgVolumeBar
	 * @restrict E
	 * @description
	 * Directive to display a vertical volume bar to control the volume.
	 * This directive must be inside vg-volume directive and requires vg-mute-button to be displayed.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-volume>
	 *            <vg-mute-button><vg-mute-button>
	 *            <vg-volume-bar><vg-volume-bar>
	 *        </vg-volume>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-volume-bar",
	            '<div class="verticalVolumeBar">\
	              <div class="volumeBackground" ng-click="onClickVolume($event)" ng-mousedown="onMouseDownVolume()" ng-mouseup="onMouseUpVolume()" ng-mousemove="onMouseMoveVolume($event)" ng-mouseleave="onMouseLeaveVolume()">\
	                <div class="volumeValue"></div>\
	                <div class="volumeClickArea"></div>\
	              </div>\
	            </div>');
	    }]
	)
	    .directive("vgVolumeBar",
	    ["VG_UTILS", function (VG_UTILS) {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-volume-bar';
	            },
	            link: function (scope, elem, attr, API) {
	                var isChangingVolume = false;
	                var volumeBackElem = angular.element(elem[0].getElementsByClassName("volumeBackground"));
	                var volumeValueElem = angular.element(elem[0].getElementsByClassName("volumeValue"));

	                scope.onClickVolume = function onClickVolume(event) {
	                    event = VG_UTILS.fixEventOffset(event);
	                    var volumeHeight = parseInt(volumeBackElem.prop("offsetHeight"));
	                    var value = event.offsetY * 100 / volumeHeight;
	                    var volValue = 1 - (value / 100);

	                    API.setVolume(volValue);
	                };

	                scope.onMouseDownVolume = function onMouseDownVolume() {
	                    isChangingVolume = true;
	                };

	                scope.onMouseUpVolume = function onMouseUpVolume() {
	                    isChangingVolume = false;
	                };

	                scope.onMouseLeaveVolume = function onMouseLeaveVolume() {
	                    isChangingVolume = false;
	                };

	                scope.onMouseMoveVolume = function onMouseMoveVolume(event) {
	                    if (isChangingVolume) {
	                        event = VG_UTILS.fixEventOffset(event);
	                        var volumeHeight = parseInt(volumeBackElem.prop("offsetHeight"));
	                        var value = event.offsetY * 100 / volumeHeight;
	                        var volValue = 1 - (value / 100);

	                        API.setVolume(volValue);
	                    }
	                };

	                scope.updateVolumeView = function updateVolumeView(value) {
	                    value = value * 100;
	                    volumeValueElem.css("height", value + "%");
	                    volumeValueElem.css("top", (100 - value) + "%");
	                };

	                scope.onChangeVisibility = function onChangeVisibility(value) {
	                    elem.css("visibility", value);
	                };

	                elem.css("visibility", scope.volumeVisibility);

	                scope.$watch("volumeVisibility", scope.onChangeVisibility);

	                //Update the volume bar on initialization, then watch for changes
	                scope.updateVolumeView(API.volume);
	                scope.$watch(
	                    function () {
	                        return API.volume;
	                    },
	                    function (newVal, oldVal) {
	                        if (newVal != oldVal) {
	                            scope.updateVolumeView(newVal);
	                        }
	                    }
	                );
	            }
	        }
	    }]
	);

	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.controls.directive:vgVolume
	 * @restrict E
	 * @description
	 * Directive to control the volume.
	 * This directive acts as a container and you will need other directives like vg-mutebutton and vg-volumebar to control the volume.
	 * In mobile will be hided since volume API is disabled for mobile devices.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-controls vg-autohide='config.autohide' vg-autohide-time='config.autohideTime'>
	 *        <vg-volume></vg-volume>
	 *    </vg-controls>
	 * </videogular>
	 * </pre>
	 *
	 */
	angular.module("com.2fdevs.videogular.plugins.controls")
	    .directive("vgVolume",
	    ["VG_UTILS", function (VG_UTILS) {
	        return {
	            restrict: "E",
	            link: function (scope, elem, attr) {
	                scope.onMouseOverVolume = function onMouseOverVolume() {
	                    scope.$evalAsync(function () {
	                        scope.volumeVisibility = "visible";
	                    });
	                };

	                scope.onMouseLeaveVolume = function onMouseLeaveVolume() {
	                    scope.$evalAsync(function () {
	                        scope.volumeVisibility = "hidden";
	                    });
	                };

	                scope.onDestroy = function() {
	                    elem.unbind("mouseover", scope.onScrubBarTouchStart);
	                    elem.unbind("mouseleave", scope.onScrubBarTouchEnd);
	                };

	                // We hide volume controls on mobile devices
	                if (VG_UTILS.isMobileDevice()) {
	                    elem.css("display", "none");
	                }
	                else {
	                    scope.volumeVisibility = "hidden";

	                    elem.bind("mouseover", scope.onMouseOverVolume);
	                    elem.bind("mouseleave", scope.onMouseLeaveVolume);
	                }

	                scope.$on('destroy', scope.onDestroy.bind(scope));
	            }
	        }
	    }]
	);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	__webpack_require__(135);

	module.exports = 'com.2fdevs.videogular.plugins.overlayplay';


/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * @license videogular v1.4.4 http://videogular.com
	 * Two Fucking Developers http://twofuckingdevelopers.com
	 * License: MIT
	 */
	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.overlayplay.directive:vgOverlayPlay
	 * @restrict E
	 * @description
	 * Shows a big play button centered when player is paused or stopped.
	 *
	 * <pre>
	 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-overlay-play></vg-overlay-play>
	 * </videogular>
	 * </pre>
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular.plugins.overlayplay", [])
	    .run(
	        ["$templateCache", function ($templateCache) {
	            $templateCache.put("vg-templates/vg-overlay-play",
	                '<div class="overlayPlayContainer" ng-click="onClickOverlayPlay()">\
	                  <div class="iconButton" ng-class="overlayPlayIcon"></div>\
	                </div>');
	        }]
	    )
	    .directive("vgOverlayPlay", ["VG_STATES",
	        function (VG_STATES) {
	            return {
	                restrict: "E",
	                require: "^videogular",
	                scope: {},
	                templateUrl: function (elem, attrs) {
	                    return attrs.vgTemplate || 'vg-templates/vg-overlay-play';
	                },
	                link: function (scope, elem, attr, API) {
	                    scope.onChangeState = function onChangeState(newState) {
	                        switch (newState) {
	                            case VG_STATES.PLAY:
	                                scope.overlayPlayIcon = {};
	                                break;

	                            case VG_STATES.PAUSE:
	                                scope.overlayPlayIcon = {play: true};
	                                break;

	                            case VG_STATES.STOP:
	                                scope.overlayPlayIcon = {play: true};
	                                break;
	                        }
	                    };

	                    scope.onClickOverlayPlay = function onClickOverlayPlay(event) {
	                        API.playPause();
	                    };

	                    scope.overlayPlayIcon = {play: true};

	                    scope.$watch(
	                        function () {
	                            return API.currentState;
	                        },
	                        function (newVal, oldVal) {
	                            scope.onChangeState(newVal);
	                        }
	                    );
	                }
	            }
	        }
	    ]);



/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	__webpack_require__(137);

	module.exports = 'com.2fdevs.videogular.plugins.poster';


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * @license videogular v1.4.4 http://videogular.com
	 * Two Fucking Developers http://twofuckingdevelopers.com
	 * License: MIT
	 */
	/**
	 * @ngdoc directive
	 * @name com.2fdevs.videogular.plugins.poster.directive:vgPoster
	 * @restrict E
	 * @description
	 * Shows an image when player hasn't been played or has been completed a video.
	 * <pre>
	 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
	 *    <vg-media vg-src="sources"></vg-media>
	 *
	 *    <vg-poster vg-url='config.plugins.poster.url'></vg-poster>
	 * </videogular>
	 * </pre>
	 *
	 * @param {string} vgUrl String with a scope name variable. URL to an image supported by the img tag.
	 * **This parameter is required.**
	 *
	 *
	 */
	"use strict";
	angular.module("com.2fdevs.videogular.plugins.poster", [])
	    .run(
	    ["$templateCache", function ($templateCache) {
	        $templateCache.put("vg-templates/vg-poster",
	            '<img ng-src="{{vgUrl}}" ng-class="API.currentState" role="presentation" alt="">');
	    }]
	)
	    .directive("vgPoster",
	    [function () {
	        return {
	            restrict: "E",
	            require: "^videogular",
	            scope: {
	                vgUrl: "=?"
	            },
	            templateUrl: function (elem, attrs) {
	                return attrs.vgTemplate || 'vg-templates/vg-poster';
	            },
	            link: function (scope, elem, attr, API) {
	                scope.API = API;

	                if (API.isConfig) {
	                    scope.$watch("API.config",
	                        function () {
	                            if (scope.API.config) {
	                                scope.vgUrl = scope.API.config.plugins.poster.url;
	                            }
	                        }
	                    );
	                }
	            }
	        }
	    }]
	);


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _lessonContent = __webpack_require__(139);

	var _lessonContent2 = _interopRequireDefault(_lessonContent);

	var _posts = __webpack_require__(141);

	var _posts2 = _interopRequireDefault(_posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lessonContentComponent = _angular2.default.module('lessonContent', [_posts2.default]).component('lessonContent', _lessonContent2.default).name;

	exports.default = lessonContentComponent;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lessonContent = __webpack_require__(140);

	var _lessonContent2 = _interopRequireDefault(_lessonContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LessonContent = {
	  controller: _lessonContent2.default,
	  bindings: {
	    article: '<',
	    resources: '<',
	    lessonIsComplete: '<',
	    lessonComplete: '&',
	    nextLesson: '&',
	    checkIfLastLesson: '&'
	  },
	  template: '\n    <div class="bottom-container">\n\n      <div class="tabs">\n        <ul>\n          <li ng-class="{active: $ctrl.activeTab === 0}"\n            ng-click="$ctrl.activeTab = 0">\n              Lesson Article\n          </li>\n          <li ng-class="{active: $ctrl.activeTab === 1}"\n            ng-click="$ctrl.activeTab = 1">\n              Discussion\n          </li>\n          <li ng-class="{active: $ctrl.activeTab === 2}"\n            ng-click="$ctrl.activeTab = 2">\n              Resources\n          </li>\n        </ul>\n      </div>\n\n      <div class="tab-content">\n        <div class="article post-page" ng-show="$ctrl.activeTab === 0" analytics analytics-scroll>\n          <div ng-bind-html="$ctrl.articleTrusted"></div>\n          <button ng-click="$ctrl.nextLesson()" ng-if="!$ctrl.checkIfLastLesson()">\n            Next Lesson\n          </button>\n          <button\n            ng-click="$ctrl.complete()">\n              {{$ctrl.completeText}}\n          </button>\n        </div>\n        <div class="discussion" ng-show="$ctrl.activeTab === 1">\n          <post-comment></post-comment>\n        </div>\n        <div class="resources" ng-show="$ctrl.activeTab === 2">\n          <h3>Github:</h3>\n          <ul>\n            <li>\n              <a ng-href="{{$ctrl.resources.github}}" target="_blank" ng-click="$ctrl.resourceClick($ctrl.resources.github)">\n                {{$ctrl.resources.github}}\n              </a>\n            </li>\n          </ul>\n          <h3>Demo:</h3>\n          <ul>\n            <li>\n              <a ng-href="{{$ctrl.resources.demo}}" target="_blank" ng-click="$ctrl.resourceClick($ctrl.resources.demo)">\n                {{$ctrl.resources.demo}}\n              </a>\n            </li>\n          </ul>\n          <h3>Additional Resources:</h3>\n          <ul>\n            <li ng-repeat="resource in $ctrl.resources.additional">\n              <a ng-href="{{resource}}" target="_blank" ng-click="$ctrl.resourceClick(resource)">\n                {{resource}}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n\n  '
	};

	exports.default = LessonContent;

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LessonContentController = function () {
	  function LessonContentController($sce, $location, analytics) {
	    _classCallCheck(this, LessonContentController);

	    this.$sce = $sce;
	    this.$location = $location;
	    this.completeText = 'Mark Lesson Complete';
	    this.analytics = analytics;
	  }

	  _createClass(LessonContentController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      if (this.$location.search().comment) {
	        this.activeTab = 1;
	      } else {
	        this.activeTab = 0;
	      }
	      this.articleTrusted = this.$sce.trustAsHtml(this.article);
	    }
	  }, {
	    key: '$onChanges',
	    value: function $onChanges(change) {
	      if (change.lessonIsComplete.currentValue) {
	        this.completeText = 'Completed';
	      }
	    }
	  }, {
	    key: 'complete',
	    value: function complete() {
	      if (this.completeText === 'Mark Lesson Complete') {
	        this.lessonComplete();
	        this.completeText = 'Completed';
	      }
	    }
	  }, {
	    key: 'resourceClick',
	    value: function resourceClick(resource) {
	      var loc = this.getPageLocations();
	      this.analytics.trackEvent('Resource', resource, loc);
	    }
	  }, {
	    key: 'getPageLocations',
	    value: function getPageLocations() {
	      var url = this.$location.absUrl();
	      var arr = url.split('/');

	      for (var i = arr.length - 1; i >= 0; i--) {
	        if (arr[i - 1] === 'lessons' && arr[i] === '#!') {
	          this.isLesson = true;
	        }
	        var matches = arr[i].match(/\?([^&]*)/);
	        if (matches) {
	          arr[i] = arr[i].slice(0, matches.index);
	        }
	        if (arr[i] === '' || arr[i] === '#!') {
	          arr.splice(i, 1);
	        }
	      }

	      var newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

	      return newArr.join('/');
	    }
	  }]);

	  return LessonContentController;
	}();

	LessonContentController.$inject = ['$sce', '$location', 'analyticsService'];

	exports.default = LessonContentController;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _post = __webpack_require__(142);

	var _post2 = _interopRequireDefault(_post);

	var _common = __webpack_require__(144);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(147);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var postComponent = _angular2.default.module('htcapp', [_common2.default, _components2.default]).component('postComment', _post2.default).name;

	exports.default = postComponent;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _post = __webpack_require__(143);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PostComponent = {
	  controller: _post2.default,
	  template: '\n    <h3>Submit <span class="highlight-text">a</span> <span>comment</span></h3>\n    <comment-form refresh="$ctrl.getComments()"></comment-form>\n\n    <h1>{{$ctrl.getNumComments()}} Comments</h1>\n    <comment\n      ng-repeat="comment in $ctrl.comments | orderBy:\'-score\'"\n      data="comment"\n      highlight="$ctrl.highlight"\n      refresh="$ctrl.getComments()"\n    </comment>\n  '
	};

	exports.default = PostComponent;

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PostCommentController = function () {
	  function PostCommentController(firebaseService, $location, $scope, analytics) {
	    _classCallCheck(this, PostCommentController);

	    this.firebaseService = firebaseService;
	    this.$location = $location;
	    this.$scope = $scope;
	    this.analytics = analytics;

	    this.comments = [];
	  }

	  _createClass(PostCommentController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.getComments();
	      this.triggerContentView();

	      if (this.$location.search() && this.$location.search().comment) {
	        this.highlight = this.$location.search().comment;
	      }
	    }
	  }, {
	    key: 'triggerContentView',
	    value: function triggerContentView() {
	      var loc = this.getPageLocations() || '';
	      var type = loc.split('/');
	      type = type[0];

	      this.analytics.fbTrackEvent('ViewContent', {
	        content_ids: [loc],
	        content_type: type,
	        value: 0.00,
	        currency: 'USD'
	      }, 'content_type');
	    }
	  }, {
	    key: 'getComments',
	    value: function getComments() {
	      var _this = this;

	      var loc = this.getPageLocations() || '';

	      this.firebaseService.getComments(loc).then(function (comments) {
	        _this.comments = comments || [];
	        _this.$scope.$apply();
	      });
	    }
	  }, {
	    key: 'getPageLocations',
	    value: function getPageLocations() {
	      var url = this.$location.absUrl();
	      var arr = url.split('/');

	      for (var i = arr.length - 1; i >= 0; i--) {
	        var matches = arr[i].match(/\?([^&]*)/);
	        if (matches) {
	          arr[i] = arr[i].slice(0, matches.index);
	        }
	        if (arr[i] === '' || arr[i] === '#!') {
	          arr.splice(i, 1);
	        }
	      }

	      var newArr = [arr[arr.length - 2], arr[arr.length - 1]];

	      return newArr.join('/');
	    }
	  }, {
	    key: 'getNumComments',
	    value: function getNumComments() {
	      var num = this.comments.length;

	      loopReplies(this.comments);

	      return num;

	      function loopReplies(comments) {
	        comments.forEach(function (item) {
	          if (item.replies) {
	            num += item.replies.length;
	            loopReplies(item.replies);
	          }
	        });
	      }
	    }
	  }]);

	  return PostCommentController;
	}();

	PostCommentController.$inject = ['firebaseService', '$location', '$scope', 'analyticsService'];

	exports.default = PostCommentController;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebaseService = __webpack_require__(9);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	var _userData = __webpack_require__(7);

	var _userData2 = _interopRequireDefault(_userData);

	var _auth = __webpack_require__(18);

	var _auth2 = _interopRequireDefault(_auth);

	var _analytics = __webpack_require__(20);

	var _analytics2 = _interopRequireDefault(_analytics);

	var _scrollHere = __webpack_require__(145);

	var _scrollHere2 = _interopRequireDefault(_scrollHere);

	var _header = __webpack_require__(74);

	var _header2 = _interopRequireDefault(_header);

	var _loginModal = __webpack_require__(76);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _spinner = __webpack_require__(37);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = _angular2.default.module('post.common.module', [_firebaseService2.default, _userData2.default, _spinner2.default, _scrollHere2.default, _auth2.default, _header2.default, _loginModal2.default, _analytics2.default]).name;

	exports.default = CommonModule;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _scrollHere = __webpack_require__(146);

	var _scrollHere2 = _interopRequireDefault(_scrollHere);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollHereComponent = _angular2.default.module('scrollHere', []).directive('scrollHere', _scrollHere2.default).name;

	exports.default = scrollHereComponent;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollHere = function scrollHere($timeout) {
	  return {
	    restrict: 'A',
	    scope: {
	      scrollHere: '<'
	    },
	    link: function link($scope, $element, $attrs) {
	      var w = window,
	          d = w.document,
	          de = d.documentElement,
	          db = d.body || d.getElementsByTagName('body')[0],
	          x = w.innerWidth || de.clientWidth || db.clientWidth,
	          y = w.innerHeight || de.clientHeight || db.clientHeight;

	      if ($scope.scrollHere) {
	        $timeout(function () {
	          document.body.scrollTop = $element[0].getBoundingClientRect().top - 100;
	        });
	      }
	    }
	  };
	};

	scrollHere.$inject = ['$timeout'];

	exports.default = scrollHere;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _comment = __webpack_require__(148);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(151);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComponentModule = _angular2.default.module('component.module', [_comment2.default, _commentForm2.default]).name;

	exports.default = ComponentModule;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _comment = __webpack_require__(149);

	var _comment2 = _interopRequireDefault(_comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentComponent = _angular2.default.module('comment.module', []).component('comment', _comment2.default).name;

	exports.default = CommentComponent;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _comment = __webpack_require__(150);

	var _comment2 = _interopRequireDefault(_comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentComponent = {
	  controller: _comment2.default,
	  bindings: {
	    data: '<',
	    refresh: '&',
	    commentNesting: '<',
	    highlight: '<'
	  },
	  template: '\n    <div class="comment-cont" ng-class="{\'reply\': $ctrl.data.isReply, \'comment-highlight\': $ctrl.highlight === $ctrl.data.firebase_id}" scroll-here="$ctrl.highlight === $ctrl.data.firebase_id">\n      <div class="header">\n        <div class="image-cont" style="background: url({{$ctrl.data.image}}); background-size: cover"></div>\n        <span class="name" ng-bind-html="$ctrl.formattedName()"></span>\n        <span class="date">{{::$ctrl.data.date | date}}</span>\n\n      </div>\n      <div class="padding">\n        <div class="body">\n          <p>{{$ctrl.data.text}}</p>\n        </div>\n        <div class="footer">\n          <span class="score">\n            ({{$ctrl.data.score}})\n          </span>\n          <span class="up"\n            ng-click="$ctrl.vote(\'up\')"\n            ng-class="{\'active\': $ctrl.voted === \'up\'}">\n            Up\n          </span>\n          <span class="down"\n            ng-click="$ctrl.vote(\'down\')"\n            ng-class="{\'active\': $ctrl.voted === \'down\'}">\n            Down\n          </span>\n          <span class="reply"\n            ng-click="$ctrl.reply = true"\n            ng-if="!$ctrl.reply">\n              reply\n          </span>\n          <span class="reply"\n            ng-click="$ctrl.reply = false"\n            ng-if="$ctrl.reply">\n              close reply box\n          </span>\n        </div>\n      </div>\n    </div>\n    <comment-form\n      ng-if="$ctrl.reply"\n      refresh="$ctrl.refresh()"\n      comment-nesting="$ctrl.commentNesting"\n      is-reply="{{$ctrl.data.firebase_id}}">\n    </comment-form>\n\n    <comment\n      ng-repeat="comment in $ctrl.data.replies | orderBy:\'date\'"\n      refresh="$ctrl.refresh()"\n      comment-nesting="$ctrl.commentNesting"\n      data="comment"\n      highlight="$ctrl.highlight"\n    </comment>\n  '
	};

	exports.default = CommentComponent;

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentController = function () {
	  function commentController($sce, firebaseService, $location) {
	    _classCallCheck(this, commentController);

	    this.$sce = $sce;
	    this.fb = firebaseService;
	    this.$location = $location;

	    // this.loc = this.getPageLocations();
	  }

	  _createClass(commentController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      if (this.commentNesting) {
	        this.commentNesting += this.data.isReply + '/replies/';
	        this.loc = this.getPageLocations() + this.commentNesting;
	      } else {
	        if (this.data.isReply) {
	          this.commentNesting = this.data.isReply + '/replies/';
	          this.loc = this.getPageLocations() + this.commentNesting;
	        } else {
	          this.loc = this.getPageLocations();
	        }
	      }
	    }
	  }, {
	    key: 'formattedName',
	    value: function formattedName() {
	      var name = this.data.user_name.split(' ');
	      if (name[2]) {
	        name[1] = '<span class="highlight-name">' + name[1] + '</span>';
	        name[2] = '<span class="accent-name">' + name[2] + '</span> <span class="wrote">wrote:</span>';
	      } else if (name[1]) {
	        name[1] = '<span class="highlight-name">' + name[1] + '</span><span class="accent-name wrote"> wrote:</span>';
	      } else {
	        name[0] = name[0] + '<span class="highlight-name wrote"> wrote:</span>';
	      }
	      return this.$sce.trustAsHtml(name.join('').toLowerCase());
	    }
	  }, {
	    key: 'vote',
	    value: function vote(type) {
	      if (this.voted === type) {
	        return;
	      }

	      var score = this.data.score;

	      if (this.voted && this.voted !== type) {
	        this.fb.updateCommentScore(this.loc, this.data.firebase_id, score);
	        return this.voted = null;
	      }

	      this.voted = type;
	      if (type === 'up') {
	        score++;
	      } else if (type === 'down') {
	        score--;
	      }

	      this.fb.updateCommentScore(this.loc, this.data.firebase_id, score);
	    }
	  }, {
	    key: 'getPageLocations',
	    value: function getPageLocations() {
	      var url = this.$location.absUrl();
	      var arr = url.split('/');

	      for (var i = arr.length - 1; i >= 0; i--) {
	        var matches = arr[i].match(/\?([^&]*)/);
	        if (matches) {
	          arr[i] = arr[i].slice(0, matches.index);
	        }
	        if (arr[i] === '' || arr[i] === '#!') {
	          arr.splice(i, 1);
	        }
	      }

	      var newArr = [arr[arr.length - 2], arr[arr.length - 1]];
	      newArr.push('');

	      return newArr.join('/');
	    }
	  }]);

	  return commentController;
	}();

	commentController.$inject = ['$sce', 'firebaseService', '$location'];

	exports.default = commentController;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _commentForm = __webpack_require__(152);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var commentFormComponent = _angular2.default.module('commentForm', []).component('commentForm', _commentForm2.default).name;

	exports.default = commentFormComponent;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _commentForm = __webpack_require__(153);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentFormComponent = {
	  controller: _commentForm2.default,
	  bindings: {
	    refresh: '&',
	    isReply: '@',
	    commentNesting: '<'
	  },
	  template: '\n    <textarea ng-model="$ctrl.commentText"\n      ng-if="$ctrl.userData.isSignedIn()"\n      ng-class="{\'reply\': $ctrl.commentNesting}"></textarea>\n    <span class="comment-feedback" ng-class="{\'error\': $ctrl.error, \'reply\': $ctrl.commentNesting}">\n      {{$ctrl.feedbackText}}\n    </span>\n    <button\n      ng-if="$ctrl.userData.isSignedIn()"\n      ng-click="$ctrl.submitComment($ctrl.commentText)">\n        <span ng-if="!$ctrl.submitLoading">Submit Comment</span>\n        <htc-spinner ng-if="$ctrl.submitLoading"></htc-spinner>\n    </button>\n\n    <div class="not-signed-in-comment"\n      ng-if="!$ctrl.userData.isSignedIn()">\n        <button ng-click="$ctrl.signIn()">\n          Log In / Sign Up To Comment\n        </button>\n    </div>\n\n    <login-modal\n      ng-if="$ctrl.showSignIn"\n      close-modal="$ctrl.closeSignIn()">\n    </login-modal>\n  '
	};

	exports.default = CommentFormComponent;

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentFormController = function () {
	  function commentFormController(firebaseService, userData, $location, analytics) {
	    _classCallCheck(this, commentFormController);

	    this.firebaseService = firebaseService;
	    this.userData = userData;
	    this.$location = $location;
	    this.analytics = analytics;

	    this.commentText = '';
	  }

	  _createClass(commentFormController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.isReply = this.isReply || false;
	      this.isLesson = false;
	      this.error = false;
	      this.submitLoading = false;

	      if (this.commentNesting) {
	        this.pageLocations = this.getPageLocations() || '';
	        this.pageLocations += this.commentNesting;
	      } else {
	        this.pageLocations = this.getPageLocations() || '';
	      }
	    }
	  }, {
	    key: 'submitComment',
	    value: function submitComment(text) {
	      var _this = this;

	      this.submitLoading = true;
	      var loc = this.getPageLocations();
	      var type = loc.split('/');
	      type = type[0];

	      if (text) {
	        this.userData.setComment(this.pageLocations, text, this.isReply, this.isLesson).then(function () {
	          _this.analytics.trackEvent('Comment', loc);
	          _this.analytics.setDimension('Dimension3', 'Commenter');
	          _this.analytics.setMetric('Metric5', 1);
	          _this.analytics.fbTrackCustom('Comment', {
	            content: loc,
	            content_type: type
	          }, 'content');

	          _this.refresh();
	          _this.feedbackText = 'Comment Submitted Successfully';
	          _this.error = false;
	          _this.submitLoading = false;
	        }).catch(function (err) {
	          console.error(err);
	          _this.feedbackText = 'Something Went Wrong. Try Again Later';
	          _this.error = true;
	          _this.submitLoading = false;
	        });
	      } else {
	        this.feedbackText = 'Comment is empty';
	        this.error = true;
	        this.submitLoading = false;
	      }
	      this.commentText = '';
	    }
	  }, {
	    key: 'signIn',
	    value: function signIn() {
	      this.showSignIn = true;
	    }
	  }, {
	    key: 'closeSignIn',
	    value: function closeSignIn() {
	      this.showSignIn = false;
	    }
	  }, {
	    key: 'getPageLocations',
	    value: function getPageLocations() {
	      var url = this.$location.absUrl();
	      var arr = url.split('/');

	      for (var i = arr.length - 1; i >= 0; i--) {
	        if (arr[i - 1] === 'lessons' && arr[i] === '#!') {
	          this.isLesson = true;
	        }
	        var matches = arr[i].match(/\?([^&]*)/);
	        if (matches) {
	          arr[i] = arr[i].slice(0, matches.index);
	        }
	        if (arr[i] === '' || arr[i] === '#!') {
	          arr.splice(i, 1);
	        }
	      }

	      var newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

	      return newArr.join('/');
	    }
	  }]);

	  return commentFormController;
	}();

	commentFormController.$inject = ['firebaseService', 'userData', '$location', 'analyticsService'];

	exports.default = commentFormController;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _stateChange = __webpack_require__(155);

	var _stateChange2 = _interopRequireDefault(_stateChange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stateChangeComponent = _angular2.default.module('stateChange', []).component('stateChange', _stateChange2.default).run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
	  $rootScope.loading = false;

	  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
	    $rootScope.loading = true;
	  });
	  $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
	    $timeout(function () {
	      $rootScope.loading = false;
	    }, 300);
	  });
	}]).name;

	exports.default = stateChangeComponent;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateChange = __webpack_require__(156);

	var _stateChange2 = _interopRequireDefault(_stateChange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stateChange = {
	  controller: _stateChange2.default,
	  template: '\n    <div class="state-loading" ng-if="$ctrl.$rootScope.loading">\n      <htc-spinner></htc-spinner>\n    </div>\n  '
	};

	exports.default = stateChange;

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StateChangeController = function StateChangeController($rootScope) {
	  _classCallCheck(this, StateChangeController);

	  this.$rootScope = $rootScope;
	};

	StateChangeController.$inject = ['$rootScope'];

	exports.default = StateChangeController;

/***/ }
]);