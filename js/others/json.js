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