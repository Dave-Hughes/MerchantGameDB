// Directive used to display compare button on item pages
angular.module('mainApp')
    .directive('itemPageCompareButton', function (popupService) {
        return {
            link: function (scope, element, attrs) {
                scope.show = function () {
                    popupService.addItemToComparison(scope.item, scope.suffix, scope.prefix, scope.grade);
                }
            },
            templateUrl: 'templates/item-page-compare-button-template.html'
        }
    })
