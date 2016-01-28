//Controller for Heroes
angular.module('mainApp')
	.controller('heroCtrl', function($scope, $routeParams) {
		$scope.hero = getHeroByName($routeParams.id);
		$scope.heroUnlock = "pages/hero-unlock-"+$scope.hero.name+".html";
		$scope.heroRole = "pages/hero-role-"+$scope.hero.name+".html";
	})