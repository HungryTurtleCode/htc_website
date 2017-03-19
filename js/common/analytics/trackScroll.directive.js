import angular from 'angular';

const TrackScroll = (analytics, $location) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    let height = $element[0].offsetHeight;
    let offsetTop = $element[0].offsetTop;
    let contentBottom = height + offsetTop;
    let startTime = new Date().getTime();
    let scrolled = false;
    let timer, scrollStart;
    let contentFinished = false;
    let scrollThrottle = 0;
    let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    winWidth = w.innerWidth || e.clientWidth || g.clientWidth,
    winHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;

    window.addEventListener('scroll', () => {
      if(timer){
        clearTimeout(timer);
      }

      timer = setTimeout(trackLoc, 150);
    });

    function trackLoc(){
      height = $element[0].offsetHeight;
      offsetTop = $element[0].offsetTop;
      contentBottom = height + offsetTop;
      let scrollHeight = w.scrollTop || e.scrollTop || g.scrollTop;
      let currentBottom = winHeight + scrollHeight;
      let currentTime = new Date().getTime();

      if(scrollHeight > 200 && !scrolled){
        scrollStart = currentTime;
        let timeToScroll = Math.round((currentTime - startTime) / 1000);
        analytics.sendEventWithMetric('Reading', 'StartReading', getPageLocation(), 'metric1', timeToScroll);
        scrolled = true;
      }

      if(currentBottom >= contentBottom && !contentFinished){
        let timeToFinish = Math.round((currentTime - scrollStart) / 1000);

        if(timeToFinish < 60){
          analytics.setDimension('Dimension7', 'Scanner');
        }else{
          analytics.setDimension('Dimension7', 'Reader');
        }
        analytics.setMetric('Metric6', 1);
        analytics.sendEventWithMetric('Reading', 'ContentBottom', getPageLocation(), 'Metric2', timeToFinish);

        contentFinished = true;
      }

      [20, 40, 60, 80].forEach(perc => {
        if(currentBottom >= contentBottom / 100 * perc && perc > scrollThrottle){
          scrollThrottle = perc + 1;
          let scroll = perc + '%';
          analytics.trackEvent('Reading', scroll, getPageLocation());
          if(perc > 50){
            // TODO facebook page view Sun 19 Mar 2017 00:06:20 UTC
          }
        }
      });
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
