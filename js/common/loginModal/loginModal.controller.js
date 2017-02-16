class LoginModalController{
  constructor() {
    this.activeTab = 0;
    this.hideModal = false;
  }
  decideToHideModal($event){
    this.stopPropagation($event);
    if(this.bgClose){
      this.hideModal = true;
    }
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}

export default LoginModalController;
