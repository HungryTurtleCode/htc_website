import angular from 'angular';
import firebase from 'firebase';

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
      template: '<lesson-page lesson-meta-data="$resolve.getLessonMeta" lesson-data="$resolve.signIn"></lesson-page>',
      // TODO any need to fetch meta and content independently. Get it all in one whack Mon 24 Jul 2017 16:16:53 UTC
      resolve: {
        getLessonMeta: ['$stateParams', 'firebaseService', ($stateParams, firebaseService) => {
          return firebaseService.getLessonMeta(
            $stateParams.lesson
          )
        }],
        signIn: ['auth', 'userData', '$stateParams', 'firebaseService', (auth, userData, $stateParams, firebaseService) => {

          return firebaseService.getLessonContent(
            $stateParams.lesson
          )
          .then(con => {
            console.log('got lesson content');
            console.log(con);
          });
        }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default LessonPageComponent;
