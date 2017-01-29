import angular from 'angular';
import bookmarked from './bookmarked.component';

const bookmarkedComponent = angular
  .module('bookmarked', [])
  .component('bookmarked', bookmarked)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('bookmarked', {
        url: '/bookmarked',
        template: '<bookmarked></bookmarked>',
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

export default bookmarkedComponent;
