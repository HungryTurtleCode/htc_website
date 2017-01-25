import HTC from '../common/htc';

class ModalCtrl{
  constructor() {

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

ModalCtrl.$inject = [];

HTC.module('modalCtrl', ModalCtrl)
