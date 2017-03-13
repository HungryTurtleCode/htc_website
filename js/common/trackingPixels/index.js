import angular from 'angular';
import trackingPixels from './trackingPixels.component';

import auth from '../auth';

const trackingPixelsComponent = angular
  .module('trackingPixels.module', [
    auth
  ])
  .component('trackingPixels', trackingPixels)
  .name;

export default trackingPixelsComponent;
