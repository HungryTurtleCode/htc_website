import angular from 'angular';

import common from './common';
import components from './components';

const lessonComponent = angular
  .module('htcapp', [
    components,
    common
  ])
  .name;

export default lessonComponent;
