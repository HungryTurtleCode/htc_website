import angular from 'angular';
import auth from './auth.service';

const authComponent = angular
  .module('auth', [])
  .service('auth', auth)
  .name;

export default authComponent;
