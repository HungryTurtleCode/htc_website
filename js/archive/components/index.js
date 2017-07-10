import angular from 'angular';

import archiveList from './archiveList';

const ComponentModule = angular
  .module('component.module', [
    archiveList
  ])
  .name;

export default ComponentModule;
