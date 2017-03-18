import angular from 'angular';
import analyticsService from './analytics.service';
import analyticsDir from './analytics.directive';
import trackingPixels from '../trackingPixels';

const analyticsModule = angular
  .module('analytics.module', [
    trackingPixels
  ])
  .service('analyticsService', analyticsService)
  .directive('analytics', analyticsDir)
  .name;

export default analyticsModule;
