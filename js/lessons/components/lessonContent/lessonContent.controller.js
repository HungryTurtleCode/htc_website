class LessonContentController{
  constructor($sce) {
    this.$sce = $sce;
  }
  $onInit(){
    this.activeTab = 0;
    this.articleTrusted = this.$sce.trustAsHtml(this.article);
  }
}

LessonContentController.$inject = ['$sce'];

export default LessonContentController;
