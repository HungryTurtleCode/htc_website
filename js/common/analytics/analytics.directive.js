import angular from 'angular';

import controller from './analytics.controller';

const Analytics = (analyticsService) => ({
  restrict: 'A',
  controller,
  link($scope, $el, $attrs, $ctrl) {
    $ctrl.trackDurationEvents();
  }
});

Analytics.$inject = ['analyticsService'];

export default Analytics;
