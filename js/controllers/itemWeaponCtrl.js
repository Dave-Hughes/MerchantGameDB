angular.module('mainApp')
	.controller('itemWeaponCtrl', function($scope, $routeParams) {

		// Apply/Remove "filter-selected" class on click of option
	  $(".weapons-page-filters label").on("click", function() {
			$(this).toggleClass( "filter-selected" )
	  })

		//Blacksmith option click handler
	  $("#blacksmith-option").on("click", function() {
			$("#bs-weapons-subtypes").toggleClass("hide");

			//If blacksmith option deselected
			if (!$(this).hasClass("filter-selected")) {
				//Reset BS weapon subtypes
<<<<<<< HEAD
				$scope.Filter.Sword							= false;
				$scope.Filter.Longsword					= false;
				$scope.Filter.Axe								= false;
				$scope.Filter.Hatchet						= false;
				$scope.Filter.Dagger						= false;
				$scope.Filter.Knife							= false;
=======
				$scope.Filter.Sword		= false;
				$scope.Filter.Longsword	= false;
				$scope.Filter.Axe		= false;
				$scope.Filter.Hatchet	= false;
				$scope.Filter.Dagger	= false;
				$scope.Filter.Knife		= false;
>>>>>>> 01373cceb71ac5fd40e525f565f5e9355c04472e

				//Remove "filter-selected" from BS weapon subtypes
				$("#bs-weapons-subtypes label").removeClass("filter-selected");

				$scope.$apply();
			}
	  })

		//Woodworker Option Click Handled
		$("#woodworker-option").on("click", function() {
			$("#ww-weapons-subtypes").toggleClass("hide");

			//If blacksmith option deselected
			if (!$(this).hasClass("filter-selected")) {
				//Reset WW weapon subtypes
<<<<<<< HEAD
				$scope.Filter.Wand							= false;
				$scope.Filter.MysticWand				= false;
				$scope.Filter.Stave							= false;
				$scope.Filter.MysticStave				= false;
				$scope.Filter.Cudgel						= false;
				$scope.Filter.Club							= false;
=======
				$scope.Filter.Wand			= false;
				$scope.Filter.MysticWand	= false;
				$scope.Filter.Stave			= false;
				$scope.Filter.MysticStave	= false;
				$scope.Filter.Cudgel		= false;
				$scope.Filter.Club			= false;
>>>>>>> 01373cceb71ac5fd40e525f565f5e9355c04472e

				//Remove "filter-selected" from WW weapon subtypes
				$("#ww-weapons-subtypes label").removeClass("filter-selected");

				$scope.$apply();
			}
	  })

		//Reset button functionality
		$(".filters-reset-button").on("click", function(item) {
<<<<<<< HEAD
			$scope.Filter.Tier1							= false;
			$scope.Filter.Tier2							= false;
			$scope.Filter.Tier3							= false;
			$scope.Filter.Tier4							= false;
			$scope.Filter.Tier5							= false;
			$scope.Filter.Sword							= false;
			$scope.Filter.Longsword					= false;
			$scope.Filter.Axe								= false;
			$scope.Filter.Hatchet						= false;
			$scope.Filter.Dagger						= false;
			$scope.Filter.Knife							= false;
			$scope.Filter.Wand							= false;
			$scope.Filter.MysticWand				= false;
			$scope.Filter.Stave							= false;
			$scope.Filter.MysticStave				= false;
			$scope.Filter.Cudgel						= false;
			$scope.Filter.Club							= false;
=======
			$scope.Filter.Tier1			= false;
			$scope.Filter.Tier2			= false;
			$scope.Filter.Tier3			= false;
			$scope.Filter.Tier4			= false;
			$scope.Filter.Tier5			= false;
			$scope.Filter.Sword			= false;
			$scope.Filter.Longsword		= false;
			$scope.Filter.Axe			= false;
			$scope.Filter.Hatchet		= false;
			$scope.Filter.Dagger		= false;
			$scope.Filter.Knife			= false;
			$scope.Filter.Wand			= false;
			$scope.Filter.MysticWand	= false;
			$scope.Filter.Stave			= false;
			$scope.Filter.MysticStave	= false;
			$scope.Filter.Cudgel		= false;
			$scope.Filter.Club			= false;
>>>>>>> 01373cceb71ac5fd40e525f565f5e9355c04472e
			$scope.$apply();
			$(".filter-selected").removeClass("filter-selected");
			$("#bs-weapons-subtypes").addClass("hide");
			$("#ww-weapons-subtypes").addClass("hide");
	  })


	  $scope.equipment = jsonEquipments;
	  $scope.formula = jsonFormulas;
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
	});
