angular.module('mainApp')
	.controller('toolCompareCtrl', function($scope, $routeParams) {
	  $scope.equipment = jsonEquipments;
	  $scope.formula = jsonFormulas;
		$scope.suffix = jsonSuffixes;
		$scope.prefix = jsonPrefixes;
		$scope.getItems = $routeParams.c;

		$scope.listOfSuffix = {'': 0,'+1': 1,'+2': 2,'+3': 3,'+4': 4,'+5': 5,'+6': 6,'+7': 7,'+8': 8,'+9': 9};
		$scope.listOfPrefix = {"":0, "Burning":1, "Fiery":2, "Flaming":3, "Smoldering":4, "Blazing":5, "Cold":6, "Chilled":7, "Icy":8, "Frozen":9, "Glacial":10, "Keen":11, "Accurate":12, "Sharp":13, "Fatal":14, "Deadly":15, "Tenacious":16, "Vigorous":17, "Robust":18, "Resilient":19, "Titan's":20, "Solid":21, "Hard":22, "Tough":23, "Sturdy":24, "Defender's":25, "Focused":26, "Resolute":27, "Centered":28, "Mindful":29, "Protector's":30};

		//decide if use Weapon or Armor prefixes
		if($scope.equipment[$routeParams.c.split("-")[0].split(",")[0]].itemSlot == 1)
			{ //Weapon
			$scope.itsWeapon = true;
			}
		else if($scope.equipment[$routeParams.c.split("-")[0].split(",")[0]].itemSlot == 6)
			{ //Trinket
			$scope.itsTrinket = true;
			}
		else
			{ //Armor
			$scope.itsArmor = true;
			}

		//Item 1
			//get item1 from url
			var item1 = $routeParams.c.split("-")[0];

			//first number (Equipment)
			var item1Stat = item1.split(",")[0];
			item1Stat = $scope.equipment[item1Stat];
			$scope.item1Stat = item1Stat;

			//second number (Prefix)
			var item1Prefix = {};
			item1Prefix.id = parseInt(item1.split(",")[1]);
			item1Prefix.name = $scope.prefix[item1Prefix.id].name;
			item1Prefix.stat = $scope.prefix[item1Prefix.id].stats;
			$scope.item1Prefix = item1Prefix;
			if(item1Prefix.id != 0){$scope.item1PrefixNum = 1;}

			//third nuber (Suffix)
			var item1Suffix = {};
			item1Suffix.id = parseInt(item1.split(",")[2]);
			item1Suffix.name = $scope.suffix[item1Suffix.id].name;
			if($scope.suffix[item1Suffix.id].hasOwnProperty("stats"))
				{
				item1Suffix.modif = $scope.suffix[item1Suffix.id].stats['acc'];
				$scope.item1SuffixNum = 1;
				}
			else
				{
				item1Suffix.modif = 0;
				}
			$scope.item1Suffix = item1Suffix;

		//Item 2
			//get item2 from url
			var item2 = $routeParams.c.split("-")[1];

			//first number (Equipment)
			var item2Stat = item2.split(",")[0];
			item2Stat = $scope.equipment[item2Stat];
			$scope.item2Stat = item2Stat;

			//second number (Prefix)
			var item2Prefix = {};
			item2Prefix.id = parseInt(item2.split(",")[1]);
			item2Prefix.name = $scope.prefix[item2Prefix.id].name;
			item2Prefix.stat = $scope.prefix[item2Prefix.id].stats;
			$scope.item2Prefix = item2Prefix;
			if(item2Prefix.id != 0){$scope.item2PrefixNum = 1}

			//third nuber (Suffix)
			var item2Suffix = {};
			item2Suffix.id = parseInt(item2.split(",")[2]);
			item2Suffix.name = $scope.suffix[item2Suffix.id].name;
			if($scope.suffix[item2Suffix.id].hasOwnProperty("stats"))
				{
				item2Suffix.modif = $scope.suffix[item2Suffix.id].stats['acc'];
				$scope.item2SuffixNum = 1;
				}
			else
				{
				item2Suffix.modif = 0;
				}
			$scope.item2Suffix = item2Suffix;

		$scope.suffixPrefixChange = function(i1p, i1s, i2p, i2s) {
			var objectURL = "#!/tools/compare?c=";
			objectURL += $routeParams.c.split("-")[0].split(",")[0]+",";
			objectURL += i1p+",";
			objectURL += i1s;
			objectURL += "-";
			objectURL += $routeParams.c.split("-")[1].split(",")[0]+",";
			objectURL += i2p+",";
			objectURL += i2s;
			$(location).attr('href', objectURL);
		}

setTimeout(function()
	{
	$.each($(".compareThis"), function()
		{
		var item1comp = $(this).prev()
		var item2comp = $(this).next()
		var item1compStat = parseInt($(this).prev().html().split("-")[0]) || 0;
		var item2compStat = parseInt($(this).next().html().split("-")[0]) || 0;
		if($(this).hasClass("low"))
			{ //if low is better
			if(item1compStat < item2compStat)
				{ //item1 is better
				item1comp.addClass("compareWin");
				item2comp.addClass("compareLose");
				$(this).html(">");
				}
			else if(item1compStat > item2compStat)
				{ //item2 is better
				item1comp.addClass("compareLose");
				item2comp.addClass("compareWin");
				$(this).html("<");
				}
			else
				{ //same
				item1comp.addClass("compareTie");
				item2comp.addClass("compareTie");
				$(this).html("=");
				}
			}
		else
			{ //if high is better
			if(item1compStat > item2compStat)
				{ //item1 is better
				item1comp.addClass("compareWin");
				item2comp.addClass("compareLose");
				$(this).html(">");
				}
			else if(item1compStat < item2compStat)
				{ //item2 is better
				item1comp.addClass("compareLose");
				item2comp.addClass("compareWin");
				$(this).html("<");
				}
			else
				{ //same
				item1comp.addClass("compareTie");
				item2comp.addClass("compareTie");
				$(this).html("=");
				}
			}
		});
	}, 0);

	//Get URL Functionality
	var redditLink = "[Comparsion: "+$scope.item1Stat.name+ " and " +$scope.item2Stat.name+"]" + " (" + window.location.href + ")";

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

});
