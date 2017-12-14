//Controller for itemPotion
angular.module('mainApp')
	.controller('itemPotionCtrl', function($scope, $routeParams, filtersService) {
	  $scope.TiersFilter = filtersService.getTiers();
	  $scope.PotionsTypesFilter = filtersService.getPotionsTypes();

	  $scope.potion = jsonPotions;

	  $scope.showPotionsByTier = function(item) {
		  var tier = lvToTierAtPotion(item.itemLevel);
		  return filtersService.isMatch(tier, $scope.TiersFilter);
	  };
	  
	  $scope.showPotionsByType = function(item){
		return filtersService.isMatch(item.subType, $scope.PotionsTypesFilter);
	  }; 
	})