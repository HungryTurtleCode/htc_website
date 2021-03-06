import angular from 'angular';
import ngAnimate from 'angular-animate';

import userData from '../../common/userData';
import firebaseService from '../../common/firebaseService';
import pagination from '../../common/pagination';
import lessonList from '../../common/lessonListSidebar';

import header from '../../common/header';
import spinner from '../../common/spinner';

const CommonModule = angular
  .module('checkout.common.module', [
    userData,
    lessonList,
    ngAnimate,
    firebaseService,
    header,
    spinner,
    pagination
  ])
  .name;

export default CommonModule;

