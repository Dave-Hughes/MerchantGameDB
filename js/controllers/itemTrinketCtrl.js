//Controller for itemTrinket
angular.module('mainApp')
	.controller('itemTrinketCtrl', function ($scope, $routeParams, filtersService) {
		$scope.equipment = jsonEquipments;
		$scope.TiersFilter = filtersService.getTiers();
		$scope.TypesFilter = filtersService.getTrinketsTypes();
		$scope.StatsFilter = filtersService.getStatsFilter();
		$scope.ignoreStatsFilter = true

		$scope.showTrinketsByTier = function (item) {
			return filtersService.isMatch(item.dbTier, $scope.TiersFilter);
		};
		$scope.showTrinketsByType = function (item) {
			return filtersService.isMatch(item.subType, $scope.TypesFilter);
		};

		$scope.showTrinketByStat = function (item) {
			return $scope.ignoreStatsFilter
				|| filtersService.filterStats(item.bonusStat, $scope.StatsFilter)
		}

		$scope.setStatsFiter = function (countSelected, isAllSelected) {
			$scope.ignoreStatsFilter = countSelected == 0 || isAllSelected
		}
	})