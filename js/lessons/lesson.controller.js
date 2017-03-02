class LessonController{
  constructor(firebaseService, $rootScope, lessonService, $state, userData) {
    this.fb = firebaseService;
    this.$rootScope = $rootScope;
    this.lessonService = lessonService;
    this.$state = $state;
    this.userData = userData;

    this.lessonList = [];
  }
  $onInit(){
    this.onStateChange();
  }
  setActiveSection(){
    this.lessonList.forEach(section => {
      section.lessons.forEach(lesson => {
        if(this.slugify(lesson.name) === this.lessonService.lesson){
          section.show = true;
          return;
        }
      });
    });
  }
  onStateChange(){
    this.$rootScope.$on('$stateChangeStart', (e, to, params) => {
      if(params.course){
        this.lessonService.getLessonList(params.course)
          .then(list => {
            this.lessonList = list
            this.setActiveSection();
          });

        this.userData.getCompleteLessons(
                  params.course,
                  lessons => {
                    this.completeLessons = lessons;
                    this.lessonService.completeLessons = lessons;
                  }
                );

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

LessonController.$inject = ['firebaseService', '$rootScope', 'lessonService', '$state', 'userData'];

export default LessonController;
