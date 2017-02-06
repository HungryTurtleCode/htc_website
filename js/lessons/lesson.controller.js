class LessonController{
  constructor(firebaseService, $rootScope, lessonService) {
    this.fb = firebaseService;
    this.$rootScope = $rootScope;
    this.lessonService = lessonService;

    this.lessonList = [];
  }
  $onInit(){
    this.onStateChange();
  }
  onStateChange(){
    this.$rootScope.$on('$stateChangeStart', (e, to, params) => {
      this.lessonService.getLessonList(params.course)
        .then(list => {
          this.lessonList = list
        });

      this.lessonService.setMeta(params.course, params.lesson)
    });
  }
}

LessonController.$inject = ['firebaseService', '$rootScope', 'lessonService'];

export default LessonController;
