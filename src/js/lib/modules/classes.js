import JSL from '../core';

/**
 * функция добавляет перечень классов к элементу
 * @param  {...any} classNames имена классов
 * @returns 
 */
JSL.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...classNames);
  }
  return this;
};

/**
 * функция удаляет перечень классов у элемента
 * @param  {...any} classNames имена классов
 * @returns 
 */
JSL.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames);
  }
  return this;
};

/**
 * функция переключает класс у элемента
 * @param {String} className имя класса
 * @returns 
 */
JSL.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }
  return this;
};