import angular from 'angular';

import ngStripe from 'angular-stripe';

import common from './common/';
import components from './components';

import Checkout from './checkout.component';

const CheckoutComponent = angular
  .module('htcapp', [
    ngStripe,
    common,
    components
  ])
  .component('checkout', Checkout)
  .config(['stripeProvider', stripeProvider => stripeProvider.setPublishableKey('pk_test_1FrrFV8GGN8ec0sX03NYggaB')])
  .name;

export default CheckoutComponent;
