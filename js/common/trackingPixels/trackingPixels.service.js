class PixelService{
  constructor() {
    this.GASubs = [];
  }
  GAReady(){
    this.GASubs.forEach(sub => {
      sub();
    });
  }
  onGAReady(callback){
    this.GASubs.push(callback);
  }
}

export default PixelService;
