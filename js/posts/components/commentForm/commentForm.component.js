import controller from './commentForm.controller';

const CommentFormComponent = {
  controller,
  bindings: {
    refresh: '&',
    isReply: '@',
  },
  template: `
    <textarea ng-model="$ctrl.commentText"
      ng-if="$ctrl.auth.loggedIn"
      ng-class="{'reply': $ctrl.isReply}"></textarea>
    <span class="comment-feedback" ng-class="{'error': $ctrl.error, 'reply': $ctrl.isReply}">
      {{$ctrl.feedbackText}}
    </span>
    <button
      ng-if="$ctrl.auth.loggedIn"
      ng-click="$ctrl.submitComment($ctrl.commentText)">
        <span ng-if="!$ctrl.submitLoading">Submit Comment</span>
        <htc-spinner ng-if="$ctrl.submitLoading"></htc-spinner>
    </button>

    <div class="not-signed-in-comment"
      ng-if="!$ctrl.auth.loggedIn">
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
