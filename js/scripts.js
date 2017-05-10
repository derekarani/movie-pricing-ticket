// // business logic begins here
// function Ticket(movie, time, age) {
//   this.movie = movie;
//   this.time = time;
//   this.age = age;
// }
//
// Ticket.prototype.pricing = function() {
//   var result1 = [];
//   var basicPrice = 200
//   if (age > 2017) {
//     result1.append(price = basicPrice + 400);
//   } else if (age >= 2009 && age <= 2016) {
//     result1.append(price = basicPrice + 200);
//   } else {
//     result1.append(price = basicPrice + 100);
//   }
//   var result2=[];
//   if (time === Morning) {
//       result2.append(price = basicPrice + 50);
//
//
//   } else if (time === Lunch) {
//       result2.append(price = basicPrice + 200);
//
//   }else {
//       result2.append(price = basicPrice + 400);
//   }
//   var result = result1 + result2
//
//   return result;
// };
//



// ui logic
$(document).ready(function() {
  $("form#movie-form").submit(function (event) {
    event.preventDefault();
    var inputMovie = $("input#movie").val();
    var inputTime = $("input$time").val();
    var inputAge = $("input#age").val();

  });

  $("option#morning").select(function(){
    console.log(clicked);
        alert("morning marked!");
    });
    $("option#lunch").select(function(){
        console.log(clicked);
        alert("lunch marked!");
    });
    $("option#evening").select(function(){
        console.log(clicked);
        alert("evening marked!");
    });
});
