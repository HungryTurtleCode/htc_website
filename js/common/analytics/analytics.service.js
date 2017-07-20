class AnalyticsService{
  constructor(dataService, firebaseService) {
    this.path = window.location.pathname;
    this.FbEventBacklog = [];
    this.GaEventBacklog = [];
    this.dataService = dataService;
    this.fb = firebaseService;
    this.user = {};

    window.analytics = this;
    window.trackUserEvent = this.trackUserEvent.bind(this);
  }
  trackEvent(type, action, label=this.path, value=null){
    this.gaBacklogWrapper(() => {
      ga('send', 'event', type, action, label, value);
    });
    this.trackAcEvent(type, action, label, value)
  }
  trackUserEvent(type, data) {
    // TODO no need to use the queue anymore. Just call the method Thu 20 Jul 2017 22:03:50 UTC
    this.fb.trackUserEvent(type, data);
  }
  trackAcEvent(type, action, label, value, email){
    // TODO server should deal with ensuring data stucture.
    let data = {
      event: type,
      eventdata: {
        action,
        label,
        value
      },
      visit: {
        email: this.user ? this.user.email : ''
      }
    };
    this.dataService.trackAcEvent(data);
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

AnalyticsService.$inject = ['dataService', 'firebaseService'];

export default AnalyticsService;
