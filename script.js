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


    currentDay();
    let row;
    let timeCol;

    //THEN I am presented with timeblocks for standard business hours
    for (i = 0; i < workHours.length; i++) {
      let row = $("<div>").addClass("row");
      let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
      let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
      saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
      $(row).append(timeCol).append(inputCol).append(saveBtn);
      $("#calendar").append(row);
    }

    //for loop to add id's to input fields
    function addIdToInput() {
      let inputId = document.getElementsByClassName("toDo-input");
      let length = inputId.length;
      for (i = 0; i < length; i++) {
        inputId[i].id = "input-field-" + (i + 1);
      }
    };
    addIdToInput();
    
    function addIdToSaveBtn() {
      let saveBtnId = document.getElementsByClassName("saveBtn");
      let length = saveBtnId.length;
      for (i = 0; i < length; i++) {
        saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
      }
    }
    simpleCalendar();
    
    addIdToSaveBtn();

    let now = new Date().getHours();
    if (now > 8) {
      $("#input-field-0").addClass("past");
    } else if (now >= 8 && now < 9) {
      $("#input-field-0").addClass("present");
    } else if (now < 8) {
      $("#input-field-0").addClass("future");
    }

    if (now > 9) {
      $("#input-field-1").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#input-field-1").addClass("present");
    } else if (now < 9) {
      $("#input-field-1").addClass("future");
    }

    if (now > 10) {
      $("#input-field-2").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#input-field-2").addClass("present");
    } else if (now < 10) {
      $("#input-field-2").addClass("future");
    }

    if (now > 11) {
      $("#input-field-3").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#input-field-3").addClass("present");
    } else if (now < 11) {
      $("#input-field-3").addClass("future");
    }

    if (now > 12) {
      $("#input-field-4").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#input-field-4").addClass("present");
    } else if (now < 12) {
      $("#input-field-4").addClass("future");
    }

    if (now > 13) {
      $("#input-field-5").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#input-field-5").addClass("present");
    } else if (now < 13) {
      $("#input-field-5").addClass("future");
    }

    if (now > 14) {
      $("#input-field-6").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#input-field-6").addClass("present");
    } else if (now < 14) {
      $("#input-field-6").addClass("future");
    }

    if (now > 15) {
      $("#input-field-7").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#input-field-7").addClass("present");
    } else if (now < 15) {
      $("#input-field-7").addClass("future");
    }

    if (now > 16) {
      $("#input-field-8").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#input-field-8").addClass("present");
    } else if (now < 16) {
      $("#input-field-8").addClass("future");
    }

    if (now > 17) {
      $("#input-field-9").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#input-field-9").addClass("present");
    } else if (now < 17) {
      $("#input-field-9").addClass("future");
    }

  });

}