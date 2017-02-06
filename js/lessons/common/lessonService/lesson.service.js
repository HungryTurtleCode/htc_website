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
  getLessonList(){
    return this.fb.getLessonList(this.course)
      .then(list => {
        return this.deepObjToArray(list);
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
