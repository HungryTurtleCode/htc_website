webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _archive = __webpack_require__(66);

	var _archive2 = _interopRequireDefault(_archive);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(67);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(85);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckoutComponent = _angular2.default.module('htcapp', [_common2.default, _components2.default]).name;

	exports.default = CheckoutComponent;

/***/ },
/* 67 */
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

	var _pagination = __webpack_require__(68);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _header = __webpack_require__(74);

	var _header2 = _interopRequireDefault(_header);

	var _spinner = __webpack_require__(37);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = _angular2.default.module('checkout.common.module', [_userData2.default, _angularAnimate2.default, _firebaseService2.default, _header2.default, _spinner2.default, _pagination2.default]).name;

	exports.default = CommonModule;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _calcPage = __webpack_require__(69);

	var _calcPage2 = _interopRequireDefault(_calcPage);

	var _startFrom = __webpack_require__(70);

	var _startFrom2 = _interopRequireDefault(_startFrom);

	var _pagination = __webpack_require__(71);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _paginateBtns = __webpack_require__(72);

	var _paginateBtns2 = _interopRequireDefault(_paginateBtns);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PaginationComponent = _angular2.default.module('pagination.module', []).filter('calcPage', _calcPage2.default).filter('startFrom', _startFrom2.default).service('paginationService', _pagination2.default).component('paginateButtons', _paginateBtns2.default).name;

	exports.default = PaginationComponent;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalcPageFilter = function CalcPageFilter(paginationService) {
	  return function (input) {
	    if (Math.ceil(input.length / paginationService.pageSize) != paginationService.totalPages) {
	      paginationService.clickPaginationButton(1, input.length);
	    }

	    return input;
	  };
	};

	CalcPageFilter.$inject = ['paginationService'];

	exports.default = CalcPageFilter;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StartFromFilter = function StartFromFilter() {
	  return function (input, start) {
	    start = +start; //parse to int

	    if (input) {
	      return input.slice(start);
	    } else {
	      return input;
	    }
	  };
	};

	StartFromFilter.$inject = [];

	exports.default = StartFromFilter;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PaginationService = function () {
	  function PaginationService() {
	    _classCallCheck(this, PaginationService);

	    this.currentPage = -2;
	    this.totalPages = 0;
	    this.pageSize = 12;
	    this.paginationLimit = 10;
	    this.totalItems = 0;
	    this.pageRange = [];
	  }

	  _createClass(PaginationService, [{
	    key: 'clickPaginationButton',
	    value: function clickPaginationButton(index, length) {
	      this.currentPage = index - 1;
	      this.getPageRange(length);

	      if (index - 1 !== this.currentPage) {
	        this.pageChanged();
	      }
	    }
	  }, {
	    key: 'previousButton',
	    value: function previousButton(length) {
	      this.currentPage--;
	      this.getPageRange(length);
	      this.pageChanged();
	    }
	  }, {
	    key: 'nextButton',
	    value: function nextButton(length) {
	      this.currentPage++;
	      this.getPageRange(length);
	      this.pageChanged();
	    }
	  }, {
	    key: 'getPageRange',
	    value: function getPageRange(length) {
	      this.totalItems = length;
	      this.totalPages = Math.ceil(length / this.pageSize);

	      this.pageRange = [];

	      for (var i = 0; i < this.totalPages; i++) {
	        this.pageRange[i] = i + 1; // change zero index to 1 index
	      }

	      this.truncateRange();
	    }
	  }, {
	    key: 'truncateRange',
	    value: function truncateRange() {
	      var centerVal = this.currentPage;

	      if (this.totalPages > this.paginationLimit && centerVal > this.paginationLimit / 2) {
	        var move = Math.floor(this.paginationLimit / 2);

	        if (centerVal < this.totalPages - move) {
	          this.slice(this.pageRange, centerValue - move, centerValue + move);
	        } else {
	          this.slice(this.pageRange, this.pageRange.length - this.paginationLimit, this.pageRange.length);
	        }
	      } else if (this.totalPages > this.paginationLimit) {
	        this.slice(this.pageRange, 0, this.paginationLimit);
	      }
	    }
	  }, {
	    key: 'slice',
	    value: function slice(array, start, end) {
	      var numRemoved = 0;
	      var arrLen = array.length;

	      for (var i = 0; i < arrLen; i++) {
	        if (i < start || i > end - 1) {
	          array.splice(i - numRemoved, 1);
	          numRemoved++;
	        }
	      }
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      console.log('page has changed');
	      window.scrollTo(0, 0);
	    }
	  }]);

	  return PaginationService;
	}();

	exports.default = PaginationService;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _paginateBtns = __webpack_require__(73);

	var _paginateBtns2 = _interopRequireDefault(_paginateBtns);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PaginateButtons = {
	  controller: _paginateBtns2.default,
	  template: '\n    <div class="pagination-btns" ng-if="$ctrl.paginationService.totalPages > 1">\n      <button\n        class="pagination-button prev"\n        ng-disabled="$ctrl.paginationService.currentPage == 0"\n        ng-click="$ctrl.paginationService.previousButton($ctrl.paginationService.totalItems)">\n          Previous\n      </button>\n      <button\n        class="pagination-button middle-pagination-buttons"\n        ng-repeat="button in $ctrl.paginationService.pageRange track by $index"\n        ng-click="$ctrl.paginationService.clickPaginationButton(button, $ctrl.paginationService.totalItems)"\n        ng-class="{\'pagination-active\': button == $ctrl.paginationService.currentPage+1}">\n          {{button}}\n      </button>\n      <button\n        class="pagination-button next"\n        ng-disabled="$ctrl.getNextDisabledState()"\n        ng-click="$ctrl.paginationService.nextButton($ctrl.paginationService.totalItems)">\n          Next\n      </button>\n    </div>\n  '
	};

	exports.default = PaginateButtons;

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PaginateButtonsController = function () {
	  function PaginateButtonsController(paginationService) {
	    _classCallCheck(this, PaginateButtonsController);

	    this.paginationService = paginationService;
	  }

	  _createClass(PaginateButtonsController, [{
	    key: 'getNextDisabledState',
	    value: function getNextDisabledState() {
	      return this.paginationService.currentPage >= this.paginationService.totalItems / this.paginationService.pageSize - 1;
	    }
	  }]);

	  return PaginateButtonsController;
	}();

	PaginateButtonsController.$inject = ['paginationService'];

	exports.default = PaginateButtonsController;

/***/ },
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _archiveList = __webpack_require__(86);

	var _archiveList2 = _interopRequireDefault(_archiveList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComponentModule = _angular2.default.module('component.module', [_archiveList2.default]).name;

	exports.default = ComponentModule;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _archiveList = __webpack_require__(87);

	var _archiveList2 = _interopRequireDefault(_archiveList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var archiveListComponent = _angular2.default.module('archiveList', []).component('archiveList', _archiveList2.default).name;

	exports.default = archiveListComponent;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _archiveList = __webpack_require__(88);

	var _archiveList2 = _interopRequireDefault(_archiveList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArchiveList = {
	  controller: _archiveList2.default,
	  template: '\n\n    <div class="filter-box">\n      <input\n        class="search-input"\n        ng-model="$ctrl.search"\n        ng-model-options="{debounce: 500}"\n        ng-change="$ctrl.trackSearch($ctrl.search)"\n        placeholder="Search..."\n        type="text">\n\n      <div class="form-group">\n        <span class="fancyArrow">\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve" data-inboxsdk-session-id="1489367182919-0.6727878747402856">\n          <g>\n            <g id="arrow-drop-down">\n                <polygon points="0,63.75 127.5,191.25 255,63.75   "/>\n                  </g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <head/></svg>\n        </span>\n        <!--<span>Sort By:</span>-->\n        <select id="frameworkSelect" ng-cloak ng-model="$ctrl.orderParam">\n          <option value="-timemark">Date Added: New First</option>\n          <option value="timemark">Date Added: Old First</option>\n          <option value="price">Price: low to high</option>\n          <option value="-price">Price: high to low</option>\n          <option value="difficultyNum">Difficulty: Beginner First</option>\n          <option value="-difficultyNum">Difficulty: Advanced First</option>\n          <option value="-lessons">Lessons: Most First</option>\n          <option value="lessons">Lessons: Least First</option>\n        </select>\n      </div>\n\n    </div>\n\n  <!--ng-repeat="course in list.courses | filter:list.search | filter:list.selectFramework | filter:list.selectLang | filter:list.enrolled | calcPage | startFrom:list.pagination.currentPage*list.pagination.pageSize | limitTo:list.pagination.pageSize | orderBy:list.orderParam">-->\n\n    <div class="archive-item" ng-repeat="post in $ctrl.data | orderBy:$ctrl.orderParam | filter:$ctrl.search | calcPage | startFrom:$ctrl.getStartFromData() | limitTo: $ctrl.paginationService.pageSize">\n      <section>\n        <div class="item-image-cont">\n          <div ng-if="post.lessons" class="lessons">\n            <p>\n              {{post.lessons}}\n            </p>\n            <p class="text">Lessons</p>\n          </div>\n          <a ng-href="{{post.url}}">\n            <img ng-src="{{post.image}}"/>\n          </a>\n        </div>\n\n\n      </section>\n      <section class="bottom">\n        <h2>\n          <a ng-href="{{post.url}}">\n            {{post.title}}\n          </a>\n        </h2>\n        <div class="author-tag">\n          By\n          <a href="/about-me">{{post.author}}</a>\n          On\n          {{post.date}}\n          In\n          <a ng-href="/{{::$ctrl.slugify(post.categories[0])}}">{{post.categories[0]}}</a>\n        </div>\n        <p>{{post.excerpt}}</p>\n        <div class="tags">\n          <div>\n            <div ng-repeat="tag in post.tags" class="tag-cont">\n              <a ng-href="/tag/{{$ctrl.slugify(tag)}}">\n                <span class="tag-box">\n\n                  <svg class="tag-icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1792 1792" id="svg4315" version="1.1" inkscape:version="0.48.3.1 r9886" height="100%" sodipodi:docname="tag_font_awesome.svg">\n                    <metadata id="metadata4325">\n                      <rdf:RDF>\n                        <cc:Work rdf:about="">\n                          <dc:format>image/svg+xml</dc:format>\n                          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>\n                        </cc:Work>\n                      </rdf:RDF>\n                    </metadata>\n\n                    <defs id="defs4323"/>\n                      <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview4321" showgrid="false" inkscape:zoom="0.13169643" inkscape:cx="896" inkscape:cy="896" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0" inkscape:current-layer="svg4315"/>\n\n                      <g transform="matrix(1,0,0,-1,129.08475,1285.4237)" id="g4317">\n                        <path d="m 448,1088 q 0,53 -37.5,90.5 Q 373,1216 320,1216 267,1216 229.5,1178.5 192,1141 192,1088 192,1035 229.5,997.5 267,960 320,960 q 53,0 90.5,37.5 Q 448,1035 448,1088 z M 1515,512 q 0,-53 -37,-90 L 987,-70 q -39,-37 -91,-37 -53,0 -90,37 L 91,646 Q 53,683 26.5,747 0,811 0,864 v 416 q 0,52 38,90 38,38 90,38 h 416 q 53,0 117,-26.5 64,-26.5 102,-64.5 l 715,-714 q 37,-39 37,-91 z" id="path4319" inkscape:connector-curvature="0" style="fill:currentColor"/>\n                      </g>\n                    </svg>\n\n                  <span class="tag-name">{{tag}}</span>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class="button-cont">\n          <span class="price"\n            ng-if="post.price">\n              {{post.price | currency:$:0 }}\n          </span>\n          <span class="price free"\n            ng-if="!post.price">\n              Free\n          </span>\n          <a\n            ng-href="{{post.url}}"\n            class="learn-more">\n              Learn More\n          </a>\n        </div>\n      </section>\n    </div>\n\n    <paginate-buttons></paginate-buttons>\n  '
	};

	exports.default = ArchiveList;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArchiveListController = function () {
	  function ArchiveListController(paginationService, analytics) {
	    _classCallCheck(this, ArchiveListController);

	    this.paginationService = paginationService;
	    this.analytics = analytics;

	    this.data = courseList;
	    this.setupData(this.data);
	  }

	  _createClass(ArchiveListController, [{
	    key: 'setupData',
	    value: function setupData() {
	      var difficultyData = {
	        beginner: 1,
	        intermediate: 2,
	        advanced: 3
	      };

	      this.data = this.data.map(function (item) {
	        item.price = item.price || 0;
	        item.lessons = item.lessons || 0;
	        item.difficultyNum = difficultyData[item.skill.toLowerCase()] || 2;
	        return item;
	      });
	    }
	  }, {
	    key: '$onInit',
	    value: function $onInit() {
	      this.search = this.getParameterByName('search') || '';
	      this.orderParam = '-timemark';
	    }
	  }, {
	    key: 'getStartFromData',
	    value: function getStartFromData() {
	      return this.paginationService.currentPage * this.paginationService.pageSize;
	    }
	  }, {
	    key: 'trackSearch',
	    value: function trackSearch(query) {
	      this.analytics.fbTrackEvent('Search', {
	        search_string: query
	      }, 'search_string');
	    }
	  }, {
	    key: 'slugify',
	    value: function slugify(name) {
	      if (name) {
	        var arr = name.split(' ');
	        arr = arr.join('-');
	        return arr.toLowerCase();
	      }
	    }
	  }, {
	    key: 'getParameterByName',
	    value: function getParameterByName(name, url) {
	      if (!url) url = window.location.href;
	      name = name.replace(/[\[\]]/g, "\\$&");
	      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	          results = regex.exec(url);

	      if (!results) return null;
	      if (!results[2]) return '';
	      return decodeURIComponent(results[2].replace(/\+/g, " "));
	    }
	  }]);

	  return ArchiveListController;
	}();

	ArchiveListController.$inject = ['paginationService', 'analyticsService'];

	exports.default = ArchiveListController;

/***/ }
]);