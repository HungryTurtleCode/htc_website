import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';

import forgotPass from '../../common/forgotPass/';
import bookmark from '../../common/bookmarkButton/';

const CommonModule = angular
  .module('account.common.module', [
    userData,
    firebaseService,
    forgotPass,
    bookmark
  ])
  .name;

export default CommonModule;
