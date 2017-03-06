class HeaderController{
  constructor(auth, userData) {
    this.auth = auth;
    this.userData = userData;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;
    this.showLogOut = false;

    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
    this.userData.getNotifications(
                  notifications => this.notifications = notifications);
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

HeaderController.$inject = ['auth', 'userData'];

export default HeaderController;
