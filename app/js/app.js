import 'bootstrap';
import angular from 'angular';

// Controllers
import HeaderCtrl from './headerCtrl';

const app = angular.module('app', []);

app.controller('HeaderCtrl', HeaderCtrl);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [app.name]);
});
