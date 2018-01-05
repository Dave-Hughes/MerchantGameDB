//Controller for Guides
angular.module('mainApp')
	.controller('guideCtrl', function ($scope, $routeParams, guidesService) {

		$scope.trimDate = trimDate;
		$scope.isLoaded = false;
		
		guidesService.getGuides().then(function (listOfGuides) {
			$scope.guidesList = listOfGuides;
			$scope.selectedGuide = guidesService.getGuideByTitle($routeParams.id);
			$scope.guideAuthor = guidesService.getAuthorByID($scope.selectedGuide.author);
			$scope.guideTitle = $scope.selectedGuide.title.rendered;
			$scope.guideContent = $scope.selectedGuide.content.rendered;
			$scope.guideDate = $scope.selectedGuide.date;
			$scope.isLoaded = true;
		})

	})
