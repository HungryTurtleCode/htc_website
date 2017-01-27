class Digest{
  constructor() {

    return function(){
      let $ctrl = this;

      this.$watchers.forEach(watcher => {
        let currentVal = watcher.exp();
        if(currentVal !== watcher.last && watcher.digests){
          watcher.fn(currentVal, watcher.init);
          watcher.init = watcher.exp();
        }else if(!watcher.digests){
          // first cycle ever
          watcher.init = watcher.exp();
          watcher.digests = true;
          this.$digest();
        }
      });
    }
  }
}

export default Digest;
