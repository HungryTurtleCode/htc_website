 import angular from 'angular';
 import CartPayment from './payment.component';

 import ngStripe from 'angular-stripe';

 let stripeKey;
 if (process.env.NODE_ENV === 'production') {
   console.log('Using production stripe key');
   stripeKey = 'pk_live_8AiJNP3D2ikErsRc1nlDsIpd';
 } else {
   console.log('Using development stripe key');
   stripeKey = 'pk_test_Bpwo13jPYFDQVWrppyb02I4E';
 }

 const CartPaymentComponent = angular
   .module('cartpayment.module', [
     ngStripe,
   ])
   .component('cartPayment', CartPayment)
   .config(['stripeProvider', stripeProvider => stripeProvider.setPublishableKey(stripeKey)])
   .name;

 export default CartPaymentComponent;

