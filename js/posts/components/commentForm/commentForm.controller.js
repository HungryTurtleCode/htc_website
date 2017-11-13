class commentFormController{
  constructor(firebaseService, $location, analytics, auth) {
    this.fb = firebaseService;
    this.$location = $location;
    this.analytics = analytics;
    this.auth = auth;

    this.commentText = '';
  }
  $onInit(){
    this.isReply = this.isReply || false;
    this.isLesson = false;
    this.error = false;
    this.submitLoading = false;
  }
  setComment(loc, text, isReply){
    return this.fb.setComment(
      loc,
      text,
      isReply
    )
    .then(key => {
      return key;
    })
    .catch(err => err);
  }
  submitComment(text){
    this.submitLoading = true;
    let loc = this.getPageLocations();
    let type = loc.split('/');
    type = type[0];

    if(text){
      this.setComment(
        loc,
        text,
        this.isReply
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
      if(arr[i] === '' || arr[i].charAt(0) === '#'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1]];

    return newArr.join('/');
  }
}

commentFormController.$inject = ['firebaseService', '$location', 'analyticsService', 'auth'];

export default commentFormController;
