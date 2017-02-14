class VideoController{
  constructor() {
    this.lessonVid = [];
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
  }
  onPlayerReady($API){
    this.API = $API;
  }
  checkTime(time, duration){
    let currentTime = Math.round(time);

    if(currentTime >= duration * 0.9){
      // mark video as complete
    }
    // look into adding $analytics to track % complete
  }
  nextVideo(){
    //logic to move onto next video
  }
  // TODO pull cursor logic from original ctrl into a custrom directive Tue 14 Feb 2017 17:38:00 GMT
}

export default VideoController;

