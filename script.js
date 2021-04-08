let currentDateEl = $("#currentDay");
let timeblocksEl = $(".time-block");
let timeDisplayEl = $("#time-display");

function todaysDate() {
    let thisDay = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today's Date: " + thisDay)
    timeblocksEl.each(function() {

    })
