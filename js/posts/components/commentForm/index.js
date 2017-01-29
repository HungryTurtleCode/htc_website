import angular from 'angular';
import commentForm from './commentForm.component';

import firebaseService from '../../common/firebaseService';

const commentFormComponent = angular
  .module('commentForm', [])
  .component('commentForm', commentForm)
  .name;

export default commentFormComponent;
