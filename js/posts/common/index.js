import angular from 'angular';

import firebaseService from '../../common/firebaseService/';
import userData from '../../common/userData';
import auth from '../../common/auth';

import scroll from './scrollHere';

import header from '../../common/header';
import loginModal from '../../common/loginModal';

const CommonModule = angular
  .module('post.common.module', [
    firebaseService,
    userData,
    scroll,
    auth,
    header,
    loginModal
  ])
  .name;

export default CommonModule;
