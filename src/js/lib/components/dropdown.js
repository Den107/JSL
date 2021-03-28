import JSL from '../core';

JSL.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    JSL(this[i]).click(() => {
      JSL(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

JSL('.dropdown-toggle').dropdown();