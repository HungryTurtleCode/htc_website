import config from './config';

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
      .then(res => res.success);
  }
  isInBookmarks(user_id, course) {
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.get(`/bookmarks/${course}`)
      .then(res => res.isBookmarked);
  }
  bookmarkCourse(user_id, course) {
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.post(`/bookmarks/${course}`)
      .then(res => res.success);
  }
  removeBookmark(user_id, course){
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.delete(`/bookmarks/${course}`)
      .then(res => res.success);
  }
  getCourseMeta(course){
    return this.api.get(`/courses/${course}`)
      .then(res => res.meta);
  }
  isEnrolled(user, course){
    // TODO no need to pass user into here. just use the user attached to the session on the server Tue 18 Jul 2017 22:10:03 UTC
    return this.api.get(`/courses/${course}/enrolled`)
      .then(res => res.success);
  }
  getLessonList(course){
    // TODO ensure that what is returned from here actually renders in the sales page sidebar. Tue 18 Jul 2017 22:13:54 UTC
    return this.api.get(`/courses/${course}/tree`)
      .then(res => res.tree);
  }
  addToCart(user, data){
    // TODO make course id safe Thu 20 Jul 2017 23:56:15 UTC
    return this.api.post(`/cart/${data.id}`)
      .then(res => res.success);
  }
  getUserMeta(user){
    return this.api.get(`/user`)
      .then(res => res.userMeta);
  }
  getUserCart(user_id){
    return this.api.get(`/cart`)
      .then(res => res.cart);
  }
  // TODO add a isInCart func and api endpoint Tue 18 Jul 2017 22:29:33 UTC
  getNotifications(callback){
    // TODO refactor all the calls to getNotifications to fit the new arg footprint Thu 20 Jul 2017 23:10:08 UTC
    return this.api.get(`/notifications`)
      .then(res => callback(res.notifs));
  }
  // TODO refactore user out of all the call to this func as it's not needed Tue 18 Jul 2017 22:35:20 UTC
  markNotificationRead(user, id){
    return this.api.put(`/notifications/${id}`)
      .then(res => res.success);
  }
  setUserMeta(user, data){
    return this.api.put(`/user`, data)
      .then(res => console.log(res));
  }
  getComments(url){
    url = this.makeUrlSafe(url);
    return this.api.get(`/comments/${url}`)
      .then(res => res.comments);
  }
  getUserBookmarked(user_id){
    return this.api.get(`/bookmarks`)
      .then(res => res.bookmarks);
  }
  // TODO the lesson passed in here is the url. I think the api expects an id. Refactor needed Tue 18 Jul 2017 23:16:38 UTC
  getLessonContent(course, lesson){
    // TODO probably need to make the lesson url safe here too Thu 20 Jul 2017 23:05:53 UTC
    return this.api.get(`/lessons/${lesson}/content`)
      .then(res => console.log(res))
  }
  getUserCompleted(user_id){
    console.log('get user completed');
    return this.api.get(`/courses/complete`)
      .then(res => console.log(res));
  }
  getLessonMeta(course, lesson){
    console.log('get lesson meta');
    return this.api.get(`/lessons/${lesson}`)
      .then(res => console.log(res));
  }
  completeLesson(user, course, lesson){
    console.log('complete lesson');
    return this.api.put(`/lessons/${lesson}/complete`)
      .then(res => console.log(res));
  }
  // TODO refactor out the user name and image from this and all calls to this Wed 19 Jul 2017 15:12:31 UTC
  setComment(loc, text, is_reply, user_name, user_id, image){
    // TODO fix the weird recursive reply thing in the comment component Wed 19 Jul 2017 15:17:42 UTC
    console.log('set comment');
    const data = {
      user_id,
      is_reply,
      text
    }
    return this.api.post(`/comments/${loc}`, data)
      .then(res => console.log(res));
  }
  markCourseComplete(user, course){
    console.log('mark course complete');
    return this.api.put(`/courses/${course}/complete`)
      .then(res => console.log(res));
  }
  getCompleteLessons(user, course, callback){
    console.log('get completed lessons');
    return this.api.get(`/courses/${course}/completedlessons`)
      .then(res => console.log(res))
  }
  getUserEnrolledCourses(user_id){
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
    return this.api.put(`/comments/upvote${comment}`)
      .then(res => console.log(res));
  }
  downvoteComment(comment) {
    return this.api.put(`/comments/downvote/${comment}`)
      .then(res => console.log(res));
  }
  removeFromCart(user, item){
    // TODO make item safe ie no slashes Fri 21 Jul 2017 00:07:35 UTC
    return this.api.delete(`/cart/${item}`)
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
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

    return newArr.join('/');
  }
}

FirebaseService.$inject = ['apiService', '$location'];

export default FirebaseService;
