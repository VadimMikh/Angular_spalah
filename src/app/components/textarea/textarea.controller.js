(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('TAreaController', tAreaCtrl);

	function tAreaCtrl ($scope, TAreaChecker) {
		$scope.text = '';
		$scope.max = 100;
		$scope.full = false;
		$scope.counter = 100;
		$scope.check = function (el) {
			if (el.text.length > 90) {
				$scope.full = true;
			} else {			
				$scope.full = false;
			}
			if (el.text.length > 100) {
				$scope.text = TAreaChecker.stop(el.text);
			} else {
				$scope.counter = TAreaChecker.checker(el.text, $scope.max);
			}
		};
	}

})();