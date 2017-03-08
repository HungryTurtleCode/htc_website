class AccountController{
  constructor(userData, $timeout, uploadService) {
    this.userData = userData;
    this.$timeout = $timeout;
    this.upload = uploadService;
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
  save(){
    if(this.profileImage){
      this.upload
        .uploadFile(this.profileImage[0], this.user.user_id, 'profile_image', 'Profile_Images')
        .then(data => {
          this.user.image = data;
          this.postUserData(this.user);
        });
    }else{
      this.postUserData(this.user);
    }
  }
  postUserData(data){
    this.userData.setUserMeta(data)
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

AccountController.$inject = ['userData', '$timeout', 'uploadService']

export default AccountController;
