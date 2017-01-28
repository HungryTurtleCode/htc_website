import HTC from '../common/htc';

class ModalCtrl{
  constructor(authService) {
    this.authService = authService;
  }
  toggleView(view){
    this.authview.forEach(el => el.hide());
    this['header-buttons'].forEach(el => el.removeClass('active'));
    this['header-buttons'][view].addClass('active');
    this.authview[view].show();
  }
  $onInit(){
    this.modals.forEach(modal => {
      modal.click((e) => {
        modal.hide();
      }, true)
    });
  }
  logIn(){
    let email = this['login-email'].value();
    let pass = this['login-pass'].value();

    this.authService.signInWithUserAndPass(email, pass)
      .then(() => this.hide('sign-in'))
      .catch(err => console.log(err));
  }
  signUp(){
    let email = this['signup-email'].value();
    let password = this['signup-pass'].value();
    let passrepeat = this['signup-pass1'].value();

    this.authService.createUserWithPass(email, password, passrepeat)
      .then(() => this.hide('sign-in'))
      .catch((err) => console.log(err))
  }
  resetPass(){
    let email = this['reset-email'].el.value;

    this.authService.forgottenPass(email);

    this['forgot-cont'].hide();
    this['forgot-success'].show();
  }
  signOut(){
    this.authService.signOut();
    this.hide('sign-out');
  }
  hide(modal){
    this.modals[modal].hide();
  }
  show(modal){
    this.modals.forEach(modal => {
      modal.hide();
    });
    this.modals[modal].show('flex');
  }
}

ModalCtrl.$inject = ['AuthService'];

HTC.module('modalCtrl', ModalCtrl)
