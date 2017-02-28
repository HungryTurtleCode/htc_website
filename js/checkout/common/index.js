import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';
import dataService from '../../common/dataService';

import header from '../../common/header';

const CommonModule = angular
  .module('checkout.common.module', [
    userData,
    firebaseService,
    header,
    dataService
  ])
  .name;

export default CommonModule;

