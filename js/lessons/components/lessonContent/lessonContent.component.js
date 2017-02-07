import controller from './lessonContent.controller';

const LessonContent = {
  controller,
  bindings: {
    article: '<'
  },
  template: `
    <div class="bottom-container">

      <div class="tabs">
        <ul>
          <li ng-class="{active: $ctrl.activeTab === 0}"
            ng-click="$ctrl.activeTab = 0">
              Lesson Article
          </li>
          <li ng-class="{active: $ctrl.activeTab === 1}"
            ng-click="$ctrl.activeTab = 1">
              Discussion
          </li>
          <li ng-class="{active: $ctrl.activeTab === 2}"
            ng-click="$ctrl.activeTab = 2">
              Resources
          </li>
        </ul>
      </div>

      <div class="tab-content">
        <div class="article post-page" ng-show="$ctrl.activeTab === 0">
          <div ng-bind-html="$ctrl.articleTrusted"></div>
        </div>
        <div class="discussion" ng-show="$ctrl.activeTab === 1">
          discussion
          <post-comments></post-comments>
        </div>
        <div class="resources" ng-show="$ctrl.activeTab === 2">
          resources
        </div>
      </div>

    </div>

  `
};

export default LessonContent;
