let currentDateEl = $("#currentDay");
let timeblocksEl = $(".time-block");
let timeDisplayEl = $("#time-display");

function todaysDate() {
  let thisDay = moment().format("MMM DD, YYYY hh:mm:ss");
  timeDisplayEl.text("Today's Date: " + thisDay);
  timeblocksEl.each(function () {});
  let currentHour = moment().hour();
  if (currentHour === $(this).data().time) {
    $(this).children("textarea").addClass("present");
  }
}
setInterval(todaysDate, 1000);

function colorCode() {
  let currentHour = moment().hour();
}
