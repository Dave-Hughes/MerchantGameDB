(function(angular){
  'use strict';
  angular.module('mainApp', ['snap', 'angucomplete-alt', 'ngRoute', 'ngSanitize'])
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
		.when('/tools', {
			templateUrl: 'pages/tools.html',
			controller: 'toolCtrl'
		})
			//if compare tool
			.when('/tools/compare', {
				templateUrl: 'pages/toolCompare.html',
				controller: 'toolCompareCtrl'
			})
      //if compare help
			.when('/tools/comparison-help', {
				templateUrl: 'pages/comparison-help.html',
				controller: 'toolCtrl'
			})
		//if guides
		.when('/guides', {
			templateUrl: 'pages/guides.html',
			controller: 'guidesCtrl'
		})
    .when('/guides/:id', {
			templateUrl: 'pages/guide.html',
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
			/** CHANGE TITLE ON ROUTE CHANGE **/
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

			/** RELOAD DISQUS ON ROUTE CHANGE **/
			$("#comments").hide();
			$("#commentsButton").show();
			//initDisqus();
		});
	}])

	//Slide menu
	.config(function(snapRemoteProvider) {
	  snapRemoteProvider.globalOptions.disable = 'left';
	})
})(window.angular);
