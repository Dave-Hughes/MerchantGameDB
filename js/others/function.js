$(document).ready(function()
	{
		$("#main-content").on("click", ".copy-item-url", function() {
			fadeInBlackBG();
			fadeInUrlBox();
		})
	});

	//Copy standard page link button
	$(document).on("click", ".copy-standard-link-button", function() {
		console.log("check");
		fadeOutBlackBG();
		fadeOutUrlBox();

		$("#generatedLink").show();
		$("#generatedLink-reddit").addClass("hide");

		var copyTextarea = document.querySelector('#generatedLink');
		copyTextarea.select();

		try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      $("#copy-message").css("display", "block").append("Copied to clipboard!");
    } catch (err) {
      console.log('Oops, unable to copy');
      $("#copy-message").css("display", "block").append("Oops! Unable to copy.");
    }
	})

	//Copy reddit page link button
	$(document).on("click", ".copy-reddit-link-button", function() {
		console.log("check");
		fadeOutBlackBG();
		fadeOutUrlBox();

		$("#generatedLink").hide();
		$("#generatedLink-reddit").removeClass("hide");

		var copyTextarea = document.querySelector('#generatedLink-reddit');
		copyTextarea.select();

		try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      $("#copy-message").css("display", "block").append("Copied to clipboard!");
    } catch (err) {
      console.log('Oops, unable to copy');
      $("#copy-message").css("display", "block").append("Oops! Unable to copy.");
    }
	})

	//Close urls popup on X button click
	$(document).on("click", ".url-box-close-button", function() {
		fadeOutBlackBG();
		fadeOutUrlBox();
	})

	function fadeInBlackBG() {
		//Fade background to black
		$("#black-overlay").removeClass("hide");
	}

	function fadeOutBlackBG() {
		//Fade out background to black
		$("#black-overlay").addClass("hide");
	}

	function fadeInUrlBox() {
		//Fade in URL-BOX
		$("#urls-popup").removeClass("hide");
	}

	function fadeOutUrlBox() {
		//Fade out URL-BOX
		$("#urls-popup").addClass("hide");
	}

function lvToTier(lv)
	{
	return Math.floor(((lv-0.1)/10)+1);
	}

function lvToTierAtPotion(lv)
	{
	return Math.floor(((lv)/10)+1);
	}

function lvToTierAtMaterials(lv)
	{
	return Math.floor(((lv)/10)+1);
	}

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
