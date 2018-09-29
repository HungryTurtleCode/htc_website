import angular from 'angular';
import completed from './completed.component';

const completedComponent = angular
  .module('completed', [])
  .component('completed', completed)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('completed', {
        url: '/completed',
        template: '<completed courses="$resolve.courses"></completed>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          signin: ['accountService', 'auth', '$window', (account, auth, $window) => {
            return auth.isLoggedIn()
              .then(res => {
                if (!res) {
                  $window.location.href = '/courses';
                }
                return res;
              });
          }],
          courses: ['accountService', (account) => {
            return account.getUserCompleted()
              .then(courses => {
                return courses;
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default completedComponent;
