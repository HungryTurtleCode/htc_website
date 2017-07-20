import firebase from 'firebase';

class Auth{
  constructor(firebaseService, dataService, analytics) {
    this.fb = firebaseService;
    this.dataService = dataService;
    this.analytics = analytics;

    this.authSubs = [];
    this.loggedIn = false;

    this.isLoggedIn();
  }
  isLoggedIn() {
    return this.fb.isLoggedIn()
      .then(res => {
        this.authSubs.forEach(fn => fn(res));
        this.loggedIn = res;
        return this.loggedIn;
      });
  }
  signOut() {
    return this.fb.logOut()
      .then(res => {
        this.authSubs.forEach(fn => fn(false));
        this.loggedIn = false;
        return res;
      });
  }
  subscribeAuthChange(fn) {
    this.authSubs.push(fn);
  }

  // TODO will have to update Thu 20 Jul 2017 21:55:25 UTC
  forgottenPass(email){
    console.log('forgotten password');
  }
}

Auth.$inject = ['firebaseService', 'dataService', 'analyticsService'];

export default Auth;
