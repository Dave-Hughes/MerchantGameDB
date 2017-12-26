angular.module("mainApp").service("guidesService", function ($http, $q) {
    var self = this;

    self.getGuides = function () {
        var deferred = $q.defer();
        if (self.guidesList != undefined) {
            deferred.resolve(self.guidesList);
            return deferred.promise;
        }
        $http
            .get("http://merchantgamedb.com/guides/wp-json/wp/v2/posts?filter[cat]=6")
            .then(function (response) {
                self.guidesList = response.data;
                deferred.resolve(self.guidesList);
            });

        return deferred.promise;
    }

    self.getGuideByTitle = function (title) {
        var guide = "";
        if (self.guidesList == undefined) {
            console.warn("using getGuideByTitle before guides are loaded");
            return guide;
        }
        $.each(self.guidesList, function (index, val) {
            if (self.guidesList[index].title.rendered == title) {
                guide = val;
                return false;
            }
        })
        return guide;
    }
    self.getAuthorByID = function (id) {
        var author = "";
        if (id == 1) {
            author = "Chirp";
        }
        else if (id == 2) {
            author = "Phaturia";
        }
        else if (id == 3) {
            author = "EnzymSama";
        }
        else if (id == 4) {
            author = "Kamighty";
        }
        else if (id == 5) {
            author = "Rkinasz";
        }
        return author;
    }
});