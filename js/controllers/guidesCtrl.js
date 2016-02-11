//Controller for Guides
angular.module('mainApp')
	.controller('guidesCtrl', function($scope, $routeParams) {

    //Side bar latest guides
		$scope.guidesList = listOfGuides;
		$scope.getAuthByID = function(id) {
			var author = getAuthorByID(id);
			return author;
		}

    $scope.trimDate = function(date) {
    	var trimmedDate = trimDate(date);
    	return trimmedDate;
    }

	})
