import angular from 'angular';
import userData from './userData';
import firebaseService from '../../common/firebaseService';

const CommonModule = angular
  .module('common.module', [
    userData,
    firebaseService
  ])
  .name;

export default CommonModule;
