import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LessonPage from './lessonPage.component';

const LessonPageComponent = angular
  .module('lessonPage', [
    uiRouter
  ])
  .component('lessonPage', LessonPage)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('lesson', {
      url: '/:course/:lesson',
      template: '<lesson-page></lesson-page>',
      resolve: {
        signIn: [() => {
          console.log('resolve');
        }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default LessonPageComponent;
