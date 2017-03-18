class AnalyticsService{
  constructor() {
    this.path = window.location.pathname;
  }
  trackEvent(type, action, label=this.path, value=null){
    ga('send', 'event', type, action, label, value);
  }
  setMetric(metric, value){
    ga('set', metric, value)
  }
  setDimension(dimension, value){
    ga('set', dimension, value)
  }
}

AnalyticsService.$inject = [];

export default AnalyticsService;
