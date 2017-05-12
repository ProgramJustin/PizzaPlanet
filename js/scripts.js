function Pizza(size, toppingOne) {
  this.size = size;
  this.toppingOne = toppingOne;
}

$(document).ready(function() {

$("form").submit(function(event) {
  event.preventDefault();

var toppingCheese = $("#chz").val();
var toppingRoni = $("#roni").val();
var toppingPeppers = $("#bells").val();

var newOrder = new Pizza(toppingCheese,toppingRoni, toppingPeppers);
alert(newOrder);

  });
});
