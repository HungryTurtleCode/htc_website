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
  signInWithUserAndPass(email, pass){
    if(!this.validateEmail(email)){console.error('Invalid email'); return Promise.reject('Invalid Email')}

    return firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => console.log('logged in'))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return error;
      });
  }
  signInWithRedirect(provider){
    firebase.auth().signInWithRedirect(provider);

    return firebase.auth().getRedirectResult()
      .then(result => {
        return result;
      })
  }
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  createUserWithPass(email, pass, pass1){
    if(pass !== pass1){console.error('Passwords don\'t match'); return Promise.reject('Password\'s don\'t match')}
    if(pass.length < 8){console.error('password too short. Must be at least 8 characters'); return Promise.reject('password too short. Must be at least 8 characters')}
    if(!this.validateEmail(email)){console.error('Invalid email'); return Promise.reject('Invalid Email')}

    return firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(() => {console.log('done')})
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return error;
      });

  }
  forgottenPass(email){

    if(this.validateEmail(email)){
      return firebase.auth().sendPasswordResetEmail(email)
        .catch(err => {
          console.error(err)
          return err;
        });
    }

    console.error('Invalid Email');
    return Promise.reject('Invalid Email');
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
          localStorage.setItem('anon_user_id', user.uid);
          console.log(user.uid);

        }else{
          console.log(user, 'REAL');
          let anonUser = localStorage.getItem('anon_user_id');
          if(anonUser){

            console.log(anonUser, 'FETCHED');
            localStorage.setItem('anon_user_id', null);

            // transfer user data

            this.db.getUserData(anonUser)
              .then(data => {
                console.log(data);
              })

          }
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
