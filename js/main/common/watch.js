class Watch{
  constructor() {

    return function(exp, fn){
      let $ctrl = this;

      let watcher = {
        fn: fn,
        last: null,
        digest: false,
        exp: () => {
          return eval(exp);
        }
      }

      this.$watchers.push(watcher);
    }
  }
}

export default Watch;
