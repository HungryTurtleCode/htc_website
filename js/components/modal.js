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
    this.modalContainer.click((e) => {
      this.modalContainer.hide();
    }, true);
  }
  show(){
    this.modalContainer.show('flex');
  }
}

ModalCtrl.$inject = ['AuthService'];

HTC.module('modalCtrl', ModalCtrl)
