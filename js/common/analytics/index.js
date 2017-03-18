import angular from 'angular';
import analyticsService from './analytics.service';
import analyticsDir from './analytics.directive';
import trackClickDir from './trackClick.directive';
import trackScrollDir from './trackScroll.directive';

const analyticsModule = angular
  .module('analytics.module', [])
  .service('analyticsService', analyticsService)
  .directive('analytics', analyticsDir)
  .directive('analyticsClick', trackClickDir)
  .directive('analyticsScroll', trackScrollDir)
  .name;

export default analyticsModule;
