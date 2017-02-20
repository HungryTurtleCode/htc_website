class HeaderController{
  constructor(auth) {
    this.auth = auth;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;
    this.showLogOut = false;

    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
  }
  onAuthChange(user){
    this.loading = false;
    if(user){
      this.loggedIn = !user.isAnonymous;
    }else{
      this.loggedIn = false;
    }
  }
  closeSignIn(){
    this.showSignIn = false;
  }
  closeLogOut(){
    this.showLogOut = false;
  }
}

HeaderController.$inject = ['auth'];

export default HeaderController;
