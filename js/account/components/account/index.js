import angular from 'angular';
import account from './account.component';

const accountComponent = angular
  .module('account', [])
  .component('account', account)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('account', {
        url: '/account',
        template: '<account></account>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          test: function(){
            console.log('this is a resolve');
          }
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default accountComponent;
