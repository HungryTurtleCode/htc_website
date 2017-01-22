import firebase from 'firebase';
import HTC from './htc';

class Auth{
  constuctor(){
    // TODO inject a database service Sun 22 Jan 2017 22:50:31 UTC
  }
  anonymousSignIn(){
    // TODO anon sign in Sun 22 Jan 2017 22:46:37 UTC
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
      }
    });
  }
  signOut(){
    return firebase.auth().signOut();
  }
}

Auth.$inject = [];

HTC.module('AuthService', Auth);
