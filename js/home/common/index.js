import angular from 'angular';
import header from '../../common/header';

const CommonComponent = angular
  .module('home.common.module', [
    header
  ])
  .name;

export default CommonComponent;
