//Controller for Quests
angular.module('mainApp')
	.controller('questCtrl', function($scope, $routeParams) {
		$scope.quest = getQuestByName($routeParams.id);
		$scope.mats = jsonMaterials;
		$scope.eq = jsonEquipments;

		var redditLink = "["+$scope.quest.name+"]" + " (" + window.location.href + ")";

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
