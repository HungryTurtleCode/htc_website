import angular from 'angular';
import userData from './userData.service';

import firebaseService from '../firebaseService';
import Auth from '../auth';

const userDataComponent = angular
  .module('userData', [
    firebaseService,
    Auth,
  ])
  .service('userData', userData)
  .name;

export default userDataComponent;
