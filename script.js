window.location.href="#pomodoro";

$(".close").click(function() {
  $(".spotify").slideUp();
  $(".close").css("display", "none");
  $(".spotify-logo").css("display", "inline");
});

$(".spotify-logo").click(function() {
  $(".close").css("display", "inline");
  $(".spotify").slideDown();
  $(".spotify-logo").css("display", "none");
});

$("#start").click(timerPomodoro);

let pomodoro = 24;
let shortBreak = 5;
let longBreak = 10;
let tab = "#pomodoro";
let btn = "#pomo-btn"
let time = 24;

$("#pomo-btn").click(function() {
  time = 24;
  tab = "#pomodoro";
});

$("#short-btn").click(function() {
  time = 4;
  tab = "#short-break";
});

$("#long-btn").click(function() {
  time = 9;
  tab = "#long-break";
});


function timerPomodoro() {
  let i = 59  ;
  setInterval(function() {
    if (time < 10){
      time = "0"+time;
    }
    $(tab).text(time+":00");
    time--; 
    i = 59;
  },60000);
  setInterval(function() {
    if (i < 10){
      i = "0"+i;
    }
    $(tab).text(time+":"+i);
    i--;
  },1000); 
}

