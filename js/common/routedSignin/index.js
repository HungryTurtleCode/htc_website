import angular from 'angular';
import signInComponent from '../signinComponent';

import uiRouter from 'angular-ui-router';

const signInComponentComponent = angular
  .module('routedSignIn.module', [
    uiRouter,
    signInComponent
  ])
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
