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
        getLesson: ['$stateParams', ($stateParams) => {

          return new Promise(resolve => {
            let dbPath = `${$stateParams.course}/${$stateParams.lesson}`;
            let ref = firebase.database().ref();
            ref
              .child('premium')
              .child(dbPath)
              .once('value', (snap) => {
                resolve(snap.val())
              });
          })
        }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default LessonPageComponent;
