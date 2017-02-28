(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    vm.userLogined = false;

    $scope.$on('logined', function (event, data) {
      vm.userLogined = data;
    });
    $scope.$on('logout', function (event, data) {
      vm.userLogined = data;
    });
  }
})();
