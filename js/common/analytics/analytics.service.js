class AnalyticsService{
  constructor(pixelService) {
    this.ready = false;
    pixelService.onGAReady(() => {
      this.ready = true;
    });

    this.path = window.location.pathname;
  }
  trackEvent(type, action, label, value){
    label = label || this.path;
    ga('send', 'event', type, action, label, value);
  }
}

AnalyticsService.$inject = ['pixelService'];

export default AnalyticsService;
