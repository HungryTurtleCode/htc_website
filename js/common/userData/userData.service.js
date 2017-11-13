class userData{
  constructor(firebaseService, analytics) {
    this.fb = firebaseService;
    this.analytics = analytics;

    this.user = {};

    this.gettingMeta = false;
    this.subList = [];

    this.getUserMeta();
  }
  getUserMeta(){
    if(this.user.name){return Promise.resolve(this.user)}
    if(this.gettingMeta) {
      return new Promise((resolve, reject) => {
        this.subToMeta((meta) => {
          resolve(meta);
        });
      });
    }
    this.gettingMeta = true;

    return this.fb.getUserMeta()
      .then(meta => {
        this.user = meta;
        this.emitMeta(this.user);
        return meta;
      });
  }
  setUserMeta(data){
    return this.fb.setUserMeta(data)
      .then(() => {
        // TODO make sure api does actually return a user object Fri 21 Jul 2017 00:33:21 UTC
        this.user = data;
        return true;
      });
  }
  subToMeta(fn) {
    this.subList.push(fn);
  }
  emitMeta(meta) {
    this.subList.forEach(fn => {
      fn(meta);
    })
    this.subList = [];
  }
}

userData.$inject = ['firebaseService', 'analyticsService'];

export default userData;
