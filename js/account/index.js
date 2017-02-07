import angular from 'angular';

import common from './common/';
import components from './components';

import App from './app.component';

const AppComponent = angular
  .module('htcaccount', [
    common,
    components
  ])
  .component('app', App)
  .name;

export default AppComponent;
