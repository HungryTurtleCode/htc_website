class PostCommentController{
  constructor(firebaseService, $location, $scope) {
    this.firebaseService = firebaseService;
    this.$location = $location;
    this.$scope = $scope;

    this.comments = [];
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

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1]];

    return newArr.join('/');
  }
  getNumComments(){
    let num = this.comments.length;

    loopReplies(this.comments);

    return num;

    function loopReplies(comments){
      comments.forEach(item => {
        if(item.replies){
          num += item.replies.length;
          loopReplies(item.replies);
        }
      });
    }
  }
}

PostCommentController.$inject = ['firebaseService', '$location', '$scope'];

export default PostCommentController;
