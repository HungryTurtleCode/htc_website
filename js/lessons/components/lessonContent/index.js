import angular from 'angular';
import lessonContent from './lessonContent.component';

// import comments from '../../../posts/';

const lessonContentComponent = angular
  .module('lessonContent', [
    // comments
  ])
  .component('lessonContent', lessonContent)
  .name;

export default lessonContentComponent;
