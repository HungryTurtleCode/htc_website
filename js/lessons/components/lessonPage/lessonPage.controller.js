class LessonPageController{
  constructor(userData, lessonService) {
    this.userData = userData;
    this.lessonService = lessonService;
  }
  $onInit(){
    this.videoUrl = '';
    this.forgotPassword = false;

    if(this.lessonData && this.lessonData.video){
      this.userData
        .getSignedVideoUrl(this.lessonData.video)
        .then(url => this.videoUrl = url);
    }
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  lessonComplete(){
    this.userData.completeLesson(
              this.lessonData.course,
              this.lessonData.lesson)
      .then(() => {
        this.lessonService.checkIfCourseComplete();
      });
  }
  nextLesson(){
    this.lessonService.goToNextLesson(this.lessonData.lesson);
  }
  checkIfLastLesson(){
    return this.lessonService.checkIfLastLesson(this.lessonData.lesson, this.lessonData.section);
  }
}

LessonPageController.$inject = ['userData', 'lessonService'];

export default LessonPageController;
