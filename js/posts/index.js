import angular from 'angular';
import post from './post.component';

import common from './common/';
import components from './components';

const postComponent = angular
  .module('post', [
    common,
    components
  ])
  .component('post', post)
  .name;

export default postComponent;
