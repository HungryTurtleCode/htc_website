import angular from 'angular';

import firebaseService from '../../common/firebaseService/';
import userData from '../../common/userData';
import auth from '../../common/auth';

import header from '../../common/header';

const CommonModule = angular
  .module('post.common.module', [
    firebaseService,
    userData,
    auth,
    header
  ])
  .name;

export default CommonModule;
