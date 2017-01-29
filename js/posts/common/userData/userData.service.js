class userData{
  constructor(firebaseService, auth) {
    this.fb = firebaseService;
    this.auth = auth;

    this.getUserMeta();
  }
  getUserMeta(){
    this.auth.waitForAuth()
      .then(snap => {
        this.fb.getUserMeta(snap.uid)
          .then(user => {
            this.user = user;
          });
      });
  }
  setComment(loc, text, isReply){
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
}

userData.$inject = ['firebaseService', 'auth'];

export default userData;
