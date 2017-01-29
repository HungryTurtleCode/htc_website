import angular from 'angular';
import auth from './auth.service';

import firebaseService from '../firebaseService';

const authComponent = angular
  .module('auth', [
    firebaseService
  ])
  .service('auth', auth)
  .name;

export default authComponent;
