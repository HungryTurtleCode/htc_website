import angular from 'angular';
import firebaseService from './firebase.service';
import apiService from './api.service';

const firebaseServiceComponent = angular
  .module('firebaseService.module', [
  ])
  .service('firebaseService', firebaseService)
  .service('apiService', apiService)
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.withCredentials = true;
  }])
  .name;

export default firebaseServiceComponent;
