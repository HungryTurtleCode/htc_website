class HeaderController{
  constructor(auth, $timeout, firebaseService, cartService) {
    this.auth = auth;
    this.fb = firebaseService;
    this.$timeout = $timeout;
    this.cartSvc = cartService;
    this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
  }
  $onInit(){
    const urlParams = new URLSearchParams(window.location.search);
    const confirmParam = urlParams.get('confirmed');

    this.showEmailConfirm = false;
    const emailConfirm = JSON.parse(localStorage.getItem('emailconfirmed'));
    if (confirmParam === 'email' && !emailConfirm) {
      this.showEmailConfirm = true;
      localStorage.setItem('emailconfirmed', JSON.stringify(true));
      this.$timeout(() => {
        this.showEmailConfirm = false;
      }, 5000);
    }

    this.loggedIn = false;
    this.loading = true;
    this.showSignIn = false;
    this.showLogOut = false;
    this.notificationActive = false;

    // this.cartSvc.getCart();

    let hasNotifCheck = false;
    this.auth.subscribeAuthChange(res => {
      this.loggedIn = res;
      this.loading = false;

      this.getNotifications();

      if (!hasNotifCheck) {
        hasNotifCheck = true;
        this.notificationTimeout();
      }
    });

    window.addEventListener('click', event => {
      this.$timeout(() => {
        this.notificationActive = false;
      });
    });
  }
  notificationTimeout() {
    this.$timeout(() => {
      this.getNotifications();
      this.notificationTimeout();
    }, 30000) ;
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
