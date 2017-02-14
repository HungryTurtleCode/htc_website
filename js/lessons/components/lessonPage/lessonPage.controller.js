class LessonPageController{
  constructor(userData) {
    this.userData = userData;

    this.videoUrl = '';
  }
  $onInit(){
    if(this.lessonData && this.lessonData.video){
      this.userData
        .getSignedVideoUrl(this.lessonData.video)
        .then(url => this.videoUrl = url);
    }
  }
}

LessonPageController.$inject = ['userData'];

export default LessonPageController;
