class userData{
  constructor(firebaseService, analytics) {
    this.fb = firebaseService;
    this.analytics = analytics;

    this.user = {};

    this.getUserMeta();
  }
  getUserMeta(){
    if(this.user.name){return Promise.resolve(this.user)}

    return this.fb.getUserMeta()
      .then(meta => {
        console.log(meta);
        this.user = meta;
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
}

userData.$inject = ['firebaseService', 'analyticsService'];

export default userData;
