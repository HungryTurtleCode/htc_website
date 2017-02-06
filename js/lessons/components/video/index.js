import angular from 'angular';
import video from './video.component';

const videoComponent = angular
  .module('video.module', [])
  .component('lessonVideo', video)
  .name;

export default videoComponent;
