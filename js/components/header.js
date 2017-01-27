import HTC from '../common/htc';

class HeaderCtrl{
  constructor(modal, auth) {
    this.modal = modal;
    this.auth = auth;

    this.showText = true;
  }
  $onInit(){
    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
    this.loggedIn = false;
  }
  toggle(){
    this.showText = !this.showText;
  }
  onAuthChange(user){
    this.loggedIn = !user.isAnonymous;
    this.$digest();
  }
  showModal(modal){
    this.modal.show(modal);
  }
}

HeaderCtrl.$inject = ['modalCtrl', 'AuthService'];

HTC.module('headerCtrl', HeaderCtrl)
