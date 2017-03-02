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
      ng-if="$ctrl.userData.isSignedIn()"
      ng-class="{'reply': $ctrl.commentNesting}"></textarea>
    <button
      ng-if="$ctrl.userData.isSignedIn()"
      ng-click="$ctrl.submitComment($ctrl.commentText)">Submit Comment</button>

    <div class="not-signed-in-comment"
      ng-if="!$ctrl.userData.isSignedIn()">
        <button ng-click="$ctrl.signIn()">
          Sign In To Comment
        </button>
    </div>

    <login-modal
      ng-if="$ctrl.showSignIn"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
  `
};

export default CommentFormComponent;
