import angular from 'angular';
import header from '../../common/header';
import bookmark from '../../common/bookmarkButton';

const CommonComponent = angular
  .module('home.common.module', [
    header,
    bookmark
  ])
  .name;

export default CommonComponent;
