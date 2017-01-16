//Controller for itemArmor
angular.module('mainApp')
	.controller('itemArmorCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".armors-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" )
	  })
	  
	  $scope.itemSlot = function(item){
			return 	item.itemSlot == 2 ||
					item.itemSlot == 3 ||
					item.itemSlot == 4 ||
					item.itemSlot == 5;
		};

	  $scope.equipment = jsonEquipments;
	  $scope.formula = jsonFormulas;
	  $scope.Filter = {};
	  $scope.showArmorsByType = function(item){
		return 		item.subType === $scope.Filter.Bracers ||
					item.subType === $scope.Filter.Greaves ||
					item.subType === $scope.Filter.Helm ||
					item.subType === $scope.Filter.Chainmail ||
					item.subType === $scope.Filter.Gauntlets ||
					item.subType === $scope.Filter.Sabatons ||
					item.subType === $scope.Filter.GreatHelm ||
					item.subType === $scope.Filter.Platemail ||
					
					item.subType === $scope.Filter.Gloves ||
					item.subType === $scope.Filter.Boots ||
					item.subType === $scope.Filter.Hood ||
					item.subType === $scope.Filter.Tunic ||
					item.subType === $scope.Filter.Mitts ||
					item.subType === $scope.Filter.Crakows ||
					item.subType === $scope.Filter.Hat ||
					item.subType === $scope.Filter.Robe;
	  };

	  $scope.showArmorsByTier = function(item) {
		return  	  lvToTier(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTier(item.itemLevel) == $scope.Filter.Tier5;
	  };
		
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
				$(".armors-tier-options label").each(function(){$(this).removeClass("filter-selected");});
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
				$(".armors-tier-options label").each(function(){$(this).addClass("filter-selected");});
				}
			
		};
		
		//toggle select all armorsmith
		var isAllAsOn = false;
		$scope.selectArmorAs = function(){
			console.log("pushed"+isAllAsOn);
			if(isAllAsOn)
				{
				isAllAsOn = false;
				$scope.Filter.Bracers		= false;
				$scope.Filter.Greaves		= false;
				$scope.Filter.Helm			= false;
				$scope.Filter.Chainmail	= false;
				$scope.Filter.Gauntlets	= false;
				$scope.Filter.Sabatons	= false;
				$scope.Filter.GreatHelm	= false;
				$scope.Filter.Platemail	= false;
				$("#as-armors-subtype label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllAsOn = true;
				$scope.Filter.Bracers		= "Bracers";
				$scope.Filter.Greaves		= "Greaves";
				$scope.Filter.Helm			= "Helm";
				$scope.Filter.Chainmail	= "Chainmail";
				$scope.Filter.Gauntlets	= "Gauntlets";
				$scope.Filter.Sabatons	= "Sabatons";
				$scope.Filter.GreatHelm	= "Great Helm";
				$scope.Filter.Platemail	= "Platemail";
				$("#as-armors-subtype label").each(function(){$(this).addClass("filter-selected");});
				}
		};
		
		//toggle select all clothworker
		var isAllCwOn = false;
		$scope.selectArmorCw = function(){
			if(isAllCwOn)
				{
				isAllCwOn = false;
				$scope.Filter.Gloves	= false;
				$scope.Filter.Boots		= false;
				$scope.Filter.Hood		= false;
				$scope.Filter.Tunic		= false;
				$scope.Filter.Mitts		= false;
				$scope.Filter.Crakows	= false;
				$scope.Filter.Hat			= false;
				$scope.Filter.Robe		= false;
				$("#cw-armors-subtype label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllCwOn = true;
				$scope.Filter.Gloves	= "Gloves";
				$scope.Filter.Boots		= "Boots";
				$scope.Filter.Hood		= "Hood";
				$scope.Filter.Tunic		= "Tunic";
				$scope.Filter.Mitts		= "Mitts";
				$scope.Filter.Crakows	= "Crakows";
				$scope.Filter.Hat			= "Hat";
				$scope.Filter.Robe		= "Robe";
				$("#cw-armors-subtype label").each(function(){$(this).addClass("filter-selected");});
				}
		};	  
	})