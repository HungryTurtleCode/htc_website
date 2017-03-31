class LessonListController{
  constructor() {
    let a = 0;
  }
  $onInit(){
    this.activeTag = window.activeTag || null;
    this.lessonList = this.lessonList || window.lessonList || null;
    this.tags = this.tags || window.sidebartags || null;
  }
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
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
