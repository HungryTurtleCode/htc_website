import firebase from 'firebase';

class Auth{
  constructor() {
    this.loggedIn = false;
    this.onAuthChange();
  }
  waitForAuth(){
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          resolve(user);
        }else{
          resolve(false);
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
