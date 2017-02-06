import config from '../main/common/config';

import angular from 'angular';
import lesson from './lesson.component';

import components from './components';

const lessonComponent = angular
  .module('lesson', [
    components
  ])
  .component('lesson', lesson)
  .name;

export default lessonComponent;
