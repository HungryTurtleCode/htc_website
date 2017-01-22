import $ from './htcQuery';
import HTC from './htc';

class Dom{
  constructor(AuthService) {
    this.AuthService = AuthService;
  }
  $onInit(){
    console.log('On INit')

    $('#fb_signin').click((event) => {
      this.AuthService.facebookSignIn()
        .then((result) => {
          console.log('here');
          console.log(result);
        });
    });

    $('#fb_signout').click((event) => {
      this.AuthService.signOut()
        .then(() => console.log('signed out'))
        .catch((err) => console.log('error signing out', err));
    });
  }
}

Dom.$inject = ['AuthService'];

HTC.module('DomService', Dom)
