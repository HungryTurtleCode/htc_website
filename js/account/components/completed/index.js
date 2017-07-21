import angular from 'angular';
import firebase from 'firebase';
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
          signin: ['userData', (userData) => {
            return userData.getUserCompleted()
              .then(courses => {
                resolve(courses);
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default completedComponent;
