import angular from 'angular';
import CartList from './cartList.component';

const CartListComponent = angular
  .module('cartlist.module', [])
  .component('cartList', CartList)
  .name;

export default CartListComponent;
