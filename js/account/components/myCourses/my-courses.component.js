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
      <course-card ng-repeat="course in $ctrl.courses"></course-card>
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in></htc-sign-in>
    </div>
  `
};

export default myCourses;
