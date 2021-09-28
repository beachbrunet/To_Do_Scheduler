// Need time blocks
// Load the html and css files first then JS
$(document).ready(function () {
  $("currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a"));

  // save button
  $("button").on("click", function () {
    let text = $(this).siblings(".description").val();
    localStorage.setItem(this.id, text);
  });

  function load() {
    $(this).siblings(".description").val(localStorage.getItem(this.id));
  }
  $("button").each(load);
});

// To Do
// -Change color (past present future)
// current day at top
// function timeColor (){

// };
function colorChange() {
  var colorDate = new Date();
  var hours = objDate.getHours();
  if (hours >= 9 && hours <= 17) {
    $(".hour").addClass("present");
  } else if (hours < 9) {
    $(".hour").addClass("past");
  } else {
    $(".hour").addClass("future");
  }
}
