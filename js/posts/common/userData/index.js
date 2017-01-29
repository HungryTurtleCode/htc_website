import angular from 'angular';
import userData from './userData.service';

import Auth from '../auth';

const userDataComponent = angular
  .module('userData', [
    Auth
  ])
  .service('userData', userData)
  .name;

export default userDataComponent;
