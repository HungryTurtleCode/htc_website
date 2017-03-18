import angular from 'angular';

import controller from './analytics.controller';

const Analytics = (analyticsService, $location) => ({
  restrict: 'A',
  controller,
  link($scope, $el, $attrs, $ctrl) {
    $ctrl.trackDurationEvents();
    $ctrl.trackCategory(getPageLocations());

    function getPageLocations(){
      let url = $location.absUrl();
      let arr = url.split('/');

      for(let i = arr.length-1; i >= 0; i--){
        let matches = arr[i].match(/\?([^&]*)/);
        if(matches){
          arr[i] = arr[i].slice(0, matches.index);
        }
        if(arr[i] === '' || arr[i] === '#!'){
          arr.splice(i, 1);
        }
      }

      let newArr = [arr[arr.length - 2]];

      return newArr.join('/');
    }
  }
});

Analytics.$inject = ['analyticsService', '$location'];

export default Analytics;
