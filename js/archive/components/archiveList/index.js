import angular from 'angular';
import archiveList from './archiveList.component';

const archiveListComponent = angular
  .module('archiveList', [])
  .component('archiveList', archiveList)
  .name;

export default archiveListComponent;
