(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('ProjectsController', projectsCtrl)
		.controller('ProjectPageController', projectPageCtrl);

		function projectsCtrl ($scope, $state) {
			var vm = this;

			var usersIdent = angular.fromJson(sessionStorage.getItem('usersIdent'));

			//var projectsList = JSON.parse(localStorage.getItem('projectsList'));
			
			vm.name = usersIdent.name || '';

			$scope.isactive = usersIdent.type === 'dev' ? true : false;

			vm.projectsList =  angular.fromJson(localStorage.getItem('projectsList')) || {};


			vm.logout = function () {
				var clear = {};
				usersIdent = angular.toJson(clear);
				sessionStorage.setItem('usersIdent', usersIdent);
				$state.go('login');
			};

			vm.enter = function (id) {
				var params = {projectId: id};
				$state.go('projectsItem', params );
			};

			this.hide = function(users) {
				if (users.indexOf(usersIdent.id) !== -1) {
					return false;
				} else {
					return true;
				}
			};
		}

		function projectPageCtrl ($scope, $state, $log, $stateParams, ProjectsService) {
			var vm = this;

			//$log.info(localStorage.getItem('projectsList').fromJson);

			$log.info(angular.fromJson(localStorage.getItem('projectsList')));

			$scope.usersLoc = angular.fromJson(localStorage.getItem('usersLoc'));


			var projectsList = angular.fromJson(localStorage.getItem('projectsList'));

			var currentObj = (function () {
				var obj = {};
				for (var i = projectsList.length - 1; i >= 0; i--) {
					obj = projectsList[i];
					if (obj.id == $stateParams.projectId) {
						return obj;
					}
				}
			})();

			vm.project = currentObj.id;

			vm.name = currentObj.name;

			vm.desc = currentObj.desc;

			vm.users = currentObj.users;

			vm.nameChange = function () {
				ProjectsService.nameChangeServ(vm.name, projectsList, $stateParams.projectId);

				var projectsListNew = angular.toJson(projectsList);
				localStorage.setItem('projectsList', projectsListNew);

			};

			vm.descChange = function () {
				ProjectsService.descChangeServ(vm.desc, projectsList, $stateParams.projectId);

				var projectsListNew = angular.toJson(projectsList);
				localStorage.setItem('projectsList', projectsListNew);

			};

			vm.usersChange = function () {
				ProjectsService.usersChangeServ(vm.users, projectsList, $stateParams.projectId);

				var projectsListNew = angular.toJson(projectsList);
				localStorage.setItem('projectsList', projectsListNew);
			};
		}

})();