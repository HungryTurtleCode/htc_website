import angular from 'angular';
import firebase from 'firebase';

import bookmarked from './bookmarked.component';

const bookmarkedComponent = angular
  .module('bookmarked', [])
  .component('bookmarked', bookmarked)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('bookmarked', {
        url: '/bookmarked',
        template: '<bookmarked courses="$resolve.signin"></bookmarked>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          signin: ['userData', (userData) => {
            return new Promise(resolve => {
              firebase.auth().onAuthStateChanged((user) => {
                if(user && !user.isAnonymous){
                  // TODO get courses user has bookmarked Thu 16 Feb 2017 17:09:56 GMT
                  userData.getUserMeta(user.uid)
                    .then(user => {
                      resolve(user);
                    });
                }else{
                  resolve(false);
                }
              });
            });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default bookmarkedComponent;
