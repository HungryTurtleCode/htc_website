class userData{
  constructor(firebaseService, auth, dataService) {
    this.fb = firebaseService;
    this.auth = auth;
    this.dataService = dataService;

    this.user = {};

    this.getUserMeta();
  }
  getSignedVideoUrl(video){
    return this.dataService.getSignedLessonVideo(this.user.user_id, video);
  }
  getUserMeta(id){
    if(this.user.name){return Promise.resolve(this.user)}

    if(id){
      return this.fb.getUserMeta(id)
        .then(user => {
          return this.user = user;
        });
    }else{
      this.auth.waitForAuth()
        .then(snap => {
          if(snap && snap.uid && !snap.isAnonymous){
            this.fb.getUserMeta(snap.uid)
              .then(user => {
                this.user = user;
              });
          }
        });
    }
  }
  setComment(loc, text, isReply){
    if(isReply){
      loc = loc + isReply + '/replies/';
    }

    return this.fb.setComment(
      loc,
      text,
      isReply,
      this.user.name,
      this.user.user_id,
      this.user.image
    )
    .then(() => true)
    .catch(err => err);
  }
  setUserMeta(data){
    if(!this.user.user_id){return Promise.reject('unknown user')}

    return this.fb.setUserMeta(this.user.user_id, data)
      .then(() => {
        this.user = data;
        return true;
      });
  }
}

userData.$inject = ['firebaseService', 'auth', 'dataService'];

export default userData;
