$(document).ready(function () {
    var currentDay = dayjs().format("ddd, MMM DD, YYYY");
    $("#currentDay").text(currentDay);

    $(".saveBtn").on("click", function () {
      var thisHour = $(this).parent().attr("id");
      console.log(thisHour);
      var thisValue = $(this).siblings(".description").val();
      console.log(thisValue);
      localStorage.setItem(thisHour, thisValue);
    })
    
    var numHours = 9;
    for(var i = 0; i < numHours; i++) {
      $(`#hour-${i+9} .description`).val(localStorage.getItem(`hour-${i+9}`))
      }

      // use split to separate "hour" and "1" in the "hour-1" id and compile them in an array
      // take the second value of the array (the number) and compare it with the 24 hour current time
      //apply past,present,future classes based on whether their values are less or more than the actual
     var currentTime = dayjs().format("H");
     var myArray = $("div id").split("-");
     var hourNumber = $(myArray).last();

     if (hourNumber) {

     }
     else if {}

     else {}
     

  
  
  
  
      // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
});
