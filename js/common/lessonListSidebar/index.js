import angular from 'angular';
import lessonList from './lessonList.component';

const lessonListComponent = angular
  .module('sidebarLessonList.module', [])
  .component('sidebarLessonList', lessonList)
  .name;

export default lessonListComponent;
