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
    this.changePassActive = false;
    this.changePassData = {};
  }
  forgotPass(){
    this.forgotPassword = true;
  }
  closeForgot(){
    this.forgotPassword = false;
  }
  triggerChangePassword() {
    this.changePassActive = true;
  }
  changePassword() {
    const {
      oldPass,
      newPass,
      repeatPass,
    } = this.changePassData;

    if (!oldPass) {
      this.error = true;
      this.feedbackText = 'Old password must not be blank';
      return;
    } else if (!newPass) {
      this.error = true;
      this.feedbackText = 'New password must not be blank';
      return;
    } else if (newPass.length < 6) {
      this.error = true;
      this.feedbackText = 'New password must be at least 6 characters';
      return;
    } else if (newPass !== repeatPass) {
      this.error = true;
      this.feedbackText = 'Passwords must match';
      return;
    }
    this.error = false;
    this.userData.changeUserPassword(this.changePassData)
      .then(res => {
        this.changePassActive = false;
        this.changePassData = {};
        if (res.success) {
          this.feedbackText = 'Successfully Updated Password';
        } else if (res.errors) {
          this.error = true;
          this.feedbackText = res.errors[0].msg;
        } else {
          this.error = true;
          this.feedbackText = 'Something went wrong, please try again later';
        }
      })
      .catch(err => {
        console.log(err);
        this.changePassActive = false;
        this.error = true;
        this.feedbackText = 'Something went wrong, please try again later';
      })

  }
  save(){
    this.loading = true;

    if(this.profileImage){
      // this.user.image = this.uploadService
      //   .dataURItoBlob(this.profileImage[0]);
      this.user.image = this.profileImage[0];
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

        if(err.length) {
          this.$timeout(() => {
            this.feedbackText = err[0].msg;
            this.error = true;
            this.loading = false;
          });
        } else {
          this.$timeout(() => {
            this.feedbackText = 'Something Went Wrong, try again later';
            this.error = true;
            this.loading = false;
          });
        }
      });
  }
}

AccountController.$inject = ['userData', '$timeout', 'uploadService']

export default AccountController;
