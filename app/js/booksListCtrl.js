export default function BooksListCtrl() {
  var vm = this;
  vm.list = [
    {
      name: 'Adultery',
      price: 200,
      rating: 4,
      publisher: 'You&me',
      releaseDate: '30-02-2012',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        'Nihil quae doloremque dolores minus alias doloribus optio dolore, perspiciatis ullam. Nobis.'
    }, {
      name: 'Adulter',
      price: 200,
      rating: 4,
      publisher: 'You&me',
      releaseDate: '30-02-2012',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quae doloremque dolores' +
        'minus alias doloribus optio dolore, perspiciatis ullam. Nobis.'
    }
  ];

  vm.addToCart = function(book) {
    console.log(book);
  };
}
