class AccountController{
  constructor(userData) {
    this.userData = userData;
    this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
  }
  // TODO use the directive from SS to get ng-model like behaviour with the image upload Sun 29 Jan 2017 03:26:53 UTC
  save(){
    console.log('SAVING');
    console.log(this.user);
  }
}

AccountController.$inject = ['userData']

export default AccountController;
