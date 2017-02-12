(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('LoginController', loginCtrl);

		function loginCtrl (Registrate, $state) {

			this.login = function () {
				var userExist = Registrate.getUser(this.name, this.pass);
				if (userExist) {
					$state.go('projects');
				}
			}
		}

})();