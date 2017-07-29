import angular from 'angular';
import forgot from './forgot.component';
import header from '../common/header/';
import uiRouter from 'angular-ui-router'

import firebaseService from '../common/firebaseService';

const forgotComponent = angular
  .module('htcapp', [
    header,
    uiRouter,
    firebaseService
  ])
  .component('forgotPass', forgot)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('forgot', {
        url: '/',
        template: '<forgot-pass></forgot-pass>',
        resolve: {
          signin: ['firebaseService', (fb) => {
            return fb.isLoggedIn()
              .then(isLoggedIn => {
                if(isLoggedIn) {
                  // Not allowed on this page if logged in
                  window.location.replace('/');
                  return Promise.reject();
                }
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default forgotComponent;
