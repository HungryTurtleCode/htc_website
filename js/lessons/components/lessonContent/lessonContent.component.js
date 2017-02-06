import controller from './lessonContent.controller';

const LessonContent = {
  controller,
  template: `
    <div class="bottom-container">

      <div class="tabs">
        <ul>
          <li class="active">Lesson Article</li>
          <li>Discussion</li>
          <li>Resources</li>
        </ul>
      </div>

      <div class="tab-content">
        <div class="article">
        </div>
        <div class="discussion">
        </div>
        <div class="resources">
        </div>
      </div>

    </div>

  `
};

export default LessonContent;
