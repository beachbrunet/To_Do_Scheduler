// Need time blocks
// Load the html and css files first then JS
$(document).ready(function(){
    $("currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a")); 
    
    
    // save button
$("saveBtn").on("click", function() {
    let text = $(this).siblings(".disciption").val();
    let time = $(this).parent().attr("id");

 
})
   // Storing data by each hour
   localStorage.setItem(time,text);

   $("#9am.discription").val(localStorage.getItem("9am"));
   $("#10am.discription").val(localStorage.getItem("10am"));
   $("#11am.discription").val(localStorage.getItem("11am"));
   $("#12pm.discription").val(localStorage.getItem("12pm"));
   $("#1pm.discription").val(localStorage.getItem("1pm"));
   $("#2pm.discription").val(localStorage.getItem("2pm"));
   $("#3pm.discription").val(localStorage.getItem("3pm"));
   $("#4pm.discription").val(localStorage.getItem("4pm"));
   $("#5pm.discription").val(localStorage.getItem("5pm"));

})
}





