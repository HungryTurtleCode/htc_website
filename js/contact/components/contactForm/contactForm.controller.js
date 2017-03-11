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
  resetData(){
    this.name = this.email = this.subject = this.msg = '';
  }
}

export default ContactFormController;
