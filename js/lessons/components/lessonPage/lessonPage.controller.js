class LessonPageController{
  constructor(fb, lessonService) {
    this.fb = fb;
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
    this.fb.completeLesson(this.lessonData.lesson)
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

LessonPageController.$inject = ['firebaseService', 'lessonService'];

export default LessonPageController;
