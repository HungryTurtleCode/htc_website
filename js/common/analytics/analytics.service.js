class AnalyticsService{
  constructor() {
    this.path = window.location.pathname;
  }
  trackEvent(type, action, label=this.path, value=null){
    ga('send', 'event', type, action, label, value);
  }
}

AnalyticsService.$inject = [];

export default AnalyticsService;
