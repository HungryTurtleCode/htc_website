import angular from 'angular';
import account from './account.component';

import signinComponent from '../../../common/signInComponent';

const accountComponent = angular
  .module('account', [
    signinComponent
  ])
  .component('account', account)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('account', {
        url: '/account',
        template: '<account user="$resolve.signin"></account>',
        resolve: {
          signin: ['userData', (userData) => {
            return userData.getUserMeta()
              .then(user => {
                // TODO check value before resolving Wed 26 Jul 2017 14:41:05 UTC
                return user;
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default accountComponent;
