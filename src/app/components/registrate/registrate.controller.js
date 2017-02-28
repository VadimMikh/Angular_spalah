(function () {
	'use strict';

	angular
		.module('angularProject')
		.controller('RegistrateController', registrationCtrl);

	function registrationCtrl($scope, $mdToast, $log, Registrate) {
		var vm = this;

		vm.pass1Type = 'password';

		vm.pass2Type = 'password';

		vm.regUser = function () {
			function sanitizePosition() {
				var current = vm.toastPosition;

				if (current.bottom && last.top) current.top = false;
				if (current.top && last.bottom) current.bottom = false;
				if (current.right && last.left) current.left = false;
				if (current.left && last.right) current.right = false;

				last = angular.extend({}, current);
			}
			
			if ($scope.registrate.$valid) {
				var status = Registrate.setUser(vm.name, vm.pass, vm.conf_pass, vm.type);
				Registrate.setUser(vm.name, vm.pass, vm.conf_pass, vm.type);

				var last = {
					bottom: false,
					top: true,
					left: false,
					right: true
				};

				vm.toastPosition = angular.extend({}, last);

				vm.getToastPosition = function () {
					sanitizePosition();

					return Object.keys(vm.toastPosition)
						.filter(function (pos) { return vm.toastPosition[pos]; })
						.join(' ');
				};

				var pinTo = vm.getToastPosition();

				$mdToast.show(
					$mdToast.simple()
						.textContent(status || 'error')
						.position(pinTo)
						.hideDelay(3000)
				);
			} else {
				$scope.registrate.name.$touched = true;
				$scope.registrate.mail.$touched = true;
				$scope.registrate.pass.$touched = true;
				$scope.registrate.conf_pass.$touched = true;
				$scope.registrate.role.$touched = true;
			}
		};
	}

})();