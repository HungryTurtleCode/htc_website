import angular from 'angular';
import logOutModal from './logoutModal.component';

import auth from '../auth/';

const logOutComponent = angular
  .module('logOutModal.module', [
    auth
  ])
  .component('logoutModal', logOutModal)
  .name;

export default logOutComponent;
