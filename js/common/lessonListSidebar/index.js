import angular from 'angular';
import lessonList from './lessonList.component';
import ScrollTo from './scrollTo.directive';

import lessonService from '../../lessons/common/lessonService';

const lessonListComponent = angular
  .module('sidebarLessonList.module', [
    lessonService
  ])
  .component('sidebarLessonList', lessonList)
  .directive('scrollTo', ScrollTo)
  .name;

export default lessonListComponent;
