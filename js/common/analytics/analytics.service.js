class AnalyticsService{
  constructor() {
    this.path = window.location.pathname;
    this.FbEventBacklog = [];
  }
  trackEvent(type, action, label=this.path, value=null){
    ga('send', 'event', type, action, label, value);
  }
  trackNonInteraction(type, action, label=this.path){
    ga('send', 'event', type, action, label, null, {'nonInteraction': 1});
  }
  sendEventWithMetric(type, action, label=this.path, metric, metricValue){
    ga('send', 'event', type, action, label, {metric: metricValue})
  }
  setMetric(metric, value){
    ga('set', metric, value)
  }
  setDimension(dimension, value){
    ga('set', dimension, value)
  }
  fbTrackEvent(eventType, data, key){
    if(window.fbq){
      fbq('track', eventType, data);
    }else{
      this.FbEventBacklog.push(() => {
        if(data[key]){
          fbq('track', eventType, data);
        }
      });
    }
  }
}

AnalyticsService.$inject = [];

export default AnalyticsService;
