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
}

userData.$inject = ['firebaseService']

export default userData;
