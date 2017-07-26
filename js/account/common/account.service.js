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
        // TODO check actual returned data Fri 21 Jul 2017 00:50:09 UTC
        // TODO does this service really need to cache the courses?
          if(courses){
            return this.courses = Object.keys(courses).map(key => {
              return courses[key];
            });
          }
          return [];
      });
  }
  getUserCompleted(){
    if(this.completed.length){return Promise.resolve(this.completed)}

    return this.fb.getUserCompleted()
      .then(courses => {
        // TODO take a look at the actual results returned Thu 20 Jul 2017 22:00:01 UTC
        if(courses){
          return this.completed = Object.keys(courses).map(key => {
            return courses[key];
          });
        }
        return [];
      });
  }
  getUserBookmarked(){
    if(this.bookmarked.length){return Promise.resolve(this.bookmarked)}

    return this.fb.getUserBookmarked()
      .then(courses => {
        // TODO check what is returned from api. Massagin may not be neccessary Fri 21 Jul 2017 00:35:20 UTC
        if(courses){
          return this.bookmarked = Object.keys(courses).map(key => {
            return courses[key];
          });
        }
        return [];
      });
  }
}

AccountService.$inject = ['firebaseService'];

export default AccountService;
