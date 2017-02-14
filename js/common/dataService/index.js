import angular from 'angular';
import dataService from './data.service';

const dataServiceComponent = angular
  .module('dataService', [])
  .service('dataService', dataService)
  .name;

export default dataServiceComponent;
