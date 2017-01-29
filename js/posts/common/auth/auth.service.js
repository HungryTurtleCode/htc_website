import firebase from 'firebase';

class Auth{
  constructor() {
    this.loggedIn = false;
    this.onAuthChange();
  }
  waitForAuth(){
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user && !user.isAnonymous){
          resolve(user)
        }
      });
    });
  }
  onAuthChange(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user && !user.isAnonymous){
        this.loggedIn = true;
      }
    });
  }
}

Auth.$inject = [];

export default Auth;
