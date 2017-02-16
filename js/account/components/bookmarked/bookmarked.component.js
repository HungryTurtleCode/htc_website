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
      <course-card ng-repeat="course in $ctrl.courses"></course-card>
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in></htc-sign-in>
    </div>
  `
};

export default Bookmarked;
