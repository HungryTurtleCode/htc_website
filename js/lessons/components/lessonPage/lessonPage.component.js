import controller from './lessonPage.controller';

const LessonPage = {
  controller,
  template: `
    <h1 class="lesson-title">Lesson Title</h1>
    <h3 class="course-title">Course Title</h3>
    <lesson-video></lesson-video>
    <lesson-content></lesson-content>
  `
};

export default LessonPage;
