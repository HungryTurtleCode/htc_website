class LoginModalController{
  constructor() {}
  $onInit(){
    this.hideModal = false;
  }
  hideModalMarkup($event){
    $event.stopPropagation();
    this.closeModal($event);
  }
}

export default LoginModalController;
