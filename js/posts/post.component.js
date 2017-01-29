import controller from './post.controller';

const PostComponent = {
  controller,
  template: `
    <h3>Submit a comment</h3>
    <comment-form refresh="$ctrl.getComments()"></comment-form>

    <h1>Comments</h1>
    <comment
      ng-repeat="comment in $ctrl.comments | orderBy:'-score'"
      data="comment"
      refresh="$ctrl.getComments()"
    </comment>
  `
};

export default PostComponent;
