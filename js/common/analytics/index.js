import angular from 'angular';
import analyticsService from './analytics.service';
import analyticsDir from './analytics.directive';

const analyticsModule = angular
  .module('analytics.module', [])
  .service('analyticsService', analyticsService)
  .directive('analytics', analyticsDir)
  .name;

export default analyticsModule;
