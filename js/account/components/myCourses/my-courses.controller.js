class myCourseController{
  constructor(fb) {
    this.fb = fb;

    this.forgotPassword = false;
  }
  bookmark(course){
    this.fb.bookmarkCourse(course.course)
      .then(() => console.log('bookmarked'));
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
}

myCourseController.$inject = ['fb'];

export default myCourseController;
