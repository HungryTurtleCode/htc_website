class Auth{
  constructor(firebaseService, analytics) {
    this.fb = firebaseService;
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
}

Auth.$inject = ['firebaseService', 'analyticsService'];

export default Auth;
