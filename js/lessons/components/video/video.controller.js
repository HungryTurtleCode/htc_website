class VideoController{
  constructor() {
    this.lessonVid = [];
  }
  $onInit(){
    this.config = {
      theme: '/css/videogular.min.css'
    }
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
}

export default VideoController;
