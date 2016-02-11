//Controller for Guides
angular.module('mainApp')
	.controller('guidesCtrl', function($scope, $routeParams) {

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

    $scope.trimDate = function(date) {
    	var length = 10;
    	var trimmedDate = date.substring(0, length);
    	return trimmedDate;
    }

	})
