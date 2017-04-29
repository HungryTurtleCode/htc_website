class AnalyticsService{
  constructor() {
    this.path = window.location.pathname;
    this.FbEventBacklog = [];
    this.GaEventBacklog = [];

    window.analytics = this;
  }
  trackEvent(type, action, label=this.path, value=null){
    this.gaBacklogWrapper(() => {
      ga('send', 'event', type, action, label, value);
    });
  }
  trackNonInteraction(type, action, label=this.path){
    this.gaBacklogWrapper(() => {
      ga('send', 'event', type, action, label, null, {'nonInteraction': 1});
    });
  }
  sendEventWithMetric(type, action, label=this.path, metric, metricValue){
    this.gaBacklogWrapper(() => {
      ga('send', 'event', type, action, label, {metric: metricValue})
    });
  }
  setMetric(metric, value){
    this.gaBacklogWrapper(() => {
      ga('set', metric, value)
    });
  }
  setDimension(dimension, value){
    this.gaBacklogWrapper(() => {
      ga('set', dimension, value)
    });
  }
  gaBacklogWrapper(callback){
    if(window.ga){
      callback();
    }else{
      this.GaEventBacklog.push(callback);
    }
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
  fbTrackCustom(eventType, data, key){
    if(window.fbq){
      fbq('trackCustom', eventType, data);
    }else{
      this.FbEventBacklog.push(() => {
        if(data[key]){
          fbq('trackCustom', eventType, data);
        }
      });
    }
  }
}

AnalyticsService.$inject = [];

export default AnalyticsService;
