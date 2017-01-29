import angular from 'angular';

import firebaseService from './firebaseService';

const CommonModule = angular
  .module('common.module', [
    firebaseService
  ])
  .name;

export default CommonModule;
