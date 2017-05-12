function Pizza(size, tops) {
  this.size = size;
  this.tops = tops;
}
Pizza.prototype.addTopps() {

}
Pizza.prototype.cost = function (size) {
   if(size === "Small") {

     return 12;
   }
}

$(document).ready(function() {

$("form").submit(function(event) {
  event.preventDefault();

this.size = $("input:radio:checked").val();


var toppingCheese = $("input:checkbox[name=Feta]:checked").val();
var toppingRoni = $("input:checkbox[name=Pepperoni]:checked").val();
var toppingPeppers = $("input:checkbox[name=Pepps]:checked").val();

alert(toppingCheese);
s

var newOrder = new Pizza(this.size, this.tops);
newOrder.cost(this.size);
alert(newOrder);
console.log(newOrder);

  });
});
