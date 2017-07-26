import angular from 'angular';
import firebase from 'firebase';
import myCourses from './my-courses.component';

import uiRouter from 'angular-ui-router';

const myCoursesComponent = angular
  .module('myCourses', [
    uiRouter
  ])
  .component('myCourses', myCourses)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('myCourses', {
        url: '/',
        template: '<my-courses courses="$resolve.signin"></my-courses>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          signin: ['accountService', (account) => {
            return account.getUserEnrolledCourses()
              .then(courses => {
                // TODO check return before resolving Wed 26 Jul 2017 13:48:39 UTC
                return courses;
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default myCoursesComponent;
