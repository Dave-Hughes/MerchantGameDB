angular.module("mainApp").service("itemsService", function () {
    var self = this;

    self.getItemQuality = function(item, hasPrefix, hasSuffix){
        var maximum = item.rarity < 7 ? 6 : 8;
        var current = item.rarity;
        if (hasPrefix){
            current++;
        }
        if (hasSuffix){
            current++;
        }
        return Math.min(current, maximum);
    }
});