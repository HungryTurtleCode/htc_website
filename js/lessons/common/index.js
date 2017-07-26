import angular from 'angular';
import ngAnimate from 'angular-animate';

import firebaseService from '../../common/firebaseService';
import lessonService from './lessonService';
import userData from '../../common/userData';
import signinComponent from '../../common/signInComponent';
import analytics from '../../common/analytics';
import trackingPixels from '../../common/trackingPixels';
import cursorDir from './cursorDirective';
import lessonList from '../../common/lessonListSidebar';

const CommonComponent = angular
  .module('lessons.common.module', [
    firebaseService,
    lessonList,
    ngAnimate,
    lessonService,
    userData,
    cursorDir,
    signinComponent,
    trackingPixels,
    analytics
  ])
  .name;

export default CommonComponent;
