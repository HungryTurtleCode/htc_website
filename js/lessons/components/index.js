import angular from 'angular';
import lessonPage from './lessonPage';
import video from './video';
import lessonContent from './lessonContent';

const Components = angular
  .module('components.module', [
    lessonPage,
    video,
    lessonContent
  ])
  .name;

export default Components;
