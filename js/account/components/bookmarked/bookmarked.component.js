import controller from './bookmarked.controller';

const Bookmarked = {
  controller,
  bindings: {
    courses: '<'
  },
  template: `
    <title-block
      title="Bookmarked"
      subtitle="The Watch List">
    </title-block>
    <div class="course-list" ng-if="$ctrl.courses">
      <course-card
        ng-repeat="course in $ctrl.courses"
        show-bookmark="true"
        course-data="course">
      </course-card>
      <div class="not-enrolled"
        ng-if="!$ctrl.courses.length">
          You don't have any courses bookmarked right now
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

export default Bookmarked;
