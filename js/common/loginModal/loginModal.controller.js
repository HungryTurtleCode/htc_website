class LoginModalController{
  constructor() {
    this.hideModal = false;
  }
  hideModalMarkup($event){
    $event.stopPropagation();
    this.closeModal($event);
  }
}

export default LoginModalController;
