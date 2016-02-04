//Controller for itemPotion
angular.module('mainApp')
	.controller('itemPotionCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".potions-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" )
	  })

	  $scope.potion = jsonPotions;
	  $scope.Filter = {};

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
	  
		//toggle select all tier
		var isAllTierOn = false;
		$scope.selectTier = function(){
			if(isAllTierOn)
				{
				isAllTierOn = false;
				$scope.Filter.Tier1			= false;
				$scope.Filter.Tier2			= false;
				$scope.Filter.Tier3			= false;
				$scope.Filter.Tier4			= false;
				$scope.Filter.Tier5			= false;
				$(".potions-tier-options label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllTierOn = true;
				$scope.Filter.Tier1			= 1;
				$scope.Filter.Tier2			= 2;
				$scope.Filter.Tier3			= 3;
				$scope.Filter.Tier4			= 4;
				$scope.Filter.Tier5			= 5;
				$(".potions-tier-options label").each(function(){$(this).addClass("filter-selected");});
				}
		};
		
		//toggle select all potion
		var isAllPotOn = false;
		$scope.selectPotion = function(){
			if(isAllPotOn)
				{
				isAllPotOn = false;
				$scope.Filter.Health	= false;
				$scope.Filter.Boost		= false;
				$scope.Filter.Enchant	= false;
				$("#potions-subtype label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllPotOn = true;
				$scope.Filter.Health	= "Health";
				$scope.Filter.Boost		= "Boost";
				$scope.Filter.Enchant	= "Enchant";
				$("#potions-subtype label").each(function(){$(this).addClass("filter-selected");});
				}
		};
	  
	})