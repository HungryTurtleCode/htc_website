import angular from 'angular';
import facebookPixel from './facebookPixel.component';

import auth from '../auth';

const facebookPixelComponent = angular
  .module('facebookPixel', [
    auth
  ])
  .component('facebookPixel', facebookPixel)
  .name;

export default facebookPixelComponent;
