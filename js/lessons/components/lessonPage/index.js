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
      template: '<lesson-page lesson-data="$resolve.getLesson"></lesson-page>',
      resolve: {
        getLesson: ['$stateParams', 'firebaseService', ($stateParams, firebaseService) => {
          return firebaseService.getLessonContent(
            $stateParams.course,
            $stateParams.lesson
          )
        }],
        signIn: ['auth', 'userData', '$state', (auth, userData, $state) => {
          return auth.waitForAuth()
            .then(user => {
              if(user && user.uid && !user.isAnonymous){
                return true;
              }else{
                $state.go('signin');
              }
            })
        }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default LessonPageComponent;
