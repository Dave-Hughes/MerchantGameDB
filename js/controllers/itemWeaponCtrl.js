angular.module('mainApp')
	.controller('itemWeaponCtrl', function($scope, $routeParams) {
	
	  $scope.equipment = jsonEquipments;
	  $scope.formula = jsonFormulas;
	  $scope.Filter = {};
	
		// Apply/Remove "filter-selected" class on click of option
	  $(".weapons-page-filters label").on("click", function() {
			$(this).toggleClass( "filter-selected" )
	  })
		
		//toggle select all tier
		var isAllTierOn = false;
		$scope.selectTier = function(){
			if(isAllTierOn)
				{
				isAllTierOn = false;
				$scope.Filter.Tier1			= false;
				$scope.Filter.Tier2			= false;
				$scope.Filter.Tier3			= false;
				$scope.Filter.Tier4			= false;
				$scope.Filter.Tier5			= false;
				$scope.Filter.Tier6			= false;
				$(".weapons-tier-options label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllTierOn = true;
				$scope.Filter.Tier1			= 1;
				$scope.Filter.Tier2			= 2;
				$scope.Filter.Tier3			= 3;
				$scope.Filter.Tier4			= 4;
				$scope.Filter.Tier5			= 5;
				$scope.Filter.Tier6			= 6;
				$(".weapons-tier-options label").each(function(){$(this).addClass("filter-selected");});
				}
			
		};
		
		//toggle select all blacksmith
		var isAllBsOn = false;
		$scope.selectWeaponBs = function(){
			if(isAllBsOn)
				{
				isAllBsOn = false;
				$scope.Filter.Sword			= false;
				$scope.Filter.Longsword	= false;
				$scope.Filter.Axe				= false;
				$scope.Filter.Hatchet		= false;
				$scope.Filter.Dagger		= false;
				$scope.Filter.Knife			= false;
				$("#bs-weapons-subtypes label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllBsOn = true;
				$scope.Filter.Sword			= "Sword";
				$scope.Filter.Longsword	= "Longsword";
				$scope.Filter.Axe				= "Axe";
				$scope.Filter.Hatchet		= "Hatchet";
				$scope.Filter.Dagger		= "Dagger";
				$scope.Filter.Knife			= "Knife";
				$("#bs-weapons-subtypes label").each(function(){$(this).addClass("filter-selected");});
				}
		};
		
		//toggle select all woodworker
		var isAllWwOn = false;
		$scope.selectWeaponWw = function(){
			if(isAllWwOn)
				{
				isAllWwOn = false;
				$scope.Filter.Wand				= false;
				$scope.Filter.MysticWand	= false;
				$scope.Filter.Stave				= false;
				$scope.Filter.MysticStave	= false;
				$scope.Filter.Cudgel			= false;
				$scope.Filter.Club				= false;
				$("#ww-weapons-subtypes label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllWwOn = true;
				$scope.Filter.Wand				= "Wand";
				$scope.Filter.MysticWand	= "Mystic Wand";
				$scope.Filter.Stave				= "Stave";
				$scope.Filter.MysticStave	= "Mystic Stave";
				$scope.Filter.Cudgel			= "Cudgel";
				$scope.Filter.Club				= "Club";
				$("#ww-weapons-subtypes label").each(function(){$(this).addClass("filter-selected");});
				}
		};
		
		//toggle select all special
		var isAllSpOn = false;
		$scope.selectWeaponSp = function(){
			if(isAllSpOn)
				{
				isAllSpOn = false;
				$scope.Filter.Rod					= false;
				$scope.Filter.Pole				= false;
				$scope.Filter.Trident			= false;
				$scope.Filter.Scythe			= false;
				$scope.Filter.SpellSword	= false;
				$("#sp-weapons-subtypes label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllSpOn = true;
				$scope.Filter.Rod					= "Rod";
				$scope.Filter.Pole				= "Pole";
				$scope.Filter.Trident			= "Trident";
				$scope.Filter.Scythe			= "Scythe";
				$scope.Filter.SpellSword	= "Spellsword";
				$("#sp-weapons-subtypes label").each(function(){$(this).addClass("filter-selected");});
				}
		};

		//Filter by Type
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
						item.subType === $scope.Filter.Club ||
						item.subType === $scope.Filter.Rod ||
						item.subType === $scope.Filter.Pole ||
						item.subType === $scope.Filter.Trident ||
						item.subType === $scope.Filter.Scythe ||
						item.subType === $scope.Filter.SpellSword;
	  };

	  $scope.showWeaponsByTier = function(item) {
		return  lvToTier(item.itemLevel) == $scope.Filter.Tier1 ||
						lvToTier(item.itemLevel) == $scope.Filter.Tier2 ||
						lvToTier(item.itemLevel) == $scope.Filter.Tier3 ||
						lvToTier(item.itemLevel) == $scope.Filter.Tier4 ||
						lvToTier(item.itemLevel) == $scope.Filter.Tier5 ||
						lvToTier(item.itemLevel) == $scope.Filter.Tier6;
	  };
	});
