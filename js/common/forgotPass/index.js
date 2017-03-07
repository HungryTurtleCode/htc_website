import angular from 'angular';
import forgotPass from './forgotPass.component';

const forgotPassComponent = angular
  .module('forgotPass', [])
  .component('htcForgotPass', forgotPass)
  .name;

export default forgotPassComponent;
