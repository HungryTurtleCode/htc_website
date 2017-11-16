class LessonListController{
  constructor(lessonService) {
    this.lessonService = lessonService;
  }
  $onInit(){
    this.activeTag = window.activeTag || null;
    this.lessonList = this.lessonList || window.lessonList || null;
    this.tags = this.tags || window.sidebartags || null;

    if(this.lessonList){
      this.setActiveSection();
    }
    this.showExplore = !this.lessonList;
  }
  $onChanges(change){
    if(change.lessonList && change.lessonList.currentValue){
      this.setActiveSection();
      this.showExplore = false;
    } else if(change.lesson) {
      this.setActiveSection();
    } else{
      this.showExplore = true;
    }
  }
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
  setActiveSection(){
    if(!this.lesson) return;
    this.lessonList.forEach(section => {
      section.lessons.forEach(lesson => {
        if(lesson.id === this.lesson){
          section.show = true;
          return;
        }
      });
    });
  }
  getLessonUrl(lesson){
    if(this.premium){
      return `/lessons/#!/${this.course}/${lesson}`;
    }else{
      return `/${this.course}/${lesson}`;
    }
  }
}
LessonListController.$inject = ['lessonService'];

export default LessonListController;
