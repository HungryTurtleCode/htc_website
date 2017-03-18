import angular from 'angular';
import auth from './auth.service';

import analytics from '../analytics/';

const authComponent = angular
  .module('auth', [
    analytics
  ])
  .service('auth', auth)
  .name;

export default authComponent;
