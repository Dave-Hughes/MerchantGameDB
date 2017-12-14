angular.module('mainApp')
	.controller('itemWeaponCtrl', function ($scope, $routeParams, filtersService) {

		$scope.equipment = jsonEquipments;
		$scope.formula = jsonFormulas;
		$scope.TiersFilter = filtersService.getTiers();
		$scope.BlacksmithFilter = filtersService.getBlacksmithTypes();
		$scope.WoodworkerFilter = filtersService.getWoodworkerTypes();
		$scope.SpecialFilter = filtersService.getSpecialTypes();

		//Filter by Type
		$scope.showWeaponsByType = function (item) {
			return filtersService.isMatch(item.subType, $scope.BlacksmithFilter)
				|| filtersService.isMatch(item.subType, $scope.WoodworkerFilter)
				|| filtersService.isMatch(item.subType, $scope.SpecialFilter);
		};

		$scope.showWeaponsByTier = function (item) {
			var tier = lvToTier(item.itemLevel);
			return filtersService.isMatch(tier, $scope.TiersFilter);
		};
	});
