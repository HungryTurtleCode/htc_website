import controller from './comment.controller';

const CommentComponent = {
  controller,
  bindings: {
      data: '<'
  },
  template: `
    <h3>This is a comment</h3>
  `
};

export default CommentComponent;
