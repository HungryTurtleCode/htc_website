class userData{
  constructor(firebaseService, auth, dataService, $timeout, analytics) {
    this.fb = firebaseService;
    this.auth = auth;
    this.dataService = dataService;
    this.$timeout = $timeout;
    this.analytics = analytics;

    this.user = {};
    this.courses = [];
    this.cart = [];
    this.completed = [];
    this.bookmarked = [];

    this.getUserMeta();
  }
  markNotificationRead(id){
    this.fb.markNotificationRead(id);
  }
  trackSearch(query, page){
    this.analytics.trackUserEvent('Search', {event: query, location: page});
    if(this.user && this.user.email){
      this.dataService.tagSearch(this.user.email, query);
    }
  }
  isEnrolled(course){
    return this.fb.isEnrolled(course);
  }
  bookmarkCourse(course){
    return this.fb.bookmarkCourse(course);
  }
  removeBookmark(course){
    return this.fb.removeBookmark(course);
  }
  isInBookmarks(course){
    return this.fb.isInBookmarks(course)
      .then(res => {
        console.log(res);
      });
  }
  markCourseComplete(course){
    this.fb.markCourseComplete(course);
  }
  completeLesson(lesson){
    return this.fb.completeLesson(lesson);
  }
  getCompleteLessons(course, callback){
    // TODO why is a callback used here and not a promise? Fri 21 Jul 2017 00:47:57 UTC
    return this.fb.getCompleteLessons(course, callback)
      .then(res => {
        console.log(res);
      });
  }
  getUserEnrolledCourses(){
    if(this.courses.length){return Promise.resolve(this.courses)}

    return this.fb.getUserEnrolledCourses()
      .then(courses => {
        // TODO check actual returned data Fri 21 Jul 2017 00:50:09 UTC
          if(courses){
            return this.courses = Object.keys(courses).map(key => {
              return courses[key];
            });
          }
          return [];
      });
  }
  getUserBookmarked(){
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
  removeFromCart(item) {
    return this.fb.removeFromCart(item);
  }
  // TODO refactor this so that the this.cart gets updated on the remove. Does this service even need to hold the cart?
  updateCart(items){
    this.cart = items;

    // return this.fb.updateCart(this.user.user_id, items);
  }
  getCourseMeta(course){
    return this.fb.getCourseMeta(course);
  }
  addToCart(courseData){
    if(courseData){
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].title === courseData.title){
          return Promise.reject(false);
        }
      }

      return this.fb.addToCart(courseData)
        .then(() => true);
    }
    return Promise.reject(false);
  }
  paypalBuy(data){
    return this.dataService.paypalBuy(getCourseArray(data), this.user);

    function getCourseArray(courses){
      return courses.map(item => {
        return item.course;
      });
    }
  }
  stripeBuy(data, token){
    return this.dataService.stripeBuy(getCourseArray(data), this.user, token);

    function getCourseArray(courses){
      return courses.map(item => {
        return item.course;
      });
    }
  }
  getNotifications(callback){
    return this.fb.getNotifications(callback)
      .then(res => {
        console.log(res);
      });
  }
  // TODO refactor all calls to this function to use auth.isLoggedIn instead Fri 21 Jul 2017 00:29:02 UTC
  isSignedIn(){
    return this.auth.loggedIn;
  }
  getUserCart(){
    return this.fb.getUserCart()
      .then(res => {
        console.log(res);
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
  getSignedVideoUrl(video){
    return this.dataService.getSignedLessonVideo(this.user.user_id, video);
  }
  isInCart(item){
    if(this.cart.length){
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].course === item){
          return true
        }
      }
    }
    return false;
  }
  getUserMeta(){
    if(this.user.name){return Promise.resolve(this.user)}

    return this.fb.getUserMeta()
      .then(meta => {
        console.log(meta);
        this.user = meta;
      });
      // TODO fetch cart Thu 20 Jul 2017 21:21:01 UTC
  }
  setComment(loc, text, isReply){
    if(isReply){
      loc = loc + isReply + '/replies/';
    }
    let locArr = loc.split('/');

    // TODO sort this crazy nesting thing with the comments Fri 21 Jul 2017 00:43:29 UTC
    let replyChain = locArr.reduce((arr, val) => {
      if(val.charAt(0) === '-'){
        arr.push(val);
      }
      return arr;
    }, []);

    return this.fb.setComment(
      loc,
      text,
      isReply
    )
    .then(key => {
      console.log(key);
      return key;
    })
    .catch(err => err);
  }

  setUserMeta(data){
    return this.fb.setUserMeta(data)
      .then(() => {
        // TODO make sure api does actually return a user object Fri 21 Jul 2017 00:33:21 UTC
        this.user = data;
        return true;
      });
  }
}

userData.$inject = ['firebaseService', 'auth', 'dataService','$timeout', 'analyticsService'];

export default userData;
