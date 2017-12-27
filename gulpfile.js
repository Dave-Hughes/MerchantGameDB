var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require("gulp-order");
var uglify = require("gulp-uglify");
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

function checkDevelopment() {
  //console.log("Node environment", process.env.NODE_ENV);
  return process.env.NODE_ENV === 'dev';
}

gulp.task('scripts', function () {
  var scriptsPipe = gulp.src(['./js/**/*.js', '!./js/vendor/*.min.js', '!./js/modules/*.min.js', '!./js/bundle.js', '!./js/jsonDB.js'])
    .pipe(order([
      "main.js",
      "directives/*.js",
      "controllers/*.js",
      "filters/*.js",
      "components/*.js",
      "services/*.js",
      "others/*.js"
    ]))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate());

  if (!checkDevelopment()) {
    scriptsPipe = scriptsPipe.pipe(uglify());
  }
  return scriptsPipe.pipe(gulp.dest('./js/'));
});

gulp.task('styles', function () {
  var cssPipe = gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError));

  if (!checkDevelopment()) {
    cssPipe = cssPipe.pipe(cleanCSS());
  }
  return cssPipe.pipe(gulp.dest('./css/'));
});

gulp.task('regenerate-search', function () {
  var fs = require('fs');
  var basePath = "./json/";
  var equip = JSON.parse(fs.readFileSync(basePath + 'EquipmentList.json'));
  var mats = JSON.parse(fs.readFileSync(basePath + 'MaterialList.json'));
  var potions = JSON.parse(fs.readFileSync(basePath + 'PotionList.json'));
  var quests = JSON.parse(fs.readFileSync(basePath + 'QuestList.json'));

  function getItemType(itemSlot) {
    if (itemSlot == 1) return "Weapon";
    if (itemSlot == 6) return "Trinket";
    return "Armor";
  }

  var toSave = [], newEquip = [], newMats = [], newPotions = [], newQuests = [];

  for (var i = 0; i < equip.length; i++) {
    var item = equip[i];
    if (item.itemSlot && item.image) {
      newEquip.push(item);
      toSave.push({
        name: item.name,
        type: getItemType(item.itemSlot),
        subType: item.subType,
        rarity: item.rarity,
        icon: item.image,
      });
    } else {
      newEquip.push({name: item.name});//clean not existing items
    }
  }
  for (var i = 0; i < mats.length; i++) {
    var item = mats[i];
    if (item.image && item.image.substr(-1) != "/" &&
      item.image != "Materials/Region_6/Chieftains_Blade.png") {
      newMats.push(item);
      toSave.push({
        name: item.name,
        type: "Material",
        subType: item.subType,
        rarity: item.rarity,
        icon: item.image,
      });
    } else {
      newMats.push({name: item.name});//clean not existing items
    }
  }
  for (var i = 0; i < potions.length; i++) {
    var item = potions[i];
    if (item.image && item.image.substr(-1) != "/") {
      newPotions.push(item);
      toSave.push({
        name: item.name,
        type: "Potion",
        subType: item.subType,
        rarity: item.rarity,
        icon: item.image,
      });
    } else {
      newPotions.push({});//clean not existing items
    }
  }

  for (var i = 0; i < quests.length; i++) {
    var quest = quests[i];
    if (quest.title != "Placeholder" && quest.image.substr(-1) != "/") {
      newQuests.push(quest);
      toSave.push({
        name: quest.name,
        type: "Quest",
        subType: quest.title || "Normal",
        rarity: "1",
        icon: quest.image,
      });
    } else {
      console.log("push placeholder")
      newQuests.push({title: "Placeholder"});//clean not existing items
    }
  }

  fs.writeFileSync(basePath + "search.json", JSON.stringify(toSave));

  fs.writeFileSync(basePath + "EquipmentList.json", JSON.stringify(newEquip));
  fs.writeFileSync(basePath + "MaterialList.json", JSON.stringify(newMats));
  fs.writeFileSync(basePath + "PotionList.json", JSON.stringify(newPotions));
  fs.writeFileSync(basePath + "QuestList.json", JSON.stringify(newQuests));
})

gulp.task('pack-json', function () {
  var jsoncombine = require("gulp-jsoncombine");

  gulp.src("./json/*.json")
    .pipe(jsoncombine("jsonDB.js", function (data) {
      var jsonDb = "var jsonData = " + JSON.stringify(data) +
        ";var jsonSearch = jsonData.search;" +
        "var jsonEquipments = jsonData.EquipmentList;" +
        "var jsonFormulas = jsonData.FormulaList;" +
        "var jsonHeroes = jsonData.HeroList;" +
        "var jsonMaterials = jsonData.MaterialList;" +
        "var jsonPotions = jsonData.PotionList;" +
        "var jsonQuests = jsonData.QuestList;" +
        "var jsonPrefixes = jsonData.PrefixList;" +
        "var jsonSuffixes = jsonData.SuffixList;" +
        "var jsonGrades = jsonData.GradeList;" +
        "var jsonBosses = jsonData.EventList;" +
        "var jsonParcel = jsonData.ParcelList;" +
        "var jsonAbility = jsonData.AbilityList;" +
        "var jsonRarity = jsonData.rarityMod;";
      return new Buffer(jsonDb);
    }))
    .pipe(gulp.dest("./js/"));
});

//Use gulp json once when new content arrived
gulp.task('json', ["regenerate-search", "pack-json"]);

gulp.task('default', ['scripts', 'styles']);

gulp.task('dev-watch', function () {
  var liteServer = require("lite-server");
  liteServer.server();
  gulp.watch(['./js/**/*.js', '!./js/vendor/*.min.js', '!./js/modules/*.min.js', '!./js/bundle.js'], ['scripts']);
  gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('dev', ['default', 'dev-watch']);