// Directive used to display compare button on item pages
angular.module('mainApp')
  .directive('itemPageCompareButton', function() {
    return {
      templateUrl: '../templates/item-page-compare-button-template.html'
    }
  })
