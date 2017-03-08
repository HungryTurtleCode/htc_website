class BookmarkButtonController{
  constructor(userData, $timeout) {
    this.userData = userData;
    this.$timeout = $timeout;
  }
  $onInit(){
    this.text = 'Bookmark Course';
    this.checkIsInBookmarks();
  }
  checkIsInBookmarks(){
    this.userData.isInBookmarks(this.course)
      .then(inBookmarks => {
        console.log(inBookmarks);
        if(inBookmarks){
          this.$timeout(() => {
            this.text = 'Remove From Bookmarks';
          });
        }
      });
  }
  bookmark(){
    if(this.text === 'Bookmark Course'){
      this.userData.bookmarkCourse(this.course)
        .then(() => {
          this.$timeout(() => {
            this.text = 'Remove From Bookmarks';
            console.log('Bookmarked');
          });
        });
    }else{
      this.userData.removeBookmark(this.course)
        .then(() => {
          this.$timeout(() => {
            this.text = 'Bookmark Course';
            console.log('Removed Bookmark');
          });
        });
    }
  }
}

BookmarkButtonController.$inject = ['userData', '$timeout'];

export default BookmarkButtonController;
