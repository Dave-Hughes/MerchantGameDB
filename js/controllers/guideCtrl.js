//Controller for Guides
angular.module('mainApp')
	.controller('guideCtrl', function($scope, $routeParams) {

		$scope.trimDate = function(date) {
    	var length = 10;
    	var trimmedDate = date.substring(0, length);
    	return trimmedDate;
    }

		$scope.selectedGuide 		= getGuideByTitle($routeParams.id);
		$scope.guideAuthor 			= getAuthorByID($scope.selectedGuide.author);
		$scope.guideTitle 			= $scope.selectedGuide.title.rendered;
		$scope.guideContent 		= $scope.selectedGuide.content.rendered;
		$scope.guideDate 				= $scope.selectedGuide.date;

		var redditLink = "["+$scope.guideTitle+"]" + " (" + window.location.href + ")";
		$("#raw-url-link").click(function() {
			$("#generatedLink").show();
			$("#generatedLink-reddit").addClass("hide");
		})

		$("#reddit-url-link").click(function() {
			$("#generatedLink").hide();
			$("#generatedLink-reddit").removeClass("hide");
		})

		$("#generatedLink").val(window.location.href);
		$("#generatedLink-reddit").val(redditLink);

	})
