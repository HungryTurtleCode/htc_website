import angular from 'angular';

import common from './common/';
import components from './components';

import Donate from './donate.component';

const DonateComponent = angular
  .module('htcapp', [
    common,
    components
  ])
  .component('donate', Donate)
  .name;

export default DonateComponent;
