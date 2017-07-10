import angular from 'angular';
import ngAnimate from 'angular-animate';
import header from '../../common/header';
import bookmark from '../../common/bookmarkButton';

const CommonComponent = angular
  .module('home.common.module', [
    ngAnimate,
    header,
    bookmark
  ])
  .name;

export default CommonComponent;
