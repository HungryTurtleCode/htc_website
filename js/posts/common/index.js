import angular from 'angular';

import firebaseService from '../../common/firebaseService/';
import userData from '../../common/userData';
import auth from '../../common/auth';
import analytics from '../../common/analytics';

import scroll from './scrollHere';

import header from '../../common/header';
import loginModal from '../../common/loginModal';
import spinner from '../../common/spinner';

const CommonModule = angular
  .module('post.common.module', [
    firebaseService,
    userData,
    spinner,
    scroll,
    auth,
    header,
    loginModal,
    analytics
  ])
  .name;

export default CommonModule;
