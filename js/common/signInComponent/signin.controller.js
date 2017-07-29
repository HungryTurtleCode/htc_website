class SignInComponentController{
  constructor(auth, firebaseService, analytics) {
    this.activeTab = 0;
    this.auth = auth;
    this.fb = firebaseService;
    this.analytics = analytics;

    // TODO probably fetch the url from the API service Thu 20 Jul 2017 19:19:32 UTC
    if(window.location.hostname === 'localhost'){
      this.url = 'http://localhost:8080/v0';
    } else {
      this.url = 'https://api.hungryturtlecode.com/v0';
    }

    this.fbAuthURL = this.url + '/auth/facebook';
    this.glAuthURL = this.url + '/auth/google';
    this.ghAuthURL = this.url + '/auth/github';
    this.twAuthURL = this.url + '/auth/twitter';
  }
  logIn(){
    let email = this.loginEmail;
    let pass = this.loginPass;

    this.fb.userLogin(email, pass)
      .then(res => {
        if(res.error){
          this.errors = {
            login: res.error
          }
        } else if(res.success) {
          this.auth.isLoggedIn();
          this.hide();
        }
      });
  }
  signUp(){
    let email = this.signupEmail;
    let password = this.signupPass;
    let password2 = this.signupPass1;

    this.fb.userRegister(email, password, password2)
      .then(res => {
        if(res.errors) {
          this.handleErrors(res.errors);
        } else if(res.success) {
          this.analytics.trackEvent('Register', res.name);
          this.analytics.fbTrackEvent(
            'CompleteRegistration',
            {
              value: 0.00,
              currency: 'USD'
            },
            'currency'
          );
          this.auth.isLoggedIn();
          this.hide();
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleErrors(errors) {
    this.errors = {};
    errors.forEach(err => {
      this.errors[err.param] = err.msg;
    });
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}

SignInComponentController.$inject = ['auth', 'firebaseService', 'analyticsService'];

export default SignInComponentController;
