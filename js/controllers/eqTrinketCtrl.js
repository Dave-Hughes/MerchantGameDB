//Controller for Trinkets
angular.module('mainApp')
	.controller('eqTrinketCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.item = getEquipmentByName($routeParams.id);
		$scope.itemID = getEquipmentIdByName($routeParams.id);
		$scope.droppedBy = getMonsterByTrinketId($scope.itemID);
	})