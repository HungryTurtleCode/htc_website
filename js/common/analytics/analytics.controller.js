class AnalyticsController{
  constructor(analyticsService, userData, $location) {
    this.analytics = analyticsService;
    this.userData = userData;
    this.$location = $location;
  }
  trackCategory(cat){
    this.analytics.setDimension('Dimension2', cat);
    this.userData.trackEvent('CategoryView', {category: cat});
  }
  trackDurationEvents(){
    const trackDuration = () => {
      [15, 30, 60, 120].forEach(time => {
        let text = time + ' Seconds';
        let delay = time * 1000;

        setTimeout(() => {
          this.analytics.trackEvent('Time', text);
          this.userData.trackEvent('Time', {page: this.getPageLocation(), time: text});
        }, delay);
      });
      window.removeEventListener('scroll', trackDuration);
    }

    window.addEventListener('scroll', trackDuration);
  }
  getPageLocation(){
    let arr = this.getLocationArray();
    let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

    return newArr.join('/');
  }
  getLocationArray(){
    let url = this.$location.absUrl();
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

AnalyticsController.$inject = ['analyticsService', 'userData', '$location'];

export default AnalyticsController;
