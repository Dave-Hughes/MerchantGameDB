//Controller for itemTrinket
angular.module('mainApp')
	.controller('itemTrinketCtrl', function($scope, $routeParams, filtersService) {
	  $scope.equipment = jsonEquipments;
	  $scope.TiersFilter = filtersService.getTiers();

	  $scope.showTrinketsByTier = function(item) {
		  return filtersService.isMatch(item.dbTier, $scope.TiersFilter);
	  };	  
	})