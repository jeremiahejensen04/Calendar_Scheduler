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
    };

    var currentTime = dayjs().format("H");
    console.log(currentTime);
   
      
    $('.row').each(function() {
          var divId = $(this).attr('id');
          var hourNumberArr = divId.split('-');
          var hourNumber = hourNumberArr[1];
          console.log(hourNumber);

          if (hourNumber < currentTime) {
            $(this).children("textarea").addClass("past");
          } else if (hourNumber === currentTime) {
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").addClass("present");
          } else {
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").removeClass("present");
            $(this).children("textarea").addClass("future");
          }
        
    });

     
   
      
    
});
