import firebase from 'firebase';
import config from './config';

class FirebaseService{
  constructor($state) {
    this.$state = $state;

    this.ref = firebase.database().ref();
  }
  getNotifications(user, callback){
    this.ref
      .child('users')
      .child(user)
      .child('notifications')
      .on('value', snap => {
        let obj = snap.val();
        let arr = Object.keys(obj)
                    .map(key => {
                      return obj[key];
                    });
        callback(arr);
      });
  }
  getUserCart(id){
    return this.ref
      .child('users')
      .child(id)
      .child('cart')
      .once('value')
      .then(snap => {
        return snap.val();
      });
  }
  isEnrolled(user, course){
    return this.ref
      .child('users')
      .child(user)
      .child('enrolled')
      .child(course)
      .once('value')
      .then(snap => {
        return snap.val();
      });
  }
  updateCart(user, items){
    return this.ref
      .child('users')
      .child(user)
      .child('cart')
      .set(items)
      .then(snap => true);
  }
  getUserMeta(user){
    return this.ref
      .child('users')
      .child(user)
      .child('userInfo')
      .once('value')
      .then(snap => {
        return snap.val();
      });
  }
  setUserMeta(user, data){
    return this.ref
      .child('users')
      .child(user)
      .child('userInfo')
      .set(data)
      .then(snap => {
        return true
      });
  }
  setUserData(user, data){
    return this.ref
      .child('users')
      .child(user)
      .set(data)
      .then(snap => {
        return true;
      });
  }
  getUserData(user){
    return this.ref
      .child('users')
      .child(user)
      .once('value')
      .then(snap => {
        return snap.val();
      });
  }
  markCourseComplete(user, course){
    this.getCourseMeta(course)
      .then(meta => {
        this.ref
          .child('users')
          .child(user)
          .child('completed')
          .child(course)
          .set(meta);
      });
  }
  getComments(url){
    if(url !== ''){
      return this.ref
        .child('comments')
        .child(url)
        .once('value')
        .then(snap => {
          if(snap.val()){
            return this.deepObjToArray(snap.val());
          }
          return false;
        });
    }
  }
  updateCommentScore(page, comment, score){
    let loc = page + comment;

    this.ref
      .child('comments')
      .child(loc)
      .child('score')
      .set(score)
  }
  getCourseMeta(course){
    return new Promise((resolve, reject) => {
      if(course){
        this.ref
          .child('courses')
          .child(course)
          .child('meta')
          .child('course-meta-data')
          .once('value', snap => {
            resolve(snap.val());
          });
      }else{
        reject('course not specified');
      }
    });
  }
  addToCart(user, data){
    let item = this.ref
      .child('users')
      .child(user)
      .child('cart')
      .push();

    return item.set(data);
  }
  getUserEnrolledCourses(id){
    return new Promise((resolve, reject) => {
      if(id){
        this.ref
          .child('users')
          .child(id)
          .child('courses')
          .once('value', snap => {
            resolve(snap.val());
          })
      }else{
        reject('Can\'t fetch courses for unknown user');
      }
    });
  }
  getUserBookmarked(id){
    return new Promise((resolve, reject) => {
      if(id){
        this.ref
          .child('users')
          .child(id)
          .child('bookmarked')
          .once('value', snap => {
            resolve(snap.val());
          })
      }else{
        reject('Can\'t fetch courses for unknown user');
      }
    });
  }
  getUserCompleted(id){
    return new Promise((resolve, reject) => {
      if(id){
        this.ref
          .child('users')
          .child(id)
          .child('completed')
          .once('value', snap => {
            resolve(snap.val());
          })
      }else{
        reject('Can\'t fetch courses for unknown user');
      }
    });
  }
  getLessonMeta(course, lesson){
    return new Promise((resolve, reject) => {
      if(course && lesson){
        this.ref
          .child('courses')
          .child(course)
          .child('meta')
          .child(lesson)
          .once('value', snap => {
            resolve(snap.val());
          });
      }else if(course){
        this.getFirstLessonName(course)
          .then(name => {
            this.$state.go('lesson', {course: course, lesson: name})
          });
      }else{
        reject('course and lesson not specified');
      }
    });
  }
  getFirstLessonName(course){
    return new Promise((resolve, reject) => {
      this.ref
        .child('courses')
        .child(course)
        .child('meta')
        .child('course-meta-data')
        .child('first_lesson')
        .once('value', snap => {
          resolve(snap.val());
        });
    });
  }
  getLessonContent(course, lesson){
    return new Promise((resolve, reject) => {
      if(course && lesson){
        let dbPath = `${course}/${lesson}`;
        this.ref
          .child('premium')
          .child(dbPath)
          .once('value', snap => {
            let val = snap.val();
            val.course = course;
            val.lesson = lesson;
            resolve(val);
          });
      }else if(course){
        this.getFirstLessonName(course)
          .then(name => {
            this.$state.go('lesson', {course: course, lesson: name})
          });
      }else{
        reject('course and lesson not specified');
      }
    });
  }
  completeLesson(user, course, lesson){
    return this.ref
      .child('users')
      .child(user)
      .child('complete-lessons')
      .child(course)
      .child(lesson)
      .set(true);
  }
  getCompleteLessons(user, course, callback){
    this.ref
      .child('users')
      .child(user)
      .child('complete-lessons')
      .child(course)
      .on('value', snap => {
        callback(snap.val());
      });
  }
  getLessonList(course){
    return new Promise((resolve, reject) => {
      this.ref
        .child('courses')
        .child(course)
        .child('lessons')
        .once('value', snap => {
          resolve(this.deepObjToArray(snap.val()));
        });
    });
  }
  getCommentOwner(loc, comment){
    return this.ref
      .child('comments')
      .child(loc)
      .child(comment)
      .child('user_id')
      .once('value')
      .then(snap => snap.val());
  }
  getSingleComment(loc){
    return this.ref
      .child('comments')
      .child(loc)
      .once('value')
      .then(snap => snap.val());
  }
  setCommentNotifications(owners, replyLoc, lesson){
    this.getSingleComment(replyLoc)
      .then(comment => {
        owners.forEach(owner => {

          if(owner === comment.user_id){
            let commentReplies = this.ref
                                  .child('users')
                                  .child(owner)
                                  .child('notifications');

            let newReply = commentReplies.push();

            comment.notification_type = 'comment_reply';
            let slug = replyLoc.split('/').splice(0, 2);
            if(lesson){
              slug.unshift('lessons/#!')
            }
            // slug.push('');
            slug.unshift('');
            comment.location = slug.join('/');

            newReply.set(comment);
          }
        });
      });
  }
  setComment(loc, text, isReply, user_name, user_id, image){
    let comment = {
      text,
      user_name,
      isReply,
      user_id,
      image,
      date: firebase.database.ServerValue.TIMESTAMP,
      score: 0
    }

    let commentRef = this.ref
      .child('comments')
      .child(loc);

    let newComment = commentRef.push();
    comment.firebase_id = newComment.key;

    return newComment.set(comment)
      .then(data => newComment.key)
      .catch(err => {
        console.error(err)
        return err;
      });
  }
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
}

FirebaseService.$inject = ['$state'];

export default FirebaseService;
