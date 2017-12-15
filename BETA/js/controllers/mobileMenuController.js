//controller for mobile menu
angular.module('mainApp')
	.controller('mobileMenuController', ['$scope',
	  function MainController($scope) {
		$("#mobile-menu li").click(function (e) {
		  e.stopPropagation();
		  $(this).children('ul').slideToggle( "slow" );
		});
	}])