import controller from './course-card.controller';

const CourseCard = {
  controller,
  bindings: {
    courseData: '<'
  },
  template: `
      <div class="img-cont">
        <img ng-src="{{$ctrl.courseData.img}}"/>
      </div>
      <div class="info">
        <h3>{{$ctrl.courseData.title}}</h3>
        <p>{{$ctrl.courseData.desc}}</p>

        <ul>
          <li><strong>Languages used: </strong>
            <ul>
              <li ng-repeat="lang in $ctrl.courseData.langs">{{lang}}</li>
            </ul>
          </li>
          <li><strong>Skill: </strong>{{$ctrl.courseData.skill}}</li>
          <li><strong>Lessons: </strong>{{$ctrl.courseData.lessons}}</li>
        </ul>
      </div>
      <div class="info-end">
        <a ng-href="/courses/{{$ctrl.courseData.slug}}">Learn More</a>
      </div>
  `
};

export default CourseCard;
