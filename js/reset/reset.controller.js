class ResetController{
  constructor(firebaseService, params) {
    this.fb = firebaseService;
    this.token = params.token;
  }
  $onInit() {
    this.password = '';
    this.password2 = '';
    this.submitted = false;
  }
  submit() {
    this.infoMessage = '';
    if(!this.password) {
      this.infoType = 'error';
      this.infoMessage = 'Enter a new password';
      return;
    }
    if(this.password !== this.password2) {
      this.infoType = 'error';
      this.infoMessage = 'Passwords do not match';
      this.submitted = false;
    } else if(!this.submitted) {
      this.submitted = true;
      this.fb.resetPassword(this.password, this.password2, this.token)
        .then(res => {
          this.submitted = false;
          if(res.errors) {
            this.infoType = 'error';
            this.infoMessage = res.errors[0].msg;
            return;
          }
          if(res.error) {
            this.infoType = 'error';
            this.infoMessage = res.error;
            return;
          }
          this.infoType = 'success';
          this.infoMessage = 'Password successfully changed';
          this.password = '';
          this.password2 = '';
        });
    }
  }
}

ResetController.$inject = ['firebaseService', '$stateParams'];

export default ResetController;
