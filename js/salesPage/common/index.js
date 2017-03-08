import angular from 'angular';
import userData from '../../common/userData/';
import firebaseService from '../../common/firebaseService/';

import header from '../../common/header/';
import bookmark from '../../common/bookmarkButton/';

const CommonModule = angular
  .module('sales.common.module', [
    userData,
    firebaseService,
    header,
    bookmark
  ])
  .name;

export default CommonModule;
