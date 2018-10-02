import controller from './course-card.controller';

const CourseCard = {
  controller,
  bindings: {
    courseData: '<',
    bookmark: '&',
    showBookmark: '<'
  },
  template: `
      <div class="img-cont">
        <a ng-href="/lessons/#!/{{$ctrl.courseData.course_id}}/">
          <img ng-src="{{$ctrl.courseData.image}}"/>
        </a>
      </div>
      <div class="info">
        <a ng-href="/lessons/#!/{{$ctrl.courseData.course_id}}/">
          <h3>{{$ctrl.courseData.name}}</h3>
        </a>
        <p>{{$ctrl.courseData.description}}</p>

        <!--<ul>
          <li><strong>Languages used: </strong>
            <ul>
              <li ng-repeat="lang in $ctrl.courseData.langs">{{lang}}</li>
            </ul>
          </li>
          <li><strong>Skill: </strong>{{$ctrl.courseData.skill}}</li>
          <li><strong>Lessons: </strong>{{$ctrl.courseData.lessons}}</li>
        </ul>-->
      </div>
      <div class="info-end">
        <a ng-href="/lessons/#!/{{$ctrl.courseData.course_id}}/">Go To Course</a>
      </div>
      <bookmark-button course="$ctrl.courseData.course_id" ng-if="$ctrl.showBookmark"></bookmark-button>
  `
};

export default CourseCard;
