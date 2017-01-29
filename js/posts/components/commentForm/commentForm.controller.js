class commentFormController{
  constructor() {
    let a = 0;
    this.commentText = '';
  }
  $onInit(){
    this.isReply = this.isReply || false;
  }
  submitComment(text){
    if(text){
      console.log(text);
    }else{
      console.log('nothing');
    }
    this.commentText = '';
  }
}

commentFormController.$inject = ['firebaseService']

export default commentFormController;
