import angular from 'angular';
import bookmarkButton from './bookmarkButton.component';

import userData from '../userData/';

const bookmarkButtonComponent = angular
  .module('bookmarkButton', [
    userData
  ])
  .component('bookmarkButton', bookmarkButton)
  .name;

export default bookmarkButtonComponent;
