// Controller for the <body>
// Used for anything outside of the control of other controllers
angular.module('mainApp')
	.controller('bodyCtrl', function($scope, $http) {

		// Game Version Numbers
		$scope.betaVersion = "1.858";
		$scope.liveVersion = "2.01";

		// Logic for the "Latest Guides" sidebar widget
		$scope.guidesList = listOfGuides;
		$scope.getAuthByID = function(id) {
			var author = getAuthorByID(id);
			return author;
		}

	})
