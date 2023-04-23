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

$("#start").click(function() {
  $("#start").removeClass("center");
  $("#stop").addClass("center");
});

$("#stop").click(function() {
  $("#stop").removeClass("center");
  $("#start").addClass("center");
});

let tab = "#pomodoro";
let time = 25;
let sec = 0;

$("#pomo-btn").click(function() {
  time = '25';
  tab = "#pomodoro";
});

$("#short-btn").click(function() {
  time = '05';
  tab = "#short-break";
});

$("#long-btn").click(function() {
  time = '10';
  tab = "#long-break";
});


function decreaseSec() {
  if (sec < 10 && sec > -1){
    sec = "0"+sec;
  }
  if (sec < 0){
    sec = 59;
    decreaseMin();
  }
  $(tab+">.sec").text(sec);
  sec--;
  decSec = setTimeout(decreaseSec, 400);
}

function decreaseMin() {
  time--;
  if (time < 10){
    time = "0"+time;
  }
  $(tab+">.min").text(time);
}

function timerPomodoro() {
  decSec = setTimeout(decreaseSec, 0);
}

$("#start").click(() =>{
  timerPomodoro(time)
});

$("#stop").click(() => {
  clearInterval(decSec);
  clearInterval(decMin);
});

$("#reset").click(() => {
  clearInterval(decSec);
  clearInterval(decMin);
  $(tab + ">.min").text("25");
  $(tab + ">.sec").text("00");
});
