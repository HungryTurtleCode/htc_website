import controller from './my-courses.controller';

const myCourses = {
  controller,
  bindings: {
    courses: '<'
  },
  template: `
    <title-block
      title="Education Goodness"
      subtitle="All the courses you can start watching right now">
    </title-block>
    <div class="course-list" ng-if="$ctrl.courses">
      <course-card
        ng-repeat="course in $ctrl.courses"
        course-data="course"
        show-bookmark="true">
      </course-card>
      <div class="not-enrolled"
        ng-if="!$ctrl.courses.length">
          You are not currently enrolled in any courses
          <br>
          <a href="/courses/">Check Some Out Here</a>
      </div>
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in
        forgot-pass="$ctrl.forgotPass()"
        ng-if="!$ctrl.forgotPassword">
      </htc-sign-in>
      <div class="forgot-container"
        ng-if="$ctrl.forgotPassword">
          <htc-forgot-pass
            close-modal="$ctrl.closeForgot()"
            text="Sign In">
          </htc-forgot-pass>
      </div>
    </div>
  `
};

export default myCourses;
