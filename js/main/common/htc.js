import $ from './htcQuery';
import Watch from './watch';
import Digest from './digest';

let htcDirs = ['click', 'track', 'controller', 'if'];

class HTC{
  constructor() {
    this.modules = {};
    this.directives = {};
  }
  bootstrap(){

    Object.keys(this.modules).forEach(key => {
      let fn;
      this.modules[key] = fn = this.injector(this.modules[key]);
      this.modules[key].$watch =
          new (Function.prototype.bind.apply(Watch, [fn]))();
      this.modules[key].$digest =
          new (Function.prototype.bind.apply(Digest, [fn]))();

      this.modules[key].$watchers = [];
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

    const evts = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');

    evts.forEach(e => {
      el.addEventListener(e, function(e){
        this.$digest();
      }.bind(fn));
    });







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

    const dictObj = function(name){
      this.name = name;
    }

    dictObj.prototype.forEach = function(fn){
      Object.keys(this).forEach(key => {
        if(key !== 'name'){
          fn(this[key])
        }
      });
    }

    const bindAttrs = (elem, fn) => {
      let attrs = elem.attributes;
      for(let y = 0; y < attrs.length; y++){
        let name = attrs[y].name;
        let htc = name.match(/htc-([^]+)/m);
        if(htc && htc[1]){
          let dir = htc[1];
          if(htcDirs.indexOf(dir) === -1){
            fn[dir] = fn[dir] || new dictObj(dir);
            fn[dir][attrs[y].value] = $(elem, true);
          }else if(dir === 'if'){
            let dirFunc = this.directives['htc-if'];
            dirFunc(fn, $(elem, true), elem.attributes)
          }
        }
      }
    }


    bindAttrs(el, fn);

    let allElems = el.querySelectorAll('*');

    for(let i = 0; i < allElems.length; i++){
      bindAttrs(allElems[i], fn);
    }

  }
  directive(name, fn){
    this.directives[name] = fn;
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

    let inject = Constructor.$inject || [];

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
