class commentFormController{
  constructor(firebaseService, userData, $location, analytics) {
    this.firebaseService = firebaseService;
    this.userData = userData;
    this.$location = $location;
    this.analytics = analytics;

    this.commentText = '';
  }
  $onInit(){
    this.isReply = this.isReply || false;
    this.isLesson = false;
    this.error = false;
    this.submitLoading = false;

    if(this.commentNesting){
      this.pageLocations = this.getPageLocations() || '';
      this.pageLocations += this.commentNesting;
    }else{
      this.pageLocations = this.getPageLocations() || '';
    }
  }
  submitComment(text){
    this.submitLoading = true;
    let loc = this.getPageLocations();
    let type = loc.split('/');
    type = type[0];

    if(text){
      this.userData.setComment(
        this.pageLocations,
        text,
        this.isReply,
        this.isLesson
      )
      .then(() => {
        this.analytics.trackEvent('Comment', loc);
        this.analytics.setDimension('Dimension3', 'Commenter');
        this.analytics.setMetric('Metric5', 1);
        this.analytics.trackUserEvent('Comment', {location: loc, value: text});
        this.analytics.fbTrackCustom(
                                  'Comment',
                                  {
                                    content: loc,
                                    content_type: type
                                  },
                                  'content'
                                );

        this.refresh();
        this.feedbackText = 'Comment Submitted Successfully'
        this.error = false;
        this.submitLoading = false;
      })
      .catch(err => {
        console.error(err);
        this.feedbackText = 'Something Went Wrong. Try Again Later'
        this.error = true;
        this.submitLoading = false;
      });
    }else{
      this.feedbackText = 'Comment is empty';
      this.error = true;
      this.submitLoading = false;
    }
    this.commentText = '';
  }
  signIn(){
    this.showSignIn = true;
  }
  closeSignIn(){
    this.showSignIn = false;
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i - 1] === 'lessons' && arr[i] === '#!'){
        this.isLesson = true;
      }
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1], ''];

    return newArr.join('/');
  }
}

commentFormController.$inject = ['firebaseService', 'userData', '$location', 'analyticsService'];

export default commentFormController;
