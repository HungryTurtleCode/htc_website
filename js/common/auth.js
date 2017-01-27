import firebase from 'firebase';
import HTC from './htc';

class Auth{
  constructor(db){
    this.db = db;
  }
  $onInit(){
    this.authSubs = [];
    this.onAuthChange();
  }
  anonymousSignIn(){
    firebase.auth().signInAnonymously()
      .catch(err => console.error(err));
  }
  facebookSignIn(){
    let provider = new firebase.auth.FacebookAuthProvider();
    // TODO look into converting anon accounts into permanent as per https://firebase.google.com/docs/auth/web/anonymous-auth  Wed 25 Jan 2017 05:21:26 UTC
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
  signInWithUserPass(user, pass, pass1){
    if(pass !== pass1){console.error('Passwords don\'t match')}

    // TODO flesh out Wed 25 Jan 2017 05:32:38 UTC
  }
  forgottenPass(){
    // TODO flesh out this method to call firebase's api for forgotten password Wed 25 Jan 2017 05:31:45 UTC
  }
  subscribeAuthChange(fn){
    this.authSubs.push(fn);
    return () => {
      this.authSubs.splice(fn);
    }
  }
  onAuthChange(){
    return firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(user.isAnonymous){
          // TODO store cookie with user uid Wed 25 Jan 2017 05:10:49 UTC
        }else{
          // TODO check if there is anonymous cookie data. If there is transfer user data to new account. Delete cookie Wed 25 Jan 2017 05:11:07 UTC
          // TODO add user to active campaign and store a flag in firebase to show that email has been added to active campaign to avoid duplicate requests Wed 25 Jan 2017 05:30:20 UTC
          // TODO sync user data to firebase Wed 25 Jan 2017 05:27:21 UTC
        }
        this.authSubs.forEach(sub => sub(user));
      }else{
        this.anonymousSignIn();
      }
    });
  }
  signOut(){
    return firebase.auth().signOut();
  }
}

Auth.$inject = ['dbService'];

HTC.module('AuthService', Auth);
