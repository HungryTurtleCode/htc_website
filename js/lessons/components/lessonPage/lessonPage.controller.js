class LessonPageController{
  constructor(userData, lessonService) {
    this.userData = userData;
    this.lessonService = lessonService;

    this.videoUrl = '';
  }
  $onInit(){
    if(this.lessonData && this.lessonData.video){
      this.userData
        .getSignedVideoUrl(this.lessonData.video)
        .then(url => this.videoUrl = url);
    }
  }
  lessonComplete(){
    this.userData.completeLesson(
              this.lessonData.course,
              this.lessonData.lesson);
  }
  nextVideo(){
    this.lessonService.goToNextLesson(this.lessonData.lesson);
  }
}

LessonPageController.$inject = ['userData', 'lessonService'];

export default LessonPageController;
