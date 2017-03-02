(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, $location) {
    var vm = this;
    
    /*vm.currentNavItem = function () {
      var arr = [];
      if($location.path()) {
        var urlPath = $location.path();
        arr = urlPath.split("/");
      } else {
        arr = ['projects'];
      }
      $log.info(arr);
      return arr[1];
    };*/

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
