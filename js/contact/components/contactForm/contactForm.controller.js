class ContactFormController{
  constructor($http) {
    this.$http = $http;
  }
  $onInit(){
    this.error = false;
  }
  submit(){
    this.feedbackText = '';

    let data = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.msg
    }

    if(this.validate(data)){
      this.$http.post('http://138.197.119.94/contact', data)
        .then(response => {
          if(response.data.success){
            this.feedbackText = 'Message Sent Successfully';
            this.error = false;
            this.resetData();
          }else{
            this.feedbackText = 'Something Went Wrong. Try Again';
            this.error = true;
          }
        });
    }
  }
  validate(data){
    this.emptyName = false;
    this.emptyEmail = false;
    this.emptySubject = false;
    this.emptyMessage = false;
    this.invalidEmail = false;

    let errors = false;

    if(!data.name){
      this.emptyName = true;
      errors = true;
    }
    if(!data.email){
      this.emptyEmail = true;
      errors = true;
    }
    if(!this.validateEmail(data.email)){
      this.invalidEmail = true;
      errors = true;
    }
    if(!data.subject){
      this.emptySubject = true;
      errors = true;
    }
    if(!data.message){
      this.emptyMessage = true;
      errors = true;
    }

    return !errors;
  }
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  resetData(){
    this.name = this.email = this.subject = this.msg = '';
  }
}

export default ContactFormController;
