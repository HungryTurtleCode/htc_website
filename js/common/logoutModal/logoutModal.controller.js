class LogOutController{
  constructor(auth) {
    this.auth = auth;
  }
  hide($event){
    this.stopPropagation($event);
    this.closeModal();
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
  signOut($event){
    this.auth.signOut();
    this.hide($event);
  }
}

LogOutController.$inject = ['auth'];

export default LogOutController;
