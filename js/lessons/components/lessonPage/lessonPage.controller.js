class LessonPageController{
  constructor(fb, lessonService) {
    this.fb = fb;
    this.lessonService = lessonService;
  }
  $onInit(){
    this.forgotPassword = false;
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  lessonComplete(){
    this.fb.completeLesson(this.lessonData.id)
      .then(() => {
        this.lessonService.checkIfCourseComplete();
      });
  }
  nextLesson(){
    this.lessonService.goToNextLesson(this.lessonData.id);
  }
  checkIfLastLesson(){
    return this.lessonService.checkIfLastLesson(this.lessonData.id, this.lessonData.section_id);
  }
}

LessonPageController.$inject = ['firebaseService', 'lessonService'];

export default LessonPageController;
