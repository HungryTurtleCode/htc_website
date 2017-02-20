import angular from 'angular';
import userData from '../../userData';
import firebaseService from '../../firebaseService';
import auth from '../../auth';
import loginModal from '../../loginModal';
import logoutModal from '../../logoutModal';

const CommonModule = angular
  .module('header.common.module', [
    userData,
    firebaseService,
    auth,
    loginModal,
    logoutModal
  ])
  .name;

export default CommonModule;
