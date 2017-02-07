import angular from 'angular';

import firebaseService from '../../common/firebaseService';
import lessonService from './lessonService';
import userData from '../../common/userData';

const CommonComponent = angular
  .module('lessons.common.module', [
    firebaseService,
    lessonService,
    userData
  ])
  .name;

export default CommonComponent;
