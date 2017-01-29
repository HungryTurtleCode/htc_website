import controller from './commentForm.controller';

const CommentFormComponent = {
  controller,
  bindings: {
    refresh: '&',
    isReply: '@',
    commentNesting: '<'
  },
  template: `
    <textarea ng-model="$ctrl.commentText"
      ng-class="{'reply': $ctrl.commentNesting}"></textarea>
    <button ng-click="$ctrl.submitComment($ctrl.commentText)">Submit Comment</button>
  `
};

export default CommentFormComponent;
