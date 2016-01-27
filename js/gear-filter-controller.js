angular.module('mainApp').controller('gearFilterCtrl', function($scope, $routeParams) {


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

  $scope.equipment = jsonEquipments;

  $scope.Filter = "";
  $scope.showWeaponsByType = function(item){
    return 	item.subType === $scope.Filter.Sword ||
			      item.subType === $scope.Filter.LongSword ||
			      item.subType === $scope.Filter.Axe ||
			      item.subType === $scope.Filter.Hatchet ||
			      item.subType === $scope.Filter.Dagger ||
			      item.subType === $scope.Filter.Knife;
  };

  $scope.showWeaponsByTier = function(item) {
    return  item.tier == $scope.Filter.Tier1 ||
			      item.tier == $scope.Filter.Tier2 ||
			      item.tier == $scope.Filter.Tier3 ||
			      item.tier == $scope.Filter.Tier4 ||
			      item.tier == $scope.Filter.Tier5;
  };

});
