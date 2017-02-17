import angular from 'angular';

import cartList from './cartList';

const ComponentModule = angular
  .module('component.module', [
    cartList
  ])
  .name;

export default ComponentModule;
