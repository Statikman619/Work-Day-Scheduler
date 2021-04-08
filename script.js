let currentDateEl = $("#currentDay");
let timeblocksEl = $(".time-block");
let timeDisplayEl = $("#time-display");

function todaysDate() {
  let thisDay = moment().format("MMM DD, YYYY hh:mm:ss");
  timeDisplayEl.text("Today's Date: " + thisDay);
  timeblocksEl.each(function () {});
}
setInterval(todaysDate, 1000);
