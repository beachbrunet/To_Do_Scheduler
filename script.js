// Need time blocks
// Load the html and css files first then JS
$(document).ready(function(){
    $("currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a ")); 
    // save button


$("saveBtn").on("click", function() {
    var text = $(this).siblings(".disciption").val();
    var time = $(this).parent().attr("id");


})

})





