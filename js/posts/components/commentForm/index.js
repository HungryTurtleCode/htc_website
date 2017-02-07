import angular from 'angular';
import commentForm from './commentForm.component';

const commentFormComponent = angular
  .module('commentForm', [])
  .component('commentForm', commentForm)
  .name;

export default commentFormComponent;
