import angular from 'angular';
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
        template: '<my-courses courses="$resolve.courses"></my-courses>',
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
            return account.getUserEnrolledCourses()
              .then(courses => {
                return courses;
              });
          }],
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default myCoursesComponent;
