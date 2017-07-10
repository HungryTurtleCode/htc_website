import angular from 'angular';
import CourseCard from './course-card.component';

const CourseCardComponent = angular
  .module('CourseCard', [])
  .component('courseCard', CourseCard)
  .name;

export default CourseCardComponent;
