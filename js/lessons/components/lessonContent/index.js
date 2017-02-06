import angular from 'angular';
import lessonContent from './lessonContent.component';

const lessonContentComponent = angular
  .module('lessonContent', [])
  .component('lessonContent', lessonContent)
  .name;

export default lessonContentComponent;
