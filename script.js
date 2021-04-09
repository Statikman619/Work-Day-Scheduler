let currentDateEl = $("#currentDay");
let timeblocksEl = $(".time-block");
let timeDisplayEl = $("#time-display");

function todaysDate() {
  let thisDay = moment().format("MMM DD, YYYY hh:mm:ss");
  timeDisplayEl.text("Today's Date: " + thisDay);
  timeblocksEl.each(function () {
    let currentHour = moment().hour();
    if (currentHour === parseInt($(this).data().time)) {
      $(this).children("textarea").addClass("present");
    } else if (currentHour > parseInt($(this).data().time)) {
      $(this).children("textarea").addClass("past");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });
}
setInterval(todaysDate, 1000);

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");
  localStorage.setItem(id, text);
});
function getLocalStorage() {
  timeblocksEl.each(function () {
    var id = $(this).attr("id");
    var data = localStorage.getItem(id);
    $(this).children(".description").val(data);
  });
}
getLocalStorage();
