import 'bootstrap';
import '/css/main.css!';

import angular from 'angular';

const app = angular.module('app', []);

angular.element(document).ready(() => {
  return angular.bootstrap(document, [app.name]);
});
