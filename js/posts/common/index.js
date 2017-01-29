import angular from 'angular';

import firebaseService from './firebaseService';
import userData from './userData';
import auth from './auth';

const CommonModule = angular
  .module('common.module', [
    firebaseService,
    userData,
    auth
  ])
  .name;

export default CommonModule;
