$(function () {

  var all_catalogue_items = $("#catalogue-items div");

  $("#catalogue-button-container button").click(function(e) {
    var category = $(this).data('catalogue-section');
    console.log("Show " + category);

    $("#catalogue-button-container button").removeClass('active');
    $(this).addClass('active');

    if (category == 'all') {
      all_catalogue_items.addClass('show');
      return;
    }

    all_catalogue_items.each(function() {
      if ($(this).hasClass(category)) {
        $(this).addClass('show', 1000);
      } else {
        $(this).removeClass('show', 1000);
      }
    });

  });
});