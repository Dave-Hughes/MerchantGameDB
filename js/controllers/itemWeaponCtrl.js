angular.module('mainApp')
	.controller('itemWeaponCtrl', function($scope, $routeParams) {

		// Apply/Remove "filter-selected" class on click of option
	  $(".weapons-page-filters label").on("click", function() {
			$(this).toggleClass( "filter-selected" )
	  })

	  $("#blacksmith-option").on("click", function() {
			$("#bs-weapons-subtypes").toggleClass("hide");
	  })

	  $("#woodworker-option").on("click", function() {
			$("#ww-weapons-subtypes").toggleClass("hide");
	  })

		//Reset button functionality
		$(".filters-reset-button").on("click", function() {
			console.log("running");
			$(".filter-selected").removeClass("filter-selected");
			$("#bs-weapons-subtypes").addClass("hide");
			$("#ww-weapons-subtypes").addClass("hide");
			$scope.showWeaponsByType();
	  })

	  $scope.equipment = jsonEquipments;
	  $scope.Filter = "";
	  $scope.showWeaponsByType = function(item){
		return 	item.subType === $scope.Filter.Sword ||
					  item.subType === $scope.Filter.Longsword ||
					  item.subType === $scope.Filter.Axe ||
					  item.subType === $scope.Filter.Hatchet ||
					  item.subType === $scope.Filter.Dagger ||
					  item.subType === $scope.Filter.Knife ||
						item.subType === $scope.Filter.Wand ||
						item.subType === $scope.Filter.MysticWand ||
						item.subType === $scope.Filter.Stave ||
						item.subType === $scope.Filter.MysticStave ||
						item.subType === $scope.Filter.Cudgel ||
						item.subType === $scope.Filter.Club;
	  };

	  $scope.showWeaponsByTier = function(item) {
		return  lvToTier(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier5;
	  };

		console.log($scope.equipment);

	});
