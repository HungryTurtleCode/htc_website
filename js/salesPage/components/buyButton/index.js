import angular from 'angular';
import buyButton from './buyButton.component';

const buyButtonComponent = angular
  .module('buyButton', [])
  .component('buyButton', buyButton)
  .name;

export default buyButtonComponent;
