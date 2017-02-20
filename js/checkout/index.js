import angular from 'angular';

import common from './common/';
import components from './components';

import Checkout from './checkout.component';

const CheckoutComponent = angular
  .module('htcapp', [
    common,
    components
  ])
  .component('checkout', Checkout)
  .name;

export default CheckoutComponent;
