import JSL from '../core';

/**
 * если параметр не передается, то функция получает html-разметку элемента, либо можно передать html-строку для встраивания в элемент
 * @param {String} content html-шаблон 
 * @returns html-string
 */
JSL.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

/**
 * функция выбирает тот элемент, номер которого передан параметром, рассчет с 0
 * @param {Number} i  
 * @returns 
 */
JSL.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;

  return this;
};

JSL.prototype.index = function () {
  const parent = this[0].parentNode;
  const children = [...parent.children];

  const findMyIndex = (item) => {
    return item == this[0];
  };

  return children.findIndex(findMyIndex);
};

/**
 * функция находит переданный селектор внутри селектора на котором вызвана функция
 * @param {String} selector селектор, который нужно найти
 * @returns 
 */
JSL.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }
  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/**
 * функция находит ближайший селектор снаружи селектора, к которому применена функция
 * @param {String} selector селектор, который нужно найти
 * @returns 
 */
JSL.prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    if (this[i] === null) {
      this[i] = false;
    }
    counter++;
  }

  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

/**
 * функция возвращает все братские элементы(на одном уровне) с выбранным элементом
 * @returns 
 */
JSL.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
