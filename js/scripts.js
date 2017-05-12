function Pizza(size, toppingOne) {
  this.size = size;
  this.toppingOne = toppingOne;
}
Pizza.prototype.size = function (size) {
  this
}

$(document).ready(function() {

$("form").submit(function(event) {
  event.preventDefault();

t = $(".pieSize").val();
alert(this.size);


var toppingCheese = $("#chz").val();
var toppingRoni = $("#roni").val();
var toppingPeppers = $("#bells").val();

var newOrder = new Pizza(toppingCheese,toppingRoni, toppingPeppers);
alert(newOrder.toppingCheese);

  });
});
