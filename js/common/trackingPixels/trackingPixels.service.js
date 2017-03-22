class PixelService{
  constructor(analytics) {
    this.GASubs = [];
    this.FBSubs = analytics.FbEventBacklog;
    this.ACSubs = [];
  }
  GAReady(){
    this.GASubs.forEach(sub => {
      sub();
    });
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
}

PixelService.$inject = ['analyticsService'];

export default PixelService;
