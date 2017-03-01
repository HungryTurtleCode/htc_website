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

    this.auth.subscribeAuthChange(this.cacheUser.bind(this));
    this.getUserMeta();
  }
  isEnrolled(user, course){
    return this.fb.isEnrolled(user, course);
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
  stripeBuy(data){
    return this.dataService.stripeBuy(getCourseArray(data), this.user.user_id);

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

      if(user.isAnonymous){
        localStorage.setItem('anon_user_id', JSON.stringify(user.uid));
        this.setUserMeta(userInfo);
      }else{
        this.migrateOldUser(userInfo);
      }
    }
  }
  migrateOldUser(userInfo){
    let anonUser = JSON.parse(localStorage.getItem('anon_user_id'));
    if(anonUser){
      this.getUserData(anonUser)
        .then(data => {
          data = data || {};
          data.userInfo = userInfo;

          this.getUserData(userInfo.user_id)
            .then(existingData => {
              existingData = existingData || {};

              var newData = Object.assign(existingData, data);

              this.setUserData(newData)
                .then(() => {
                  localStorage.setItem('anon_user_id', null);
                  this.fb.setUserData(anonUser, null);
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
        // TODO add user to active campaign and store a flag in firebase to show that email has been added to active campaign to avoid duplicate requests Wed 25 Jan 2017 05:30:20 UTC
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

userData.$inject = ['firebaseService', 'auth', 'dataService'];

export default userData;
