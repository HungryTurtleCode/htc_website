import firebase from 'firebase';
import config from '../../../main/common/config';

class FirebaseService{
  constructor() {
    this.ref = firebase.database().ref();
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
          resolve(snap.val());
        });
    });
  }
}

export default FirebaseService;
