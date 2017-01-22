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
