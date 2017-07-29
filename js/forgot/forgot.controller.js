class forgotController{
  constructor(fb) {
    this.fb = fb;
  }
  $onInit() {
    this.email = '';
    this.emailValid = false;
    this.error = false;
    this.infoMessage = '';
    this.infoType = '';
  }
  submit() {
    if(this.isEmailValid()) {
      this.fb.sendResetEmail(this.email)
        .then(res => {
          if(res.success) {
            this.infoType = 'success';
            this.infoMessage = `An email has been sent to ${this.email} if it is a valid user email.`;
            this.email = '';
          } else {
            this.infoType = 'error';
            this.infoMessage = res.error;
          }
        });
    } else {
      this.error = true;
    }
  }
  isEmailValid() {
    this.emailValid = this.validateEmail(this.email);
    return this.emailValid;
  }
  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(email);
  }
}

forgotController.$inject = ['firebaseService'];

export default forgotController;
