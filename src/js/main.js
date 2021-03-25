import JSL from './lib/lib';


JSL('button').on('click', function () {
  JSL('div').eq(1).toggleClass('active');
});

JSL('div').click(function () {
  console.log(JSL(this).index());
});

// // console.log(JSL('div').eq(2).find('.some'));
// console.log(JSL('.some').closest('.findme').addClass('dad'));
JSL('.findme').fadeIn(1800);
// console.log(JSL('div'));
// console.log(JSL('.findme').siblings());