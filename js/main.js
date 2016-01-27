/************/
/*LOAD JSONS*/
/************/

$.ajaxSetup({'async': false});
//Search
var jsonSearch = "";
$.getJSON( "json/search.json", function( data ) {
	jsonSearch = data;
	});
$.ajaxSetup({'async': true});

//Equipments
var jsonEquipments = "";
$.getJSON( "json/EquipmentList.json", function( data ) {
	jsonEquipments = data;
	});

//Formulas
var jsonFormulas = "";
$.getJSON( "json/FormulaList.json", function( data ) {
	jsonFormulas = data;
	});

//Heroes
var jsonHeroes = "";
$.getJSON( "json/HeroList.json", function( data ) {
	jsonHeroes = data;
	});

//Materials
var jsonMaterials = "";
$.getJSON( "json/MaterialList.json", function( data ) {
	jsonMaterials = data;
	});

//Potions
var jsonPotions = "";
$.getJSON( "json/PotionList.json", function( data ) {
	jsonPotions = data;
	});

//Quests
var jsonQuests = "";
$.getJSON( "json/QuestList.json", function( data ) {
	jsonQuests = data;
	});

//Prefixes
var jsonPrefixes = "";
$.getJSON( "json/PrefixList.json", function( data ) {
	jsonPrefixes = data;
	});

//Suffixes
var jsonSuffixes = "";
$.getJSON( "json/SuffixList.json", function( data ) {
	jsonSuffixes = data;
	});

/***********/
/*FUNCTIONS*/
/***********/
$(document).ready(function()
	{
	$("#main-content").on("click", ".copy-item-url", function() {
		var copyTextarea = document.querySelector('#generatedLink');
		copyTextarea.select();

			try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		  } catch (err) {
			console.log('Oops, unable to copy');
		  }
	})
	});

function getEquipmentByName(name) {
	var item = "";
	$.each(jsonEquipments, function(index, val) {
		if(name == val.name){
			item = val;
			return false;
		}
	})
	return item;
}

function getEquipmentNameById(id)
	{
	return jsonEquipments[id-1].name;
	}


function getEquipmentIdByName(name) {
	var variable= "";
	$.each(jsonEquipments, function(index, val) {
		if(val.name == name) {
			variable = index;
			return false; //this is the break
		}
	})
	return variable;
}

function getPotionIdByName(name)
	{
	var variable= "";
	$.each(jsonPotions, function(index, val) {
		if(val.name == name) {
			variable = index;
			return false; //this is the break
		}
	})
	return variable;
	}

function getBaseStatByType(type)
	{
	return jsonFormulas[type];
	}

function getMaterialById(materials, amount)
	{
	var mats = [];
	$.each(materials, function(index, val) {
			var search = jsonMaterials[val-1];
			var matInfo = {name: search.name, amount: amount[index], rarity: search.rarity, icon: search.image, what:"material"};
			mats.push(matInfo);
	})
	return mats;
	}

function getMaterialByIdPotion(materials, amount)
	{ //fuckPotions (if it's a spec potion then first material is a potion instead of material)
	var mats = [];
	$.each(materials, function(index, val) {
		if(index == 0)
			{
			var search = jsonPotions[val-1];
			var matInfo = {name: search.name, amount: amount[index], rarity: search.rarity, icon: search.image, what:"potion"};
			mats.push(matInfo);
			}
		else
			{
			var search = jsonMaterials[val-1];
			var matInfo = {name: search.name, amount: amount[index], rarity: search.rarity, icon: search.image, what:"material"};
			mats.push(matInfo);
			}
	})
	return mats;
	}

function getMaterialNameById(id)
	{
	return jsonMaterials[id-1].name;
	}

function getMaterialByName(name)
	{
	var mat = "";
	$.each(jsonMaterials, function(index, val) {
		if(name == val.name){
			mat = val;
			return false;
		}
	})
	return mat;
	}

function getMaterialIdByName(name) {
	var mat= "";
	$.each(jsonMaterials, function(index, val) {
		if(val.name == name) {
			mat = index;
			return false;
		}
	})
	return mat;
}


function getMonsterByTrinketId(id) {
	var monsters = [];
	$.each(jsonQuests, function(index, val) {
		if (val.hasOwnProperty("trinketA") && (val.trinketA[0]-1 == id)) {
			if (val.trinketA[0]-1 == id) {
				var currentMonster = val.trinketA[0]-1;
				monsterInfo = {name: val.name, region: val.region, icon: val.image, rarity: val.title, dropRate: val.trinketA[1]};
				monsterInfo.region = regionById(val.region);
				monsters.push(monsterInfo);
			}
		}
		if (val.hasOwnProperty("trinketB") && (val.trinketB[0]-1 == id)) {
			if (val.trinketB[0]-1 == id) {
				var currentMonster = val.trinketB[0]-1;
				monsterInfo = {name: val.nameB, region: val.region, icon: val.imageB, rarity: val.titleB, dropRate: val.trinketB[1]};
				monsterInfo.region = regionById(val.region);
				monsters.push(monsterInfo);
			}
		}
	})
	return monsters;
}

function regionById(id)
	{
	var region = "";
	if (id == 1) { region = "Tuvale Forest"}
	else if (id == 2) { region = "Yarsol Cove"}
	else if (id == 3) { region = "Aldur Highlands"}
	else if (id == 4) { region = "Vulkrum Badlands"}
	else if (id == 5) { region = "Grimhal Volcano"}
	return region;
	}

function getMonsterByMaterialId(id) {
	var monsters = [];
	$.each(jsonQuests, function(index, val) {
		if(val.title != "Placeholder")
			{
			if (val.rewardA1[0]-1 == id) {
				var monster = {name: val.name, rarity: val.title, icon: val.image, chance: val.rewardA1[1], min: val.rewardA1[2], max: val.rewardA1[3],region: regionById(val.region)}
				monsters.push(monster)
			}
			else if (val.rewardA2[0]-1 == id) {
				var monster = {name: val.name, rarity: val.title, icon: val.image, chance: val.rewardA2[1], min: val.rewardA2[2], max: val.rewardA2[3],region: regionById(val.region)}
				monsters.push(monster)
			}
			else if (val.rewardA3[0]-1 == id) {
				var monster = {name: val.name, rarity: val.title, icon: val.image, chance: val.rewardA3[1], min: val.rewardA3[2], max: val.rewardA3[3],region: regionById(val.region)}
				monsters.push(monster)
			}
			else if (val.rewardA4[0]-1 == id) {
				var monster = {name: val.name, rarity: val.title, icon: val.image, chance: val.rewardA4[1], min: val.rewardA4[2], max: val.rewardA4[3],region: regionById(val.region)}
				monsters.push(monster)
			}
			if(val.hasOwnProperty("nameB"))
				{
				if (val.rewardB1[0]-1 == id) {
					var monster = {name: val.nameB, rarity: val.titleB, icon: val.imageB, chance: val.rewardB1[1], min: val.rewardB1[2], max: val.rewardB1[3],region: regionById(val.region)}
					monsters.push(monster)
				}
				else if (val.rewardB2[0]-1 == id) {
					var monster = {name: val.nameB, rarity: val.titleB, icon: val.imageB, chance: val.rewardB2[1], min: val.rewardB2[2], max: val.rewardB2[3],region: regionById(val.region)}
					monsters.push(monster)
				}
				else if (val.rewardB3[0]-1 == id) {
					var monster = {name: val.nameB, rarity: val.titleB, icon: val.imageB, chance: val.rewardB3[1], min: val.rewardB3[2], max: val.rewardB3[3],region: regionById(val.region)}
					monsters.push(monster)
				}
				else if (val.rewardB4[0]-1 == id) {
					var monster = {name: val.nameB, rarity: val.titleB, icon: val.imageB, chance: val.rewardB4[1], min: val.rewardB4[2], max: val.rewardB4[3],region: regionById(val.region)}
					monsters.push(monster)
				}
				}
			}
	})
	return monsters;
}

function getHeroByName(name)
	{
	var hero = "";
	$.each(jsonHeroes, function(index, val) {
		if(val.name == name)
			{
			hero = val
			return false;
			}
	})
	return hero;
	}

function getPotionByName(name)
	{
	var pot = "";
	$.each(jsonPotions, function(index, val) {
		if(val.name == name)
			{
			pot = val
			return false;
			}
	})
	return pot;
	}

function getQuestByName(name)
	{
	var quest = "";
	$.each(jsonQuests, function(index, val) {
		if(val.name == name)
			{
			val.region2 = regionById(val.region);
			var questSize = 1;
			if(val.hasOwnProperty("questSize"))
				{
				questSize = val.questSize;
				}
			if(val.title.length == 0)
				{
				val.title = "Normal";
				}
			// console.log(val.title.length);
			quest = {
					"name": val.name,
					"nickname": val.nickname,
					"image":val.image,
					"enemyImage":val.enemyImage,
					"title":val.title,
					"levelReq":val.levelReq,
					"exp":val.exp,
					"gold":val.gold,
					"time":val.time,
					"enemyHp":val.enemyHp,
					"enemyAtk":val.enemyAtk,
					"enemyMatk":val.enemyMatk,
					"enemyDef":val.enemyDef,
					"enemyMdef":val.enemyMdef,
					"enemyEva":val.enemyEva,
					"reward1":val.rewardA1,
					"reward2":val.rewardA2,
					"reward3":val.rewardA3,
					"reward4":val.rewardA4,
					"trinket":val.trinketA,
					"region":val.region,
					"region2":val.region2,
					"questSize":questSize
					};
			return false;
			}
		else if(val.nameB == name)
			{
			val.region2 = regionById(val.region)
			var questSize = 1;
			if(val.hasOwnProperty("questSize"))
				{
				questSize = val.questSize;
				}
			if(val.title.length == 0)
				{
				val.title = "Normal";
				}
			quest = {
					"name": val.nameB,
					"nickname": val.nicknameB,
					"image":val.imageB,
					"enemyImage":val.enemyImageB,
					"title":val.titleB,
					"levelReq":val.levelReq,
					"exp":val.expB,
					"gold":val.goldB,
					"time":val.timeB,
					"enemyHp":val.enemyHpB,
					"enemyAtk":val.enemyAtkB,
					"enemyMatk":val.enemyMatkB,
					"enemyDef":val.enemyDefB,
					"enemyMdef":val.enemyMdefB,
					"enemyEva":val.enemyEvaB,
					"reward1":val.rewardB1,
					"reward2":val.rewardB2,
					"reward3":val.rewardB3,
					"reward4":val.rewardB4,
					"trinket":val.trinketB,
					"region":val.region,
					"region2":val.region2,
					"questSize":questSize
					};
			return false;
			}
	})
	return quest;
	}

function usedToCraftFromMaterial(id)
	{
	var crafted = [];
	$.each(jsonEquipments, function(index, val) {
		$.each(val.materialID, function(index, value)
			{
			if(value-1 == id)
				{
				var type ="";
				if(val.itemSlot == 1)
					{
					type = "weapon";
					}
				else if(val.itemSlot == 6)
					{
					type = "trinket";
					}
				else
					{
					type = "armor";
					}
				var eq = {name: val.name, image: val.image, rarity: val.rarity, type:type, amount:val.materialAmount[index]};
				crafted.push(eq);
				return false;
				}
			})
	})
	$.each(jsonPotions, function(index, val) {
		$.each(val.materialID, function(index, value)
			{
			if(value-1 == id && (val.hasOwnProperty("materialType") && val.materialType[index] != "consumable") || value-1 == id && !val.hasOwnProperty("materialType"))
				{
				var eq = {name: val.name, image: val.image, rarity: val.rarity, type:"potion", amount:val.materialAmount[index]};
				crafted.push(eq);
				return false;
				}
			})
	})
	$.each(jsonMaterials, function(index, val) {
		$.each(val.materialID, function(index, value)
			{
			if(value-1 == id)
				{
				var eq = {name: val.name, image: val.image, rarity: val.rarity, type:"material", amount:val.materialAmount[index]};
				crafted.push(eq);
				return false;
				}
			})
	})
	return crafted;
	}

function usedToCraftFromPotion(id)
	{
	var crafted = [];
	$.each(jsonPotions, function(index, val) {
		$.each(val.materialID, function(index, value)
			{
			if(value-1 == id)
				{
				var eq = {name: val.name, image: val.image, rarity: val.rarity, type:"potion", amount:val.materialAmount[index]};
				crafted.push(eq);
				return false;
				}
			})
	})
	return crafted;
	}

function getQuestNamesByRegioName(name)
	{
	var regio = 0;
	if(name == "Tuvale Forest"){regio = 1}
	else if(name == "Yarsol Cove"){regio = 2}
	else if(name == "Aldur Highlands"){regio = 3}
	else if(name == "Vulkrum Badlands"){regio = 4}
	else if(name == "Grimhal Volcano"){regio = 5}

	var names = [];
	$.each(jsonQuests, function(index, val)
		{
		if(val.region == regio && val.title != "Placeholder")
			{
			names.push(val.name);
			if(val.nameB)
				{
				names.push(val.nameB);
				}
			}
		});
	return names;
	}

function getPrefixStatByName(name)
	{
	var stat = "";
	$.each(jsonPrefixes, function(index, val)
		{
		if(name == val.name)
			{
			stat = {"name":Object.keys(val.stats)[0], "val":val.stats[Object.keys(val.stats)[0]]};
			return false;
			}
		});
	return stat;
	}

/*********/
/*ANGULAR*/
/*********/

(function(angular){
  'use strict';
  angular.module('mainApp', ['snap', 'angucomplete-alt', 'ngRoute'])
	//Controller for the body
	.controller('bodyCtrl', function($scope, $http) {

	})

	//Controller for the search
	.controller('searchController', function($scope, $http) {
		$scope.gameObjects = jsonSearch;
		//FOR WHEN A MENU ITEM IS CLICKED
		$scope.itemSelected = function(selected) {
		  if (selected) { //Need to know if on a DB page or not
			var URLextender = ""
			if(selected.originalObject.type == "Weapon")
				{ URLextender = "items/weapon/" }
			else if(selected.originalObject.type == "Armor")
				{ URLextender = "items/armor/" }
			else if(selected.originalObject.type == "Trinket")
				{ URLextender = "items/trinket/" }
			else if(selected.originalObject.type == "Material")
				{ URLextender = "items/material/" }
			else if(selected.originalObject.type == "Potion")
				{ URLextender = "items/potion/" }
			else
				{ URLextender = "quests/" }

			var objectURL = "#!/" + URLextender + selected.title;
			$(location).attr('href', objectURL);
			return false;
		  } else {
			console.log('cleared');
		  }
		};
	})

	//Controller for main content
	.controller('mainCtrl', function($scope, $routeParams) {
		$scope.name = "Main";
		$scope.params = $routeParams;
	})

	//Controller for Weapons
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

	//Controller for Armors
	.controller('eqArmorCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.item = getEquipmentByName($routeParams.id);
		$scope.itemBaseStat = getBaseStatByType($scope.item.subType);
		$scope.material = getMaterialById($scope.item.materialID, $scope.item.materialAmount);
		$scope.suffix = 0;
		$scope.prefix = "";
		$scope.suffixNum = 0;
		$scope.prefixNum = 0;
		$scope.listOfSuffix = {'': 0,'+1': 1,'+2': 2,'+3': 3,'+4': 4,'+5': 5,'+6': 6,'+7': 7};
		console.log(jsonPrefixes);
		$scope.listOfArmorPrefix = ["", "Tenacious", "Vigorous", "Robust", "Resilient", "Titan's", "Solid", "Hard", "Tough", "Sturdy", "Defender's", "Focused", "Resolute", "Centered", "Mindful", "Protector's"];

		//If there is a ?suffix=x in the URL
		if ($routeParams.suffix) {
			//Suffix = the suffix in the URL (converted to number from string)
			$scope.suffix = parseInt($routeParams.suffix)
		}

		//If there is a ?prefix=x in the URL
		if ($routeParams.prefix) {
			//Prefix = the prefix in the URL
			$scope.prefix = $routeParams.prefix;
			$scope.prefixStat = getPrefixStatByName($routeParams.prefix)
		}

		$scope.suffixPrefixChange = function() {
			var objectURL = "";
			if ($scope.suffix && $scope.prefix) {
				objectURL = "#!/items/armor/"+$routeParams.id+"?suffix="+$scope.suffix+"&prefix="+$scope.prefix;
			}
			else if($scope.suffix) {
				objectURL = "#!/items/armor/"+$routeParams.id+"?suffix="+$scope.suffix;
			}
			else if($scope.prefix){
				objectURL = "#!/items/armor/"+$routeParams.id+"?prefix="+$scope.prefix;
			}
			else{
				objectURL = "#!/items/armor/"+$routeParams.id;
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

	//Controller for Trinkets
	.controller('eqTrinketCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.item = getEquipmentByName($routeParams.id);
		$scope.itemID = getEquipmentIdByName($routeParams.id);
		$scope.droppedBy = getMonsterByTrinketId($scope.itemID);
	})

	//Controller for Materials
	.controller('materialCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.material = getMaterialByName($routeParams.id);
		$scope.materialID = getMaterialIdByName($routeParams.id)
		if($scope.material.hasOwnProperty("materialID"))
			{ //if crafted
			$scope.craftedBy = getMaterialById($scope.material.materialID, $scope.material.materialAmount)
			}
		else
			{ //if dropped
			$scope.droppedBy = getMonsterByMaterialId($scope.materialID);
			}
		$scope.craft=usedToCraftFromMaterial($scope.materialID);
	})

	//Controller for Potions
	.controller('potionCtrl', function($scope, $routeParams) {
		$scope.potion = getPotionByName($routeParams.id);
		$scope.potionID = getPotionIdByName($routeParams.id);
		if($scope.potion.hasOwnProperty("materialType"))
			{
			$scope.craftedBy = getMaterialByIdPotion($scope.potion.materialID, $scope.potion.materialAmount);
			}
		else
			{
			$scope.craftedBy = getMaterialById($scope.potion.materialID, $scope.potion.materialAmount);
			}
		$scope.craft=usedToCraftFromPotion($scope.potionID);
		if($scope.craft.length == 0){$scope.craft = ""}
		console.log($scope.craft.length);

	})

	//Controller for Heroes
	.controller('heroCtrl', function($scope, $routeParams) {
		$scope.hero = getHeroByName($routeParams.id);
		$scope.heroUnlock = "pages/hero-unlock-"+$scope.hero.name+".html";
		$scope.heroRole = "pages/hero-role-"+$scope.hero.name+".html";
	})

	//Controller for Quests
	.controller('questCtrl', function($scope, $routeParams) {
		$scope.quest = getQuestByName($routeParams.id);
		$scope.mats = jsonMaterials;
		$scope.eq = jsonEquipments;
	})

	//Controller for Regions
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

	//Controller for itemWeapon
	.controller('itemWeaponCtrl', function($scope, $routeParams) {

	})

	//Controller for itemArmor
	.controller('itemArmorCtrl', function($scope, $routeParams) {

	})

	//Controller for itemTrinket
	.controller('itemTrinketCtrl', function($scope, $routeParams) {

	})

	//Controller for itemPotion
	.controller('itemPotionCtrl', function($scope, $routeParams) {

	})

	//Controller for itemMaterial
	.controller('itemMaterialCtrl', function($scope, $routeParams) {

	})

	//Controller for itemMaterial
	.controller('toolCtrl', function($scope, $routeParams) {

	})

	//Controller for itemMaterial
	.controller('guideCtrl', function($scope, $routeParams) {

	})

	//REDIRECTION (ng-route)
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		//if item
			//if weapon
			.when('/items/weapon/:id', {
				templateUrl: 'pages/eqWeapon.html',
				controller: 'eqWeaponCtrl'
			})
			//if armor
			.when('/items/armor/:id', {
				templateUrl: 'pages/eqArmor.html',
				controller: 'eqArmorCtrl'
			})
			//if trinket
			.when('/items/trinket/:id', {
				templateUrl: 'pages/eqTrinket.html',
				controller: 'eqTrinketCtrl'
			})
			//if material
			.when('/items/material/:id', {
				templateUrl: 'pages/materials.html',
				controller: 'materialCtrl'
			})
			//if potion
			.when('/items/potion/:id', {
				templateUrl: 'pages/potions.html',
				controller: 'potionCtrl'
			})

		//if menu
			//if weapon(menu)
			.when('/items/weapons', {
				templateUrl: 'pages/itemWeapon.html',
				controller: 'itemWeaponCtrl'
			})
			//if armor(menu)
			.when('/items/armors', {
				templateUrl: 'pages/itemArmor.html',
				controller: 'itemArmorCtrl'
			})
			//if trinket(menu)
			.when('/items/trinkets', {
				templateUrl: 'pages/itemTrinket.html',
				controller: 'itemTrinketCtrl'
			})
			//if potion(menu)
			.when('/items/potions', {
				templateUrl: 'pages/itemPotion.html',
				controller: 'itemPotionCtrl'
			})
			//if material(menu)
			.when('/items/materials', {
				templateUrl: 'pages/itemMaterial.html',
				controller: 'itemMaterialCtrl'
			})

		//if hero
		.when('/heroes/:id', {
			templateUrl: 'pages/heroes.html',
			controller: 'heroCtrl'
		})
		//if quest
		.when('/quests/:id', {
			templateUrl: 'pages/quests.html',
			controller: 'questCtrl'
		})
		//if regio
		.when('/regios/:id', {
			templateUrl: 'pages/regios.html',
			controller: 'regioCtrl'
		})
		//if tool
		.when('/tools/', {
			templateUrl: 'pages/tools.html',
			controller: 'toolCtrl'
		})
		//if guide
		.when('/guides/', {
			templateUrl: 'pages/guides.html',
			controller: 'guideCtrl'
		})
		//else
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider
		  .html5Mode(false)
		  .hashPrefix('!');
		// configure html5 to get links working on jsfiddle
		// $locationProvider.html5Mode(true);
	})

	.run(['$rootScope', '$route', function($rootScope, $route) {
		$rootScope.$on('$routeChangeSuccess', function() {
			//get the URL, split by /
			var href = window.location.href.split("/");
			//get the text after last /, replace %20 with space
			href = href[href.length-1].replace("%20", " ");
			//if we are on main site
			if(href.length == 0){href = "Main"}
			//attributums after ?
			var baseName = href.split("?")[0];
			var params = href.split("?")[1];
			var suffix = "";
			var prefix = "";
			if(params)
				{
				params = params.split("&");
				$.each(params, function(index, param)
					{
					param = param.split("=")
					if(param[0] == "prefix"){prefix = param[1]}
					else if(param[0] == "suffix"){suffix = "+"+param[1]}
					});
				}

			//change title
			document.title = prefix + " " + baseName + " " +suffix + " - MerchantDB"
			window.scrollTo(0, 0);

			initDisqus();
		});
	}])

	//controller for mobile menu
	.controller('mobileMenuController', ['$scope',
	  function MainController($scope) {
		$("#mobile-menu li").click(function (e) {
		  e.stopPropagation();
		  $(this).children('ul').slideToggle( "slow" );
		});
	}])

	//Slide menu
	.config(function(snapRemoteProvider) {
	  snapRemoteProvider.globalOptions.disable = 'left';
	})

	//filter change space ( ) to underscore (_)
	.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '_');
        }
    }
	})

	//filter normalize stat
	.filter('changeStat',function() {
    return function(input)
		{
		if(input == "hpBns"){input = "HP";}
		else if(input == "atkBns"){input = "Atk";}
		else if(input == "matkBns"){input = "mAtk";}
		else if(input == "defBns"){input = "Def";}
		else if(input == "mdefBns"){input = "mDef";}
		else if(input == "accBns"){input = "Acc";}
		else if(input == "critBns"){input = "Crit";}
		else if(input == "str"){input = "Str";}
		else if(input == "dex"){input = "Dex";}
		else if(input == "int"){input = "Int";}
		else if(input == "lckMod"){input = "Luck";}
		else if(input == "gldMod"){input = "Gold";}
		else if(input == "expMod"){input = "Exp";}
		return input;
		}
	});
})(window.angular);
