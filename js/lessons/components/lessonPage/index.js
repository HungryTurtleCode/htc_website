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
      resolve: {
        getLessonMeta: ['$stateParams', 'firebaseService', ($stateParams, firebaseService) => {
          return firebaseService.getLessonMeta(
            $stateParams.course,
            $stateParams.lesson
          )
        }],
        signIn: ['auth', 'userData', '$stateParams', 'firebaseService', (auth, userData, $stateParams, firebaseService) => {
          return auth.waitForAuth()
            .then(user => {
              if(user && user.uid && !user.isAnonymous && $stateParams.lesson){

                return userData.isEnrolled(user.uid, $stateParams.course)
                  .then(enrolled => {
                    if(enrolled){
                      return firebaseService.getLessonContent(
                        $stateParams.course,
                        $stateParams.lesson
                      );
                    }else{
                      console.log('not enrolled');
                      return false;
                    }
                  });

              }else{
                return false;
              }
            })
        }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default LessonPageComponent;
