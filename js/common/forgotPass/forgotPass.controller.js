class forgotPassController{
  constructor(auth) {
    this.auth = auth;
  }
  $onInit(){
    this.forgotSuccess = false;
  }
  resetPass(){
    this.auth.forgottenPass(this.email);
    this.forgotSuccess = true;
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}

forgotPassController.$inject = ['auth'];

export default forgotPassController;
