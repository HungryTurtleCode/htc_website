import angular from 'angular';

import comment from './comment';
import commentForm from './commentForm';

const ComponentModule = angular
  .module('component.module', [
    comment,
    commentForm
  ])
  .name;

export default ComponentModule;
