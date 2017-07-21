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
          signin: ['userData', (userData) => {
            return userData.getUserEnrolledCourses()
              .then(courses => {
                resolve(courses);
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default myCoursesComponent;
