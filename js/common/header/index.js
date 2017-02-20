import angular from 'angular';

import common from './common/';
import components from './components';

import headerComponent from './header.component';

const AppComponent = angular
  .module('htcheader', [
    common,
    components
  ])
  .component('headerPanel', headerComponent)
  .name;

export default AppComponent;
