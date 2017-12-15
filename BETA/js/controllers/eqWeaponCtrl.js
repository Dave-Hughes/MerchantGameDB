//Controller for Weapons
angular.module('mainApp')
	.controller('eqWeaponCtrl', function($scope, $routeParams) {
		$scope.Math = Math;
		$scope.itemID = getEquipmentIdByName($routeParams.id);
		$scope.item = jsonEquipments[$scope.itemID];
		$scope.itemBaseStat = getBaseStatByType($scope.item.subType);
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

		/****************/
		/**SUFFIX START**/
		/****************/
		$scope.listOfSuffix 			= jsonSuffixes;
		$scope.suffix 						= "0";
		$scope.suffixNum 					= 0;
		
		if ($routeParams.suffix) { //If there is a ?suffix=x in the URL
			$scope.suffix = $routeParams.suffix;
		}
		function suffixChange() {
			$scope.suffixMod = 1 + getSuffixMod($scope.suffix);
			if($scope.suffix > 0) { //+1 color if have suffix
				$("#add-suffix").removeClass("hide");
				$scope.suffixNum = 1;
			}
			else {
				$("#add-suffix").addClass("hide");
			}
		}

		/****************/
		/**PREFIX START**/
		/****************/
		$scope.listOfPrefix 			= jsonPrefixes;
		$scope.prefix 						= "0";
		$scope.prefixNum 					= 0;
		
		if ($routeParams.prefix) { //If there is a ?prefix=x in the URL
			$scope.prefix = $routeParams.prefix;
			$scope.prefixStat = jsonPrefixes[$scope.prefix];
		}
		function prefixChange() {
			if ($scope.prefix != 0) { //+1 color if have prefix
				$scope.prefixNum = 1;
			}
		}
		
		//ON SUFFIX/PREFIX/GRADE change
		$scope.suffixPrefixChange = function() {
			var objectURL = "#!/items/weapon/"+$routeParams.id+"?suffix="+$scope.suffix+"&prefix="+$scope.prefix+"&grade="+$scope.grade;
			$(location).attr('href', objectURL);
		}

		/** LINKS **/
		var redditLink = "["+$scope.item.name+"]" + " (" + window.location.href + ")";
		//RAW link
		$("#raw-url-link").click(function() {
			$("#generatedLink").show();
			$("#generatedLink-reddit").addClass("hide");
		})

		//REDDIT link
		$("#reddit-url-link").click(function() {
			$("#generatedLink").hide();
			$("#generatedLink-reddit").removeClass("hide");
		})

		$("#generatedLink").val(window.location.href);
		$("#generatedLink-reddit").val(redditLink);
		
		
		//INITIALIZE FUNCTIONS
		prefixChange();
		suffixChange();
	})
