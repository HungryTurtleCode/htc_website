import HTC from '../common/htc';

class Auth_Handler{
  constructor(AuthService) {
    this.AuthService = AuthService;

    this.signedIn = false;
  }
  $onInit(){
    this.signedIn = false;
    this.AuthService.onAuthChange(user => {
      console.log('HERE', user);
      if(user){
        this.signedIn = true;
      }
      console.log(this.signedIn);
    });
  }
  fbSignin(){
    this.AuthService.facebookSignIn();
  }
  glSignin(){
    this.AuthService.googleSignIn();
  }
  ghSignin(){
    this.AuthService.githubSignIn();
  }
  setActive(e, btns){
    btns.forEach(btn => {
      btn.removeClass('active');
    });

    // TODO add active class to the button that was clicked Mon 23 Jan 2017 12:34:22 UTC
  }
  signOut(){
    this.AuthService.signOut()
      .then(() => {
        this.signedIn = false;
        console.log('signed out')
      })
      .catch((err) => console.log('error signing out', err));
  }
}

Auth_Handler.$inject = ['AuthService'];

HTC.module('Auth_Handler', Auth_Handler);
