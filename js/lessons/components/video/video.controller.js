class VideoController{
  constructor() {
    this.lessonVid = [];

    // this.poster = 'https://artfiles.alphacoders.com/365/36568.gif';
    // this.poster = 'http://www.freeiconspng.com/uploads/spinner-icon-0.gif';
    this.poster = 'http://zellox.com/wp-content/uploads/2016/05/animated-gif-wallpaper-3.gif';

    this.posterLoaded = false;
  }
  $onInit(){
    this.config = {
      theme: '/css/videogular.min.css'
    }

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
  checkTime(time, duration){
    let currentTime = Math.round(time);

    if(currentTime >= duration * 0.9){
      // mark video as complete
      this.lessonComplete();
    }
    // look into adding $analytics to track % complete
  }
}

export default VideoController;

