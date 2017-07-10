import controller from './lesson.controller';

const LessonComponent = {
  controller,
  template: `
    <div id="lesson-container">
      <div class="sidebar-container">
        <div class="logo">
          <a href="/">
            <img ng-src="{{::$ctrl.mascotImg}}"/>
            <h4>hungry<span class="turtle">turtle</span><span class="code">code</span></h4>
            <h6>A Sea Of Information</h6>
          </a>
        </div>
        <sidebar-lesson-list
          lesson-list="$ctrl.lessonList"
          course="$ctrl.lessonService.course"
          lesson="$ctrl.lessonService.lesson"
          premium="true">
        </sidebar-lesson-list>
      </div>

      <header class="lesson-sidebar">
        <div class="header-container">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/account">My Account</a></li>
              <li><a href="/courses">Courses</a></li>
            </ul>
          </nav>
          <header-panel></header-panel>
        </div>
      </header>

      <div class="main-container">
        <main class="lesson-content"
          ui-view>
        </main>
      </div>
    </div>
  `
};

export default LessonComponent;
