import firebase from 'firebase';
import HTC from './htc';

class Auth{
  constructor() {
    this.onAuthChange();
  }
  facebookSignIn(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return this.signInWithRedirect(provider);
  }
  googleSignIn(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.signInWithRedirect(provider);
  }
  githubSignIn(){
    let provider = new firebase.auth.GithubAuthProvider();
    return this.signInWithRedirect(provider);
  }
  signOut(){
    return firebase.auth().signOut();
  }
  signInWithRedirect(provider){
    firebase.auth().signInWithRedirect(provider);

    return firebase.auth().getRedirectResult()
      .then(result => {
        console.log(result);
        return result;
      })
  }
  onAuthChange(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user);
      }
    });
  }
}

Auth.$inject = [];

HTC.module('AuthService', Auth);
