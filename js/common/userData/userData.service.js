class userData{
  constructor(firebaseService, analytics, auth) {
    this.fb = firebaseService;
    this.analytics = analytics;

    auth.subscribeAuthChange((res) => {
      this.getUserMeta();
    });

    this.user = {};

    this.gettingMeta = false;
    this.subList = [];
  }
  changeUserPassword(obj) {
    return this.fb.changeUserPassword(obj)
      .then((res) => {
        if(res.errors) {
          throw res.errors;
        }
        return res;
      });
  }
  getUserMeta(){
    if(this.user.name){return Promise.resolve(this.user)}
    if(this.gettingMeta) {
      return new Promise((resolve, reject) => {
        const unsub = this.subToMeta((meta) => {
          unsub();
          resolve(meta);
        });
      });
    }
    this.gettingMeta = true;

    return this.fb.getUserMeta()
      .then(meta => {
        this.gettingMeta = false;
        this.user = meta || {};
        this.emitMeta(this.user);
        return this.user;
      });
  }
  setUserMeta(data){
    return this.fb.setUserMeta(data)
      .then((res) => {
        if(res.errors) {
          throw res.errors;
        }
        this.user = data;
        return true;
      });
  }
  subToMeta(fn) {
    this.subList.push(fn);

    return () => {
      const index = this.subList.indexOf(fn);

      if (index > -1) {
        this.subList.splice(index, 1);
      }
    }
  }
  emitMeta(meta) {
    this.subList.forEach(fn => {
      fn(meta);
    })
    this.subList = [];
  }
}

userData.$inject = ['firebaseService', 'analyticsService', 'auth'];

export default userData;
