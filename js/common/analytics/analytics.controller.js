class AnalyticsController{
  constructor(analyticsService) {
    this.analytics = analyticsService;
  }
  trackCategory(cat){
    this.analytics.setDimension('Dimension2', cat);
  }
  trackDurationEvents(){
    const trackDuration = () => {
      [15, 30, 60, 120].forEach(time => {
        let text = time + ' Seconds';
        let delay = time * 1000;

        setTimeout(() => {
          this.analytics.trackEvent('Time', text);
        }, delay);
      });
      window.removeEventListener('scroll', trackDuration);
    }

    window.addEventListener('scroll', trackDuration);
  }
}

AnalyticsController.$inject = ['analyticsService'];

export default AnalyticsController;
