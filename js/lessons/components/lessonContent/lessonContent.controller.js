class LessonContentController{
  constructor($sce) {
    this.$sce = $sce;
    this.completeText = 'Mark Lesson Complete';
  }
  $onInit(){
    this.activeTab = 0;
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

LessonContentController.$inject = ['$sce'];

export default LessonContentController;
