import angular from 'angular';
import uiRouter from 'angular-ui-router'
import header from '../common/header/';
import reset from './reset.component';

import firebaseService from '../common/firebaseService/';

const accountComponent = angular
  .module('htcapp', [
    header,
    firebaseService,
    uiRouter
  ])
  .component('resetPass', reset)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('reset', {
        url: '/:token',
        template: '<reset-pass></reset-pass>',
        resolve: {
          signin: ['firebaseService', '$stateParams', (fb, params) => {
            return fb.checkResetToken(params.token)
              .then(valid => {
                if(valid.error) {
                  window.location.replace('/forgot');
                  return Promise.reject();
                }
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default accountComponent;
