import controller from './lessonContent.controller';

const LessonContent = {
  controller,
  bindings: {
    article: '<',
    resources: '<',
    lessonIsComplete: '<',
    lessonComplete: '&',
    nextLesson: '&',
    checkIfLastLesson: '&'
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
        <div class="article post-page" ng-show="$ctrl.activeTab === 0" analytics analytics-scroll>
          <div ng-bind-html="$ctrl.articleTrusted"></div>
          <div class="bottom-buttons">
            <button
              ng-click="$ctrl.nextLesson()"
              ng-if="!$ctrl.checkIfLastLesson()"
              class="next">
                Next Lesson
            </button>
            <button
              class="complete"
              ng-click="$ctrl.complete()">
                {{$ctrl.completeText}}
            </button>
          </div>
        </div>
        <div class="discussion" ng-show="$ctrl.activeTab === 1">
          <post-comment></post-comment>
        </div>
        <div class="resources" ng-show="$ctrl.activeTab === 2">
          <h3>Github:</h3>
          <ul>
            <li>
              <a ng-href="{{$ctrl.resources.github}}" target="_blank" ng-click="$ctrl.resourceClick($ctrl.resources.github)">
                {{$ctrl.resources.github}}
              </a>
            </li>
          </ul>
          <h3>Demo:</h3>
          <ul>
            <li>
              <a ng-href="{{$ctrl.resources.demo}}" target="_blank" ng-click="$ctrl.resourceClick($ctrl.resources.demo)">
                {{$ctrl.resources.demo}}
              </a>
            </li>
          </ul>
          <h3>Additional Resources:</h3>
          <ul>
            <li ng-repeat="resource in $ctrl.resources.additional">
              <a ng-href="{{resource}}" target="_blank" ng-click="$ctrl.resourceClick(resource)">
                {{resource}}
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

  `
};

export default LessonContent;
