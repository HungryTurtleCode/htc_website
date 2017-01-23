class HtcQuery{
  constructor(selector, isElement) {
    if(isElement){
      this.el = selector;
    }else{
      this.el = document.querySelectorAll(selector);
    }
  }
}

HtcQuery.prototype.forEach = function(fn){
  this.el.forEach(el => {
    el = new HtcQuery(el, true);
    fn(el)
  });
  return this;
}

HtcQuery.prototype.click = function(fn){
  this.forEach(el => el.el.addEventListener('click', fn));
  return this;
}

HtcQuery.prototype.removeClass = function(cl){
  let newClassName = "";
  let classes = this.el.className.split(" ");
  for(let i = 0; i < classes.length; i++) {
    if(classes[i] !== cl) {
      newClassName += classes[i] + " ";
    }
  }
  this.el.className = newClassName;

  return this;
}
HtcQuery.prototype.addClass = function(cl){
  if(this.el.className){
    this.el.className += ' ' + cl;
  }else if(typeof this.el === 'object'){
    for(let i = 0; i < this.el.length; i++){
      this.el[i].className += ' ' + cl;
    }
  }
}
HtcQuery.prototype.hasClass = function(cl){
  let classes = this.el.className.split(" ");

  for(let i = 0; i < classes.length; i++) {
    if(classes[i] === cl) {
      return true;
    }
  }
  return false;
}
HtcQuery.prototype.hide = function(){
  this.el.style.display = 'none';
}
HtcQuery.prototype.indexOf = function(item){
  for(let i = 0; i < this.el.length; i++){
    if(this.el[i] == item){
      return i;
    }
  }
  return -1;
}
HtcQuery.prototype.attr = function(attr){
  return this.el.getAttribute(attr)
}

const QueryInit = (selector, isEl) => {
  return new HtcQuery(selector, isEl)
}

export default QueryInit;
