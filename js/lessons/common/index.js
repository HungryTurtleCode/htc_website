import angular from 'angular';

import firebaseService from '../../common/firebaseService';
import lessonService from './lessonService';

const CommonComponent = angular
  .module('common.module', [
    firebaseService,
    lessonService
  ])
  .name;

export default CommonComponent;
