import angular from 'angular';
import firebaseService from './firebase.service';
import apiService from './api.service';


if (window.location.hash && window.location.hash == '#_=_') {
  if (window.history && history.pushState) {
    window.history.pushState("", document.title, window.location.pathname);
  } else {
    // Prevent scrolling by storing the page's current scroll offset
    var scroll = {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
    window.location.hash = '';

    // Restore the scroll offset, should be flicker free

    document.body.scrollTop = scroll.top;
    document.body.scrollLeft = scroll.left;
  }
}

const firebaseServiceComponent = angular
  .module('firebaseService.module', [
  ])
  .service('firebaseService', firebaseService)
  .service('apiService', apiService)
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.withCredentials = true;
  }])
  .name;

export default firebaseServiceComponent;
