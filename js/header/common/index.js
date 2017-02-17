import angular from 'angular';
import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';
import auth from '../../common/auth';

const CommonModule = angular
  .module('header.common.module', [
    userData,
    firebaseService,
    auth
  ])
  .name;

export default CommonModule;
