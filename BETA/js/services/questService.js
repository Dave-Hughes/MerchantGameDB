angular.module("mainApp").service("questService", function () {
    var self = this;

    self.grade = "0"
    self.luck = 0

    self.setValues = function (grade, luck) {
        self.grade = grade
        self.luck = luck || 0
    }

    self.setupScope = function ($scope) {
        $scope.grade = self.grade;
        $scope.luck = Math.max(self.luck, 0);

        var gradeData = jsonGrades[$scope.grade]
        $scope.minGradeModifier = gradeData.lootModMin;
        $scope.maxGradeModifier = gradeData.lootModMax;

        $scope.nilOddsModMin = gradeData.nilOddsMin;
        $scope.nilOddsModMax = gradeData.nilOddsMax;

        if ($scope.reward3) {
            $scope.reward3NilMax = Math.max($scope.reward3.nilOdds * gradeData.nilOddsMax - self.luck, 1)
            $scope.reward3NilMin = Math.max($scope.reward3.nilOdds * gradeData.nilOddsMin - self.luck, 1)
        }
        if ($scope.reward4) {
            $scope.reward4NilMax = Math.max($scope.reward4.nilOdds * gradeData.nilOddsMax - self.luck, 1)
            $scope.reward4NilMin = Math.max($scope.reward4.nilOdds * gradeData.nilOddsMin - self.luck, 1)
        }

        if ($scope.grade == "0") {
            gradeData = jsonGrades["5"]
        }
        $scope.gradeForCap = gradeData.name
        var luckCaps = ""
        luckCaps += Math.ceil(10 * (4.5 - $scope.quest.reward1[1] * gradeData.lootModMin))
        luckCaps += " / " + Math.ceil(10 * (4.5 - $scope.quest.reward2[1] * gradeData.lootModMin))

        if ($scope.reward3) {
            luckCaps += " / " + Math.max(Math.ceil($scope.reward3.nilOdds * gradeData.nilOddsMin) - 1, 0)
        }
        if ($scope.reward4) {
            luckCaps += " / " + Math.max(Math.ceil($scope.reward4.nilOdds * gradeData.nilOddsMin) - 1, 0)
        }
        $scope.luckCaps = luckCaps

    }
})