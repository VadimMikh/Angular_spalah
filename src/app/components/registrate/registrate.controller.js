(function () {
	'use strict';

	angular
		.module('angularProject')
		.controller('RegistrateController', registrationCtrl);

	function registrationCtrl($scope, Registrate) {
		var vm = this;

		vm.regUser = function () {
			Registrate.setUser(vm.name, vm.pass, vm.conf_pass, vm.type);
		}
	}

})();