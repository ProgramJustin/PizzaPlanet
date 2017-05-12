//BACK-END LOGIC
function Pizza(size, topsOne, topsTwo, topsThree) {
  this.size = size;
  this.topsOne = topsOne;
  this.topsTwo = topsTwo;
  this.topsThree = topsThree;
}
    //PIZZA PROTOTYPE THAT CALCULATES THE COST OF A PIZZA

Pizza.prototype.cost = function(size, topsOne, topsTwo, topsThree) {

    //COST FOR SMALL PIZZA

   if(size === "Small" && topsOne === "Feta" && topsTwo === "Pepperoni" && topsThree === "Peppers") {
     return 16;

    } else if(size === "Small" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers") && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers")) {
       return  14;
    } else if (size === "Small" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers"))  {
       return 12;
    } else if (size === "Small") {
      return 11;
      //COST FOR MEDIUM PIZZA
    } else if(size === "Medium" && topsOne === "Feta" && topsTwo === "Pepperoni" && topsThree === "Peppers") {
      return 20;
    } else if(size === "Medium" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers") && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers")) {
        return  17;
      } else if (size === "Medium" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers"))  {
        return 15;
     } else if (size === "Medium") {
       return 14;
       //COST FOR LARGE PIZZAS
     } else if(size === "Large" && topsOne === "Feta" && topsTwo === "Pepperoni" && topsThree === "Peppers") {
       return 24;
     } else if(size === "Large" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers") && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers")) {
         return  20;
       } else if (size === "Large" && (topsOne === "Feta" || topsTwo === "Pepperoni" || topsThree === "Peppers"))  {
         return 18;
      } else if (size === "Large") {
        return 17;
      }
}
//FRONT-END LOGIC
$(document).ready(function() {

$("form").submit(function(event) {
  event.preventDefault();
  this.size = $("input:radio:checked").val();
  var toppingCheese = $("input:checkbox[name=Feta]:checked").val();
  var toppingRoni = $("input:checkbox[name=Pepperoni]:checked").val();
  var toppingPeppers = $("input:checkbox[name=Pepps]:checked").val();

  var newOrder = new Pizza(this.size, toppingCheese, toppingRoni, toppingPeppers);
  //THIS CALLS THE METHOD THAT CAULCATES THE COST OF A PIZZA
  newOrder.price = newOrder.cost(this.size, toppingCheese, toppingRoni, toppingPeppers);

  if (newOrder.size === "Small") {
      if (newOrder.topsOne === undefined) {
        newOrder.topsOne = "-";
      }
      if (newOrder.topsTwo === undefined) {
        newOrder.topsTwo = "-";
      }
      if (newOrder.topsThree === undefined) {
        newOrder.topsThree = "-";
      }
      $(".col-md-12").append("<h3>" + newOrder.price + "</h3>" + "<h3>" + newOrder.topsOne + "</h3>" + "<h3>" + newOrder.topsTwo + "</h3>" + "<h3>" + newOrder.topsThree + "</h3>");
  } else if (newOrder.size === "Medium") {


    if (newOrder.topsOne === undefined) {
        newOrder.topsOne = "-";
      }
    if (newOrder.topsTwo === undefined) {
        newOrder.topsTwo = "-";
      }
    if (newOrder.topsThree === undefined) {
        newOrder.topsThree = "-";
      }

      $(".col-md-12").append("<h3>" + newOrder.price + "</h3>" + "<h3>" + newOrder.topsOne + "</h3>" + "<h3>" + newOrder.topsTwo + "</h3>" + "<h3>" + newOrder.topsThree + "</h3>");

  } else if (newOrder.size === "Large") {

      if (newOrder.topsOne === undefined) {
        newOrder.topsOne = "-";
      }
      if (newOrder.topsTwo === undefined) {
        newOrder.topsTwo = "-";
      }
      if (newOrder.topsThree === undefined) {
          newOrder.topsThree = "-";
      }

      $(".col-md-12").append("<h3>" + newOrder.price + "</h3>" + "<h3>" + newOrder.topsOne + "</h3>" + "<h3>" + newOrder.topsTwo + "</h3>" + "<h3>" + newOrder.topsThree + "</h3>");
  } else {
    alert("PLEASE TRY AGAIN");
  }
console.log(newOrder);

  });
});
