class HeaderController{
  constructor(auth, $timeout, firebaseService, cartService) {
    this.auth = auth;
    this.fb = firebaseService;
    this.$timeout = $timeout;
    this.cartSvc = cartService;
  }
  $onInit(){
    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;
    this.showLogOut = false;
    this.notificationActive = false;

    this.cartSvc.getCart();

    this.auth.subscribeAuthChange(res => {
      this.loggedIn = res;
      this.loading = false;

      this.getNotifications();

      this.$timeout(() => {
        this.getNotifications();
      }, 30000) ;
    });

    window.addEventListener('click', event => {
      this.$timeout(() => {
        this.notificationActive = false;
      });
    });
  }
  getNotifications() {
    if(this.loggedIn) {
      // TODO why does this use a callback and not a promise? Fri 21 Jul 2017 00:30:56 UTC
      this.fb.getNotifications(
        notifications => {
          // TODO maybe show a toast or something? Sat 30 Jun 19:57:12 2018
          this.$timeout(() => {
            this.notifications = notifications
          })
        });
    }
  }
  notificationToggle(e){
    this.stopPropagation(e);
    this.notificationActive = !this.notificationActive;
  }
  stopPropagation(e){
    e.stopPropagation();
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

    this.fb.markNotificationRead(item.id)
      .then(res => {
        this.notifications = res.notifs || [];
        if(item.type === 'comment'){
          // TODO this shouldn't be item.reply_to Mon 13 Nov 2017 14:29:34 UTC
          window.location.href = item.location + '#!?comment=' + item.reply_to;
        }
      });
    this.notificationActive = !this.notificationActive;
  }
}

HeaderController.$inject = ['auth', '$timeout', 'firebaseService', 'cartService'];

export default HeaderController;
