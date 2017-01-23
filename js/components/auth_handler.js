import HTC from '../common/htc';
import $ from '../common/htcQuery';

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
  setActive(e){
    let active = $('.login-modal-container .active');
    active.forEach(btn => {
      btn.removeClass('active');
    });

    let el = $(e.target, true);

    el.addClass('active');

    let forItem = el.attr('for');
    $('#' + forItem).addClass('active');
  }
  signOut(){
    this.AuthService.signOut()
      .then(() => {
        this.signedIn = false;
        console.log('signed out')
      })
      .catch((err) => console.log('error signing out', err));
  }
  closeModal(e){
    e.stopPropagation();

    let el = $(e.target, true);
    if(el.hasClass('login-modal-container')){
      el.hide();
    }

  }
  showModal(modal){
    modal.show('flex');
  }
}

Auth_Handler.$inject = ['AuthService'];

HTC.module('Auth_Handler', Auth_Handler);
