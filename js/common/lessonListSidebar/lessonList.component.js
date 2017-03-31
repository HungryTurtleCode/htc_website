import controller from './lessonList.controller';

const LessonList = {
  controller,
  bindings: {
    tags: '<',
    lessonList: '<',
    course: '<',
    lesson: '<',
    premium: '<'
  },
  template: `
    <div id="lesson-list-cont" class="u-fancy-scrollbar">
      <ul class="lesson-list">
        <li ng-repeat="section in $ctrl.lessonList | orderBy:'position'" class="section">
          <h3 ng-click="section.show = !section.show">{{section.name}}</h3>
          <ul class="section"
            ng-if="section.show">
              <a ng-href="{{::$ctrl.getLessonUrl(lesson.slug)}}"
                ng-repeat="lesson in section.lessons | orderBy:'position'">
                <li class="lesson-item" ng-class="{active: $ctrl.slugify(lesson.title) === $ctrl.lesson}">
                  <p>{{lesson.title}}</p>
                  <p class="length">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" data-inboxsdk-session-id="1485829018686-0.44899969075421664">
                    <path d="M236.6,271.6c4.6,5.7,11.5,9.4,19.4,9.4c13.8,0,25-11.2,25-25c0-7.3-3.2-13.8-8.2-18.4c-0.6-0.7-1.3-1.5-2.2-2.2  c0,0-117.7-87.5-120.3-85.2c-2.6,2.3,85.3,120.2,85.3,120.2C235.8,270.8,236.3,271.2,236.6,271.6z"/>
                    <path d="M256.2,48L256.2,48H256v112h16V65.3c97.8,8.3,175.3,90.5,175.3,190.5c0,105.5-85.7,191.4-191.2,191.4  c-105.5,0-191.3-85.8-191.3-191.3c0-52.8,21.5-100.6,56.1-135.2L109,108.9C71.3,146.6,48,198.6,48,256c0,114.9,93.1,208,208,208  c114.9,0,208-93.1,208-208C464,141.1,371,48,256.2,48z"/>
                    </svg>
                    {{lesson.length}}
                    <div class="complete-mark" ng-if="$ctrl.completeLessons[$ctrl.slugify(lesson.title)]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient y2="157.23" x2="0" y1="211.23" gradientUnits="userSpaceOnUse" id="0"><stop stop-color="#2fae61"/><stop offset="1" stop-color="#4bdf88"/></linearGradient></defs><circle r="28" cy="184.55" cx="768.86" fill="url(#0)" transform="matrix(.92857 0 0 .92857-681.94-139.37)"/><path d="m773.85 193.97l-1.89-1.89c-.259-.259-.574-.389-.945-.389-.371 0-.686.13-.945.389l-9.116 9.13-4.085-4.099c-.259-.259-.574-.389-.945-.389-.371 0-.686.13-.945.389l-1.89 1.89c-.259.259-.389.574-.389.945 0 .37.13.686.389.945l5.03 5.03 1.89 1.89c.259.259.574.389.945.389.37 0 .685-.13.945-.389l1.89-1.89 10.06-10.06c.259-.259.389-.574.389-.945 0-.37-.13-.685-.389-.945" fill="#fff" fill-opacity=".851" transform="matrix(1.33268 0 0 1.33268-985.46-232.86)"/></svg>
                    </div>
                  </p>
                </li>
              </a>
          </ul>
        </li>
      </ul>
    </div>
  `
};

export default LessonList;
