class HeaderController{
  constructor(auth) {
    this.auth = auth;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;

    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
  }
  onAuthChange(user){
    this.loading = false;
    this.loggedIn = !user.isAnonymous;
  }
  closeSignIn(){
    this.showSignIn = false;
  }
}

HeaderController.$inject = ['auth'];

export default HeaderController;
