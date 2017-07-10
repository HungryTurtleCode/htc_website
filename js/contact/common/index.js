import angular from 'angular';
import header from '../../common/header';
import analytics from '../../common/analytics';
import userData from '../../common/userData';

const CommonComponent = angular
  .module('home.common.module', [
    header,
    analytics,
    userData
  ])
  .name;

export default CommonComponent;
