import angular from 'angular';

import ngStripe from 'angular-stripe';

import common from './common/';
import components from './components';

import Checkout from './checkout.component';

// TODO pull the key below from config based on the env we are working in Sun  1 Jul 00:50:32 2018
const CheckoutComponent = angular
  .module('htcapp', [
    ngStripe,
    common,
    components
  ])
  .component('checkout', Checkout)
  .config(['stripeProvider', stripeProvider => stripeProvider.setPublishableKey('pk_test_Bpwo13jPYFDQVWrppyb02I4E')])
  .name;

export default CheckoutComponent;
