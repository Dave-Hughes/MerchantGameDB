//Controller for Weapons
angular.module('mainApp')
	.controller('eqWeaponCtrl', function($scope, $routeParams) {
		$scope.Math = Math;
		$scope.item = getEquipmentByName($routeParams.id);
		$scope.itemBaseStat = getBaseStatByType($scope.item.subType);
		$scope.material = getMaterialById($scope.item.materialID, $scope.item.materialAmount);
		$scope.suffix = 0;
		$scope.prefix = "";
		$scope.suffixNum = 0;
		$scope.prefixNum = 0;
		$scope.listOfSuffix = {'': 0,'+1': 1,'+2': 2,'+3': 3,'+4': 4,'+5': 5,'+6': 6,'+7': 7};
		$scope.listOfWeaponPrefix = ["", "Burning", "Fiery", "Flaming", "Smoldering", "Blazing", "Cold", "Chilled", "Icy", "Frozen", "Glacial", "Keen", "Accurate", "Sharp", "Fatal", "Deadly"];

		//If there is a ?suffix=x in the URL
		if ($routeParams.suffix) {
			//Suffix = the suffix in the URL (converted to number from string)
			$scope.suffix = parseInt($routeParams.suffix)
		}

		//If there is a ?prefix=x in the URL
		if ($routeParams.prefix) {
			//Prefix = the prefix in the URL
			$scope.prefix = $routeParams.prefix;
			$scope.prefixStat = getPrefixStatByName($routeParams.prefix);
		}

		$scope.suffixPrefixChange = function() {
			var objectURL = "";
			if ($scope.suffix && $scope.prefix) {
				objectURL = "#!/items/weapon/"+$routeParams.id+"?suffix="+$scope.suffix+"&prefix="+$scope.prefix;
			}
			else if($scope.suffix) {
				objectURL = "#!/items/weapon/"+$routeParams.id+"?suffix="+$scope.suffix;
			}
			else if($scope.prefix){
				objectURL = "#!/items/weapon/"+$routeParams.id+"?prefix="+$scope.prefix;
			}
			else{
				objectURL = "#!/items/weapon/"+$routeParams.id;
			}
			$(location).attr('href', objectURL);
		}

		function suffixChange() {
			$scope.percentMod = "1." + ($scope.suffix * 10);
			if($scope.suffix > 0) {
				$("#add-suffix").removeClass("hide");
				$scope.suffixNum = 1;
			}
			else {
				$("#add-suffix").addClass("hide");
			}
		}

		function prefixChange() {
			$("#prefix-hold").text($scope.prefix + " ");
			if ($scope.prefix != 0) {
				$scope.prefixNum = 1;
			}
		}

		$("#generatedLink").val(window.location.href);
		prefixChange();
		suffixChange();
	})