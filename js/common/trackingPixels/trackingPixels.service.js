class PixelService{
  constructor(analytics, $timeout) {
    this.$timeout = $timeout;

    this.GASubs = analytics.GaEventBacklog;
    this.FBSubs = analytics.FbEventBacklog;
    this.ACSubs = [];
  }
  GAReady(){
    this.GASubs.forEach(sub => {
      sub();
    });
    this.GASubs = [];
  }
  ACReady(){
    this.ACSubs.forEach(sub => {
      sub();
    });
  }
  FBReady(){
    this.FBSubs.forEach(sub => {
      sub();
    });
    this.FBSubs = [];
  }
  googleAnalytics(delay){
    this.$timeout(() => {
      if(!window.ga){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)
        },i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-57008136-3', 'auto');
        ga('send', 'pageview');

        this.GAReady();
      }
    }, delay);
  }
  activeCampaign(delay){
    this.$timeout(() => {
      var trackcmp_email = this.email;
      var trackcmp = document.createElement("script");
      trackcmp.async = true;
      trackcmp.type = 'text/javascript';
      trackcmp.src = '//trackcmp.net/visit?actid=609631196&e='+encodeURIComponent(trackcmp_email)+'&r='+encodeURIComponent(document.referrer)+'&u='+encodeURIComponent(window.location.href);
      var trackcmp_s = document.getElementsByTagName("script");
      if (trackcmp_s.length) {
        trackcmp_s[0].parentNode.appendChild(trackcmp);
      } else {
        var trackcmp_h = document.getElementsByTagName("head");
        trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
      }
      this.ACReady();
    }, delay);
  }
  facebookPixel(delay){
    return this.$timeout(() => {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1526875970974601', {
        em: this.email
      });
      fbq('track', 'PageView');
      this.FBReady();
    }, delay);
  }
}

PixelService.$inject = ['analyticsService', '$timeout'];

export default PixelService;
