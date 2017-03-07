import controller from './completed.controller';

const Completed = {
  controller,
  bindings: {
    courses: '<'
  },
  template: `
    <title-block
      title="Completed"
      subtitle="Courses You Have Already Finished">
    </title-block>
    <div class="course-list" ng-if="$ctrl.courses">
      <course-card ng-repeat="course in $ctrl.courses"
        course-data="course">
      </course-card>
      <div class="not-enrolled"
        ng-if="!$ctrl.courses.length">
          You haven't finished any courses yet
          <br>
          <a href="/courses/">Check Some Out Here</a>
      </div>
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in></htc-sign-in>
    </div>
  `
};

export default Completed;
