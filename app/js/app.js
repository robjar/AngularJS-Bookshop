import 'bootstrap';
import angular from 'angular';

// Controllers
import HeaderCtrl from './headerCtrl';
import BooksListCtrl from './booksListCtrl';

const app = angular.module('app', []);

app.controller('HeaderCtrl', HeaderCtrl);
app.controller('BooksListCtrl', BooksListCtrl);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [app.name]);
});
