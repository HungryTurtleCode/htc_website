import angular from 'angular';

const scrollHere = ($timeout, $location) => ({
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

    $scope.$watch('scrollHere', newVal => {
      if(newVal){
        $location.search('comment', null);
        $timeout(() => {
          document.body.scrollTop = $element[0].getBoundingClientRect().top - 100;
        });
      }
    });

  }
});

scrollHere.$inject = ['$timeout', '$location'];

export default scrollHere;
