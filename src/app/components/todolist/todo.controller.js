(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('TodoController', toDoController);

	/** @ngInject */
	function toDoController($scope, TodoFactory) {
		$scope.notEmpty = false;
		$scope.doneNotEmpty = false;

		$scope.task = '';
		$scope.tasks = [];
		$scope.doneTasks = [];

		$scope.clear = function () {
			return $scope.task = '';
		}
		$scope.add = function (val) {
			if (val) {
				$scope.tasks = TodoFactory.addItem(val);
				_headerToggler($scope.tasks);	
			}
		}
		$scope.remove = function(el) {
			$scope.tasks = TodoFactory.removeItem(el);
			_headerToggler($scope.tasks);
		}
		$scope.done = function (el) {
			TodoFactory.doneItem(el);
			$scope.tasks = TodoFactory.tasksT;
			$scope.doneTasks = TodoFactory.tasksTDone;
			_headerToggler($scope.tasks);
			_doneHeaderToggler($scope.doneTasks);
		}
		$scope.unDone = function (el) {
			TodoFactory.unDoneItem(el);
			$scope.tasks = TodoFactory.tasksT;
			$scope.doneTasks = TodoFactory.tasksTDone;
			_headerToggler($scope.tasks);
			_doneHeaderToggler($scope.doneTasks);
		}
		$scope.removeDone = function(el) {
			$scope.doneTasks = TodoFactory.removeDoneItem(el);
			_doneHeaderToggler($scope.doneTasks);
		}

		function _headerToggler () {
			if ($scope.tasks.length) {	
				$scope.notEmpty = true;
			} else  {
				$scope.notEmpty = false;
			}
		}

		function _doneHeaderToggler () {
			if ($scope.doneTasks.length) {	
				$scope.doneNotEmpty = true;
			} else  {
				$scope.doneNotEmpty = false;
			}
		}
	}

})();