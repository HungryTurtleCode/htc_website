class HTC{
  constructor() {
    this.modules = {};
  }
  bootstrap(){
    Object.keys(this.modules).forEach(key => {
      this.modules[key] = this.injector(this.modules[key]);
    });

    this.initModules();
  }
  initModules(){
    Object.keys(this.modules).forEach(key => {
      if(this.modules[key].$onInit){
        this.modules[key].$onInit()
      }
    });
  }
  module(name, Constructor){
    if(this.modules[name] && !Constructor){
      return this.modules[name];
    }else if(this.modules[name] && Constructor){
      console.error('Module ' + name + ' already registered');
    }else if(Constructor){
      return this.modules[name] = Constructor;
    }else{
      console.error("Can't instantiate " + name + " because no constructor was provided");
    }
  }
  injector(Constructor){
    let inject = Constructor.$inject;

    if(this.checkInjectables(inject, Constructor)){
      let args = this.getInjectables(inject);
      return new Constructor(...args)
    }
  }
  getInjectables(inject){
    return inject.map(name => this.modules[name]);
  }
  checkInjectables(injectables, Constructor){
    let fnText = Constructor.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    let args = fnText.match(/^[^(]*\(\s*([^)]*)\)/m)[1];
    let argArr = args.split(/,/)

    if(argArr[0] === ''){
      argArr.splice(0,1);
    }

    if(argArr.length > injectables.length){
      throw 'Expected ' + argArr.length + ' arguments but got ' + injectables.length + ' in ' + Constructor.name;
    }

    for(let i = 0; i < injectables.length; i++){
      if(!this.modules[injectables[i]]){
        throw 'Can\'t inject unknown module ' + injectables[i];
      }
    }
    return true;
  }
}

export default new HTC();
