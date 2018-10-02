class AccountService{
  constructor(fb) {
    this.fb = fb;

    this.courses = [];
    this.completed = [];
    this.bookmarked = [];
  }
  getUserEnrolledCourses(){
    if(this.courses.length){return Promise.resolve(this.courses)}

    return this.fb.getUserEnrolledCourses()
      .then(courses => {
        this.courses = courses || [];
        return this.courses;
      });
  }
  getUserCompleted(){
    if(this.completed.length){return Promise.resolve(this.completed)}

    return this.fb.getUserCompleted()
      .then(courses => {
        this.completed = courses || [];
        return this.completed;
      });
  }
  getUserBookmarked(){
    return this.fb.getUserBookmarked()
      .then(courses => {
        this.bookmarked = courses || [];
        return this.bookmarked;
      });
  }
}

AccountService.$inject = ['firebaseService'];

export default AccountService;
