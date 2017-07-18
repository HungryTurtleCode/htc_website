class VideoController{
  constructor(analytics, $location) {
    this.analytics = analytics;
    this.$location = $location;
    this.lessonVid = [];

    // this.poster = 'https://artfiles.alphacoders.com/365/36568.gif';
    // this.poster = 'http://www.freeiconspng.com/uploads/spinner-icon-0.gif';
    this.poster = 'http://zellox.com/wp-content/uploads/2016/05/animated-gif-wallpaper-3.gif';

    this.posterLoaded = false;
    this.videoPlayed = false;
  }
  $onInit(){
    this.config = {
      theme: window.videogularCss
    }

    this.analyticsCheckpoints = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    this.analyticsCount = 0;

    this.autohide = true;
    this.autohideTime = 4000;
  }
  $onChanges(change){
    if(this.videoSrc){
      this.lessonVid = [
        {
          src: this.videoSrc,
          type: 'video/mp4'
        }
      ];
    }
    if(change.poster && change.poster.currentValue){
      this.poster = change.poster.currentValue;
      this.posterLoaded = true;
    }else if(!this.posterLoaded){
      this.poster = 'http://zellox.com/wp-content/uploads/2016/05/animated-gif-wallpaper-3.gif';
    }
  }
  onPlayerReady($API){
    this.API = $API;
  }
  checkPlayPause(state){
    if(state === 'play' && this.videoPlayed === false){
      this.videoPlayed = true;
      this.analytics.trackEvent('PremiumVideo', 'Start')
      this.analytics.trackUserEvent('StartPremiumVideo', {location: this.getPageLocations()});
    }
  }
  videoEnd(){
    this.analytics.trackEvent('PremiumVideo', 'End');
    this.analytics.trackUserEvent('EndPremiumVideo', {location: this.getPageLocations()});
    this.nextVideo();
  }
  checkTime(time, duration){
    let currentTime = Math.round(time);

    if(currentTime >= duration * 0.9){
      // mark video as complete
      this.lessonComplete();
    }
    for(let i = 0; i < this.analyticsCheckpoints.length; i++){
      let perc = this.analyticsCheckpoints[i] / 100;
      if(currentTime >= duration * perc && this.analyticsCount < this.analyticsCheckpoints[i]){
        this.analyticsCount = this.analyticsCheckpoints[i];
        let text = perc * 100 + '%';
        this.analytics.trackEvent('PremiumVideo', text);
        this.analytics.trackUserEvent('PremiumVideoProgress', {location: this.getPageLocations(), value: text});
      }
    }
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i - 1] === 'lessons' && arr[i] === '#!'){
        this.isLesson = true;
      }
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

    return newArr.join('/');
  }
}

VideoController.$inject = ['analyticsService', '$location'];

export default VideoController;

