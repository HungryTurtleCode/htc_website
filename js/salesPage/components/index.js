import angular from 'angular';

import buyButton from './buyButton';

const Components = angular
  .module('sales.components.module', [
    buyButton
  ])
  .name;

export default Components;
