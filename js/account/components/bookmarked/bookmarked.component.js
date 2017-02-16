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
    <div ng-if="$ctrl.courses">
      signed in
    </div>
    <div ng-if="!$ctrl.courses">
      <htc-sign-in></htc-sign-in>
    </div>
  `
};

export default Bookmarked;
