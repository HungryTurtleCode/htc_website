class AnalyticsService{
  constructor() {
    this.path = window.location.pathname;
  }
  trackEvent(type, action, label=this.path, value=null){
    ga('send', 'event', type, action, label, value);
  }
  trackNonInteraction(type, action, label=this.path){
    ga('send', 'event', type, action, label, null, {'nonInteraction': 1});
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
