import controller from './post.controller';

const PostCompoonent = {
  controller,
  bindings: {
      comments: '<'
  },
  template: `
   <h1>Comments</h1>
  `
};

export default PostCompoonent;
