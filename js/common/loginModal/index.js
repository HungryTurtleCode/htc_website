import angular from 'angular';
import loginModal from './loginModal.component';

import signIn from '../signInComponent/';
import forgotPass from '../forgotPass/';

const loginModalComponent = angular
  .module('loginModal', [
    signIn,
    forgotPass
  ])
  .component('loginModal', loginModal)
  .name;

export default loginModalComponent;
