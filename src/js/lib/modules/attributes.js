import JSL from '../core';

/**
 * функция добавляет аттрибут выбранному елементу
 * @param {String} attribute название аттрибута
 * @param {String} value значение аттрибута
 * @returns 
 */
JSL.prototype.addAttr = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    this[i].setAttribute(attribute, value);
  }
  return this;
};

/**
 * функция принимает название аттрибута, а возвращает его значение 
 * @param {String} attribute название аттрибута
 * @returns значение аттрибута
 */
JSL.prototype.getAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].getAttribute(attribute);
  }
};

/**
 * функция удаляет выьранный аттрибут
 * @param {String} attribute название аттрибута, который нужно удалить
 * @returns 
 */
JSL.prototype.delAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    this[i].removeAttribute(attribute);
  }
  return this;
};

/**
 * функция проверяет есть ли аттрибут у элемента
 * @param {String} attribute аттрибут, который нужно проверить
 * @returns {Boolean} 
 */
JSL.prototype.hasAttr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].hasAttribute(attribute);
  }
};

/**
 * функция показывает все аттрибуты, которые имеются у элемента
 * @returns 
 */
JSL.prototype.attr = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    return this[i].attributes;
  }
};

