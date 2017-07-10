import angular from 'angular';
import stateChange from './stateChange.component';

const stateChangeComponent = angular
  .module('stateChange', [])
  .component('stateChange', stateChange)
  .run(['$rootScope', '$timeout', ($rootScope, $timeout) => {
    $rootScope.loading = false;

    $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromState, fromParams) => {
      $rootScope.loading = true;
    });
    $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
      $timeout(() => {
        $rootScope.loading = false;
      }, 300);
    });
  }])
  .name;

export default stateChangeComponent;
