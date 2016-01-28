//Controller for main content
angular.module('mainApp')
	.controller('mainCtrl', function($scope, $routeParams) {
		$scope.name = "Main";
		$scope.params = $routeParams;
	})