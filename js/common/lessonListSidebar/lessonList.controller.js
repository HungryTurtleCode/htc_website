class LessonListController{
  constructor() {
    let a = 0;
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
