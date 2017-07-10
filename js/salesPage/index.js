import angular from 'angular';

import common from './common/';
import components from './components';

const SalesPageComponent = angular
  .module('htcapp', [
    common,
    components
  ])
  .name;

export default SalesPageComponent;
