//Search
var jsonSearch = "";
$.getJSON( "json/search.json", function( data ) {
	jsonSearch = data;
	});

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

//Grades
var jsonGrades = "";
$.getJSON( "json/GradeList.json", function( data ) {
	jsonGrades = data;
	});
	
//Bosses
var jsonBosses = "";
$.getJSON( "json/EventList.json", function( data ) {
	jsonBosses = data;
	});
	
//Parcel
var jsonParcel = "";
$.getJSON( "json/ParcelList.json", function( data ) {
	jsonParcel = data;
	});
	
//Ability
var jsonAbility = "";
$.getJSON( "json/AbilityList.json", function( data ) {
	jsonAbility = data;
	});
	
//rarityMod
var jsonRarity = "";
$.getJSON( "json/rarityMod.json", function( data ) {
	jsonRarity = data;
	});

var listOfGuides = "";
$.ajax({
  url: "http://merchantgamedb.com/guides/wp-json/wp/v2/posts?filter[cat]=6",
  dataType: 'json',
  async: false,
  success: function(data) {
    listOfGuides = data;
  }
});
