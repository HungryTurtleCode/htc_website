class LessonService{
  constructor(firebaseService, $state, fb) {
    this.fb = firebaseService;
    this.$state = $state;
    this.fb = fb;

    this.course = '';
    this.lesson = '';
    this.completeLessons = [];
    this.lessonList = [];
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
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
  getCompleteLessons(course) {
    this.fb.getCompleteLessons(
      course
    )
    .then(lessons => {
      lessons = lessons || [];
      this.completeLessons = lessons.reduce((arr, les) => {
        arr[les.lesson_id] = true;
        return arr;
      }, {});
    });
  }
  isLessonComplete(lesson){
    if(this.completeLessons){
      return this.completeLessons[lesson];
    }
    return false;
  }
  goToNextLesson(currentLesson){
    this.lessonList.forEach((section, secIndex) => {
      section.lessons.forEach((lesson, index) => {
        if(lesson.id === currentLesson){
          let nextLesson;
          let currentPos = lesson.position;
          if(currentPos === section.lessons.length - 1){
            this.lessonList.forEach(newSection => {
              if(newSection.position === section.position + 1){
                newSection.lessons.forEach(lesson => {
                  if(lesson.position === 0){
                    nextLesson = lesson.id;
                  }
                });
              }
            });
          }else{
            section.lessons.forEach(lesson => {
              if(lesson.position === currentPos + 1){
                nextLesson = lesson.id;
              }
            });
          }
          if(nextLesson){
            this.$state.go('lesson', {course: this.course, lesson: nextLesson});
          }
        }
      })
    });
  }
  checkIfLastLesson(lesson, section){
    let isLast = false;
    if(!this.lessonList.length) return;

    this.lessonList.forEach(item => {
      if(item.id === section){
        if(item.position === this.lessonList.length - 1){
          item.lessons.forEach(les => {
            if(les.id === lesson){
              isLast = true;
            }
          });
        }
      }
    });
    return isLast;
  }
  // TODO do this on the server Thu 16 Nov 2017 13:58:19 UTC
  checkIfCourseComplete(){
    if(!this.lessonList.length) return;
    if(!this.completeLessons) return;
    let numCompleted = Object.keys(this.completeLessons).length;

    let numLessons = 0;
    this.lessonList.forEach(section => {
      console.log(section);
      numLessons += section.lessons.length;
    });

    if(numCompleted === numLessons){
      this.fb.markCourseComplete(this.course);
    }
  }
  getLessonList(course){
    if(this.lessonList.length && course === this.course)
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

LessonService.$inject = ['firebaseService', '$state', 'firebaseService'];

export default LessonService;
