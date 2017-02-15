import angular from 'angular';

import firebaseService from '../../common/firebaseService';
import lessonService from './lessonService';
import userData from '../../common/userData';
import dataService from '../../common/dataService';
import cursorDir from './cursorDirective';

const CommonComponent = angular
  .module('lessons.common.module', [
    firebaseService,
    lessonService,
    userData,
    dataService,
    cursorDir
  ])
  .name;

export default CommonComponent;
