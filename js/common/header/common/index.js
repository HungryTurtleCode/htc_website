import angular from 'angular';
import ngAnimate from 'angular-animate';

import userData from '../../userData';
import firebaseService from '../../firebaseService';
import auth from '../../auth';
import loginModal from '../../loginModal';
import logoutModal from '../../logoutModal';

const CommonModule = angular
  .module('header.common.module', [
    userData,
    ngAnimate,
    firebaseService,
    auth,
    loginModal,
    logoutModal
  ])
  .name;

export default CommonModule;
