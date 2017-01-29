import angular from 'angular';
import firebaseService from './firebase.service';

const firebaseServiceComponent = angular
  .module('firebaseService', [])
  .service('firebaseService', firebaseService)
  .name;

export default firebaseServiceComponent;
