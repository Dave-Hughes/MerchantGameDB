//Controller for Guides
angular.module('mainApp')
	.controller('guidesCtrl', function ($scope, $routeParams, guidesService) {

		$scope.isLoaded = false;
		//Side bar latest guides
		guidesService.getGuides().then(function (listOfGuides) {
			$scope.guidesList = listOfGuides;
			$scope.isLoaded = true;
		})
		$scope.getAuthByID = guidesService.getAuthorByID;

		$scope.trimDate = trimDate;

	})
