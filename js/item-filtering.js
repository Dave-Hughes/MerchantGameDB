$(document).ready(function() {

  // Apply/Remove "filter-selected" class on click of option
  $("#main-content").on("click", ".weapons-page-filters ul li", function() {
    if ($(this).hasClass( "filter-selected" )) {
      $(this).removeClass("filter-selected");
    }
    else {
      $(this).addClass("filter-selected");
    }
  })

  // Add subtypes to the weapons-subtype-options UL
  if ($("#blacksmith-option").hasClass("filter-selected")) {
    console.log("check");
  }


})
