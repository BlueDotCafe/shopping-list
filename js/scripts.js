$(function() {
  $(#blanks form).submit(function(event) {
    var inputItem = $("input#item").val();

    $("#item").append(inputItem);
    if(inputItem !=='') {
      var elem = $("<li></li>").text(inputItem);
                $(#myList).append(elem);


                event.preventDefault();
    }
  });
});
