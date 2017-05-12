function Pizza(size, topsOne, topsTwo, topsThree) {
  this.size = size;
  this.topsOne = topsOne;
  this.topsTwo = topsTwo;
  this.topsThree = topsThree;
}

Pizza.prototype.cost = function(size, topsOne, topsTwo, topsThree) {

   if(size === "Small" && topsOne === "Feta" && topsTwo === "Pepperoni" && topsThree === "Peppers") {
     return 16;

    } else if(size === "Small" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers") && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers")) {

       return  14;

     } else if (size === "Small" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers"))  {

       return 12;

    } else if (size === "small") {
      return 11;
    }

}

$(document).ready(function() {

$("form").submit(function(event) {
  event.preventDefault();

this.size = $("input:radio:checked").val();


var toppingCheese = $("input:checkbox[name=Feta]:checked").val();
var toppingRoni = $("input:checkbox[name=Pepperoni]:checked").val();
var toppingPeppers = $("input:checkbox[name=Pepps]:checked").val();

var newOrder = new Pizza(this.size, toppingCheese, toppingRoni, toppingPeppers);



newOrder.price = newOrder.cost(this.size, toppingCheese, toppingRoni, toppingPeppers);

console.log(newOrder);

  });
});
