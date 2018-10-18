import angular from 'angular';

import cardPayment from './payment';

const ComponentModule = angular
  .module('component.module', [
    cardPayment
  ])
  .name;

export default ComponentModule;
