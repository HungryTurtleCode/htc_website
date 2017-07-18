import angular from 'angular';
import dataService from './data.service';
import apiService from './api.service';

const dataServiceComponent = angular
  .module('dataService', [])
  .service('dataService', dataService)
  .service('apiService', apiService)
  .name;

export default dataServiceComponent;
