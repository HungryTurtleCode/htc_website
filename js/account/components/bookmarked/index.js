import angular from 'angular';

import bookmarked from './bookmarked.component';

const bookmarkedComponent = angular
  .module('bookmarked', [])
  .component('bookmarked', bookmarked)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('bookmarked', {
        url: '/bookmarked',
        template: '<bookmarked courses="$resolve.courses"></bookmarked>',
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
            return account.getUserBookmarked()
              .then(courses => {
                return courses;
              });
          }]
        }
      });
      $urlRouterProvider.otherwise('/');
  }])
  .name;

export default bookmarkedComponent;
