//Controller for itemArmor
angular.module('mainApp')
	.controller('itemArmorCtrl', function ($scope, $routeParams, filtersService) {

		$scope.itemSlot = function (item) {
			return item.itemSlot == 2 ||
				item.itemSlot == 3 ||
				item.itemSlot == 4 ||
				item.itemSlot == 5;
		};

		$scope.equipment = jsonEquipments;
		$scope.formula = jsonFormulas;
		$scope.TiersFilter = filtersService.getTiers();
		$scope.ArmorsmithFilter = filtersService.getArmorsmithTypes();
		$scope.ClothWorkerFilter = filtersService.getClothWorkerTypes();

		$scope.showArmorsByType = function (item) {
			return filtersService.isMatch(item.subType, $scope.ArmorsmithFilter)
				|| filtersService.isMatch(item.subType, $scope.ClothWorkerFilter);
		};

		$scope.showArmorsByTier = function (item) {
			return filtersService.isMatch(item.dbTier, $scope.TiersFilter);
		};
	})