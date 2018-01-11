angular.module('mainApp')
    .controller('popupController', function (popupService, $timeout) {

        var vm = this;

        vm.model = popupService.popupModel;
        vm.modes = popupService.modes;

        vm.comparison = popupService.comparisonModel;

        vm.hide = function () {
            popupService.hide();
        }

        vm.copy = function (showReddit) {
            popupService.copyModel.showReddit = showReddit;

            var selector = showReddit ? "#generatedLink-reddit" : "#generatedLink";

            $timeout(function () {
                var copyTextarea = document.querySelector(selector);
                copyTextarea.select();

                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Copying text command was ' + msg);
                } catch (err) {
                    console.log('Oops, unable to copy');
                }
                vm.hide();

            }, 10);
        }

        vm.removeItem1 = function () {
            popupService.removeItemFromComparison(1);
        }
        vm.removeItem2 = function () {
            popupService.removeItemFromComparison(2);
        }

        vm.goToComparison = function () {
            var i1 = vm.comparison.item1;
            var i2 = vm.comparison.item2;
            vm.hide();
            //Go to URL passing in the ID numbers as link params
            var comparisonURL = "#!/tools/compare?c=" + i1.id + "," + i1.prefix + "," + i1.suffix + ",0-"
                + i2.id + "," + i2.prefix + "," + i2.suffix + ",0";
            location.href = comparisonURL;
            popupService.clearComparison();
        }
    })
