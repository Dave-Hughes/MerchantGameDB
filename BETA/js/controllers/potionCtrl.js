//Controller for Potions
angular.module('mainApp')
	.controller('potionCtrl', function($scope, $routeParams) {
		$scope.potion = getPotionByName($routeParams.id);
		$scope.potionID = getPotionIdByName($routeParams.id);
		if($scope.potion.hasOwnProperty("materialType"))
			{
			$scope.craftedBy = getMaterialByIdSpec($scope.potion.materialID, $scope.potion.materialAmount, $scope.potion.materialType);
			}
		else
			{
			$scope.craftedBy = getMaterialById($scope.potion.materialID, $scope.potion.materialAmount);
			}
		$scope.craft=usedToCraftFromPotion($scope.potionID);
		if($scope.craft.length == 0){$scope.craft = ""}

		var redditLink = "["+$scope.potion.name+"]" + " (" + window.location.href + ")";

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
