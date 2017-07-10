class LessonListController{
  constructor() {
    let a = 0;
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
    }else{
      this.showExplore = true;
    }
  }
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
  setActiveSection(){
    this.lessonList.forEach(section => {
      console.log(section);
      section.lessons.forEach(lesson => {
        if(lesson.slug === this.lesson){
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

export default LessonListController;
