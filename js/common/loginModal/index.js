import angular from 'angular';
import loginModal from './loginModal.component';

import signIn from '../signInComponent/';

const loginModalComponent = angular
  .module('loginModal', [
    signIn
  ])
  .component('loginModal', loginModal)
  .name;

export default loginModalComponent;
