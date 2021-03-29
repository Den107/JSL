import JSL from '../core';

/**
 * функция навешивает обработчик события
 * @param {String} eventName тип события
 * @param {Function} callback коллбек функция
 * @returns 
 */
JSL.prototype.on = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callback) {
      return this;
    }
    this[i].addEventListener(eventName, callback);
  }
  return this;
};

/**
 * функция убирает обработчик события
 * @param {String} eventName тип события
 * @param {Function} callback коллбек функция
 * @returns 
 */
JSL.prototype.off = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!eventName || !callback) {
      return this;
    }
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};

/**
 * функция навешивает событие клика
 * @param {Function} handler коллбек функция
 * @returns 
 */
JSL.prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};