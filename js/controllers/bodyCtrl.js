// Controller for the <body>
// Used for anything outside of the control of other controllers
angular.module('mainApp')
	.controller('bodyCtrl', function($scope, guidesService) {

		// Game Version Numbers
		$scope.betaVersion = "2.431";
		$scope.liveVersion = "2.44";

		// Logic for the "Latest Guides" sidebar widget
		guidesService.getGuides().then(function (listOfGuides) {
			$scope.guidesList = listOfGuides;
		})
		$scope.getAuthByID = guidesService.getAuthorByID;

	})
