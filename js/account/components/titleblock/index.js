import angular from 'angular';
import titleBlock from './titleblock.component';

const titleBlockComponent = angular
  .module('titleBlock', [])
  .component('titleBlock', titleBlock)
  .name;

export default titleBlockComponent;
