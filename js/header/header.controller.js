class HeaderController{
  constructor(auth) {
    this.auth = auth;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
  }
  onAuthChange(user){
    this.loading = false;
    this.loggedIn = !user.isAnonymous;
  }
  showModal(modal){
    console.log('actually show modals');
    console.log(modal);
  }
}

HeaderController.$inject = ['auth'];

export default HeaderController;
