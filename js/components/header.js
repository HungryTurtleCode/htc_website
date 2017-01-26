import HTC from '../common/htc';

class HeaderCtrl{
  constructor(modal, auth) {
    this.modal = modal;
    this.auth = auth;
  }
  $onInit(){
    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
  }
  onAuthChange(user){
    if(user.isAnonymous){
      this['header-signin-btn'].show();
      this['header-logout'].hide();
    }else{
      this['header-signin-btn'].hide();
      this['header-logout'].show();
    }
  }
  showModal(){
    this.modal.show();
  }
}

HeaderCtrl.$inject = ['modalCtrl', 'AuthService'];

HTC.module('headerCtrl', HeaderCtrl)
