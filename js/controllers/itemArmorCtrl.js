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
		$scope.StatsFilter = filtersService.getStatsFilter();
		$scope.ignoreStatsFilter = true

		$scope.showArmorsByType = function (item) {
			return filtersService.isMatch(item.subType, $scope.ArmorsmithFilter)
				|| filtersService.isMatch(item.subType, $scope.ClothWorkerFilter);
		};

		$scope.showArmorsByTier = function (item) {
			return filtersService.isMatch(item.dbTier, $scope.TiersFilter);
		};

		$scope.showArmorsByStat = function (item) {
			return $scope.ignoreStatsFilter
				|| filtersService.filterStats(item.bonusStat, $scope.StatsFilter)
		}

		$scope.setStatsFiter = function (countSelected, isAllSelected) {
			$scope.ignoreStatsFilter = countSelected == 0 || isAllSelected
		}
	})