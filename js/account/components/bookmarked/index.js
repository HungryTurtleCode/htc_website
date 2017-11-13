import angular from 'angular';

import bookmarked from './bookmarked.component';

const bookmarkedComponent = angular
  .module('bookmarked', [])
  .component('bookmarked', bookmarked)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('bookmarked', {
        url: '/bookmarked',
        template: '<bookmarked courses="$resolve.signin"></bookmarked>',
        resolve: {
          signin: ['accountService', (account) => {
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
