import angular from 'angular';
import signInComponent from './signin.component';

const signInComponentComponent = angular
  .module('signInComponent', [])
  .component('htcSignIn', signInComponent)
  .name;

export default signInComponentComponent;
