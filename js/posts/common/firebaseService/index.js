import angular from 'angular';

import firebaseServ from './firebase.service';

const firebaseService = angular
  .module('', [])
  .service('firebaseService', firebaseServ)
  .name;

export default firebaseService;
