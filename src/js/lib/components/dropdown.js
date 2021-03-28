import JSL from '../core';

/**
 * Функция инициализирует дропдаун меню на переданной кнопке, важно чтобы id кнопки и аттрибут data-toggle-id у выпадающего списка совпадали
 */
JSL.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    JSL(this[i]).click(() => {
      JSL(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

JSL('.dropdown-toggle').dropdown();