import angular from 'angular';

const TrackClick = (analytics, $location) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    $element.bind('click', () => {
      analytics.trackEvent('Click', $attrs.analyticsClick);
      analytics.trackUserEvent('Click', {value: $attrs.analyticsClick, location: getPageLocation()});
    });

    function getPageLocation(){
      let arr = getLocationArray();
      let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

      return newArr.join('/');
    }
    function getLocationArray(){
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
      return arr;
    }
  }
});

TrackClick.$inject = ['analyticsService', '$location'];

export default TrackClick ;
