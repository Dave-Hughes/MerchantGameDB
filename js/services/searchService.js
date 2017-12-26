angular.module("mainApp").service("searchService", function () {
    var self = this;
    var options = {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 2,
        keys: [
            {
                name: "name",
                weight: 0.7
            },
            {
                name: "type",
                weight: 0.3
            },
        ]
    };
    //todo: exclude search from jsonDB.js and fetch separatelly
    var searchData = jsonSearch;
    self.fuse = new Fuse(searchData, options);

    self.fuseSearch = function (str) {
        return self.fuse.search(str);
    }
});