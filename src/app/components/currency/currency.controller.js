(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('CurrencyController', currencyExchangeCtrl);

	function currencyExchangeCtrl ($scope, CurrencyExchange) {
		$scope.curr1 = '';
		$scope.curr2 = '';
		$scope.summ = '';
		$scope.result = '';

		$scope.count = function () {
			if ($scope.curr1 !== '' && $scope.curr2 !== '') {
				$scope.result = CurrencyExchange.exchange($scope.curr1, $scope.curr2, $scope.summ);
			}
		}
	}

})();