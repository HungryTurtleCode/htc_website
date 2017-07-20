import firebase from 'firebase';

class Auth{
  constructor($timeout, firebaseService, dataService, analytics) {
    this.loggedIn = false;
    this.authSubs = [];
    this.registerSubs = [];
    this.$timeout = $timeout;
    this.fb = firebaseService;
    this.dataService = dataService;
    this.analytics = analytics;

    this.loggedIn = false;

    this.onAuthChange();
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.fb.isLoggedIn()
      .then(res => {
        this.loggedIn = res.loggedIn;
        return this.loggedIn;
      });
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
      this.$timeout(() => {
        if(user){
          if(!user.isAnonymous){
            this.loggedIn = true;
            this.fb.checkIfSubscribed(user.uid, user.email)
              .then(subscribed => {

                let name = user.displayName;
                name = name.split(' ');
                let first_name = name[0];
                let last_name = name[1];
                if(name.length > 2){
                  name.splice(0,1);
                  last_name = name.join(' ');
                }

                if(!subscribed || subscribed == 'false'){
                  this.analytics.trackEvent('Register', user.displayName);
                  this.analytics.fbTrackEvent('CompleteRegistration', {value: 0.00, currency: 'USD'}, 'currency');
                  this.registerSubs.forEach(sub => sub(user));

                  this.dataService.subscribeUser(user.email, first_name, last_name)
                    .then(data => {
                      if(data.success || data.error === 'duplicate'){
                        this.fb.markSubscribedAC(user.uid, user.email);
                      }
                    });
                }
              });
          }
        }else{
          this.anonymousSignIn();
        }
        this.authSubs.forEach(sub => sub(user));
      });
    });
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
  createUserWithPass(email, password, passrepeat){
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
  anonymousSignIn(){
    firebase.auth().signInAnonymously()
      .catch(err => console.error(err));
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
  subscribeRegister(fn){
    this.registerSubs.push(fn);
    return () => {
      this.registerSubs.splice(fn);
    }
  }
  subscribeAuthChange(fn){
    this.authSubs.push(fn);
    return () => {
      this.authSubs.splice(fn);
    }
  }
  signOut(){
    return firebase.auth().signOut();
  }
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

Auth.$inject = ['$timeout', 'firebaseService', 'dataService', 'analyticsService'];

export default Auth;
