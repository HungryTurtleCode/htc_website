import angular from 'angular';

import firebaseService from './firebaseService';
import userData from './userData';

const CommonModule = angular
  .module('common.module', [
    firebaseService,
    userData
  ])
  .name;

export default CommonModule;
