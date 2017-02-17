import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';

const CommonModule = angular
  .module('checkout.common.module', [
    userData,
    firebaseService
  ])
  .name;

export default CommonModule;

