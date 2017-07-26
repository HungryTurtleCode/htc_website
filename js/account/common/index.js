import angular from 'angular';
import ngAnimate from 'angular-animate';

import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';
import account from './account.service';

import forgotPass from '../../common/forgotPass/';
import bookmark from '../../common/bookmarkButton/';
import upload from '../../common/upload/';
import spinner from '../../common/spinner/';
import trackingPixel from '../../common/trackingPixels/';

const CommonModule = angular
  .module('account.common.module', [
    ngAnimate,
    userData,
    firebaseService,
    forgotPass,
    bookmark,
    upload,
    spinner,
    trackingPixel
  ])
  .service('accountService', account)
  .name;

export default CommonModule;
