//Controller for itemTrinket
angular.module('mainApp')
	.controller('itemTrinketCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".trinkets-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" )
	  })

	  $scope.equipment = jsonEquipments;
	  $scope.Filter = "";

	  $scope.showTrinketsByTier = function(item) {
		return  	  lvToTier(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier5;
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