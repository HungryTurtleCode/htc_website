class userData{
  constructor(firebaseService, auth, $timeout, analytics) {
    this.fb = firebaseService;
    this.auth = auth;
    this.$timeout = $timeout;
    this.analytics = analytics;

    this.user = {};
    this.courses = [];
    this.cart = [];
    this.completed = [];
    this.bookmarked = [];

    this.getUserMeta();
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


  paypalBuy(data){
    return this.fb.paypalBuy(getCourseArray(data));

    // TODO check if this is needed Mon 24 Jul 2017 16:22:01 UTC
    function getCourseArray(courses){
      return courses.map(item => {
        return item.course;
      });
    }
  }
  stripeBuy(data, token){
    return this.fb.stripeBuy(getCourseArray(data), token);

    // TODO check if this is needed Mon 24 Jul 2017 16:22:01 UTC
    function getCourseArray(courses){
      return courses.map(item => {
        return item.course;
      });
    }
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
  setUserMeta(data){
    return this.fb.setUserMeta(data)
      .then(() => {
        // TODO make sure api does actually return a user object Fri 21 Jul 2017 00:33:21 UTC
        this.user = data;
        return true;
      });
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

}

userData.$inject = ['firebaseService', 'auth','$timeout', 'analyticsService'];

export default userData;
