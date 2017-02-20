import angular from 'angular';
import userData from '../../common/userData/';
import firebaseService from '../../common/firebaseService/';

import header from '../../common/header/';

const CommonModule = angular
  .module('sales.common.module', [
    userData,
    firebaseService,
    header
  ])
  .name;

export default CommonModule;
