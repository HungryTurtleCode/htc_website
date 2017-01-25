import $ from './htcQuery';

class HTC{
  constructor() {
    this.modules = {};
  }
  bootstrap(){

    Object.keys(this.modules).forEach(key => {
      this.modules[key] = this.injector(this.modules[key]);
    });

    this.setUpDom();
    this.initModules();
  }
  setUpDom(){
    let ctrls = document.body.querySelectorAll('[htc-controller]');

    let controllersDomEls = [];

    for(let i = 0; i < ctrls.length; i++){
      controllersDomEls[i] = {
        controller: ctrls[i].attributes['htc-controller'].value,
        el: ctrls[i]
      }
    }
    this.linkCtrls(controllersDomEls);
  }
  linkCtrls(ctrls){
    ctrls.forEach(ctrl => {
      let fn = this.modules[ctrl.controller];
      let el = ctrl.el;
      this.bind(el, fn);
    });
  }
  bind(el, fn){
    let clickEl = el.querySelectorAll('[htc-click]');
    let clickFn = [];

    for(let i = 0; i < clickEl.length; i++){
      clickFn[i] = clickEl[i].attributes['htc-click'].value;

      clickEl[i].addEventListener('click', function(){
        let $ctrl = fn;
        eval(clickFn[i]);
      }.bind(fn));
    }

    let trackEls = el.attributes['htc-track'] ? [el] : [];
    let innerTracks = el.querySelectorAll('[htc-track]');

    for(let i = 0; i < innerTracks.length; i++){
      trackEls.push(innerTracks[i]);
    }

    trackEls.forEach(el => {
      fn[el.attributes['htc-track'].value] = $(el, true);
    });

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
    if(typeof Constructor === 'object') return Constructor;

    let inject = Constructor.$inject;

    if(this.checkInjectables(inject, Constructor)){
      let args = this.getInjectables(inject);

      for(let i = 0; i < args.length; i++){
        if(typeof args[i] === 'function'){
          Object.keys(this.modules).forEach(key => {
            if(this.modules[key] == args[i]){
              this.modules[key] = args[i] = this.injector(args[i])
            }
          })
        }
      }

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
const htc = new HTC();
document.addEventListener('DOMContentLoaded', htc.bootstrap.bind(htc), false);

export default htc;
