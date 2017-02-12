(function() {
	'use strict';

	angular
		.module('angularProject')
		.service('ProjectsService', projectsService);

		function projectsService () {
			this.nameChangeServ = function (name, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.name = name;
					}
				}
				return obj;
			};

			this.descChangeServ = function (desc, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.desc = desc;
					}
				}
				return obj;
			};

			this.usersChangeServ = function (users, projects, id) {
				var obj = {};
				for (var i = projects.length - 1; i >= 0; i--) {
					obj = projects[i];
					if (obj.id == id) {
						obj.users = users;
					}
				}
				return obj;
			};
		}

})();