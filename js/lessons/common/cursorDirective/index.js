import angular from 'angular';
import CursorDirective from './cursor.directive';

const CursorDirectiveComponent = angular
  .module('CursorDirective', [])
  .directive('videoCursor', CursorDirective)
  .name;

export default CursorDirectiveComponent;
