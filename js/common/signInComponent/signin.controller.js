class SignInComponentController{
  constructor(auth) {
    this.activeTab = 0;
    this.authService = auth;
  }
  logIn(){
    let email = this.loginEmail;
    let pass = this.loginPass;

    // TODO fix logic in the then block Thu 16 Feb 2017 10:22:40 GMT
    this.authService.signInWithUserAndPass(email, pass)
      .then(() => this.hide('sign-in'))
      .catch(err => console.log(err));
  }
  signUp(){
    let email = this.signupEmail;
    let password = this.signupPass;
    let passrepeat = this.signupPass1;

    // TODO fix logic in the then block Thu 16 Feb 2017 10:22:40 GMT
    this.authService.createUserWithPass(email, password, passrepeat)
      .then(() => this.hide('sign-in'))
      .catch((err) => console.log(err))
  }
  showForgottenPassModal(){
    // TODO create component from forgotten password modal Thu 16 Feb 2017 10:19:28 GMT
    // TODO add logic to show forgotten password modal Thu 16 Feb 2017 10:19:09 GMT
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}

SignInComponentController.$inject = ['auth'];

export default SignInComponentController;
