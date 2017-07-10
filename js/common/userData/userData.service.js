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
    this.eventQueue = [];

    window.trackUserEvent = this.trackEvent.bind(this);

    this.auth.subscribeAuthChange(this.cacheUser.bind(this));
    this.auth.subscribeAuthChange(user => {
      this.eventQueue.forEach(sub => sub(user.uid));
      this.eventQueue = [];
    });
    this.auth.subscribeRegister(this.onRegister.bind(this));
    this.getUserMeta();
  }
  markNotificationRead(id){
    this.fb.markNotificationRead(this.user.user_id, id);
  }
  trackEvent(type, data){
    if(!this.user.user_id){
      this.eventQueue.push(id => {
        data.user = data.user || id;
        this.fb.trackUserEvent(data.user, type, data);
      });
      return;
    }
    data.user = data.user || this.user.user_id;
    this.fb.trackUserEvent(data.user, type, data);
  }
  trackSearch(query, page){
    this.trackEvent('Search', {query, page});
    if(this.user && this.user.email){
      this.dataService.tagSearch(this.user.email, query);
    }
  }
  isEnrolled(course, user){
    if(user){
      return this.fb.isEnrolled(user, course);
    }else if(this.user.user_id){
      return this.fb.isEnrolled(this.user.user_id, course);
    }
  }
  bookmarkCourse(course){
    return this.fb.bookmarkCourse(this.user.user_id, course);
  }
  removeBookmark(course){
    return this.fb.removeBookmark(this.user.user_id, course);
  }
  isInBookmarks(course){
    if(this.user.user_id){
      return this.fb.isInBookmarks(this.user.user_id, course);
    }else{
      return this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            return this.fb.isInBookmarks(
                                  snap.uid,
                                  course);
          }
        });
    }
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
    if(this.user.user_id){
      this.fb.getCompleteLessons(this.user.user_id, course, callback);
    }else{
      this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            return this.fb.getCompleteLessons(
                            snap.uid,
                            course,
                            callback);
          }
        });
    }
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
  updateCart(items){
    this.cart = items;

    return this.fb.updateCart(this.user.user_id, items);
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
  cacheUser(user){
    if(user){
      let userInfo = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        provider: user.providerData[0] ? user.providerData[0].providerId : 'Anonymous',
        user_id: user.uid
      }
      this.user = userInfo;
      this.analytics.setUserData(this.user);

      if(user.isAnonymous){
        localStorage.setItem('anon_user_id', JSON.stringify(user.uid));
        this.setUserMeta(userInfo);
      }else{
        this.migrateOldUser(userInfo);
      }
    }
  }
  onRegister(user){
    this.trackEvent('Register', {id: user.uid});
  }
  getNotifications(callback){
    if(this.user.user_id){
      this.fb.getNotifications(this.user.user_id, callback);
    }else{
      this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            this.fb.getNotifications(snap.uid, callback);
          }
        });
    }
  }
  isSignedIn(){
    return this.auth.loggedIn;
  }
  migrateOldUser(userInfo){
    let anonUser = JSON.parse(localStorage.getItem('anon_user_id'));
    if(anonUser){

      return this.dataService.migrateUser(userInfo.user_id, anonUser)
        .then(res => {
          localStorage.setItem('anon_user_id', null);
        });
    }
  }
  getUserData(id){
    let userId = id || this.user.user_id;
    if(userId){
      return this.fb.getUserData(userId);
    }
    console.error('Can\'t fetch data for unknown user');
    return Promise.reject('Can\'t fetch data for unknown user');
  }
  getUserCart(){
    if(this.user.user_id){
      return this.fb.getUserCart(this.user.user_id)
        .then(cart => {
          if(cart){
            return this.$timeout(() => {
              this.cart = Object.keys(cart).map(key => {
                return cart[key];
              });
              return this.cart;
            });
          }
        });
    }else{
      return this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid){
            return this.fb.getUserCart(snap.uid)
              .then(cart => {
                if(cart){
                  return this.$timeout(() => {
                    this.cart = Object.keys(cart).map(key => {
                      return cart[key];
                    });
                    return this.cart;
                  });
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
  setCommentNotifications(loc, replyKey, replyChain, lesson){
    loc.push('');
    loc = loc.join('/');

    this.dataService.setCommentNotifications(loc, replyKey, replyChain, lesson);
  }
  setUserData(data){
    if(!this.user.user_id){return Promise.reject('unknown user')}

    return this.fb.setUserData(this.user.user_id, data)
      .then(() => {
        this.user = data.userInfo;
        return true;
      });
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
