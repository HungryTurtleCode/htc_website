import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';

import forgotPass from '../../common/forgotPass/';
import bookmark from '../../common/bookmarkButton/';
import upload from '../../common/upload/';

const CommonModule = angular
  .module('account.common.module', [
    userData,
    firebaseService,
    forgotPass,
    bookmark,
    upload
  ])
  .name;

export default CommonModule;
