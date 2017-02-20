import firebase from 'firebase';

class Auth{
  constructor($timeout) {
    this.loggedIn = false;
    this.authSubs = [];
    this.$timeout = $timeout;

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
  // TODO migrate data from anon account on auth change Thu 16 Feb 2017 10:26:18 GMT
  // This will have to occur in the userData service by subscribing to authChanges. Otherwise
  // there will be a circular dependency
  onAuthChange(){
    firebase.auth().onAuthStateChanged((user) => {
      this.$timeout(() => {
        if(user){
          if(!user.isAnonymous){
            this.loggedIn = true;
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

Auth.$inject = ['$timeout'];

export default Auth;
