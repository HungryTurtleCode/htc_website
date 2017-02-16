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
    <div ng-if="$ctrl.courses">
      signed in
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in></htc-sign-in>
    </div>
  `
};

export default Completed;
