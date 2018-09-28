class LessonListController{
  constructor(lessonService) {
    this.lessonService = lessonService;
  }
  $onInit(){
    this.activeTag = window.activeTag || null;
    this.lessonList = this.lessonList || window.lessonList || [];
    this.tags = this.tags || window.sidebartags || null;
    let currentIndex = 1;
    this.lessonList = this.lessonList.map(section => {
      section.lessons = section.lessons.map(lesson => {
        lesson.index = currentIndex;
        currentIndex++;
        return lesson;
      });
      return section;
    });

    if(this.lessonList){
      this.setActiveSection();
    }
  }
  $onChanges(change){
    if(change.lessonList && change.lessonList.currentValue){
      this.setActiveSection();
    } else if(change.lesson) {
      this.setActiveSection();
    }
  }
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
  setActiveSection(){
    if(!this.lessonList) return;
    if(!this.lesson) {
      if(this.lessonList.length) {
        this.lessonList[0].show = true;
      }
      return;
    };
    this.lessonList.forEach(section => {
      section.lessons.forEach(lesson => {
        if(lesson.id === this.lesson || lesson.slug === this.lesson){
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
