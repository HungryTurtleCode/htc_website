import angular from 'angular';

const scrollHere = ($timeout) => ({
  restrict: 'A',
  scope: {
    scrollHere: '<'
  },
  link($scope, $element, $attrs) {
    var w  = window,
    d  = w.document,
    de = d.documentElement,
    db = d.body || d.getElementsByTagName('body')[0],
    x  = w.innerWidth || de.clientWidth || db.clientWidth,
    y  = w.innerHeight|| de.clientHeight|| db.clientHeight;

    if($scope.scrollHere){
      $timeout(() => {
        document.body.scrollTop = $element[0].getBoundingClientRect().top;
      });
    }
  }
});

scrollHere.$inject = ['$timeout'];

export default scrollHere;
