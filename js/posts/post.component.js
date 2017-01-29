import controller from './post.controller';

const PostComponent = {
  controller,
  template: `
    <comment-form></comment-form>

    <h1>Comments</h1>
    <comment
      ng-repeat="comment in $ctrl.comments | orderBy:'-score'"
      data="comment"
    </comment>
  `
};

export default PostComponent;
