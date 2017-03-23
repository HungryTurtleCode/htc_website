webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _checkout = __webpack_require__(92);

	var _checkout2 = _interopRequireDefault(_checkout);

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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularStripe = __webpack_require__(93);

	var _angularStripe2 = _interopRequireDefault(_angularStripe);

	var _common = __webpack_require__(100);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(101);

	var _components2 = _interopRequireDefault(_components);

	var _checkout = __webpack_require__(105);

	var _checkout2 = _interopRequireDefault(_checkout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckoutComponent = _angular2.default.module('htcapp', [_angularStripe2.default, _common2.default, _components2.default]).component('checkout', _checkout2.default).config(['stripeProvider', function (stripeProvider) {
	  return stripeProvider.setPublishableKey('pk_test_1FrrFV8GGN8ec0sX03NYggaB');
	}]).name;

	exports.default = CheckoutComponent;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(2)
	var provider = __webpack_require__(94)
	var Stripe = window.Stripe

	module.exports = angular.module('angular-stripe', [
	  __webpack_require__(99)
	])
	.constant('Stripe', Stripe)
	.provider('stripe', provider)
	.run(verifyQ)
	.name

	verifyQ.$inject = ['assertQConstructor']
	function verifyQ (assertQConstructor) {
	  assertQConstructor('angular-stripe: For Angular <= 1.2 support, first load https://github.com/bendrucker/angular-q-constructor')
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var service = __webpack_require__(95)

	module.exports = stripeProvider

	stripeProvider.$inject = ['Stripe']
	function stripeProvider (Stripe) {
	  if (!Stripe) throw new Error('Stripe must be available as window.Stripe')
	  this.setPublishableKey = Stripe.setPublishableKey
	  this.$get = service
	}


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var stripeAsPromised = __webpack_require__(96)

	module.exports = factory

	factory.$inject = ['Stripe', '$q']
	function factory (Stripe, $q) {
	  return stripeAsPromised(Stripe, $q)
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var extend = __webpack_require__(97)
	var dot = __webpack_require__(98)

	var asyncMethods = [
	  'card.createToken',
	  'bankAccount.createToken',
	  'bitcoinReceiver.createReceiver',
	  'bitcoinReceiver.pollReceiver',
	  'bitcoinReceiver.getReceiver',
	]

	var helperMethods = [
	  'setPublishableKey',
	  'card.validateCardNumber',
	  'card.validateExpiry',
	  'card.validateCVC',
	  'card.cardType',
	  'bankAccount.validateRoutingNumber',
	  'bankAccount.validateAccountNumber',
	  'bitcoinReceiver.cancelReceiverPoll'
	]

	module.exports = function promisifyStripe (Stripe, Promise) {
	  if (typeof Stripe !== 'function') throw new Error('Stripe.js must be provided')
	  if (typeof Promise !== 'function') throw new Error('Promise constructor must be provided')
	  var stripe = {}
	  asyncMethods.forEach(function (method) {
	    var names = method.split('.')
	    var receiverName = names[0]
	    var methodName = names[1]
	    dot.set(stripe, method, promisify(Promise, methodName, Stripe[receiverName], stripeResponseHandler))
	  })
	  helperMethods.forEach(function (method) {
	    dot.set(stripe, method, dot.get(Stripe, method))
	  })
	  return stripe
	}

	function promisify (Promise, method, receiver, resolver) {
	  return function promisified () {
	    var args = Array.prototype.slice.call(arguments)
	    return new Promise(function (resolve, reject) {
	      receiver[method].apply(receiver, args.concat(function promisifiedResolve () {
	        resolver.apply({resolve: resolve, reject: reject}, arguments)
	      }))      
	    })
	  }
	}

	function stripeResponseHandler (status, response) {
	  if (response.error) {
	    this.reject(extend(new Error(), response.error))
	  }
	  else {
	    this.resolve(response)
	  }
	}


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend(target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	function isObjOrFn(x) {
		return (typeof x === 'object' || typeof x === 'function') && x !== null;
	}

	module.exports.get = function (obj, path) {
		if (!isObjOrFn(obj) || typeof path !== 'string') {
			return obj;
		}

		var pathArr = path.split('.');
		pathArr.some(function (path, index) {
			obj = obj[path];

			if (obj === undefined) {
				return true;
			}
		});

		return obj;
	};

	module.exports.set = function (obj, path, value) {
		if (!isObjOrFn(obj) || typeof path !== 'string') {
			return;
		}

		var pathArr = path.split('.');
		pathArr.forEach(function (path, index) {
			if (!isObjOrFn(obj[path])) {
				obj[path] = {};
			}

			if (index === pathArr.length - 1) {
				obj[path] = value;
			}

			obj = obj[path];
		});
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(2)

	module.exports = angular.module('assert-q-constructor', [])
	  .factory('assertQConstructor', main)
	  .name

	main.$inject = ['$q']
	function main ($q) {
	  return function assertQConstructor (message) {
	    if (typeof $q !== 'function') {
	      throw new Error(message || '$q is not a function')
	    }
	  }
	}


/***/ },
/* 100 */
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

	var _dataService = __webpack_require__(26);

	var _dataService2 = _interopRequireDefault(_dataService);

	var _analytics = __webpack_require__(20);

	var _analytics2 = _interopRequireDefault(_analytics);

	var _header = __webpack_require__(74);

	var _header2 = _interopRequireDefault(_header);

	var _spinner = __webpack_require__(37);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = _angular2.default.module('checkout.common.module', [_userData2.default, _angularAnimate2.default, _firebaseService2.default, _header2.default, _spinner2.default, _dataService2.default, _analytics2.default]).name;

	exports.default = CommonModule;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _cartList = __webpack_require__(102);

	var _cartList2 = _interopRequireDefault(_cartList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComponentModule = _angular2.default.module('component.module', [_cartList2.default]).name;

	exports.default = ComponentModule;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _cartList = __webpack_require__(103);

	var _cartList2 = _interopRequireDefault(_cartList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CartListComponent = _angular2.default.module('cartlist.module', []).component('cartList', _cartList2.default).name;

	exports.default = CartListComponent;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cartList = __webpack_require__(104);

	var _cartList2 = _interopRequireDefault(_cartList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CartList = {
	  controller: _cartList2.default,
	  bindings: {
	    cart: '<',
	    removeItem: '&'
	  },
	  template: '\n    <div ng-if="$ctrl.cart.length === 0">\n      <htc-spinner></htc-spinner>\n    </div>\n    <div ng-repeat="item in $ctrl.cart" class="cart-item">\n      <a ng-href="/courses/{{item.slug}}">\n        <img class="cart-img"\n          ng-src="{{item.img}}"/>\n      </a>\n      <a ng-href="/courses/{{item.slug}}">\n        {{item.title}}\n      </a>\n      <span class="price">{{item.price | currency:$:0}}</span>\n      <button\n        class="remove-button"\n        ng-click="$ctrl.remove(item)">\n          <span ng-if="!$ctrl.removeLoading">X</span>\n          <htc-spinner ng-if="$ctrl.removeLoading"></htc-spinner>\n      </button>\n    </div>\n  '
	};

	exports.default = CartList;

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CartListController = function () {
	  function CartListController() {
	    _classCallCheck(this, CartListController);
	  }

	  _createClass(CartListController, [{
	    key: "$onInit",
	    value: function $onInit() {
	      this.removeLoading = false;
	    }
	  }, {
	    key: "remove",
	    value: function remove(item) {
	      this.removeLoading = true;
	      this.removeItem({ item: item });
	    }
	  }]);

	  return CartListController;
	}();

	exports.default = CartListController;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkout = __webpack_require__(106);

	var _checkout2 = _interopRequireDefault(_checkout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckoutComponent = {
	  controller: _checkout2.default,
	  template: '\n    <login-modal\n      ng-if="$ctrl.showModal"\n      close-modal="$ctrl.closeSignIn()">\n    </login-modal>\n    <div class="list-area">\n      <cart-list\n        cart="$ctrl.cart"\n        remove-item="$ctrl.removeItem(item)">\n      </cart-list>\n      <div class="empty-cart" ng-if="!$ctrl.cart">\n        Cart Is Empty\n        <br>\n        <a href="/courses/">Check out some courses here</a>\n      </div>\n      <div class="checkout-bottom" ng-if="$ctrl.cart.length">\n        <div class="total-price">\n          Total: <strong>{{$ctrl.getTotal() | currency:$:0}}</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class="pay-area" ng-if="$ctrl.cart.length">\n      <h2>Pay With</h2>\n      <button\n        class="sign-in-btn"\n        ng-if="!$ctrl.userData.auth.loggedIn"\n        ng-click="$ctrl.showModal = true">\n          Log In / Register To Purchase\n      </button>\n      <div class="tabs" ng-if="$ctrl.userData.auth.loggedIn">\n        <ul>\n          <li ng-click="$ctrl.activePayment = 0" ng-class="{\'active\': $ctrl.activePayment === 0}">PayPal</li>\n          <li ng-click="$ctrl.activePayment = 1" ng-class="{\'active\': $ctrl.activePayment === 1}">Card</li>\n        </ul>\n      </div>\n\n      <div class="paypal-pay"\n        ng-if="$ctrl.userData.auth.loggedIn && $ctrl.activePayment === 0">\n          <button ng-click="$ctrl.paypalBuy()">\n            <span ng-if="!$ctrl.paymentLoading">Go To PayPal</span>\n            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>\n          </button>\n      </div>\n\n      <div class="stripe-pay"\n        ng-if="$ctrl.userData.auth.loggedIn && $ctrl.activePayment === 1">\n          <div class="payment-field">\n            <label>Name</label>\n            <input ng-model="$ctrl.payment.name" type="text" placeholder="Name">\n          </div>\n          <div class="payment-field">\n            <label>Card Number</label>\n            <input ng-model="$ctrl.payment.card.number" type="text" placeholder="Card Number">\n          </div>\n          <div class="payment-field">\n            <label>CVC</label>\n            <input ng-model="$ctrl.payment.card.cvc" type="text" placeholder="CVC">\n          </div>\n          <div class="payment-field">\n            <label>Exp Month</label>\n            <input ng-model="$ctrl.payment.card.exp_month" type="text" placeholder="Exp Month">\n          </div>\n          <div class="payment-field">\n            <label>Exp Year</label>\n            <input ng-model="$ctrl.payment.card.exp_year" type="text" placeholder="Exp Year">\n          </div>\n          <button ng-click="$ctrl.stripeBuy()">\n            <span ng-if="!$ctrl.paymentLoading">Buy</span>\n            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>\n          </button>\n      </div>\n\n    </div>\n  '
	};

	exports.default = CheckoutComponent;

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CheckoutController = function () {
	  function CheckoutController(firebaseService, userData, $scope, stripe, analytics) {
	    _classCallCheck(this, CheckoutController);

	    this.fb = firebaseService;
	    this.userData = userData;
	    this.$scope = $scope;
	    this.stripe = stripe;
	    this.analytics = analytics;
	  }

	  _createClass(CheckoutController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.cart = [];
	      this.activePayment = 0;
	      this.paymentLoading = false;
	      this.getCart();
	    }
	  }, {
	    key: 'getCart',
	    value: function getCart() {
	      var _this = this;

	      return this.userData.getUserCart().then(function (cart) {
	        _this.cart = cart;
	        _this.$scope.$apply();
	      });
	    }
	  }, {
	    key: 'closeSignIn',
	    value: function closeSignIn() {
	      this.showModal = false;
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(item) {
	      var index = this.cart.indexOf(item);
	      if (index > -1) {
	        this.analytics.trackEvent('RemoveFromCart', item.title);

	        this.cart.splice(index, 1);
	        if (!this.cart.length) {
	          this.cart = null;
	        }
	        this.userData.updateCart(angular.copy(this.cart)).then(function () {
	          return console.log('updated cart');
	        });
	      }
	    }
	  }, {
	    key: 'getTotal',
	    value: function getTotal() {
	      if (this.cart) {
	        return this.cart.reduce(function (num, val) {
	          return num + val.price;
	        }, 0);
	      }
	      return 0;
	    }
	  }, {
	    key: 'paypalBuy',
	    value: function paypalBuy() {
	      var _this2 = this;

	      this.paymentLoading = true;
	      this.userData.paypalBuy(this.cart).then(function (data) {
	        if (data.success) {
	          _this2.analytics.fbTrackEvent('Purchase', {
	            content_ids: _this2.cart,
	            content_type: 'courses',
	            value: _this2.getTotal().toFixed(2),
	            currency: 'USD'
	          }, 'content_type');
	          _this2.cart.forEach(function (item) {
	            _this2.analytics.trackEvent('Purchase', item.title, null, item.price);
	          });
	          _this2.paymentLoading = false;
	          window.location.href = data.url;
	        } else {
	          _this2.cart.forEach(function (item) {
	            _this2.analytics.trackEvent('PaypalFAIL', item.title, null, item.price);
	          });
	        }
	      }).catch(function (err) {
	        return console.error(err);
	      });
	    }
	  }, {
	    key: 'stripeBuy',
	    value: function stripeBuy() {
	      var _this3 = this;

	      this.paymentLoading = true;
	      this.stripe.card.createToken(this.payment.card).then(function (response) {
	        console.log('token created for card ending in ', response.card.last4);

	        _this3.userData.stripeBuy(_this3.cart, response.id).then(function (data) {
	          if (data.success) {
	            _this3.cart.forEach(function (item) {
	              _this3.analytics.trackEvent('Purchase', item.title, null, item.price);
	            });
	            _this3.paymentLoading = false;
	            window.location.href = data.url;
	          } else {
	            _this3.cart.forEach(function (item) {
	              _this3.analytics.trackEvent('StripeFAIL', item.title, null, item.price);
	            });
	          }
	        }).catch(function (err) {
	          return console.error(err);
	        });
	      });
	    }
	  }]);

	  return CheckoutController;
	}();

	CheckoutController.$inject = ['firebaseService', 'userData', '$scope', 'stripe', 'analyticsService'];

	exports.default = CheckoutController;

/***/ }
]);