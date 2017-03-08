class AccountController{
  constructor(userData, $timeout) {
    this.userData = userData;
    this.$timeout = $timeout;
  }
  $onInit(){
    this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
    this.forgotPassword = false;
    this.error = false;
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  // TODO use the directive from SS to get ng-model like behaviour with the image upload Sun 29 Jan 2017 03:26:53 UTC
  save(){
    this.userData.setUserMeta(this.user)
      .then(() => {
        this.$timeout(() => {
          this.feedbackText = 'Successfully Updated Profile';
        });
      })
      .catch(err => {
        this.$timeout(() => {
          this.feedbackText = 'Something Went Wrong, try again later';
          this.error = true;
        });
      });
  }
}

AccountController.$inject = ['userData', '$timeout']

export default AccountController;
