import firebase from 'firebase';

class firebaseService{
  constructor() {
    console.log('firebase');
    this.fb = firebase;
    this.ref = firebase.database().ref();
  }
}

export default firebaseService;
