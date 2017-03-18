import angular from 'angular';

const TrackScroll = (analytics, $location) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    let height = $element[0].offsetHeight;
    let offsetTop = $element[0].offsetTop;
    let contentBottom = height + offsetTop;
    let startTime = new Date().getTime();
    let scrolled = false;
    let timer;

    window.addEventListener('scroll', () => {
      if(timer){
        clearTimeout(timer);
      }

      timer = setTimeout(trackLoc, 150);
    });

    function trackLoc(){
      if(!scrolled){
        let currentTime = new Date().getTime();
        let timeToScroll = Math.round((currentTime - startTime) / 1000);
        analytics.sendEventWithMetric('Reading', 'StartReading', getPageLocation(), 'metric1', timeToScroll);
        scrolled = true;
      }
    }
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

TrackScroll .$inject = ['analyticsService', '$location'];

export default TrackScroll ;
