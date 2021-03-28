import JSL from './lib/lib';


JSL('#first').on('click', () => {
  JSL('div').eq(1).fadeOut(800);
});

JSL('[data-count="second"]').on('click', () => {
  JSL('div').eq(2).fadeOut(800);
});

JSL('button').eq(2).on('click', () => {
  JSL('.w-500').fadeOut(800);
});