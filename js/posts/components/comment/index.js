import angular from 'angular';
import Comment from './comment.component';

const CommentComponent = angular
  .module('comment.module', [])
  .component('comment', Comment)
  .name;

export default CommentComponent;
