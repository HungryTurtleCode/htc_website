import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';

import forgotPass from '../../common/forgotPass/';

const CommonModule = angular
  .module('account.common.module', [
    userData,
    firebaseService,
    forgotPass
  ])
  .name;

export default CommonModule;
