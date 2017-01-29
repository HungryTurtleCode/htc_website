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
        template: '<my-courses></my-courses>',
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

export default myCoursesComponent;
