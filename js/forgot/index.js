import angular from 'angular';
import forgot from './forgot.component';
import header from '../common/header/';

import firebaseService from '../common/firebaseService';

const forgotComponent = angular
  .module('htcapp', [
    header,
    firebaseService
  ])
  .component('forgotPass', forgot)
  .name;

export default forgotComponent;
