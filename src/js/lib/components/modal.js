import JSL from '../core';

/**
 * 
 * @param {boolean} created параметр, определяющий, было ли создано модальное окно
 * Функция создает модальное окно на переданном элементе
 */
JSL.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    JSL(this[i]).click(e => {
      e.preventDefault();
      JSL(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      JSL(elem).click(() => {
        JSL(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    JSL(target).click(e => {
      if (e.target.classList.contains('modal')) {
        JSL(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

JSL('[data-toggle="modal"]').modal();

/**
 * 
 * @param {{
 *  text:{
 *    title: string,
 *    body: string
 *  },
 *   btns:{
 *    count: int,
 *    settings:[
 *    [
 *      text on button: string,
 *      [classes: string],
 *      on click close modal?: boolean,
 *     cb: Function
 *    ]
 *    ]
 *  }
 * }} param0 передается объект вида: {
  text: {
    title: 'Заголовок модального окна',
    body: `Основной текст модального окна`,
  },
  btns: {
    count: количество кнопок,
    settings: [ массив с массивами кнопок
      [ массив с настройками одной кнопки
        'Текст на кнопке',
        [массив с классами кнопки],
        true или false, будет ли по нажатию на эту кнопку закрываться модальное окно,
        callback-функция на кнопке, необязательный параметр
      ],
    ]
  }
}
 */
JSL.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }
      if (btns.settings[j][3] && typeof (btns.settings[j][3]) === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }
      buttons.push(btn);
    }

    modal.innerHTML = `
    <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">
                    ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    JSL(this[i]).modal(true);
    JSL(this[i].getAttribute('data-target')).fadeIn(500);
  }
};