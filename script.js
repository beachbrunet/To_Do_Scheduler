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
function timeColor (){
    $("time-block").each(time);
}

function time() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var hours = parseInt(moment().format("H"));
    if (hours >= 9 && hours <= 17) {
      $(this).addClass("present");
    } else if (hours < 9) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
}




function saveUserInput(event) {
    var textAreaId = $(this).parseInt().attr("id");
  
    localStorage.setItem(
      moment().format("DDDYYYY") + textAreaId,
      $("#" + hourId + " textarea").val()
    );
  }

function input ()


// var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
// var currentHour = parseInt(moment().format("H"));
