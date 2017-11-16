class LessonController{
  constructor(firebaseService, $rootScope, lessonService, $state) {
    this.fb = firebaseService;
    this.$rootScope = $rootScope;
    this.lessonService = lessonService;
    this.$state = $state;

    this.lessonList = [];
    this.mascotImg = window.mascotImg;
  }
  $onInit(){
    this.onStateChange();
  }
  onStateChange(){
    this.$rootScope.$on('$stateChangeStart', (e, to, params) => {
      if(params.course){
        this.lessonService.getLessonList(params.course)
          .then(list => {
            this.lessonList = list
          });

        this.lessonService.getCompleteLessons(params.course);

        this.lessonService.setMeta(params.course, params.lesson)
      }
    });
  }
  goToLesson(lesson){
    this.$state.go('lesson', {course: this.lessonService.course, lesson})
  }
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
}

LessonController.$inject = ['firebaseService', '$rootScope', 'lessonService', '$state'];

export default LessonController;
