import firebase from 'firebase';
import config from './config';

class FirebaseService{
  constructor(apiService, $location) {
    this.api = apiService;
    this.$location = $location;
    this.ref = firebase.database().ref();
    this.storageRef = firebase.storage().ref();
  }

  // May or may not need this.
  // TODO figure it out
  getFirstLessonName(course){
    console.log('get first lesson name');
    return new Promise((resolve, reject) => {
      this.ref
        .child('courses')
        .child(course)
        .child('meta')
        .child('course-meta-data')
        .child('first_lesson')
        .once('value', snap => {
          console.log('returned with first lesson');
          resolve(snap.val());
        });
    });
  }

  trackUserEvent(event, data) {
    data = Object.assign({}, data, {
      event,
      location: data.location || this.getPageLocations()
    });
    return this.api.post(`/analytics/${data.user_id}`, {data})
      .then(res => res.success);
  }
  isInBookmarks(user_id, course) {
    return this.api.get(`/users/${user_id}/bookmarks/${course}`)
      .then(res => res.isBookmarked);
  }
  bookmarkCourse(user_id, course) {
    return this.api.post(`/users/${user_id}/bookmarks/${course}`)
      .then(res => res.success);
  }
  removeBookmark(user_id, course){
    return this.api.delete(`/users/${user_id}/bookmarks/${course}`)
      .then(res => res.success);
  }
  getCourseMeta(course){
    return this.api.get(`/courses/${course}/meta`)
      .then(res => res.meta);
  }
  isEnrolled(user, course){
    // TODO no need to pass user into here. just use the user attached to the session on the server Tue 18 Jul 2017 22:10:03 UTC
    return this.api.get(`/users/enrolled/${user}/${course}`)
      .then(res => res.success);
  }
  getLessonList(course){
    // TODO ensure that what is returned from here actually renders in the sales page sidebar. Tue 18 Jul 2017 22:13:54 UTC
    return this.api.get(`/courses/${course}/tree`)
      .then(res => res.tree);
  }
  addToCart(user, data){
    return this.api.post(`/users/cart/${user}/${data.id}`)
      .then(res => res.success);
  }
  getUserMeta(user){
    return this.api.get(`/users/${user}`)
      .then(res => res.userMeta);
  }
  getUserCart(user_id){
    return this.api.get(`/users/cart/${user_id}`)
      .then(res => res.cart);
  }
  // TODO add a isInCart func and api endpoint Tue 18 Jul 2017 22:29:33 UTC
  getNotifications(user, callback){
    return this.api.get(`/notifications/${user}`)
      .then(res => callback(res.notifs));
  }
  // TODO refactore user out of all the call to this func as it's not needed Tue 18 Jul 2017 22:35:20 UTC
  markNotificationRead(user, id){
    return this.api.put(`/notifications/${id}`)
      .then(res => res.success);
  }
  setUserMeta(user, data){
    return this.api.put(`/users/${user}`, data)
      .then(res => console.log(res));
  }
  getComments(url){
    url = this.makeUrlSafe(url);
    return this.api.get(`/comments/${url}`)
      .then(res => res.comments);
  }
  getUserBookmarked(user_id){
    return this.api.get(`/users/${user_id}/bookmarks`)
      .then(res => res.bookmarks);
  }
  // TODO the lesson passed in here is the url. I think the api expects an id. Refactor needed Tue 18 Jul 2017 23:16:38 UTC
  getLessonContent(course, lesson){
    return this.api.get(`/courses/lessons/${lesson}`)
      .then(res => console.log(res))
  }
  getUserCompleted(user_id){
    console.log('get user completed');
    return this.api.get(`/users/completed/courses/${user_id}`)
      .then(res => console.log(res));
  }
  getLessonMeta(course, lesson){
    console.log('get lesson meta');
    return this.api.get(`/courses/lessons/${lesson}/meta`)
      .then(res => console.log(res));
  }
  completeLesson(user, course, lesson){
    console.log('complete lesson');
    return this.api.put(`/users/completed/courses/lessons/${user}/${course}/${lesson}`)
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
    return this.api.put(`/users/completed/courses/${user}/${course}`)
      .then(res => console.log(res));
  }
  getCompleteLessons(user, course, callback){
    console.log('get completed lessons');
    return this.api.get(`/users/completed/courses/lessons/${user}/${course}`)
      .then(res => console.log(res))
  }
  getUserEnrolledCourses(user_id){
    console.log('get user enrolled courses');
    return this.api.get(`/users/enrolled/${user_id}`)
      .then(res => console.log(res));
  }
  getSingleComment(comment_id){
    console.log('get single comment');
    return this.api.get(`/comments/single/${comment_id}`)
      .then(res => console.log(res));
  }
  getAllNotifications(user_id) {
    console.log('get all notifications');
    return this.api.get(`/notifications/all/${user_id}`)
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
    return this.api.delete(`/users/cart/${user}/${item}`)
      .then(res => console.log(res));
  }



  // DONE
  // updateCommentScore(page, comment, score){
  //   console.log('update comment score');
  //   let loc = page + comment;

  //   this.ref
  //     .child('comments')
  //     .child(loc)
  //     .child('score')
  //     .set(score)
  // }
  // DONE
  // updateCart(user, items){
  //   console.log('update cart');
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('cart')
  //     .set(items)
  //     .then(snap => true);
  // }

  // DONE
  // getSingleComment(loc){
  //   console.log('get single comment');
  //   return this.ref
  //     .child('comments')
  //     .child(loc)
  //     .once('value')
  //     .then(snap => snap.val());
  // }


  // DONE
  // getUserEnrolledCourses(id){
  //   console.log('get user enrolled courses');
  //   return new Promise((resolve, reject) => {
  //     if(id){
  //       this.ref
  //         .child('users')
  //         .child(id)
  //         .child('courses')
  //         .once('value', snap => {
  //           console.log('returned with user enrolld courses');
  //           resolve(snap.val());
  //         })
  //     }else{
  //       reject('Can\'t fetch courses for unknown user');
  //     }
  //   });
  // }

  // DONE
  // getCompleteLessons(user, course, callback){
  //   console.log('get completed lessons');
  //   this.ref
  //     .child('users')
  //     .child(user)
  //     .child('complete-lessons')
  //     .child(course)
  //     .on('value', snap => {
  //       console.log('returned with completed lessons');
  //       callback(snap.val());
  //     });
  // }


  // DONE
  // markCourseComplete(user, course){
  //   this.getCourseMeta(course)
  //     .then(meta => {
  //       this.ref
  //         .child('users')
  //         .child(user)
  //         .child('completed')
  //         .child(course)
  //         .set(meta);
  //     });
  // }

  // DONE
  // setComment(loc, text, isReply, user_name, user_id, image){
  //   console.log('set comment');
  //   let comment = {
  //     text,
  //     user_name,
  //     isReply,
  //     user_id,
  //     image,
  //     date: firebase.database.ServerValue.TIMESTAMP,
  //     score: 0
  //   }

  //   let commentRef = this.ref
  //     .child('comments')
  //     .child(loc);

  //   let newComment = commentRef.push();
  //   comment.firebase_id = newComment.key;

  //   return newComment.set(comment)
  //     .then(data => newComment.key)
  //     .catch(err => {
  //       console.error(err)
  //       return err;
  //     });
  // }



  // DONE
  // completeLesson(user, course, lesson){
  //   console.log('complete lesson');
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('complete-lessons')
  //     .child(course)
  //     .child(lesson)
  //     .set(true);
  // }

  // DONE
  // getLessonMeta(course, lesson){
  //   console.log('get lesson meta');
  //   return new Promise((resolve, reject) => {
  //     if(course && lesson){
  //       this.ref
  //         .child('courses')
  //         .child(course)
  //         .child('meta')
  //         .child(lesson)
  //         .once('value', snap => {
  //           console.log('returned with lesson meta');
  //           resolve(snap.val());
  //         });
  //     }else if(course){
  //       this.getFirstLessonName(course)
  //         .then(name => {
  //           // this.$state.go('lesson', {course: course, lesson: name})
  //           window.location.href = '/lessons/#!/' + course + '/' + name;
  //         });
  //     }else{
  //       reject('course and lesson not specified');
  //     }
  //   });
  // }

  // DONE
  // getUserCompleted(id){
  //   console.log('get user completed');
  //   return new Promise((resolve, reject) => {
  //     if(id){
  //       this.ref
  //         .child('users')
  //         .child(id)
  //         .child('completed')
  //         .once('value', snap => {
  //           console.log('returned with user completed');
  //           resolve(snap.val());
  //         })
  //     }else{
  //       reject('Can\'t fetch courses for unknown user');
  //     }
  //   });
  // }

  // DONE
  // getLessonContent(course, lesson){
  //   console.log('get lesson content');
  //   return new Promise((resolve, reject) => {
  //     if(course && lesson){
  //       let dbPath = `${course}/${lesson}`;
  //       this.ref
  //         .child('premium')
  //         .child(dbPath)
  //         .once('value', snap => {
  //           console.log('returned with lesson content');
  //           let val = snap.val();
  //           val.course = course;
  //           val.lesson = lesson;
  //           resolve(val);
  //         });
  //     }else if(course){
  //       this.getFirstLessonName(course)
  //         .then(name => {
  //           // this.$state.go('lesson', {course: course, lesson: name})
  //           window.location.href = '/lessons/#!/' + course + '/' + name + '/';
  //         });
  //     }else{
  //       reject('course and lesson not specified');
  //     }
  //   });
  // }

  // DONE
  // getUserBookmarked(id){
  //   console.log('get user bookmarked');
  //   return new Promise((resolve, reject) => {
  //     if(id){
  //       this.ref
  //         .child('users')
  //         .child(id)
  //         .child('bookmarked')
  //         .once('value', snap => {
  //           console.log('returned with bookmarks');
  //           resolve(snap.val());
  //         })
  //     }else{
  //       reject('Can\'t fetch courses for unknown user');
  //     }
  //   });
  // }


  // DONE
  // getComments(url){
  //   console.log('get comments');
  //   if(url !== ''){
  //     return this.ref
  //       .child('comments')
  //       .child(url)
  //       .once('value')
  //       .then(snap => {
  //         console.log('returned with comments');
  //         if(snap.val()){
  //           return this.deepObjToArray(snap.val());
  //         }
  //         return false;
  //       });
  //   }
  // }


  // DONE
  // setUserMeta(user, data){
  //   console.log('set user meta');
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('userInfo')
  //     .set(data)
  //     .then(snap => {
  //       console.log('returned from setting user meta');
  //       return true
  //     });
  // }


  // DONE
  // markNotificationRead(user, id){
  //   console.log('mark notification read');
  //   this.ref
  //     .child('users')
  //     .child(user)
  //     .child('notifications')
  //     .child(id)
  //     .set(null);
  // }


  // DONE
  // getNotifications(user, callback){
  //   this.ref
  //     .child('users')
  //     .child(user)
  //     .child('notifications')
  //     .on('value', snap => {
  //       let obj = snap.val() || [];
  //       let arr = Object.keys(obj)
  //                   .map(key => {
  //                     return obj[key];
  //                   });
  //       callback(arr);
  //     });
  // }

  // DONE
  // getUserCart(id){
  //   return this.ref
  //     .child('users')
  //     .child(id)
  //     .child('cart')
  //     .once('value')
  //     .then(snap => {
  //       return snap.val();
  //     });
  // }


  // DONE
  // getUserMeta(user){
  //   console.log('GET USER META');
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('userInfo')
  //     .once('value')
  //     .then(snap => {
  //       return snap.val();
  //     });
  // }


  // DONE
  // addToCart(user, data){
  //   console.log('add to cart');
  //   return;
  //   let item = this.ref
  //     .child('users')
  //     .child(user)
  //     .child('cart')
  //     .push();

  //   return item.set(data);
  // }

  // DONE
  // getLessonList(course){
  //   console.log('get lesson list');
  //   return new Promise((resolve, reject) => {
  //     this.ref
  //       .child('courses')
  //       .child(course)
  //       .child('lessons')
  //       .once('value', snap => {
  //         console.log('returned with lesson list');
  //         resolve(this.deepObjToArray(snap.val()));
  //       });
  //   });
  // }

  // DONE
  // isEnrolled(user, course){
  //   console.log('check is enrolled');
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('enrolled')
  //     .child(course)
  //     .once('value')
  //     .then(snap => {
  //       console.log('returned is enrolled');
  //       return snap.val();
  //     });
  // }

  // DONE
  // getCourseMeta(course){
  //   console.log('get course meta');
  //   return new Promise((resolve, reject) => {
  //     if(course){
  //       this.ref
  //         .child('courses')
  //         .child(course)
  //         .child('meta')
  //         .child('course-meta-data')
  //         .once('value', snap => {
  //           console.log('returned with course meta');
  //           resolve(snap.val());
  //         });
  //     }else{
  //       reject('course not specified');
  //     }
  //   });
  // }



  // DONE
  // removeBookmark(user, course){
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('bookmarked')
  //     .child(course)
  //     .set(null);
  // }


  // DONE
  // bookmarkCourse(user, course){
  //   return this.getCourseMeta(course)
  //     .then(meta => {
  //       return this.ref
  //         .child('users')
  //         .child(user)
  //         .child('bookmarked')
  //         .child(course)
  //         .set(meta);
  //     });
  // }



  // DONE
  // isInBookmarks(user, course){
  //   return this.ref
  //     .child('users')
  //     .child(user)
  //     .child('bookmarked')
  //     .child(course)
  //     .child('course')
  //     .once('value')
  //     .then(snap => {
  //       return snap.val();
  //     });
  // }

  // DONE
  // trackUserEvent(user, type, data){
  //   data.time = firebase.database.ServerValue.TIMESTAMP;
  //   console.log('track user event');

  //   return new Promise((resolve, reject) => {
  //     if(user){
  //       let allRef = this.ref
  //         .child('allAnalytics')
  //         .child(type)
  //         .push();

  //       data.firebase_id = allRef.key;

  //       allRef.set(data);

  //       this.ref
  //         .child('userAnalytics')
  //         .child(user)
  //         .child(type)
  //         .child(data.firebase_id)
  //         .set(data)
  //         .then(snap => resolve(snap));
  //     }else{
  //       reject('Can\'t set analytics for unknown user');
  //     }
  //   });
  // }

























  // Probably just always do this on the server
  checkIfSubscribed(id, email){
    email = this.makeFirebaseSafe(email);

    return this.ref
      .child('active-campaign')
      .child(id)
      .child(email)
      .once('value')
      .then(snap => snap.val())
  }
  // Won't need this
  deepObjToArray(obj){
    return Object.keys(obj).map(key => {
      if(typeof obj[key] === 'object'){
        Object.keys(obj[key]).forEach(newKey => {
          if(typeof obj[key][newKey] === 'object'){
            obj[key][newKey] = this.deepObjToArray(obj[key][newKey]);
          }
        })
      }
      return obj[key];
    });
  }
  // won't need this
  makeFirebaseSafe(text){
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

  // TODO subscribe email to AC when a user signs up on the server Tue 18 Jul 2017 22:31:30 UTC
  // will do this on the server
  markSubscribedAC(id, email){
    console.log('mark subscribed in ac');
    email = this.makeFirebaseSafe(email);

    this.ref
      .child('active-campaign')
      .child(id)
      .child(email)
      .set(true);
  }
  // Not needed
  setUserData(user, data){
    console.log('set user data');
    return this.ref
      .child('users')
      .child(user)
      .set(data)
      .then(snap => {
        console.log('returned from setting user data');
        return true;
      });
  }
  // not needed
  getUserData(user){
    console.log('get user data');
    return this.ref
      .child('users')
      .child(user)
      .once('value')
      .then(snap => {
        console.log('returned with user data');
        console.log(snap.val());
        return snap.val();
      });
  }




  /*
   * Auxillary util funcs
   */
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
  makeUrlSafe(url) {
    return url.split('/').join('-');
  }
}

FirebaseService.$inject = ['apiService', '$location'];

export default FirebaseService;
