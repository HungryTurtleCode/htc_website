class BookmarkButtonController{
  constructor(fb, $timeout, analyticsService) {
    this.fb = fb;
    this.$timeout = $timeout;
    this.analytics = analyticsService;
  }
  $onInit(){
    this.text = 'Bookmark Course';
    this.checkIsInBookmarks();
  }
  checkIsInBookmarks(){
    this.fb.isInBookmarks(this.course)
      .then(inBookmarks => {
        if(inBookmarks){
          this.$timeout(() => {
            this.text = 'Remove From Bookmarks';
          });
        }
      });
  }
  bookmark(){
    if(this.text === 'Bookmark Course'){
      this.fb.bookmarkCourse(this.course)
        .then(() => {
          this.$timeout(() => {
            this.analytics.trackEvent('Bookmark', 'Add', this.course);
            this.analytics.trackUserEvent('Bookmark', {value: this.course, location: 'Courses'});
            this.analytics.fbTrackEvent(
                                        'AddToWishlist',
                                        {
                                          content_ids: [this.course],
                                          content_type: 'courses',
                                          value: 0.00,
                                          currency: 'USD'
                                        },
                                        'content_type'
                                      );
            this.text = 'Remove From Bookmarks';
            console.log('Bookmarked');
          });
        });
    }else{
      this.fb.removeBookmark(this.course)
        .then(() => {
          this.$timeout(() => {
            this.analytics.trackEvent('Bookmark', 'Remove', this.course);
            this.analytics.trackUserEvent('RemoveBookmark', {value: this.course, location: 'Courses'});
            this.text = 'Bookmark Course';
            console.log('Removed Bookmark');
          });
        });
    }
  }
}

BookmarkButtonController.$inject = ['firebaseService', '$timeout', 'analyticsService'];

export default BookmarkButtonController;
