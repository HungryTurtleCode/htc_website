import angular from 'angular';
import ngAnimate from 'angular-animate';
import userData from '../../common/userData/';
import firebaseService from '../../common/firebaseService/';
import analytics from '../../common/analytics/';

import header from '../../common/header/';
import bookmark from '../../common/bookmarkButton/';
import spinner from '../../common/spinner/';

const CommonModule = angular
  .module('sales.common.module', [
    userData,
    ngAnimate,
    firebaseService,
    header,
    bookmark,
    spinner,
    analytics
  ])
  .name;

export default CommonModule;
