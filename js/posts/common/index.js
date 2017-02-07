import angular from 'angular';

import firebaseService from '../../common/firebaseService/';
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
