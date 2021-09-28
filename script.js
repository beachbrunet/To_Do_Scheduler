// Need time blocks
// Load the html and css files first then JS
$(document).ready(function () {
  $(".currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a"));

  // save button
  $("button").on("click", function () {
    let text = $(this).siblings(".description").val();
    localStorage.setItem(this.id, text);
  });

  // loads
  function load() {
    $(this).siblings(".description").val(localStorage.getItem(this.id));
  }
  $("button").each(load);
});

// To Do
// -Change color (past present future)
// // current day at top
// function changeColor() {
//   let time = moment().format("H:mm:ss a");

//   $("time-block").each(function () {
//     let timeBlock = parseInt($(this).attr("id"));

//     if (timeBlock < currentHour) {
//       $(this).addClass("past");
//       $(this).addClass("present");
//       $(this).addClass("future");
//     } else if (timeBlock === currentHour) {
//       $(this).addClass("past");
//       $(this).addClass("present");
//       $(this).addClass("future");
//     }
//   });
// }
changeColor();
