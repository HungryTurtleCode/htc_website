import angular from 'angular';
import spinner from './spinner.component';

const spinnerComponent = angular
  .module('spinner', [])
  .component('htcSpinner', spinner)
  .name;

export default spinnerComponent;
