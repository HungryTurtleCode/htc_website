import angular from 'angular';
import fileread from './upload.directive';
import uploadService from './upload.service';
import firebaseService from '../firebaseService';

const filereadDirective = angular
  .module('fileread', [
      firebaseService
  ])
  .directive('fileread', fileread)
  .service('uploadService', uploadService)
  .name;

export default filereadDirective;
