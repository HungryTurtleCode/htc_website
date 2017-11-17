import angular from 'angular';
import lessonService from './lesson.service';
import uiRouter from 'angular-ui-router';

const lessonServiceComponent = angular
  .module('lessonService', [
    uiRouter
  ])
  .service('lessonService', lessonService)
  .name;

export default lessonServiceComponent;
