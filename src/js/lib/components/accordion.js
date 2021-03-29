import JSL from '../core';

/**
 * функция создает аккордион на триггере
 * @param {String} headActive класс активного триггера, по-умолчанию "accordion-head--active"
 * @param {String} contentActive класс активного контента, по-умолчанию "accordion-content--active"
 * @param {Number} paddings задает падинги у контента, по-умолчанию 40px
 */
JSL.prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    JSL(this[i]).click(() => {
      JSL(this[i]).toggleClass(headActive);
      JSL(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = '0px';
      }
    });
  }
};

JSL('.accordion-head').accordion();