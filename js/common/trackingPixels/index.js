import angular from 'angular';
import trackingPixels from './trackingPixels.component';
import pixelService from './trackingPixels.service';

import auth from '../auth';
import analytics from '../analytics';

const trackingPixelsComponent = angular
  .module('trackingPixels.module', [
    auth,
    analytics
  ])
  .component('trackingPixels', trackingPixels)
  .service('pixelService', pixelService)
  .name;

export default trackingPixelsComponent;
