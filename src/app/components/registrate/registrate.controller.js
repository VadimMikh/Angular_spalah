(function () {
	'use strict';

	angular
		.module('angularProject')
		.controller('RegistrateController', registrationCtrl);

	function registrationCtrl($scope, Registrate) {

		this.regUser = function () {
			Registrate.setUser(this.name, this.pass, this.conf_pass, this.type);
		}
	}

})();