var listOfGuides = "";
$.ajax({
  url: "http://merchantgamedb.com/guides/wp-json/wp/v2/posts?filter[cat]=6",
  dataType: 'json',
  async: false,
  success: function(data) {
    listOfGuides = data;
  }
});
