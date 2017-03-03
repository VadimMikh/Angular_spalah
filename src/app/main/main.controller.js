(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope) {
    var vm = this;

    $scope.$on('curruentPage', function (event, data) {
      vm.currentNavItem = data;
    });

    vm.userLogined = false;

    $scope.$on('logined', function (event, data) {
      vm.userLogined = data;
    });
    $scope.$on('logout', function (event, data) {
      vm.userLogined = data;
    });

    vm.load = true;
  }
})();
