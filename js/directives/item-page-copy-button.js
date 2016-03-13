// Directive used to display copy button on item pages
angular.module('mainApp')
  .directive('itemPageCopyButton', function() {
    return {
      templateUrl: '../templates/item-page-copy-button-template.html'
    }
  })
