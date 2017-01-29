import controller from './post.controller';

const PostComponent = {
  controller,
  template: `
    <h3>Submit <span class="highlight-text">a</span> <span>comment</span></h3>
    <comment-form refresh="$ctrl.getComments()"></comment-form>

    <h1>{{$ctrl.getNumComments()}} Comments</h1>
    <comment
      ng-repeat="comment in $ctrl.comments | orderBy:'-score'"
      data="comment"
      refresh="$ctrl.getComments()"
    </comment>
  `
};

export default PostComponent;
