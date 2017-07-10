import angular from 'angular';
import lessonPage from './lessonPage';
import video from './video';
import lessonContent from './lessonContent';
import stateChange from './stateChangeScreen';

const Components = angular
  .module('components.module', [
    lessonPage,
    video,
    stateChange,
    lessonContent
  ])
  .name;

export default Components;
