class PostCommentController{
  constructor(firebaseService, $location, $scope) {
    this.firebaseService = firebaseService;
    this.$location = $location;
    this.$scope = $scope;
  }
  $onInit(){
    this.getComments();
  }
  getComments(){
    let loc = this.getPageLocations() || '';

    this.firebaseService.getComments(loc)
      .then(comments => {
        this.comments = comments || [];
        this.$scope.$apply();
      });
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    let newArr = arr.splice(3);

    return newArr.join('/');
  }
}

PostCommentController.$inject = ['firebaseService', '$location', '$scope'];

export default PostCommentController;
