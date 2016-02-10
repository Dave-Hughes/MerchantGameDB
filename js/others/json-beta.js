//Search
var jsonSearch = "";
$.getJSON( "json/beta/search.json", function( data ) {
	jsonSearch = data;
	});

//Equipments
var jsonEquipments = "";
$.getJSON( "json/beta/EquipmentList.json", function( data ) {
	jsonEquipments = data;
	});

//Formulas
var jsonFormulas = "";
$.getJSON( "json/beta/FormulaList.json", function( data ) {
	jsonFormulas = data;
	});

//Heroes
var jsonHeroes = "";
$.getJSON( "json/beta/HeroList.json", function( data ) {
	jsonHeroes = data;
	});

//Materials
var jsonMaterials = "";
$.getJSON( "json/beta/MaterialList.json", function( data ) {
	jsonMaterials = data;
	});

//Potions
var jsonPotions = "";
$.getJSON( "json/beta/PotionList.json", function( data ) {
	jsonPotions = data;
	});

//Quests
var jsonQuests = "";
$.getJSON( "json/beta/QuestList.json", function( data ) {
	jsonQuests = data;
	});

//Prefixes
var jsonPrefixes = "";
$.getJSON( "json/beta/PrefixList.json", function( data ) {
	jsonPrefixes = data;
	});

//Suffixes
var jsonSuffixes = "";
$.getJSON( "json/beta/SuffixList.json", function( data ) {
	jsonSuffixes = data;
	});


	var listOfGuides = "";
	$.ajax({
	  url: "http://merchantgamedb.com/guides/wp-json/wp/v2/posts",
	  dataType: 'json',
	  async: false,
	  success: function(data) {
	    listOfGuides = data;
	  }
	});
