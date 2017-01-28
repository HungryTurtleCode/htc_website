import firebase from 'firebase';
import HTC from './htc';

class DatabaseService{
  constructor() {}

  $onInit(){
    this.ref = firebase.database().ref();
  }
  setUserData(data, user){
    return this.ref
      .child('users')
      .child(user)
      .set(data)
      .then(() => true)
      .catch(err => {
        console.error(err);
        return err;
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
}

DatabaseService.$inject = [];

HTC.module('dbService', DatabaseService);
