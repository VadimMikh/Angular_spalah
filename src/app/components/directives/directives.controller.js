(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('Dir1Controller', function ($scope) {
			$scope.name = "Film1";
			$scope.desc = "Desc1";
		})
		.controller('Dir2Controller', function ($scope) {
			$scope.name = "Film2";
			$scope.desc = "Desc2";
		})
		.controller('Dir3Controller', function ($scope) {
			$scope.name = "Film3";
			$scope.desc = "Desc3";
		})
		.directive('film', function () {
			return {
				restrict: 'E',
				replace: true,
				scope: {
					name: '@',
					desc: '@'
				},
				template: '<div><h1>{{name}}</h1><p>{{desc}}</p></div>'
			}
		});
})();