class LoginModalController{
  constructor() {}
  $onInit(){
    this.hideModal = false;
    this.showForgotPass = false;
  }
  hideModalMarkup($event){
    $event.stopPropagation();
    this.closeModal($event);
  }
  forgotPass(){
    this.showForgotPass = true;
  }
}

export default LoginModalController;
