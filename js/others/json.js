//Search
var jsonSearch = "";
$.getJSON( "json/stable/search.json", function( data ) {
	jsonSearch = data;
	});

//Equipments
var jsonEquipments = "";
$.getJSON( "json/stable/EquipmentList.json", function( data ) {
	jsonEquipments = data;
	});

//Formulas
var jsonFormulas = "";
$.getJSON( "json/stable/FormulaList.json", function( data ) {
	jsonFormulas = data;
	});

//Heroes
var jsonHeroes = "";
$.getJSON( "json/stable/HeroList.json", function( data ) {
	jsonHeroes = data;
	});

//Materials
var jsonMaterials = "";
$.getJSON( "json/stable/MaterialList.json", function( data ) {
	jsonMaterials = data;
	});

//Potions
var jsonPotions = "";
$.getJSON( "json/stable/PotionList.json", function( data ) {
	jsonPotions = data;
	});

//Quests
var jsonQuests = "";
$.getJSON( "json/stable/QuestList.json", function( data ) {
	jsonQuests = data;
	});

//Prefixes
var jsonPrefixes = "";
$.getJSON( "json/stable/PrefixList.json", function( data ) {
	jsonPrefixes = data;
	});

//Suffixes
var jsonSuffixes = "";
$.getJSON( "json/stable/SuffixList.json", function( data ) {
	jsonSuffixes = data;
	});

//Grades
var jsonGrades = "";
$.getJSON( "json/stable/GradeList.json", function( data ) {
	jsonGrades = data;
	});
	
//Bosses
var jsonBosses = "";
$.getJSON( "json/stable/EventList.json", function( data ) {
	jsonBosses = data;
	});
	
//Parcel
var jsonParcel = "";
$.getJSON( "json/stable/ParcelList.json", function( data ) {
	jsonParcel = data;
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
