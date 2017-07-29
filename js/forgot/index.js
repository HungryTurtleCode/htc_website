import angular from 'angular';
import forgot from './forgot.component';

import firebaseService from '../common/firebaseService';

const forgotComponent = angular
  .module('htcapp', [
    firebaseService
  ])
  .component('forgotPass', forgot)
  .name;

export default forgotComponent;
