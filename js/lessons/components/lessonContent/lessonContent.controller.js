class LessonContentController{
  constructor($sce) {
    this.$sce = $sce;
  }
  $onInit(){
    this.activeTab = 0;
    this.articleTrusted = this.$sce.trustAsHtml(this.article);
    this.completeText = 'Mark Lesson Complete';
  }
  complete(){
    this.lessonComplete();
    this.completeText = 'Completed';
  }
}

LessonContentController.$inject = ['$sce'];

export default LessonContentController;
