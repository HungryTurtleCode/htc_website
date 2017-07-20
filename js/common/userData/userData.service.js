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
    this.fb.markNotificationRead(this.user.user_id, id);
  }
  trackSearch(query, page){
    this.analytics.trackUserEvent('Search', {event: query, location: page});
    if(this.user && this.user.email){
      this.dataService.tagSearch(this.user.email, query);
    }
  }
  isEnrolled(course, user){
    user = user || this.user.user_id;
    return this.fb.isEnrolled(user, course);
  }
  bookmarkCourse(course){
    return this.fb.bookmarkCourse(this.user.user_id, course);
  }
  removeBookmark(course){
    return this.fb.removeBookmark(this.user.user_id, course);
  }
  isInBookmarks(course){
    // TODO update args to correct footprint once api has been normalised Thu 20 Jul 2017 21:06:46 UTC
    return this.fb.isInBookmarks('FIXME', course)
      .then(res => {
        console.log(res);
      });
  }
  markCourseComplete(course){
    this.fb.markCourseComplete(
                this.user.user_id,
                course);
  }
  completeLesson(course, lesson){
    return this.fb.completeLesson(
          this.user.user_id,
          course,
          lesson);
  }
  getCompleteLessons(course, callback){
    // TODO update args to correct footprint once api has been normalised Thu 20 Jul 2017 21:06:46 UTC
    return this.fb.getCompleteLessons('FIXME', course, callback)
      .then(res => {
        console.log(res);
      });
  }
  getUserEnrolledCourses(id){
    if(this.courses.length){return Promise.resolve(this.courses)}

    return this.fb.getUserEnrolledCourses(id)
      .then(courses => {
          if(courses){
            return this.courses = Object.keys(courses).map(key => {
              return courses[key];
            });
          }
          return [];
      });
  }
  getUserBookmarked(id){
    return this.fb.getUserBookmarked(id)
      .then(courses => {
        if(courses){
          return this.bookmarked = Object.keys(courses).map(key => {
            return courses[key];
          });
        }
        return [];
      });
  }
  removeFromCart(item) {
    return this.fb.removeFromCart(this.user.user_id, item);
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

      return this.fb.addToCart(this.user.user_id, courseData)
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
    // TODO update args to correct footprint once api has been normalised Thu 20 Jul 2017 21:06:46 UTC
    return this.fb.getNotifications('FIXME', callback)
      .then(res => {
        console.log(res);
      });
  }
  isSignedIn(){
    return this.auth.loggedIn;
  }

  getUserCart(){
    // TODO update args to correct footprint once api has been normalised Thu 20 Jul 2017 21:06:46 UTC
    return this.fb.getUserCart('FIXME')
      .then(res => {
        console.log(res);
      });
  }
  getUserCompleted(id){
    if(this.completed.length){return Promise.resolve(this.completed)}

    return this.fb.getUserCompleted(id)
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
  getUserMeta(id){
    if(this.user.name){return Promise.resolve(this.user)}

    // TODO update args to correct footprint once api has been normalised Thu 20 Jul 2017 21:06:46 UTC
    return this.fb.getUserMeta('FIXME')
      .then(meta => {
        console.log(meta);
        this.user = meta;
      });
      // TODO fetch cart Thu 20 Jul 2017 21:21:01 UTC
  }
  setComment(loc, text, isReply, lesson){
    if(isReply){
      loc = loc + isReply + '/replies/';
    }
    let locArr = loc.split('/');

    let replyChain = locArr.reduce((arr, val) => {
      if(val.charAt(0) === '-'){
        arr.push(val);
      }
      return arr;
    }, []);

    return this.fb.setComment(
      loc,
      text,
      isReply,
      this.user.name,
      this.user.user_id,
      this.user.image
    )
    .then(key => {
      if(replyChain.length){
        this.setCommentNotifications(locArr.splice(0,2), key, replyChain, lesson);
      }
    })
    .catch(err => err);
  }

  // TODO do on server Thu 20 Jul 2017 22:00:35 UTC
  setCommentNotifications(loc, replyKey, replyChain, lesson){
    loc.push('');
    loc = loc.join('/');

    this.dataService.setCommentNotifications(loc, replyKey, replyChain, lesson);
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

userData.$inject = ['firebaseService', 'auth', 'dataService','$timeout', 'analyticsService'];

export default userData;
