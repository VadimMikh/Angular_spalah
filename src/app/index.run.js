(function() {
  'use strict';

  angular
    .module('angularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, $location, $log) {

		var usersIdent1 = angular.fromJson(sessionStorage.getItem('usersIdent')) || '';
		var projectsListOld = angular.fromJson(localStorage.getItem('projectsList'));

		$log.debug(projectsListOld);

		//var user = usersIdent1.name;

		if (!projectsListOld) {
			var projectsList = [
			{
				name: "Project1",
				desc: "Dedcription1",
				id: 1,
				users: [1,2,3,4]
			},
			{
				name: "Project2",
				desc: "Dedcription2",
				id: 2,
				users: [1,2,3,4]
			},
			{
				name: "Project3",
				desc: "Dedcription3",
				id: 3,
				users: [1,2,3,4]
			}
		];
		var plTemp = angular.toJson(projectsList);
		localStorage.setItem('projectsList', plTemp);
	}


		if (!usersIdent1.name) {
			$location.path('/login');
		}

		$rootScope.$on('$locationChangeStart', function() {
			var usersIdent2 = angular.fromJson(sessionStorage.getItem('usersIdent')) || '';
			if (angular.isUndefined(usersIdent2.name)) {
				//event.preventDefault();
				$state.go('login');
			}
		});

    $log.debug('runBlock end');
  }

})();
