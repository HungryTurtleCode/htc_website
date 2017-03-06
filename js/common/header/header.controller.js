class HeaderController{
  constructor(auth, userData, $timeout) {
    this.auth = auth;
    this.userData = userData;
    this.$timeout = $timeout;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;
    this.showLogOut = false;
    this.notificationActive = false;

    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
    this.userData.getNotifications(
                  notifications => this.notifications = notifications);

    window.addEventListener('click', event => {
      this.$timeout(() => {
        this.notificationActive = false;
      });
    });
  }
  notificationClick(e){
    this.stopPropagation(e);
    this.notificationActive = !this.notificationActive;
  }
  stopPropagation(e){
    e.stopPropagation();
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
  clickNotificationItem(item){
    // TODO clear the notification Mon 06 Mar 2017 17:05:01 UTC

    // TODO add query params to allow other functionality Mon 06 Mar 2017 17:05:26 UTC
    window.location.href = item.location;
  }
}

HeaderController.$inject = ['auth', 'userData', '$timeout'];

export default HeaderController;
