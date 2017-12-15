//Controller for the search
angular.module('mainApp')
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
	});