//Controller for Regions
angular.module('mainApp')
	.controller('regioCtrl', function($scope, $routeParams) {
		$scope.regioName = $routeParams.id;
		$scope.questNames = getQuestNamesByRegioName($routeParams.id);
		$scope.mats = jsonMaterials;
		$scope.eq = jsonEquipments;
		var quests = []
		$.each($scope.questNames, function(index, val)
			{
			quests.push(getQuestByName(val))
			});
		$scope.quests = quests;
	})