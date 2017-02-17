class userData{
  constructor(firebaseService, auth, dataService) {
    this.fb = firebaseService;
    this.auth = auth;
    this.dataService = dataService;

    this.user = {};
    this.courses = [];
    this.cart = [];
    this.completed = [];
    this.bookmarked = [];

    this.getUserMeta();
  }
  getUserEnrolledCourses(id){
    if(this.courses.length){return Promise.resolve(this.courses)}

    return this.fb.getUserEnrolledCourses(id)
      .then(courses => {
          return this.courses = Object.keys(courses).map(key => {
            return courses[key];
          });
      });
  }
  getUserBookmarked(id){
    if(this.bookmarked.length){return Promise.resolve(this.bookmarked)}

    return this.fb.getUserBookmarked(id)
      .then(courses => {
        return this.bookmarked = Object.keys(courses).map(key => {
          return courses[key];
        });
      });
  }
  updateCart(items){
    this.cart = items;

    return this.fb.updateCart(this.user.user_id, items);
  }
  addToCart(course){
    return this.fb.getCourseMeta(course)
      .then(courseData => {
        if(courseData){
          for(let i = 0; i < this.cart.length; i++){
            if(this.cart[i].title === courseData.title){
              return false;
            }
          }

          return this.fb.addToCart(this.user.user_id, courseData)
            .then(() => true);
        }
        return false;
      });
  }
  getUserCart(){
    if(this.user.user_id){
      return this.fb.getUserCart(this.user.user_id)
        .then(cart => {
          if(cart){
            this.cart = Object.keys(cart).map(key => {
              return cart[key];
            });
            return this.cart;
          }
        });
    }else{
      return this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            return this.fb.getUserCart(snap.uid)
              .then(cart => {
                if(cart){
                  this.cart = Object.keys(cart).map(key => {
                    return cart[key];
                  });
                  return this.cart;
                }
              });
          }
        });
    }
  }
  getUserCompleted(id){
    if(this.completed.length){return Promise.resolve(this.completed)}

    return this.fb.getUserCompleted(id)
      .then(courses => {
        return this.completed = Object.keys(courses).map(key => {
          return courses[key];
        });
      });
  }
  getSignedVideoUrl(video){
    return this.dataService.getSignedLessonVideo(this.user.user_id, video);
  }
  getUserMeta(id){
    if(this.user.name){return Promise.resolve(this.user)}

    if(id){
      return this.fb.getUserMeta(id)
        .then(user => {
          return this.user = user;
        });
    }else{
      this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            this.fb.getUserMeta(snap.uid)
              .then(user => {
                this.user = user;
                this.getUserCart();
              });
          }
        });
    }
  }
  setComment(loc, text, isReply){
    if(isReply){
      loc = loc + isReply + '/replies/';
    }

    return this.fb.setComment(
      loc,
      text,
      isReply,
      this.user.name,
      this.user.user_id,
      this.user.image
    )
    .then(() => true)
    .catch(err => err);
  }
  setUserMeta(data){
    if(!this.user.user_id){return Promise.reject('unknown user')}

    return this.fb.setUserMeta(this.user.user_id, data)
      .then(() => {
        this.user = data;
        return true;
      });
  }
}

userData.$inject = ['firebaseService', 'auth', 'dataService'];

export default userData;
