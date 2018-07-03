import angular from 'angular';

import ngStripe from 'angular-stripe';

import common from './common/';
import components from './components';

import Checkout from './checkout.component';

let stripeKey;
if (process.env.NODE_ENV === 'production') {
  console.log('Using production stripe key');
  stripeKey = 'pk_live_8AiJNP3D2ikErsRc1nlDsIpd';
} else {
  console.log('Using development stripe key');
  stripeKey = 'pk_test_Bpwo13jPYFDQVWrppyb02I4E';
}

const CheckoutComponent = angular
  .module('htcapp', [
    ngStripe,
    common,
    components
  ])
  .component('checkout', Checkout)
  .config(['stripeProvider', stripeProvider => stripeProvider.setPublishableKey(stripeKey)])
  .name;

export default CheckoutComponent;
