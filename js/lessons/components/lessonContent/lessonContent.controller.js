class LessonContentController{
  constructor($sce, $location, analytics, $scope, userData) {
    this.$sce = $sce;
    this.$location = $location;
    this.completeText = 'Mark Lesson Complete';
    this.analytics = analytics;
    this.$scope = $scope;
    this.userData = userData;
  }
  $onInit(){
    if(this.$location.search().comment){
      this.activeTab = 1;
    }else{
      this.activeTab = 0;
    }
    this.articleTrusted = this.$sce.trustAsHtml(this.article);

    this.$scope.$watch(() => this.$location.search().comment, newVal => {
      if(newVal) this.activeTab = 1;
    });
  }
  $onChanges(change){
    if(change.lessonIsComplete.currentValue){
      this.completeText = 'Completed';
    }
  }
  complete(){
    if(this.completeText === 'Mark Lesson Complete'){
      this.lessonComplete();
      this.completeText = 'Completed';
    }
  }
  resourceClick(resource){
    let loc = this.getPageLocations();
    this.analytics.trackEvent('Resource', resource, loc);
    this.userData.trackEvent('Resource', {resource: resource, page: loc});
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

LessonContentController.$inject = ['$sce', '$location', 'analyticsService', '$scope', 'userData'];

export default LessonContentController;
