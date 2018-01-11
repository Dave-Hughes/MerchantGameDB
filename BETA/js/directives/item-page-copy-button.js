// Directive used to display copy button on item pages
angular.module('mainApp')
    .directive('itemPageCopyButton', function (popupService) {
        return {
            link: function (scope, element, attrs) {
                scope.show = popupService.toogleCopyLink;
            },
            scope: {},
            templateUrl: 'templates/item-page-copy-button-template.html'
        }
    })
