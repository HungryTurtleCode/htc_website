import controller from './stateChange.controller';

const stateChange = {
  controller,
  template: `
    <div class="state-loading" ng-if="$ctrl.$rootScope.loading">
      <htc-spinner></htc-spinner>
    </div>
  `
};

export default stateChange;
