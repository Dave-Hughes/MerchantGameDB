//Controller for Quests
angular.module('mainApp')
	.controller('questCtrl', function($scope, $routeParams) {
		$scope.quest = getQuestByName($routeParams.id);
		$scope.mats = jsonMaterials;
		$scope.eq = jsonEquipments;
	})