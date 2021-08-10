// Need time blocks
// Load the html and css files first then JS
$(document).ready(function(){
    $("currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a")); 
    // save button


$("saveBtn").on("click", function() {
    var text = $(this).siblings(".disciption").val();
    var time = $(this).parent().attr("id");

 
})
   // a way to store data and via each hour
   localStorage.setItem(time,text);

   $("#9am.discription").val(localStorage.getItem("9am"));
   $("#10am.discription").val(localStorage.getItem("10am"));
   $("#11am.discription").val(localStorage.getItem("11am"));
   $("#12pm.discription").val(localStorage.getItem("12pm"));
   $("#1pm.discription").val(localStorage.getItem("1pm"));s
   $("#2pm.discription").val(localStorage.getItem("2pm"));
   $("#3pm.discription").val(localStorage.getItem("3pm"));
   $("#4pm.discription").val(localStorage.getItem("4pm"));
   $("#5pm.discription").val(localStorage.getItem("5pm"));

})

    function trackerHour (){
        var currentHour = momment().hour();
        $("time-block").each(function (){
            let blockHour = parseInt($(this.attr("id").split("hour")[1]));
            console.log(blockHour, currentHour);
    
    
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  hourTracker();


