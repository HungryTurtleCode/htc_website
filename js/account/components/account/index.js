import angular from 'angular';
import firebase from 'firebase';
import account from './account.component';

import userData from '../../common/userData';

const accountComponent = angular
  .module('account', [
    userData
  ])
  .component('account', account)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('account', {
        url: '/account',
        template: '<account user="$resolve.signin"></account>',
        // TODO add a resolve to check wait for log in Sun 29 Jan 2017 02:24:09 UTC
        resolve: {
          signin: ['userData', '$state', (userData, $state) => {

            return new Promise(resolve => {
              firebase.auth().onAuthStateChanged((user) => {
                if(user){
                  userData.getUserMeta(user.uid)
                  .then(user => {
                    resolve(user);
                  });
                }else{
                  $state.go('signin');
                }
              });
            });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default accountComponent;
