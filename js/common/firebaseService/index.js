import angular from 'angular';
import firebaseService from './firebase.service';

const firebaseServiceComponent = angular
  .module('firebaseService.module', [
  ])
  .service('firebaseService', firebaseService)
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.withCredentials = true;
  }])
  .name;

export default firebaseServiceComponent;
