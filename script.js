//dependecies=====
var calendar=$("#calendar");
var todaysDate=$("#currentDay")

//Global variables
var mid="";
var timeBlocks=['9','10','11','12','1','2','3','4','5'];
// Get the current date and time
var date= new Date()
var today= "Todays is: "+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
todaysDate.text(today);
// Get the current time 
function TimeRanges(){
    // Get the current hour 
    var hours = new Date().getHours();
    var hours = (hours+24-2)%24;
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    alert ('Toronto time: ' + hours + mid);
    }
    TimeRanges();






 
// Change the time block colors depending on current hour
// Get the users activity plans and save them 
// Display the calendar with timeframe 9am to 5pm
// Make sure the plan appear the the next the user opens the app

