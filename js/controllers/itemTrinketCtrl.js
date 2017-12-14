//Controller for itemTrinket
angular.module('mainApp')
	.controller('itemTrinketCtrl', function($scope, $routeParams, filtersService) {
	  $scope.equipment = jsonEquipments;
	  $scope.TiersFilter = filtersService.getTiers();

	  $scope.showTrinketsByTier = function(item) {
		  var tier = lvToTier(item.itemLevel);
		  return filtersService.isMatch(tier, $scope.TiersFilter);
	  };	  
	})