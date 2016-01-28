//Controller for Potions
angular.module('mainApp')
	.controller('potionCtrl', function($scope, $routeParams) {
		$scope.potion = getPotionByName($routeParams.id);
		$scope.potionID = getPotionIdByName($routeParams.id);
		if($scope.potion.hasOwnProperty("materialType"))
			{
			$scope.craftedBy = getMaterialByIdPotion($scope.potion.materialID, $scope.potion.materialAmount);
			}
		else
			{
			$scope.craftedBy = getMaterialById($scope.potion.materialID, $scope.potion.materialAmount);
			}
		$scope.craft=usedToCraftFromPotion($scope.potionID);
		if($scope.craft.length == 0){$scope.craft = ""}
	})