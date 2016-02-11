//Controller for the body
angular.module('mainApp')
	.controller('bodyCtrl', function($scope, $http) {

		//Game Version Numbers
		$scope.betaVersion = "1.838";
		$scope.liveVersion = "1.83";

		//Side bar latest guides
		$scope.guidesList = listOfGuides;
		$scope.getAuthByID = function(id) {
			var author = getAuthorByID(id);
			return author;
		}

	})
