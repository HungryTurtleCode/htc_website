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
      this.lessonComplete();
    }
    // look into adding $analytics to track % complete
  }
}

export default VideoController;

