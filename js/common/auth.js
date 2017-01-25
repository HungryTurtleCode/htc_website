import firebase from 'firebase';
import HTC from './htc';

class Auth{
  constuctor(){
    // TODO inject a database service Sun 22 Jan 2017 22:50:31 UTC
  }
  $onInit(){
    this.onAuthChange(msg => console.log(msg));
  }
  anonymousSignIn(){
    firebase.auth().signInAnonymously()
      .catch(err => console.error(err));
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
  signInWithRedirect(provider){
    firebase.auth().signInWithRedirect(provider);

    return firebase.auth().getRedirectResult()
      .then(result => {
        return result;
      })
  }
  onAuthChange(fn){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(fn){
          fn(user);
        }
      }else{
        this.anonymousSignIn();
      }
    });
  }
  signOut(){
    return firebase.auth().signOut();
  }
}

Auth.$inject = [];

HTC.module('AuthService', Auth);
