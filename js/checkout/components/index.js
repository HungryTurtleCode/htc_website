import angular from 'angular';

import cartList from './cartList';
import cartPayment from './payment';

const ComponentModule = angular
  .module('component.module', [
    cartList,
    cartPayment
  ])
  .name;

export default ComponentModule;
