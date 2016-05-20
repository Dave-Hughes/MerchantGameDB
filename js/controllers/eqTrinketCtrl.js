//Controller for Trinkets
angular.module('mainApp')
	.controller('eqTrinketCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.item = getEquipmentByName($routeParams.id);
		$scope.itemID = getEquipmentIdByName($routeParams.id);
		$scope.droppedBy = getMonsterByTrinketId($scope.itemID);
		$scope.rarityMod = jsonRarity;
		
		if($scope.item.crafterID != 0) { //if its craftable (worn items fix)
			if($scope.item.hasOwnProperty("materialType")) {
				$scope.material = getMaterialByIdSpec($scope.item.materialID, $scope.item.materialAmount, $scope.item.materialType);
			}
			else {
				$scope.material = getMaterialById($scope.item.materialID, $scope.item.materialAmount);
			}
		}
		$scope.craft 							= usedToCraftFromEquipment($scope.itemID);
		
		/***************/
		/**GRADE START**/
		/***************/
		$scope.listOfGrades				= jsonGrades;
		$scope.grade							= "0";
		if ($routeParams.grade) { //If there is a ?grade=x in the URL
			$scope.grade = $routeParams.grade;
		}
		$scope.minGradeModifier		= jsonGrades[$scope.grade].min;
		$scope.maxGradeModifier		= jsonGrades[$scope.grade].max;
		
		//ON GRADE change
		// $scope.gradeChange = function() {
			// var objectURL = "#!/items/trinket/"+$routeParams.id+"?grade="+$scope.grade;
			// $(location).attr('href', objectURL);
		// }
		
		//ON SUFFIX/PREFIX/GRADE change
		$scope.suffixPrefixChange = function() {
			var objectURL = "#!/items/trinket/"+$routeParams.id+"?grade="+$scope.grade;
			$(location).attr('href', objectURL);
		}

		var redditLink = "["+$scope.item.name+"]" + " (" + window.location.href + ")";

		$("#raw-url-link").click(function() {
			$("#generatedLink").show();
			$("#generatedLink-reddit").addClass("hide");
		})

		$("#reddit-url-link").click(function() {
			$("#generatedLink").hide();
			$("#generatedLink-reddit").removeClass("hide");
		})

		$("#generatedLink").val(window.location.href);
		$("#generatedLink-reddit").val(redditLink);

	})
