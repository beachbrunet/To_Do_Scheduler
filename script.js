// Need time blocks
// Load the html and css files first then JS
$(document).ready(function() {
    $("currentDay").text(moment().format("Do MMM YYYY, h:mm:ss a")); 
    
    
// save button
    $("button").on("click", function() {
     let text = $(this).siblings(".description").val();
        localStorage.setItem(this.id,text);
    })
    
    function load() {
        $(this).siblings(".description").val(localStorage.getItem(this.id));
    }
    $("button").each(load)
})