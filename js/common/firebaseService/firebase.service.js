class FirebaseService{
  constructor(apiService, $location) {
    this.api = apiService;
    this.$location = $location;
  }

  // May or may not need this.
  // TODO figure it out
  getFirstLessonName(course){
    console.log('get first lesson name');
  }
  resetPassword(password, password2, token) {
    return this.api.post(`/auth/reset/${token}`, {password, password2});
  }
  checkResetToken(token) {
    return this.api.get(`/auth/reset/${token}`);
  }
  sendResetEmail(email) {
    return this.api.post(`/auth/reset`, {email});
  }
  contactMsg(data) {
    return this.api.post(`/contact`, data);
  }
  trackAcEvent(data){
    return this.api.post(`/analytics/activecampaign`, {data})
      .then(response => {
        return response.success;
      });
  }
  paypalBuy(data){
    return this.api.post(`/purchase/paypal`, {courses: this.getCourseArray(data)})
      .then(response => {
        // TODO check actual return value Mon 24 Jul 2017 15:12:38 UTC

        // TODO if the caller of this func redirects then look into reconciling that with server redirects instead.
        return response;
      });
  }
  stripeBuy(data, token){
    return this.api.post(`/purchase/stripe`, {courses: this.getCourseArray(data), token: token})
      .then(response => {
        // TODO check actual return value Mon 24 Jul 2017 15:12:38 UTC
        // TODO if the caller of this func redirects then look into reconciling that with server redirects instead.
        return response;
      });
  }
  logOut() {
    return this.api.delete('/auth')
      .then(res => res.success);
  }
  isLoggedIn() {
    return this.api.get('/auth')
      .then(res => res.loggedIn);
  }
  userLogin(username, password) {
    const obj = {
      username,
      password
    }
    return this.api.post(`/auth/login`, obj);
  }
  userRegister(email, password, password2) {
    const obj = {
      email,
      password,
      password2
    }
    return this.api.post(`/auth/register`, obj);
  }
  trackUserEvent(event, data) {
    data = Object.assign({}, data, {
      event,
      location: data.location || this.getPageLocations()
    });
    return this.api.post(`/analytics`, {data})
      .then(res => {
        return res.success
      });
  }
  isInBookmarks(course) {
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.get(`/bookmarks/${course}`)
      .then(res => res.isBookmarked);
  }
  bookmarkCourse(course) {
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.post(`/bookmarks/${course}`)
      .then(res => res.success);
  }
  removeBookmark(course){
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.delete(`/bookmarks/${course}`)
      .then(res => res.success);
  }
  getCourseMeta(course){
    return this.api.get(`/courses/${course}`)
      .then(res => res.meta);
  }
  isEnrolled(course){
    return this.api.get(`/courses/${course}/enrolled`)
      .then(res => res.success);
  }
  getLessonList(course){
    return this.api.get(`/courses/${course}/tree`)
      .then(res => res.tree);
  }
  addToCart(data){
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.post(`/cart/${data.id}`)
      .then(res => {
        console.log(res);
      });
  }
  removeFromCart(data){
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.delete(`/cart/${data.id}`)
      .then(res => res.success);
  }
  getUserMeta(){
    return this.api.get(`/user`)
      .then(res => res.userMeta);
  }
  getUserCart(){
    return this.api.get(`/cart`)
      .then(res => res.cart);
  }
  // TODO add a isInCart func and api endpoint Tue 18 Jul 2017 22:29:33 UTC
  getNotifications(callback){
    return this.api.get(`/notifications`)
      .then(res => callback(res.notifs));
  }
  markNotificationRead(id){
    return this.api.put(`/notifications/${id}`)
      .then(res => res.success);
  }
  setUserMeta(data){
    return this.api.put(`/user`, data)
      .then(res => console.log(res));
  }
  getComments(url){
    url = this.makeUrlSafe(url);
    return this.api.get(`/comments/${url}`)
      .then(res => res.comments);
  }
  getUserBookmarked(){
    return this.api.get(`/bookmarks`)
      .then(res => res.bookmarks);
  }
  // TODO the lesson passed in here is the url. I think the api expects an id. Refactor needed Tue 18 Jul 2017 23:16:38 UTC
  getLessonContent(lesson){
    // TODO probably need to make the lesson url safe here too Thu 20 Jul 2017 23:05:53 UTC
    return this.api.get(`/lessons/${lesson}/content`)
      .then(res => console.log(res))
  }
  getUserCompleted(){
    console.log('get user completed');
    return this.api.get(`/courses/complete`)
      .then(res => console.log(res));
  }
  getLessonMeta(lesson){
    console.log('get lesson meta');
    return this.api.get(`/lessons/${lesson}`)
      .then(res => console.log(res));
  }
  completeLesson(lesson){
    console.log('complete lesson');
    return this.api.put(`/lessons/${lesson}/complete`)
      .then(res => console.log(res));
  }
  // TODO refactor out the user name and image from this and all calls to this Wed 19 Jul 2017 15:12:31 UTC
  setComment(loc, text, is_reply){
    // TODO fix the weird recursive reply thing in the comment component Wed 19 Jul 2017 15:17:42 UTC
    console.log('set comment');

    loc = this.makeUrlSafe(loc);
    // loc = loc.split('/');
    // for(let i = loc.length - 1; i >= 0; i--) {
    //   if(loc[i]) {
    //     loc = loc[i];
    //     break;
    //   }
    // }
    // TODO is_reply should be the id of the comment being replied to Fri 10 Nov 2017 17:37:42 UTC

    const data = {
      is_reply,
      text
    }
    return this.api.post(`/comments/${loc}`, data)
      .then(res => console.log(res));
  }
  // TODO do this on the server when all lessons are marked completed. Mon 24 Jul 2017 16:34:21 UTC
  markCourseComplete(course){
    console.log('mark course complete');
    return this.api.put(`/courses/${course}/complete`)
      .then(res => console.log(res));
  }
  getCompleteLessons(course, callback){
    console.log('get completed lessons');
    return this.api.get(`/courses/${course}/completedlessons`)
      .then(res => console.log(res))
  }
  getUserEnrolledCourses(){
    console.log('get user enrolled courses');
    return this.api.get(`/user/enrollments`)
      .then(res => console.log(res));
  }
  getSingleComment(comment_id){
    console.log('get single comment');
    return this.api.get(`/comments/single/${comment_id}`)
      .then(res => console.log(res));
  }
  getAllNotifications() {
    console.log('get all notifications');
    return this.api.get(`/notifications/all`)
      .then(res => console.log(res));
  }
  upvoteComment(comment) {
    return this.api.put(`/comments/upvote/${comment}`)
      .then(res => console.log(res));
  }
  downvoteComment(comment) {
    return this.api.put(`/comments/downvote/${comment}`)
      .then(res => console.log(res));
  }


  /*
   * Auxillary util funcs
   */
  makeUrlSafe(text){
    text = text.split('.');
    text = text.join('-');
    text = text.split('$');
    text = text.join('-');
    text = text.split('/');
    if(text[text.length - 1].charAt(0) === '#') {
      text.splice(text.length - 1, 1);
    }
    text = text.join('-');
    text = text.split('[');
    text = text.join('-');
    text = text.split(']');
    text = text.join('-');
    return text;
  }

  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i - 1] === 'lessons' && arr[i] === '#!'){
        this.isLesson = true;
      }
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i].charAt(0) === '#'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

    return newArr.join('/');
  }
  getCourseArray(courses){
    return courses.map(item => {
      return {
        id: item.id
      }
    });
  }
}

FirebaseService.$inject = ['apiService', '$location'];

export default FirebaseService;
