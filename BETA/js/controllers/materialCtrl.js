//Controller for Materials
angular.module('mainApp')
	.controller('materialCtrl', function ($scope, $routeParams, questService) {
		$scope.Math = Math;
		$scope.materialID = getMaterialIdByName($routeParams.id);
		$scope.material = jsonMaterials[$scope.materialID];
		$scope.listOfGrades = jsonGrades;
		$scope.luck = Math.max(questService.luck, 0);
		$scope.grade = questService.grade;

		if ($scope.material.hasOwnProperty("materialID")) { //if crafted
			$scope.craftedBy = getMaterialById($scope.material.materialID, $scope.material.materialAmount)

			$scope.craftTimeMin = jsonGrades["0"].craftTimeMin;
			$scope.craftTimeMax = jsonGrades["0"].craftTimeMax;
		}
		$scope.droppedBy = questService.getMonsterByMaterialId($scope.materialID);

		$scope.craft = usedToCraftFromMaterial($scope.materialID);

		$scope.gradeLuckChange = function () {
			if ($scope.luck > 100) {
				$scope.luck = 100
			}
			questService.setValues($scope.grade, $scope.luck)
			$scope.droppedBy = questService.getMonsterByMaterialId($scope.materialID);
		}
	})
