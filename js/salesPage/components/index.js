import angular from 'angular';

import buyButton from './buyButton';
import lessonList from './sidebarLessonList';

const Components = angular
  .module('sales.components.module', [
    buyButton,
    lessonList
  ])
  .name;

export default Components;
