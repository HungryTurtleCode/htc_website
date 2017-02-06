import angular from 'angular';
import lesson from './lesson.component';

import common from './common';
import components from './components';

const lessonComponent = angular
  .module('lesson', [
    components,
    common
  ])
  .component('lesson', lesson)
  .name;

export default lessonComponent;
