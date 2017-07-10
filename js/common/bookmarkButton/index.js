import angular from 'angular';
import bookmarkButton from './bookmarkButton.component';

import userData from '../userData/';
import analytics from '../analytics/';

const bookmarkButtonComponent = angular
  .module('bookmarkButton', [
    userData,
    analytics
  ])
  .component('bookmarkButton', bookmarkButton)
  .name;

export default bookmarkButtonComponent;
