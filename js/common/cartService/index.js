import angular from 'angular';
import cartService from './cart.service';
import firebaseService from '../firebaseService/';

const CartServiceComponent = angular
  .module('cartService.module', [
    firebaseService
  ])
  .service('cartService', cartService)
  .name;

export default CartServiceComponent;
