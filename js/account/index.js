import angular from 'angular';

import common from './common/';
import components from './components';
import uiRouter from 'angular-ui-router';

import App from './app.component';

const AppComponent = angular
  .module('htcaccount', [
    uiRouter,
    common,
    components
  ])
  .component('app', App)
  .name;

export default AppComponent;
