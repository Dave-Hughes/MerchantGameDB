angular.module("mainApp").service("itemsService", function () {
    var self = this;

    self.getItemQuality = function (item, hasPrefix, hasSuffix) {
        var maximum = item.rarity < 7 ? 6 : 8;
        var current = item.rarity;
        if (hasPrefix) {
            current++;
        }
        if (hasSuffix) {
            current++;
        }
        return Math.min(current, maximum);
    }

    self.initGradeFromRoute = function ($scope, $routeParams) {
        $scope.listOfGrades = jsonGrades;
        if ($routeParams.grade) { //If there is a ?grade=x in the URL
            $scope.grade = $routeParams.grade;
        } else {
            $scope.grade = "0";
        }
        $scope.minGradeModifier = jsonGrades[$scope.grade].min;
        $scope.maxGradeModifier = jsonGrades[$scope.grade].max;
        $scope.craftTimeMin = jsonGrades[$scope.grade].craftTimeMin;
        $scope.craftTimeMax = jsonGrades[$scope.grade].craftTimeMax;
        $scope.gradeName = jsonGrades[$scope.grade].name;
    }

    self.initSuffixFromRoute = function ($scope, $routeParams) {
        $scope.listOfSuffix = jsonSuffixes;
        $scope.suffix = "0";

        if ($routeParams.suffix) { //If there is a ?suffix=x in the URL
            $scope.suffix = $routeParams.suffix;
        }
        $scope.hasSuffix = $scope.suffix > 0;
        $scope.suffixMod = 1 + getSuffixMod($scope.suffix);
    }

    self.initPrefixFromRoute = function ($scope, $routeParams) {
        $scope.listOfPrefix = jsonPrefixes;
        $scope.prefix = "0";

        if ($routeParams.prefix) { //If there is a ?prefix=x in the URL
            $scope.prefix = $routeParams.prefix;
            $scope.prefixStat = self.getPrefixById($scope.prefix);
        }
        $scope.hasPrefix = $scope.prefix > 0;
    }

    self.getPrefixById = function (prefixId) {
        return jsonPrefixes[prefixId];
    }

    self.initQuality = function ($scope) {
        $scope.finalRarity = self.getItemQuality($scope.item, $scope.hasPrefix, $scope.hasSuffix)
    }
});