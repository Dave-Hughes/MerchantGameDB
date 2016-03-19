// Directive used to display each pages unique URLs
angular.module('mainApp')
  .directive('itemUrls', function() {
    return {
      templateUrl: 'templates/item-urls-template.html'
    }
  })
