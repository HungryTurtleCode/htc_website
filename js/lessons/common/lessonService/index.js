import angular from 'angular';
import lessonService from './lesson.service';

const lessonServiceComponent = angular
  .module('lessonService', [])
  .service('lessonService', lessonService)
  .name;

export default lessonServiceComponent;
