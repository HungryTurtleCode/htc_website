webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _account = __webpack_require__(1);

	var _account2 = _interopRequireDefault(_account);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(4);

	var _common2 = _interopRequireDefault(_common);

	var _components = __webpack_require__(43);

	var _components2 = _interopRequireDefault(_components);

	var _app = __webpack_require__(65);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppComponent = _angular2.default.module('htcaccount', [_common2.default, _components2.default]).component('app', _app2.default).name;

	exports.default = AppComponent;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
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

	var _forgotPass = __webpack_require__(28);

	var _forgotPass2 = _interopRequireDefault(_forgotPass);

	var _bookmarkButton = __webpack_require__(31);

	var _bookmarkButton2 = _interopRequireDefault(_bookmarkButton);

	var _upload = __webpack_require__(34);

	var _upload2 = _interopRequireDefault(_upload);

	var _spinner = __webpack_require__(37);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _trackingPixels = __webpack_require__(39);

	var _trackingPixels2 = _interopRequireDefault(_trackingPixels);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommonModule = _angular2.default.module('account.common.module', [_angularAnimate2.default, _userData2.default, _firebaseService2.default, _forgotPass2.default, _bookmarkButton2.default, _upload2.default, _spinner2.default, _trackingPixels2.default]).name;

	exports.default = CommonModule;

/***/ },
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _bookmarkButton = __webpack_require__(32);

	var _bookmarkButton2 = _interopRequireDefault(_bookmarkButton);

	var _userData = __webpack_require__(7);

	var _userData2 = _interopRequireDefault(_userData);

	var _analytics = __webpack_require__(20);

	var _analytics2 = _interopRequireDefault(_analytics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bookmarkButtonComponent = _angular2.default.module('bookmarkButton', [_userData2.default, _analytics2.default]).component('bookmarkButton', _bookmarkButton2.default).name;

	exports.default = bookmarkButtonComponent;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bookmarkButton = __webpack_require__(33);

	var _bookmarkButton2 = _interopRequireDefault(_bookmarkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BookmarkButton = {
	  controller: _bookmarkButton2.default,
	  bindings: {
	    course: '<'
	  },
	  template: '\n    <button ng-click="$ctrl.bookmark()">\n      {{$ctrl.text}}\n    </button>\n  '
	};

	exports.default = BookmarkButton;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookmarkButtonController = function () {
	  function BookmarkButtonController(userData, $timeout, analyticsService) {
	    _classCallCheck(this, BookmarkButtonController);

	    this.userData = userData;
	    this.$timeout = $timeout;
	    this.analytics = analyticsService;
	  }

	  _createClass(BookmarkButtonController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.text = 'Bookmark Course';
	      this.checkIsInBookmarks();
	    }
	  }, {
	    key: 'checkIsInBookmarks',
	    value: function checkIsInBookmarks() {
	      var _this = this;

	      this.userData.isInBookmarks(this.course).then(function (inBookmarks) {
	        if (inBookmarks) {
	          _this.$timeout(function () {
	            _this.text = 'Remove From Bookmarks';
	          });
	        }
	      });
	    }
	  }, {
	    key: 'bookmark',
	    value: function bookmark() {
	      var _this2 = this;

	      if (this.text === 'Bookmark Course') {
	        this.userData.bookmarkCourse(this.course).then(function () {
	          _this2.$timeout(function () {
	            _this2.analytics.trackEvent('Bookmark', 'Add', _this2.course);
	            _this2.analytics.fbTrackEvent('AddToWishlist', {
	              content_ids: [_this2.course],
	              content_type: 'courses',
	              value: 0.00,
	              currency: 'USD'
	            }, 'content_type');
	            _this2.text = 'Remove From Bookmarks';
	            console.log('Bookmarked');
	          });
	        });
	      } else {
	        this.userData.removeBookmark(this.course).then(function () {
	          _this2.$timeout(function () {
	            _this2.analytics.trackEvent('Bookmark', 'Remove', _this2.course);
	            _this2.text = 'Bookmark Course';
	            console.log('Removed Bookmark');
	          });
	        });
	      }
	    }
	  }]);

	  return BookmarkButtonController;
	}();

	BookmarkButtonController.$inject = ['userData', '$timeout', 'analyticsService'];

	exports.default = BookmarkButtonController;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _upload = __webpack_require__(35);

	var _upload2 = _interopRequireDefault(_upload);

	var _upload3 = __webpack_require__(36);

	var _upload4 = _interopRequireDefault(_upload3);

	var _firebaseService = __webpack_require__(9);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filereadDirective = _angular2.default.module('fileread', [_firebaseService2.default]).directive('fileread', _upload2.default).service('uploadService', _upload4.default).name;

	exports.default = filereadDirective;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fileread = function fileread() {
	  return {
	    restrict: 'A',
	    scope: {
	      fileread: '='
	    },
	    link: function link($scope, $element, $attrs) {
	      $element.bind('change', function (changeEvent) {
	        var files = changeEvent.target.files;
	        var numFiles = files.length;

	        if (numFiles > 1) {
	          $scope.fileread = [];
	        }

	        for (var i = 0; i < numFiles; i++) {

	          var reader = new FileReader();

	          reader.onload = function (loadEvent) {
	            $scope.$apply(function () {
	              if (numFiles > 1) {
	                $scope.fileread.push(loadEvent.target.result);
	              } else {
	                $scope.fileread = [loadEvent.target.result];
	              }
	            });
	          };
	          reader.readAsDataURL(changeEvent.target.files[i]);
	        }
	      });
	    }
	  };
	};

	fileread.$inject = [];

	exports.default = fileread;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var uploadService = function () {
	  function uploadService(firebaseService) {
	    _classCallCheck(this, uploadService);

	    this.storageRef = firebaseService.storageRef;
	  }

	  _createClass(uploadService, [{
	    key: 'uploadFile',
	    value: function uploadFile(file, name, type, fileLocation) {
	      var blob = dataURItoBlob(file);
	      var filetype = blob.type.split('/')[1];

	      var ref = this.storageRef.child(fileLocation).child(name + '_' + type + '.' + filetype);

	      return ref.put(blob).then(function (snap) {
	        return snap.downloadURL;
	      });

	      function dataURItoBlob(dataURI) {
	        var byteString = void 0;

	        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
	          byteString = atob(dataURI.split(',')[1]);
	        } else {
	          byteString = unescape(dataURI.split(',')[1]);
	        }

	        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	        var ia = new Uint8Array(byteString.length); //eslint-disable-line

	        for (var i = 0; i < byteString.length; i++) {
	          ia[i] = byteString.charCodeAt(i);
	        }

	        return new Blob([ia], { type: mimeString });
	      }
	    }
	  }]);

	  return uploadService;
	}();

	uploadService.$inject = ['firebaseService'];

	exports.default = uploadService;

/***/ },
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _courseCard = __webpack_require__(44);

	var _courseCard2 = _interopRequireDefault(_courseCard);

	var _myCourses = __webpack_require__(47);

	var _myCourses2 = _interopRequireDefault(_myCourses);

	var _account = __webpack_require__(51);

	var _account2 = _interopRequireDefault(_account);

	var _completed = __webpack_require__(57);

	var _completed2 = _interopRequireDefault(_completed);

	var _bookmarked = __webpack_require__(60);

	var _bookmarked2 = _interopRequireDefault(_bookmarked);

	var _titleblock = __webpack_require__(63);

	var _titleblock2 = _interopRequireDefault(_titleblock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComponentModule = _angular2.default.module('component.module', [_courseCard2.default, _myCourses2.default, _account2.default, _completed2.default, _bookmarked2.default, _titleblock2.default]).name;

	exports.default = ComponentModule;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _courseCard = __webpack_require__(45);

	var _courseCard2 = _interopRequireDefault(_courseCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CourseCardComponent = _angular2.default.module('CourseCard', []).component('courseCard', _courseCard2.default).name;

	exports.default = CourseCardComponent;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _courseCard = __webpack_require__(46);

	var _courseCard2 = _interopRequireDefault(_courseCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CourseCard = {
	  controller: _courseCard2.default,
	  bindings: {
	    courseData: '<',
	    bookmark: '&',
	    showBookmark: '<'
	  },
	  template: '\n      <div class="img-cont">\n        <a ng-href="/lessons/#!/{{$ctrl.courseData.slug}}/">\n          <img ng-src="{{$ctrl.courseData.img}}"/>\n        </a>\n      </div>\n      <div class="info">\n        <a ng-href="/lessons/#!/{{$ctrl.courseData.slug}}/">\n          <h3>{{$ctrl.courseData.title}}</h3>\n        </a>\n        <p>{{$ctrl.courseData.desc}}</p>\n\n        <ul>\n          <li><strong>Languages used: </strong>\n            <ul>\n              <li ng-repeat="lang in $ctrl.courseData.langs">{{lang}}</li>\n            </ul>\n          </li>\n          <li><strong>Skill: </strong>{{$ctrl.courseData.skill}}</li>\n          <li><strong>Lessons: </strong>{{$ctrl.courseData.lessons}}</li>\n        </ul>\n      </div>\n      <div class="info-end">\n        <a ng-href="/lessons/#!/{{$ctrl.courseData.slug}}/">Learn More</a>\n      </div>\n      <bookmark-button course="$ctrl.courseData.slug" ng-if="$ctrl.showBookmark"></bookmark-button>\n  '
	};

	exports.default = CourseCard;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CourseCardController = function CourseCardController() {
	  _classCallCheck(this, CourseCardController);
	};

	exports.default = CourseCardController;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _myCourses = __webpack_require__(48);

	var _myCourses2 = _interopRequireDefault(_myCourses);

	var _angularUiRouter = __webpack_require__(50);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var myCoursesComponent = _angular2.default.module('myCourses', [_angularUiRouter2.default]).component('myCourses', _myCourses2.default).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('myCourses', {
	    url: '/',
	    template: '<my-courses courses="$resolve.signin"></my-courses>',
	    // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
	    resolve: {
	      signin: ['userData', function (userData) {
	        return new Promise(function (resolve) {
	          _firebase2.default.auth().onAuthStateChanged(function (user) {
	            if (user && !user.isAnonymous) {
	              userData.getUserEnrolledCourses(user.uid).then(function (courses) {
	                resolve(courses);
	              });
	            } else {
	              resolve(false);
	            }
	          });
	        });
	      }]
	    }
	  });
	  $urlRouterProvider.otherwise('/');
	}]).name;

	exports.default = myCoursesComponent;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _myCourses = __webpack_require__(49);

	var _myCourses2 = _interopRequireDefault(_myCourses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var myCourses = {
	  controller: _myCourses2.default,
	  bindings: {
	    courses: '<'
	  },
	  template: '\n    <title-block\n      title="Education Goodness"\n      subtitle="All the courses you can start watching right now">\n    </title-block>\n    <div class="course-list" ng-if="$ctrl.courses">\n      <course-card\n        ng-repeat="course in $ctrl.courses"\n        course-data="course"\n        show-bookmark="true">\n      </course-card>\n      <div class="not-enrolled"\n        ng-if="!$ctrl.courses.length">\n          You are not currently enrolled in any courses\n          <br>\n          <a href="/courses/">Check Some Out Here</a>\n      </div>\n    </div>\n    <div ng-if="!$ctrl.courses">\n      <htc-sign-in\n        forgot-pass="$ctrl.forgotPass()"\n        ng-if="!$ctrl.forgotPassword">\n      </htc-sign-in>\n      <div class="forgot-container"\n        ng-if="$ctrl.forgotPassword">\n          <htc-forgot-pass\n            close-modal="$ctrl.closeForgot()"\n            text="Sign In">\n          </htc-forgot-pass>\n      </div>\n    </div>\n  '
	};

	exports.default = myCourses;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var myCourseController = function () {
	  function myCourseController(userData) {
	    _classCallCheck(this, myCourseController);

	    this.userData = userData;

	    this.forgotPassword = false;
	  }

	  _createClass(myCourseController, [{
	    key: 'bookmark',
	    value: function bookmark(course) {
	      this.userData.bookmarkCourse(course.course).then(function () {
	        return console.log('bookmarked');
	      });
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
	  }]);

	  return myCourseController;
	}();

	myCourseController.$inject = ['userData'];

	exports.default = myCourseController;

/***/ },
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _account = __webpack_require__(52);

	var _account2 = _interopRequireDefault(_account);

	var _signInComponent = __webpack_require__(54);

	var _signInComponent2 = _interopRequireDefault(_signInComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var accountComponent = _angular2.default.module('account', [_signInComponent2.default]).component('account', _account2.default).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('account', {
	    url: '/account',
	    template: '<account user="$resolve.signin"></account>',
	    resolve: {
	      signin: ['userData', function (userData) {
	        return new Promise(function (resolve) {
	          _firebase2.default.auth().onAuthStateChanged(function (user) {
	            if (user && !user.isAnonymous) {
	              userData.getUserMeta(user.uid).then(function (user) {
	                resolve(user);
	              });
	            } else {
	              resolve(false);
	            }
	          });
	        });
	      }]
	    }
	  });
	  $urlRouterProvider.otherwise('/');
	}]).name;

	exports.default = accountComponent;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _account = __webpack_require__(53);

	var _account2 = _interopRequireDefault(_account);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AccountComponent = {
	  controller: _account2.default,
	  bindings: {
	    user: '<'
	  },
	  template: '\n    <title-block\n      title="My Profile"\n      subtitle="">\n    </title-block>\n    <div ng-if="!$ctrl.user">\n      <htc-sign-in\n        forgot-pass="$ctrl.forgotPass()"\n        ng-if="!$ctrl.forgotPassword">\n      </htc-sign-in>\n      <div class="forgot-container"\n        ng-if="$ctrl.forgotPassword">\n          <htc-forgot-pass\n            close-modal="$ctrl.closeForgot()"\n            text="Sign In">\n          </htc-forgot-pass>\n      </div>\n    </div>\n    <div class="account-form-cont" ng-if="$ctrl.user">\n      <form>\n        <label>Name</label>\n        <input type="text" placeholder="Name" ng-model="$ctrl.user.name">\n        <label>Profile Image</label>\n        <div class="upload-cont">\n          <div class="img-cont">\n            <img ng-src="{{$ctrl.profileImage[0] || $ctrl.user.image || $ctrl.defaultImage}}">\n          </div>\n          <label class="upload">\n            <input type="file" accept="image" name="profile_image" fileread="$ctrl.profileImage"/>\n            <span>Upload</span>\n          </label>\n        </div>\n        <label>Email</label>\n        <input type="text" placeholder="Email" ng-model="$ctrl.user.email">\n        <span class="feedback-text" ng-class="{\'error\': $ctrl.error}">\n          {{$ctrl.feedbackText}}\n        </span>\n        <button class="submit" ng-click="$ctrl.save()">\n          <span ng-if="!$ctrl.loading">Save</span>\n          <htc-spinner ng-if="$ctrl.loading"></htc-spinner>\n        </button>\n      </form>\n    </div>\n  '
	};

	exports.default = AccountComponent;

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AccountController = function () {
	  function AccountController(userData, $timeout, uploadService) {
	    _classCallCheck(this, AccountController);

	    this.userData = userData;
	    this.$timeout = $timeout;
	    this.upload = uploadService;
	  }

	  _createClass(AccountController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
	      this.forgotPassword = false;
	      this.error = false;
	      this.loading = false;
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
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      this.loading = true;
	      if (this.profileImage) {
	        this.upload.uploadFile(this.profileImage[0], this.user.user_id, 'profile_image', 'Profile_Images').then(function (data) {
	          _this.user.image = data;
	          _this.postUserData(_this.user);
	        });
	      } else {
	        this.postUserData(this.user);
	      }
	    }
	  }, {
	    key: 'postUserData',
	    value: function postUserData(data) {
	      var _this2 = this;

	      this.userData.setUserMeta(data).then(function () {
	        _this2.$timeout(function () {
	          _this2.feedbackText = 'Successfully Updated Profile';
	          _this2.loading = false;
	        });
	      }).catch(function (err) {
	        _this2.$timeout(function () {
	          _this2.feedbackText = 'Something Went Wrong, try again later';
	          _this2.error = true;
	          _this2.loading = false;
	        });
	      });
	    }
	  }]);

	  return AccountController;
	}();

	AccountController.$inject = ['userData', '$timeout', 'uploadService'];

	exports.default = AccountController;

/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _completed = __webpack_require__(58);

	var _completed2 = _interopRequireDefault(_completed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var completedComponent = _angular2.default.module('completed', []).component('completed', _completed2.default).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('completed', {
	    url: '/completed',
	    template: '<completed courses="$resolve.signin"></completed>',
	    // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
	    resolve: {
	      signin: ['userData', function (userData) {
	        return new Promise(function (resolve) {
	          _firebase2.default.auth().onAuthStateChanged(function (user) {
	            if (user && !user.isAnonymous) {
	              userData.getUserCompleted(user.uid).then(function (courses) {
	                resolve(courses);
	              });
	            } else {
	              resolve(false);
	            }
	          });
	        });
	      }]
	    }
	  });
	  $urlRouterProvider.otherwise('/');
	}]).name;

	exports.default = completedComponent;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _completed = __webpack_require__(59);

	var _completed2 = _interopRequireDefault(_completed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Completed = {
	  controller: _completed2.default,
	  bindings: {
	    courses: '<'
	  },
	  template: '\n    <title-block\n      title="Completed"\n      subtitle="Courses You Have Already Finished">\n    </title-block>\n    <div class="course-list" ng-if="$ctrl.courses">\n      <course-card ng-repeat="course in $ctrl.courses"\n        course-data="course">\n      </course-card>\n      <div class="not-enrolled"\n        ng-if="!$ctrl.courses.length">\n          You haven\'t finished any courses yet\n          <br>\n          <a href="/courses/">Check Some Out Here</a>\n      </div>\n    </div>\n    <div ng-if="!$ctrl.courses">\n      <htc-sign-in\n        forgot-pass="$ctrl.forgotPass()"\n        ng-if="!$ctrl.forgotPassword">\n      </htc-sign-in>\n      <div class="forgot-container"\n        ng-if="$ctrl.forgotPassword">\n          <htc-forgot-pass\n            close-modal="$ctrl.closeForgot()"\n            text="Sign In">\n          </htc-forgot-pass>\n      </div>\n    </div>\n  '
	};

	exports.default = Completed;

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CompletedController = function () {
	  function CompletedController() {
	    _classCallCheck(this, CompletedController);

	    this.forgotPassword = false;
	  }

	  _createClass(CompletedController, [{
	    key: "forgotPass",
	    value: function forgotPass() {
	      this.forgotPassword = true;
	    }
	  }, {
	    key: "closeForgot",
	    value: function closeForgot() {
	      this.forgotPassword = false;
	    }
	  }]);

	  return CompletedController;
	}();

	exports.default = CompletedController;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _firebase = __webpack_require__(11);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _bookmarked = __webpack_require__(61);

	var _bookmarked2 = _interopRequireDefault(_bookmarked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bookmarkedComponent = _angular2.default.module('bookmarked', []).component('bookmarked', _bookmarked2.default).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state('bookmarked', {
	    url: '/bookmarked',
	    template: '<bookmarked courses="$resolve.signin"></bookmarked>',
	    // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
	    resolve: {
	      signin: ['userData', function (userData) {
	        return new Promise(function (resolve) {
	          _firebase2.default.auth().onAuthStateChanged(function (user) {
	            if (user && !user.isAnonymous) {
	              userData.getUserBookmarked(user.uid).then(function (courses) {
	                resolve(courses);
	              });
	            } else {
	              resolve(false);
	            }
	          });
	        });
	      }]
	    }
	  });
	  $urlRouterProvider.otherwise('/');
	}]).name;

	exports.default = bookmarkedComponent;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bookmarked = __webpack_require__(62);

	var _bookmarked2 = _interopRequireDefault(_bookmarked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Bookmarked = {
	  controller: _bookmarked2.default,
	  bindings: {
	    courses: '<'
	  },
	  template: '\n    <title-block\n      title="Bookmarked"\n      subtitle="The Watch List">\n    </title-block>\n    <div class="course-list" ng-if="$ctrl.courses">\n      <course-card\n        ng-repeat="course in $ctrl.courses"\n        course-data="course">\n      </course-card>\n      <div class="not-enrolled"\n        ng-if="!$ctrl.courses.length">\n          You don\'t have any courses bookmarked right now\n          <br>\n          <a href="/courses/">Check Some Out Here</a>\n      </div>\n    </div>\n    <div ng-if="!$ctrl.courses">\n      <htc-sign-in\n        forgot-pass="$ctrl.forgotPass()"\n        ng-if="!$ctrl.forgotPassword">\n      </htc-sign-in>\n      <div class="forgot-container"\n        ng-if="$ctrl.forgotPassword">\n          <htc-forgot-pass\n            close-modal="$ctrl.closeForgot()"\n            text="Sign In">\n          </htc-forgot-pass>\n      </div>\n    </div>\n  '
	};

	exports.default = Bookmarked;

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Bookmarked = function () {
	  function Bookmarked() {
	    _classCallCheck(this, Bookmarked);

	    this.forgotPassword = false;
	  }

	  _createClass(Bookmarked, [{
	    key: "forgotPass",
	    value: function forgotPass() {
	      this.forgotPassword = true;
	    }
	  }, {
	    key: "closeForgot",
	    value: function closeForgot() {
	      this.forgotPassword = false;
	    }
	  }]);

	  return Bookmarked;
	}();

	exports.default = Bookmarked;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _titleblock = __webpack_require__(64);

	var _titleblock2 = _interopRequireDefault(_titleblock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var titleBlockComponent = _angular2.default.module('titleBlock', []).component('titleBlock', _titleblock2.default).name;

	exports.default = titleBlockComponent;

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var titleBlock = {
	  bindings: {
	    title: '@',
	    subtitle: '@'
	  },
	  template: '\n    <div class="titles">\n      <h1>{{$ctrl.title}}</h1>\n      <h3>{{$ctrl.subtitle}}</h3>\n    </div>\n  '
	};

	exports.default = titleBlock;

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AppComponent = {
	  template: "\n    <div ui-view class=\"app-container\"></div>\n  "
	};

	exports.default = AppComponent;

/***/ }
]);