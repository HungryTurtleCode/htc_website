class TrackingPixelsController{
  constructor(auth, pixelService) {
    this.pixelService = pixelService;

    this.email = '';

    auth.subscribeAuthChange(user => {
      this.email = user.email || '';
    });
  }
  $onInit(){
    this.pixelService.googleAnalytics(0);
    this.pixelService.facebookPixel(45000);
    this.pixelService.activeCampaign(10000);
  }
}

TrackingPixelsController.$inject = ['auth', 'pixelService'];

export default TrackingPixelsController;


