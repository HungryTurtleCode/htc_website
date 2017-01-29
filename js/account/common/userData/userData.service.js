class userData{
  constructor(firebaseService) {
    this.firebaseService = firebaseService;
    this.data = {};
  }
  getUserMeta(id){
    if(this.data.name){return Promise.resolve(this.data)}

    return this.firebaseService.getUserMeta(id)
      .then(data => {
        return this.data = data;
      });
  }
  setUserMeta(data){
    if(!this.data.user_id){return Promise.reject('unknown user')}

    return this.firebaseService.setUserMeta(this.data.user_id, data)
      .then(() => {
        this.data = data;
        return true;
      });
  }
}

userData.$inject = ['firebaseService']

export default userData;
