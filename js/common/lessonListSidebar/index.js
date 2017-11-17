import angular from 'angular';
import lessonList from './lessonList.component';

import lessonService from '../../lessons/common/lessonService';

const lessonListComponent = angular
  .module('sidebarLessonList.module', [
    lessonService
  ])
  .component('sidebarLessonList', lessonList)
  .name;

export default lessonListComponent;
