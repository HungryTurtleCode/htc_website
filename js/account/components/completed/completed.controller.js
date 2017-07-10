class CompletedController{
  constructor() {
    this.forgotPassword = false;
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
}

export default CompletedController;
