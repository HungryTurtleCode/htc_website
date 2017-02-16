import angular from 'angular';

import firebaseService from '../../common/firebaseService';
import lessonService from './lessonService';
import userData from '../../common/userData';
import dataService from '../../common/dataService';
import signinComponent from '../../common/signInComponent';
import cursorDir from './cursorDirective';

const CommonComponent = angular
  .module('lessons.common.module', [
    firebaseService,
    lessonService,
    userData,
    dataService,
    cursorDir,
    signinComponent
  ])
  .name;

export default CommonComponent;
