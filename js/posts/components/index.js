import angular from 'angular';

import comment from './comment';

const ComponentModule = angular
  .module('component.module', [
    comment
  ])
  .name;

export default ComponentModule;
