//Controller for Quests
angular.module('mainApp')
	.controller('questCtrl', function($scope, $routeParams) {
		$scope.quest = getQuestByName($routeParams.id);
		$scope.mats = jsonMaterials;
		$scope.eq = jsonEquipments;
		$scope.jsonAbility = jsonAbility;
		
		if($scope.quest.reward3)
			{
			$scope.reward3 = getReward($scope.quest.reward3);
			}
		
		if($scope.quest.reward4)
			{
			$scope.reward4 = getReward($scope.quest.reward4);
			}
	})
