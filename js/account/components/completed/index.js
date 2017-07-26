import angular from 'angular';
import completed from './completed.component';

const completedComponent = angular
  .module('completed', [])
  .component('completed', completed)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('completed', {
        url: '/completed',
        template: '<completed courses="$resolve.signin"></completed>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          signin: ['accountService', (account) => {
            return account.getUserCompleted()
              .then(courses => {
                // TODO check value before returning Wed 26 Jul 2017 13:47:10 UTC
                return courses;
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default completedComponent;
