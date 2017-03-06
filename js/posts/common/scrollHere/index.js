import angular from 'angular';
import scrollHere from './scrollHere.directive';

const scrollHereComponent = angular
  .module('scrollHere', [])
  .directive('scrollHere', scrollHere)
  .name;

export default scrollHereComponent;
