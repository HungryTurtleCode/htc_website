class AccountController{
  constructor(userData) {
    this.userData = userData;
    this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
  }
  // TODO use the directive from SS to get ng-model like behaviour with the image upload Sun 29 Jan 2017 03:26:53 UTC
  save(){
    this.userData.setUserMeta(this.user)
      .then(() => {
        // TODO inform user of success Sun 29 Jan 2017 04:27:01 UTC
      })
      .catch(err => {
        // TODO error handling Sun 29 Jan 2017 04:24:40 UTC
      });
  }
}

AccountController.$inject = ['userData']

export default AccountController;
