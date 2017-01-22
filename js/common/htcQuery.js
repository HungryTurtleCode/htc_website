class HtcQuery{
  constructor(selector) {
    this.el = document.querySelectorAll(selector);
  }
}

HtcQuery.prototype.forEach = function(fn){
  this.el.forEach(fn)
  return this;
}

HtcQuery.prototype.click = function(fn){
  this.forEach(el => el.addEventListener('click', fn));
}

const QueryInit = (selector) => {
  return new HtcQuery(selector)
}

export default QueryInit;
