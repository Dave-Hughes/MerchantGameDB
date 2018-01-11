(function () {
    function componentController() {
        var self = this;
        self.isAllSelected = false;
        self.idPrefix = "f-" + Math.floor((1 + Math.random()) * 1e7) + "-";

        self.selectAll = function () {
            self.isAllSelected = !self.isAllSelected;
            for (var opt in self.options) {
                self.options[opt].selected = self.isAllSelected;
            }
        }

        self.getId = function (key) {
            return self.idPrefix + key.replace(/[^\w]/g, "_")
        }

        self.needBreak = function (index, last) {
            return self.breakCount && index != last && (index + 1) % self.breakCount == 0
        }
    }
    var myComponentDefinition = {
        templateUrl: "/templates/common-filter-component.html",

        bindings: {
            options: '<',
            title: '@',
            cssClass: '@',
            breakCount: '<'
        },
        controller: componentController,
        controllerAs: 'Filter'
    }

    angular.module("mainApp").component('commonFilter', myComponentDefinition)
})();