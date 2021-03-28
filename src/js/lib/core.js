/**
 * 
 * @param {*} selector Любой существующий селектор 
 * @returns Функция init с с переданным селектором
 */
const JSL = function (selector) {
  return new JSL.prototype.init(selector);
};

/**
 * 
 * @param {*} selector Любой существующий селектор 
 * @returns Контекст вызова JSL 
 */
JSL.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

JSL.prototype.init.prototype = JSL.prototype;

window.JSL = JSL;

export default JSL;