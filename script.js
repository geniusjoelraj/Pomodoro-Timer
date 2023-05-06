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
let sec = 59;
let ctime = 25;

$("#pomo-btn").click(function() {
  time = '25';
  tab = "#pomodoro";
  ctime = '25';
  reset();
});

$("#short-btn").click(function() {
  time = '05';
  tab = "#short-break";
  ctime = '05';
  reset();
});

$("#long-btn").click(function() {
  time = '10';
  tab = "#long-break";
  ctime = '10';
  reset();  
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
  decSec = setTimeout(decreaseSec, 1000);
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
  decreaseMin();
}

$("#start").click(() =>{
  timerPomodoro(time)
});

$("#stop").click(() => {
  clearInterval(decSec);
  time++;
});

function reset() {
  clearInterval(decSec);
  time = ctime;
  sec = 59;
  $(tab + ">.min").text(ctime);
  $(tab + ">.sec").text("00");
  $("#stop").removeClass("center");
  $("#start").addClass("center");
}

$("#reset").click(() => {
  reset();
});
