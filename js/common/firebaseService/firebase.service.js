import firebase from 'firebase';
import config from './config';

class FirebaseService{
  constructor() {
    this.ref = firebase.database().ref();
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
  getUserData(user){
    return this.ref
      .child('users')
      .child(user)
      .once('value')
      .then(snap => {
        return snap.val();
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
      }else{
        reject('course and lesson not specified');
      }
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
            resolve(snap.val());
          });
      }else{
        reject('course and lesson not specified');
      }
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
      .then(data => true)
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

export default FirebaseService;
