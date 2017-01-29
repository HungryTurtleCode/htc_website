import angular from 'angular';
import userData from './userData.service';

const userDataComponent = angular
  .module('userData', [])
  .service('userData', userData)
  .name;

export default userDataComponent;
