import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';

import forgotPass from '../../common/forgotPass/';
import bookmark from '../../common/bookmarkButton/';
import upload from '../../common/upload/';
import spinner from '../../common/spinner/';

const CommonModule = angular
  .module('account.common.module', [
    userData,
    firebaseService,
    forgotPass,
    bookmark,
    upload,
    spinner
  ])
  .name;

export default CommonModule;
