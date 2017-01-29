import angular from 'angular';
import config from '../main/common/config';
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
