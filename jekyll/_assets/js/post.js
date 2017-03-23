webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _posts = __webpack_require__(141);

	var _posts2 = _interopRequireDefault(_posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 37:
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

/***/ 38:
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

/***/ 74:
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

/***/ 75:
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

/***/ 76:
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

/***/ 77:
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

/***/ 78:
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

/***/ 82:
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

/***/ 83:
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

/***/ 84:
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

/***/ 141:
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

/***/ 142:
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

/***/ 143:
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

/***/ 144:
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

/***/ 145:
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

/***/ 146:
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

/***/ 147:
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

/***/ 148:
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

/***/ 149:
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

/***/ 150:
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

/***/ 151:
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

/***/ 152:
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

/***/ 153:
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

/***/ }

});