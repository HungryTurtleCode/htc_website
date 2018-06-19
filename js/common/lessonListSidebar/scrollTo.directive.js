import angular from 'angular';

const ScrollTo = () => ({
  restrict: 'A',
  link($scope, $el, $attrs, $ctrl) {
    if (JSON.parse($attrs.scrollTo)) {
      $el[0].scrollIntoView();
    }
  }
});

export default ScrollTo;
