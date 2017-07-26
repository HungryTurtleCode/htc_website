class AccountController{
  constructor(userData, $timeout, uploadService) {
    this.userData = userData;
    this.$timeout = $timeout;
    this.uploadService = uploadService;
  }
  $onInit(){
    this.defaultImage = 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png';
    this.forgotPassword = false;
    this.error = false;
    this.loading = false;
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  save(){
    this.loading = true;

    if(this.profileImage){
      this.user.image = this.uploadService
        .dataURItoBlob(this.profileImage[0]);
    }

    this.postUserData(this.user);
  }
  postUserData(data){
    this.userData.setUserMeta(data)
      .then(() => {
        this.$timeout(() => {
          this.feedbackText = 'Successfully Updated Profile';
          this.loading = false;
        });
      })
      .catch(err => {
        this.$timeout(() => {
          this.feedbackText = 'Something Went Wrong, try again later';
          this.error = true;
          this.loading = false;
        });
      });
  }
}

AccountController.$inject = ['userData', '$timeout', 'uploadService']

export default AccountController;
