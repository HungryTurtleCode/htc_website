import controller from './lessonPage.controller';

const LessonPage = {
  controller,
  bindings: {
    lessonData: '<'
  },
  template: `
    <h1 class="lesson-title">{{::$ctrl.lessonData.title}}</h1>
    <h3 class="course-title">{{::$ctrl.lessonData.course}}</h3>
    <lesson-video video-src="{{$ctrl.videoUrl}}"></lesson-video>
    <lesson-content article="$ctrl.lessonData.article" resources="$ctrl.lessonData.resources"></lesson-content>
  `
};

export default LessonPage;
