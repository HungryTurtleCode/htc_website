import controller from './post.controller';

const PostCompoonent = {
  controller,
  bindings: {
      comments: '<'
  },
  template: `
   <h1>Comments</h1>
   <comment></comment>
   <comment></comment>
   <comment></comment>
   <comment></comment>
  `
};

export default PostCompoonent;
