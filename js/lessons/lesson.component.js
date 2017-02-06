import controller from './lesson.controller';

const LessonComponent = {
  controller,
  template: `
    <div id="lesson-container">
      <div class="sidebar-container">
        <div class="logo">
          <a href="/">
            <img src="/img/mascot.png"/>
            <h4>hungry<span class="turtle">turtle</span><span class="code">code</span></h4>
            <h6>A Sea Of Information</h6>
          </a>
        </div>

        <div class="lesson-list">
          <ul>
            <li ng-repeat="section in $ctrl.lessonList">
              {{section.name}}
              <ul>
                <li ng-repeat="lesson in section.lessons">
                  {{lesson}}
                </li>
              </ul>
            </li>
          </ul>
        </div>


      </div>
      <div class="main-container">
        <header class="top-nav">
          <nav class="lesson-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/account">My Account</a></li>
              <li><a href="/courses">Courses</a></li>
            </ul>
          </nav>
        </header>
        <main class="lesson-content"
          ui-view>
        </main>
      </div>
    </div>
  `
};

export default LessonComponent;
