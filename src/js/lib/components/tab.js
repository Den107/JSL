import JSL from '../core';

/**
 * функция создает элемент табов на странице, функция применяется к триггерам, важно чтобы триггеры именли класс "tab-item", активные триггеры "tab-item--active", а контент класс "tab-content", активный контент "tab-content--active"
 */
JSL.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    JSL(this[i]).on('click', () => {
      JSL(this[i])
        .addClass('tab-item--active')
        .siblings()
        .removeClass('tab-item--active')
        .closest('.tab')
        .find('.tab-content')
        .removeClass('tab-content--active')
        .eq(JSL(this[i]).index())
        .addClass('tab-content--active');
    });
  }
};

JSL('[data-tabpanel] .tab-item').tab();