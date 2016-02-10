//Controller for the body
angular.module('mainApp')
	.controller('bodyCtrl', function($scope, $http) {

		//Game Version Numbers
		$scope.betaVersion = "1.832";
		$scope.liveVersion = "1.82";

		//Side bar latest guides
		$scope.guidesList = listOfGuides;
		$scope.getAuthByID = function(id) {
			var author = "";
			if (id == 1) {
				author = "Chirp";
			}
			else if (id == 2) {
				author = "Phaturia";
			}
			else if (id == 3) {
				author = "EnzymSama";
			}
			return author;
		}

	})
