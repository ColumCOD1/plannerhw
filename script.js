//dependecies=====
var calendar=$(".calendar");
var todaysDate=$("#currentDay")

//Global variables
var mid="";
var timeBlocks= [
    { tm: 9, tmMid: "am" },
  { tm: 10, tmMid: "am" },
  { tm: 11, tmMid: "am" },
    ,{ tm: 12, tmMid: 'pm' }
    ,{ tm: 13, tmMid: 'pm' }
    ,{ tm: 14, tmMid: 'pm' }
    , { tm: 15, tmMid: 'pm' }
    ,{ tm: 16, tmMid: 'pm' }
    ,{ tm: 17, tmMid:'pm'}];

// Get the current date and time
var date= new Date()
var today= "Todays is: "+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
todaysDate.text(today);
// Get the current time 
    // Get the current hour 
    var hours=new Date().getHours()
// Change the time block colors depending on current hour
// Get the users activity plans and save them
var timeBlock = $("<div class=time-block>");
calendar.append(timeBlock);
timeBlocks.forEach(hr => {
  console.log(hr);
  var row = $("<div class= row>");
  timeBlock.append(row);
    var hour = $("<div class= hour>");
    hour.addClass("col-2");
  hour.attr("data-mid", hr.tmMid);
  hour.text(hr.tm);
    row.append(hour);
    var textBlock = $("<div>");
    var blockHour= parseInt(hr.tm);
    //console.log(blockHour)
    if (blockHour === hours) {
        textBlock.addClass("present");
      } else if (blockHour > hours) {
        textBlock.addClass("future");
      } else {
        textBlock.addClass("past");
      }
      var fHour = (hr.tm + 24) % 24;
      if (fHour == 0) {
          //At 00 hours we need to show 12 am
          fHour = 12;
        } else if (fHour > 12) {
          fHour = fHour % 12;
          mid="pm"
        }
    textBlock.addClass("col-8");
    textBlock.text("dcvqbwehcbqwiuekjfbqiwehcvbqyewlhjcvqwejhcvwe cweqhv");
    row.append(textBlock);
  });
// Display the calendar with timeframe 9am to 5pm
// Make sure the plan appear the the next the user opens the app

