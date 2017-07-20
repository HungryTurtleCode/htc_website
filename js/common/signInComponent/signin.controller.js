class SignInComponentController{
  constructor(auth, firebaseService) {
    this.activeTab = 0;
    this.authService = auth;
    this.fb = firebaseService;

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
          // TODO also check auth with auth service Thu 20 Jul 2017 19:58:45 UTC
          this.hide();
        }
      });

    // TODO fix logic in the then block Thu 16 Feb 2017 10:22:40 GMT
    // this.authService.signInWithUserAndPass(email, pass)
    //   .then(() => this.hide('sign-in'))
    //   .catch(err => console.log(err));
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
          // TODO also check auth with auth service Thu 20 Jul 2017 19:58:45 UTC
          this.hide();
        }
      })
      .catch(err => {
        console.error(err);
      });

    // TODO fix logic in the then block Thu 16 Feb 2017 10:22:40 GMT
    // this.authService.createUserWithPass(email, password, passrepeat)
    //   .then(() => this.hide('sign-in'))
    //   .catch((err) => console.log(err))
  }
  handleErrors(errors) {
    this.errors = {};
    errors.forEach(err => {
      this.errors[err.param] = err.msg;
    });
  }
  showForgottenPassModal(){
    this.forgotPass();
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}

SignInComponentController.$inject = ['auth', 'firebaseService'];

export default SignInComponentController;
