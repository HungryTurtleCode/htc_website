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
    <span class="comment-feedback" ng-class="{'error': $ctrl.error, 'reply': $ctrl.commentNesting}">
      {{$ctrl.feedbackText}}
    </span>
    <button
      ng-if="$ctrl.userData.isSignedIn()"
      ng-click="$ctrl.submitComment($ctrl.commentText)">
        <span ng-if="!$ctrl.submitLoading">Submit Comment</span>
        <htc-spinner ng-if="$ctrl.submitLoading"></htc-spinner>
    </button>

    <div class="not-signed-in-comment"
      ng-if="!$ctrl.userData.isSignedIn()">
        <button ng-click="$ctrl.signIn()">
          Log In / Sign Up To Comment
        </button>
    </div>

    <login-modal
      ng-if="$ctrl.showSignIn"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
  `
};

export default CommentFormComponent;
