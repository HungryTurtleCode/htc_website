import angular from 'angular';
import post from './post.component';

import common from './common/';
import components from './components';

const postComponent = angular
  .module('post.module', [
    common,
    components
  ])
  .component('postComment', post)
  .name;

export default postComponent;
