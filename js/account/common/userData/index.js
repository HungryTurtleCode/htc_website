import angular from 'angular';
import userData from './userData.service';

import firebaseService from '../firebaseService';

const userDataComponent = angular
  .module('userData', [
    firebaseService
  ])
  .service('userData', userData)
  .name;

export default userDataComponent;
