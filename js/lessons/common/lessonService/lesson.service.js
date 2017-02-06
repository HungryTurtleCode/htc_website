class LessonService{
  constructor(firebaseService) {
    this.fb = firebaseService;

    this.course = '';
    this.lesson = '';
  }
  setMeta(course, lesson){
    this.course = course;
    this.lesson = lesson;
  }
  getMeta(){
    return {
      course: this.course,
      lesson: this.lesson
    }
  }
  getLessonList(course){
    if(this.lessonList && course === this.course)
      return Promise.resolve(this.lessonList);

    let courseName = course || this.course;

    return this.fb.getLessonList(courseName)
      .then(list => {
        this.lessonList = this.deepObjToArray(list);
        return this.lessonList;
      });
  }
  deepObjToArray(obj){
    return Object.keys(obj).map(key => {
      if(typeof obj[key] === 'object'){
        Object.keys(obj[key]).forEach(newKey => {
          if(typeof obj[key][newKey] === 'object'){
            obj[key][newKey] = this.deepObjToArray(obj[key][newKey]);
          }
        })
      }
      return obj[key];
    });
  }
}

LessonService.$inject = ['firebaseService'];

export default LessonService;
