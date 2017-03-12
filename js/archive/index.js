import angular from 'angular';

import common from './common/';
import components from './components';

const CheckoutComponent = angular
  .module('htcapp', [
    common,
    components
  ])
  .name;

export default CheckoutComponent;
