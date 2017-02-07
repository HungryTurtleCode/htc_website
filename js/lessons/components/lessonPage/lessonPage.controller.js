class LessonPageController{
  constructor() {
    this.videoUrl = '';
  }
  $onInit(){
    if(this.lessonData && this.lessonData.video){
      this.videoUrl = this.lessonData.video;
    }
  }
}

export default LessonPageController;
