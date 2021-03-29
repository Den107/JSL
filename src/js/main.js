import JSL from './lib/lib';


JSL('#trigger').click(() => JSL('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo soluta enim tenetur officia iste
    ipsum a, impedit distinctio vel assumenda inventore neque natus aperiam dolores dolorem. Qui
    earum nemo fugiat.`,
  },
  btns: {
    count: 2,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ]
    ]
  }
}));

JSL().get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res));

