class LessonContentController{
  constructor($sce, $location) {
    this.$sce = $sce;
    this.$location = $location;
    this.completeText = 'Mark Lesson Complete';
  }
  $onInit(){
    if(this.$location.search().comment){
      this.activeTab = 1;
    }else{
      this.activeTab = 0;
    }
    this.articleTrusted = this.$sce.trustAsHtml(this.article);
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
}

LessonContentController.$inject = ['$sce', '$location'];

export default LessonContentController;
