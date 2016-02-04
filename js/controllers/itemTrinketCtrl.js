//Controller for itemTrinket
angular.module('mainApp')
	.controller('itemTrinketCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".trinkets-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" )
	  })

	  $scope.equipment = jsonEquipments;
	  $scope.Filter = {};

	  $scope.showTrinketsByTier = function(item) {
		return  	  lvToTier(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier5;
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
				$(".trinkets-tier-options label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllTierOn = true;
				$scope.Filter.Tier1			= 1;
				$scope.Filter.Tier2			= 2;
				$scope.Filter.Tier3			= 3;
				$scope.Filter.Tier4			= 4;
				$scope.Filter.Tier5			= 5;
				$(".trinkets-tier-options label").each(function(){$(this).addClass("filter-selected");});
				}
		};
	  
	})