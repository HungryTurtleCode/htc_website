import angular from 'angular';

const TrackClick = (analytics) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    $element.bind('click', () => {
      analytics.trackEvent('Social', $attrs.analyticsClick);
    });
  }
});

TrackClick.$inject = ['analyticsService'];

export default TrackClick ;
