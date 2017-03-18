class AnalyticsService{
  constructor(pixelService) {
    this.ready = false;
    pixelService.onGAReady(() => {
      this.ready = true;
    });

    this.path = window.location.pathname;
  }
  trackEvent(type, value, label){
    label = label || this.path;
    ga('send', 'event', type, value, label);
  }
}

AnalyticsService.$inject = ['pixelService'];

export default AnalyticsService;
