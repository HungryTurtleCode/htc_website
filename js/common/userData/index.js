import angular from 'angular';
import userData from './userData.service';

import firebaseService from '../firebaseService';
import Auth from '../auth';
import dataService from '../dataService';

const userDataComponent = angular
  .module('userData', [
    firebaseService,
    Auth,
    dataService
  ])
  .service('userData', userData)
  .name;

export default userDataComponent;
