class TrackingPixelsController{
  constructor(auth, $timeout) {
    this.$timeout = $timeout;

    this.email = '';

    auth.subscribeAuthChange(user => {
      this.email = user.email;
    });
  }
  $onInit(){
    this.facebookPixel();
  }
  facebookPixel(){
    this.$timeout(() => {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1526875970974601', {
        em: this.email
      });
      fbq('track', 'PageView');
    }, 45000);
  }
}

TrackingPixelsController.$inject = ['auth', '$timeout'];

export default TrackingPixelsController;


