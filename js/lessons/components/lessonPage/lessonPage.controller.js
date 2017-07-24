class LessonPageController{
  constructor(userData, lessonService) {
    this.userData = userData;
    this.lessonService = lessonService;
  }
  $onInit(){
    this.videoUrl = '';
    this.forgotPassword = false;

    // TODO this.videoUrl isn't set Mon 24 Jul 2017 16:16:14 UTC
    // the video url now exists on lesson-data object
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  lessonComplete(){
    this.userData.completeLesson(this.lessonData.lesson)
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
