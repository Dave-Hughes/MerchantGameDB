//Controller for itemPotion
angular.module('mainApp')
	.controller('itemPotionCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".potions-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" )
	  })

	  $scope.potion = jsonPotions;
	  $scope.Filter = "";

	  $scope.showPotionsByTier = function(item) {
		return  	  lvToTierAtPotion(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTierAtPotion(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTierAtPotion(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTierAtPotion(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTierAtPotion(item.itemLevel) == $scope.Filter.Tier5;
	  };
	  
	  $scope.showPotionsByType = function(item){
		return 		item.subType === $scope.Filter.Health ||
					item.subType === $scope.Filter.Boost ||
					item.subType === $scope.Filter.Enchant;
	  };	  
	  
		$(".filters-reset-button").on("click", function(item) {
			$scope.Filter.Tier1		= false;
			$scope.Filter.Tier2		= false;
			$scope.Filter.Tier3		= false;
			$scope.Filter.Tier4		= false;
			$scope.Filter.Tier5		= false;
			$scope.$apply();
			$(".filter-selected").removeClass("filter-selected");
	  })
	  
	})