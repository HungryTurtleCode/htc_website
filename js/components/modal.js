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
    this['sign-in-modal'].click((e) => {
      this.hide('sign-in-modal');
    }, true);
    this['sign-out-modal'].click((e) => {
      this.hide('sign-out-modal');
    }, true);
  }
  signOut(){
    this.authService.signOut();
    this.hide('sign-out-modal');
  }
  hide(modal){
    this[modal].hide();
  }
  show(modal){
    this[modal].show('flex');
  }
}

ModalCtrl.$inject = ['AuthService'];

HTC.module('modalCtrl', ModalCtrl)
