angular.module("mainApp").service("popupService", function (itemsService) {
    var self = this;

    self.modes = {
        none: 0,
        showLink: 1,
        showComparisonPrompt: 2
    }

    self.popupModel = {
        mode: self.modes.none
    }

    self.copyModel = {
        showReddit: false
    }

    self.comparisonModel = {

    }

    self.hide = function () {
        self.popupModel.mode = self.modes.none;
    }

    self.toogleCopyLink = function () {
        if (self.popupModel.mode == self.modes.none) {
            self.popupModel.mode = self.modes.showLink;
        } else {
            self.popupModel.mode = self.modes.none;
        }
    }

    self.toogleComparisonPrompt = function () {
        if (self.popupModel.mode == self.modes.none) {
            self.popupModel.mode = self.modes.showComparisonPrompt;
        } else {
            self.popupModel.mode = self.modes.none;
        }
    }

    function mapItem(item, suffix, prefix, grade, itemGeneralType) {
        var item1 = {
            fullName: item.name,
            id: getEquipmentIdByName(item.name),
            image: item.image,
            prefix: prefix || "",
            suffix: suffix || "",
            grade: grade || "",
            type: itemGeneralType
        }
        if (item1.suffix && item1.suffix > 0) {
            item1.fullName += " +" + item1.suffix;
        }

        if (item1.prefix) {
            var prefixModel = itemsService.getPrefixById(prefix);
            if (prefixModel) {
                item1.fullName = prefixModel.name + " " + item1.fullName;
            }
        }
        return item1;
    }

    self.checkComparisonValid = function () {
        var cm = self.comparisonModel;
        if (cm.item1 && cm.item2 && cm.item1.type != cm.item2.type) {
            cm.hasError = true;
        } else {
            cm.hasError = false;
        }
    }

    self.comparisonModel.isReady = function () {
        var cm = self.comparisonModel;
        return cm.item1 != null && cm.item2 != null && !cm.hasError;
    }

    self.addItemToComparison = function (item, suffix, prefix, grade) {
        var itemGeneralType = item.itemSlot == 1 ? "Weapon" : "Armor"; //todo: add trinkets

        var compItem = mapItem(item, suffix, prefix, grade, itemGeneralType);
        if (self.comparisonModel.item1 == null) {
            self.comparisonModel.item1 = compItem;

        } else {
            self.comparisonModel.item2 = compItem;
        }
        self.comparisonModel.currentOperation = compItem.fullName + " added to comparsion table.";
        self.checkComparisonValid();
        self.toogleComparisonPrompt();
    }

    self.removeItemFromComparison = function (idx) {
        var removedItemName;
        if (idx == 1) {
            removedItemName = self.comparisonModel.item1.fullName;
            self.comparisonModel.item1 = self.comparisonModel.item2;
        } else {
            removedItemName = self.comparisonModel.item2.fullName;
        }
        self.comparisonModel.item2 = null;
        self.comparisonModel.currentOperation = removedItemName + " removed from comparsion table.";
        self.checkComparisonValid();
    }

    self.clearComparison = function () {
        self.comparisonModel.item1 = null;
        self.comparisonModel.item2 = null;
        self.checkComparisonValid();
    }
});