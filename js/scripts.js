
$(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if (val !== '') {
      var elem = $("<li></li>").text(val);
      $(elem).append("");
      $("#myList").append(elem);
      $("input").val("");
    }
  });
});
