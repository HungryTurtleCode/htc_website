class PostCommentController{
  constructor(firebaseService, $location, $scope, analytics) {
    this.firebaseService = firebaseService;
    this.$location = $location;
    this.$scope = $scope;
    this.analytics = analytics;

    this.comments = [];
  }
  $onInit(){
    this.getComments();
    this.triggerContentView();

    if(this.$location.search() && this.$location.search().comment){
      this.highlight = this.$location.search().comment;
    }

    this.$scope.$watch(() => this.$location.search(), (newVal, oldVal) => {
      if(newVal.comment){
        this.highlight = newVal.comment;
      }
    });
  }
  triggerContentView(){
    let loc = this.getPageLocations() || '';
    let type = loc.split('/');
    type = type[0];

    this.analytics.fbTrackEvent(
                                'ViewContent',
                                {
                                  content_ids: [loc],
                                  content_type: type,
                                  value: 0.00,
                                  currency: 'USD'
                                },
                                'content_type'
                              );
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
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
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

PostCommentController.$inject = ['firebaseService', '$location', '$scope', 'analyticsService'];

export default PostCommentController;
