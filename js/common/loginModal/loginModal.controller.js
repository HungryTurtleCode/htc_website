class LoginModalController{
  constructor() {
    this.hideModal = false;
  }
  hideModalMarkup($event){
    $event.stopPropagation();
    this.hideModal = true;
  }
}

export default LoginModalController;
