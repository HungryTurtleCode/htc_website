import HTC from '../common/htc';

class HeaderCtrl{
  constructor(modal) {
    this.modal = modal;
  }
  showModal(){
    this.modal.show();
  }
}

HeaderCtrl.$inject = ['modalCtrl'];

HTC.module('headerCtrl', HeaderCtrl)
