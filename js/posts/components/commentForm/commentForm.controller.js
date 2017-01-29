class commentFormController{
  constructor(firebaseService, userData, $location) {
    this.firebaseService = firebaseService;
    this.userData = userData;
    this.$location = $location;

    this.commentText = '';
  }
  $onInit(){
    this.isReply = this.isReply || false;

    this.pageLocations = this.getPageLocations() || '';
  }
  submitComment(text){
    if(text){
      this.userData.setComment(
        this.pageLocations,
        text,
        this.isReply
      )
      .then(() => {
        // TODO success Sun 29 Jan 2017 19:48:40 UTC
      })
      .catch(err => {
        // TODO fail Sun 29 Jan 2017 19:48:44 UTC
      });
    }else{
      console.error('comment is empty')
    }
    this.commentText = '';
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    let newArr = arr.splice(3);

    return newArr.join('/');
  }
}

commentFormController.$inject = ['firebaseService', 'userData', '$location'];

export default commentFormController;
