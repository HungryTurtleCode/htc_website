class myCourseController{
  constructor(userData) {
    this.userData = userData;

    this.forgotPassword = false;
  }
  bookmark(course){
    this.userData.bookmarkCourse(course.course)
      .then(() => console.log('bookmarked'));
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
}

myCourseController.$inject = ['userData'];

export default myCourseController;
