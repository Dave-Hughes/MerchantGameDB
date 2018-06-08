angular.module('mainApp')
	.controller('toolCompareCtrl', function ($scope, $routeParams, itemsService) {
		$scope.Math = Math;
		$scope.equipment = jsonEquipments;
		$scope.formula = jsonFormulas;
		$scope.suffix = jsonSuffixes;
		$scope.prefix = jsonPrefixes;
		$scope.grade = jsonGrades;
		$scope.rarityMod = jsonRarity;
		$scope.getItems = $routeParams.c;
		var itemId = $routeParams.c.split("-")[0].split(",")[0]
		var statsOrdered;
		var bonusToFormulaMap = {
			atkBns: "atk",
			matkBns: "matk",
			accBns: "acc",
			defBns: "def",
			mdefBns: "mdef",
		}

		if ($scope.equipment[itemId].itemSlot == 1) { //Weapon
			$scope.itsWeapon = true;
			statsOrdered = ["atkBns", "matkBns", "Total Attack", "accBns", "str", "dex", "int", "defBns", "mdefBns"];
		}
		else if ($scope.equipment[itemId].itemSlot == 6) { //Trinket
			$scope.itsTrinket = true;
			statsOrdered = ["str", "dex", "int", "atkBns", "matkBns", "accBns", "defBns", "mdefBns"];
		}
		else { //Armor
			$scope.itsArmor = true;
			statsOrdered = ["defBns", "mdefBns", "atkBns", "matkBns", "accBns", "str", "dex", "int"];
		}

		statsOrdered = statsOrdered.concat(["hpBns", "critBns", "lckMod",
			"speed", "expMod", "atkPct", "matkPct", "defPct",
			"mdefPct", "accPct", "hpPct", "apMod", "critMod"])

		function prepareFinalStats(item, itemPrefix, itemSuffix, itemGrade) {
			var finalObj = {}
			var itemFormula = jsonFormulas[item.subType]

			for (var i = 0; i < statsOrdered.length; i++) {
				var statName = statsOrdered[i]
				if (statName == "Total Attack") {
					finalObj[statName] = {
						min: finalObj["atkBns"].min + finalObj["matkBns"].min,
						max: finalObj["atkBns"].max + finalObj["matkBns"].max
					}
					continue;
				}
				var min = null, max = null, bnsStat = item.bonusStat[statName]
				if (bnsStat) {
					min = itemsService.getStatAfterGrade(bnsStat[0], itemGrade.min)
					max = itemsService.getStatAfterGrade(bnsStat[1], itemGrade.max)
				}
				if (itemPrefix.stat && itemPrefix.stat[statName]) {
					min = (min || 0) + itemPrefix.stat[statName]
					max = (max || 0) + itemPrefix.stat[statName]
				}

				var formulaStatName = bonusToFormulaMap[statName]
				if (formulaStatName && itemFormula) {
					var base = itemFormula[formulaStatName + "Base"]
					if (base) {
						var plvl = itemFormula[formulaStatName + "Lvl"]
						var suffixMod = 1 + itemSuffix.modif
						min = (min || 0) + Math.ceil(
							Math.ceil((base + plvl * item.itemLevel) * itemGrade.min) * suffixMod);
						max = (max || 0) + Math.ceil(
							Math.ceil((base + plvl * item.itemLevel) * itemGrade.max) * suffixMod);
					}
				}
				if (min) {
					finalObj[statName] = {
						min: min,
						max: max
					}
				}
			}
			return finalObj
		}

		//Item 1
		//get item1 from url
		var item1 = $routeParams.c.split("-")[0];

		//first number (Equipment)
		var item1Stat = item1.split(",")[0];
		$scope.item1Stat = $scope.equipment[item1Stat];


		//second number (Prefix)
		var item1Prefix = {};
		item1Prefix.id = item1.split(",")[1];
		item1Prefix.name = $scope.prefix[item1Prefix.id].name;
		item1Prefix.stat = $scope.prefix[item1Prefix.id].stats;
		$scope.item1Prefix = item1Prefix;

		//third number (Suffix)
		var item1Suffix = {};
		item1Suffix.id = item1.split(",")[2] || "0";
		item1Suffix.name = $scope.suffix[item1Suffix.id].name;
		if ($scope.suffix[item1Suffix.id].hasOwnProperty("stats")) {
			item1Suffix.modif = $scope.suffix[item1Suffix.id].stats['acc'];
		}
		else {
			item1Suffix.modif = 0;
		}
		$scope.item1Suffix = item1Suffix;

		//Fourth number (Grade)
		var item1Grade = {}
		item1Grade.id = item1.split(",")[3];
		item1Grade.name = $scope.grade[item1Grade.id].name;
		item1Grade.min = $scope.grade[item1Grade.id].min;
		item1Grade.max = $scope.grade[item1Grade.id].max;
		$scope.item1Grade = item1Grade;

		//Item 2
		//get item2 from url
		var item2 = $routeParams.c.split("-")[1];

		//first number (Equipment)
		var item2Stat = item2.split(",")[0];
		item2Stat = $scope.equipment[item2Stat];
		$scope.item2Stat = item2Stat;

		//second number (Prefix)
		var item2Prefix = {};
		item2Prefix.id = item2.split(",")[1];
		item2Prefix.name = $scope.prefix[item2Prefix.id].name;
		item2Prefix.stat = $scope.prefix[item2Prefix.id].stats;
		$scope.item2Prefix = item2Prefix;

		//third number (Suffix)
		var item2Suffix = {};
		item2Suffix.id = item2.split(",")[2] || "0";
		item2Suffix.name = $scope.suffix[item2Suffix.id].name;
		if ($scope.suffix[item2Suffix.id].hasOwnProperty("stats")) {
			item2Suffix.modif = $scope.suffix[item2Suffix.id].stats['acc'];
		}
		else {
			item2Suffix.modif = 0;
		}
		$scope.item2Suffix = item2Suffix;

		//Fourth number (Grade)
		var item2Grade = {}
		item2Grade.id = item2.split(",")[3];
		item2Grade.name = $scope.grade[item2Grade.id].name;
		item2Grade.min = $scope.grade[item2Grade.id].min;
		item2Grade.max = $scope.grade[item2Grade.id].max;
		$scope.item2Grade = item2Grade;


		$scope.finalStats1 = prepareFinalStats($scope.item1Stat, item1Prefix, item1Suffix, item1Grade)
		$scope.finalStats2 = prepareFinalStats($scope.item2Stat, item2Prefix, item2Suffix, item2Grade)

		$scope.existingStats = []
		for (var i = 0; i < statsOrdered.length; i++) {
			var statName = statsOrdered[i]
			if ($scope.finalStats1[statName] || $scope.finalStats2[statName]) {
				$scope.existingStats.push(statName)
				$scope.finalStats1[statName] = $scope.finalStats1[statName] || { min: 0, max: 0 }
				$scope.finalStats2[statName] = $scope.finalStats2[statName] || { min: 0, max: 0 }
			}
		}

		$scope.item1Stat.finalRarity = itemsService.getItemQuality($scope.item1Stat, item1Prefix.id > 0, item1Suffix.id > 0)
		$scope.item2Stat.finalRarity = itemsService.getItemQuality($scope.item2Stat, item2Prefix.id > 0, item2Suffix.id > 0)

		var pageName
		if ($scope.itsWeapon) {
			pageName = "weapon"
		} else if ($scope.itsArmor) {
			pageName = "armor"
		} else {
			pageName = "trinket"
		}
		$scope.pageName = pageName

		$scope.suffixPrefixChange = function (i1p, i1s, i1g, i2p, i2s, i2g) {
			var objectURL = "#!/tools/compare?c=";
			objectURL += $routeParams.c.split("-")[0].split(",")[0] + ",";
			objectURL += i1p + ",";
			objectURL += i1s + ",";
			objectURL += i1g;
			objectURL += "-";
			objectURL += $routeParams.c.split("-")[1].split(",")[0] + ",";
			objectURL += i2p + ",";
			objectURL += i2s + ",";
			objectURL += i2g;
			$(location).attr('href', objectURL);
		}

		$scope.getMinMaxClass = function (stat1, stat2) {
			if (stat1.min < stat2.min) {
				return "compareLose"
			} else if (stat1.min == stat2.min) {
				return "compareTie"
			}
			return "compareWin"
		}

		$scope.getSign = function (stat1, stat2) {
			if (stat1.min < stat2.min) {
				return "<"
			} else if (stat1.min == stat2.min) {
				return "="
			}
			return ">"
		}

		//Get URL Functionality
		var redditLink = "[Comparsion: " + $scope.item1Stat.name + " and " + $scope.item2Stat.name + "]" + " (" + window.location.href + ")";

		$("#raw-url-link").click(function () {
			$("#generatedLink").show();
			$("#generatedLink-reddit").addClass("hide");
		})

		$("#reddit-url-link").click(function () {
			$("#generatedLink").hide();
			$("#generatedLink-reddit").removeClass("hide");
		})

		$("#generatedLink").val(window.location.href);
		$("#generatedLink-reddit").val(redditLink);

	});
