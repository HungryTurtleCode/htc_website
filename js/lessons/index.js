import angular from 'angular';
import lesson from './lesson.component';

const lessonComponent = angular
  .module('lesson', [])
  .component('lesson', lesson)
  .name;

export default lessonComponent;
