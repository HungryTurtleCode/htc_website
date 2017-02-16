import angular from 'angular';
import signInComponent from './signin.component';

import loginModal from '../loginModal/';
import uiRouter from 'angular-ui-router';

const signInComponentComponent = angular
  .module('signInComponent', [
    loginModal,
    uiRouter
  ])
  .component('htcSignIn', signInComponent)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('signin', {
        url: '/signin',
        template: '<htc-sign-in></htc-sign-in>'
      });

    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default signInComponentComponent;
