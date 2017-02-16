import angular from 'angular';
import loginModal from './loginModal.component';

const loginModalComponent = angular
  .module('loginModal', [])
  .component('loginModal', loginModal)
  .name;

export default loginModalComponent;
