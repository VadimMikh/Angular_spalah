(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('LoginController', loginCtrl);

		function loginCtrl (Registrate, $state) {
			var vm = this;

			vm.login = function ($event) {
				$event.preventDefault();
				var userExist = Registrate.getUser(vm.name, vm.pass);
				if (userExist) {
					$state.go('projects');
				}
			}
		}

})();