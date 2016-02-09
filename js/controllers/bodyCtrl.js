//Controller for the body
angular.module('mainApp')
	.controller('bodyCtrl', function($scope, $http) {

		//Game Version Numbers
		$scope.betaVersion = "1.832";
		$scope.liveVersion = "1.82";

		console.log(listOfGuides);
		$scope.guidesList = listOfGuides;


	})
