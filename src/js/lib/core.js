const JSL = function (selector) {
  return new JSL.prototype.init(selector);
};

JSL.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

JSL.prototype.init.prototype = JSL.prototype;

window.JSL = JSL;

export default JSL;