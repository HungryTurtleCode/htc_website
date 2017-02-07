import angular from 'angular';

import firebaseService from '../../common/firebaseService/';
import userData from '../../common/userData';
import auth from '../../common/auth';

const CommonModule = angular
  .module('common.module', [
    firebaseService,
    userData,
    auth
  ])
  .name;

export default CommonModule;
