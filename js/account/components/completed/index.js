import angular from 'angular';
import completed from './completed.component';

const completedComponent = angular
  .module('completed', [])
  .component('completed', completed)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('completed', {
        url: '/completed',
        template: '<completed></completed>',
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

export default completedComponent;
