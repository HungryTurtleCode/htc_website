 import angular from 'angular';
 import CartPayment from './payment.component'
 import stripeService from './stripe.service';

 const CartPaymentComponent = angular
   .module('cartpayment.module', [])
   .service('stripeService', stripeService)
   .component('cartPayment', CartPayment)
   .name;

 export default CartPaymentComponent;

