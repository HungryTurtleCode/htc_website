import firebase from 'firebase';

class FirebaseService{
  constructor() {
    this.fb = firebase;
    this.ref = firebase.database().ref();
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
}

export default FirebaseService;
