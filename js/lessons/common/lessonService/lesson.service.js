class LessonService{
  constructor(firebaseService, $state, userData) {
    this.fb = firebaseService;
    this.$state = $state;
    this.userData = userData;

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
  slugify(name){
    return name.toLowerCase().split(' ').join('-');
  }
  isLessonComplete(lesson){
    if(this.completeLessons){
      return this.completeLessons[this.slugify(lesson)];
    }
    return false;
  }
  goToNextLesson(currentLesson){
    this.lessonList.forEach((section, secIndex) => {
      section.lessons.forEach((lesson, index) => {
        if(this.slugify(lesson.title) === currentLesson){
          let nextLesson;
          let currentPos = lesson.position;
          if(currentPos === section.lessons.length - 1){
            this.lessonList.forEach(newSection => {
              if(newSection.position === section.position + 1){
                newSection.lessons.forEach(lesson => {
                  if(lesson.position === 0){
                    nextLesson = this.slugify(lesson.title);
                  }
                });
              }
            });
          }else{
            section.lessons.forEach(lesson => {
              if(lesson.position === currentPos + 1){
                nextLesson = this.slugify(lesson.title);
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

    this.lessonList.forEach(item => {
      if(item.name === section){
        if(item.position === this.lessonList.length - 1){
          item.lessons.forEach(les => {
            if(les.slug === lesson){
              isLast = true;
            }
          });
        }
      }
    });
    return isLast;
  }
  checkIfCourseComplete(){
    let numCompleted = Object.keys(this.completeLessons).length;

    let numLessons = 0;
    this.lessonList.forEach(section => {
      numLessons += section.lessons.length;
    });

    if(numCompleted === numLessons){
      this.userData.markCourseComplete(this.course);
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

LessonService.$inject = ['firebaseService', '$state', 'userData'];

export default LessonService;
