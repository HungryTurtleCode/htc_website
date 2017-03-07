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
    this.cart = [];

    this.auth.subscribeAuthChange(this.onAuthChange.bind(this));
    this.userData.getNotifications(
                    notifications => {
                      this.$timeout(() => {
                        this.notifications = notifications
                      });
                    }
                  );

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
  cartClick(){
    window.location.href = '/checkout';
  }
  clickNotificationItem(item){
    this.userData.markNotificationRead(item.notif_id);
    if(item.notification_type === 'comment_reply'){
      window.location.href = item.location + '?comment=' + item.firebase_id;
    }
  }
}

HeaderController.$inject = ['auth', 'userData', '$timeout'];

export default HeaderController;
