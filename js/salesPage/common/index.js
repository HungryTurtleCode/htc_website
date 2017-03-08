import angular from 'angular';
import userData from '../../common/userData/';
import firebaseService from '../../common/firebaseService/';

import header from '../../common/header/';
import bookmark from '../../common/bookmarkButton/';
import spinner from '../../common/spinner/';

const CommonModule = angular
  .module('sales.common.module', [
    userData,
    firebaseService,
    header,
    bookmark,
    spinner
  ])
  .name;

export default CommonModule;
