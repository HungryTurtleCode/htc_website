import controller from './commentForm.controller';

const CommentFormComponent = {
  controller,
  bindings: {
    isReply: '<'
  },
  template: `
    <h3>Submit a comment</h3>
    <textarea ng-model="$ctrl.commentText"></textarea>
    <button ng-click="$ctrl.submitComment($ctrl.commentText)">Submit Comment</button>
  `
};

export default CommentFormComponent;
