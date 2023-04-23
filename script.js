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

$("#start").click(() =>{
  timerPomodoro(time)
});


let tab = "#pomodoro";
let time = 25;
let sec = 59;

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
    time--;
  }
  $(tab+">.sec").text(sec);
  sec--;
  if (time == 0 && sec <= 0) {
    clearInterval(decSec);
    clearInterval(decMin);
    alert("over");
  }
}

function decreaseMin() {
  time--;
  if (time < 10){
    time = "0"+time;
  }
  $(tab+">.min").text(time);
}


function timerPomodoro() {
  decMin = setTimeout(decreaseMin, 6000);
  decSec = setInterval(decreaseSec, 100);
}

$("#stop").click(() => {
  clearInterval(decSec);
  clearInterval(decMin);
});

$("#reset").click(() => {
  clearInterval(decSec);
  clearInterval(decMin);
  time = 25;
  sec = 59;
  $(tab + ">.min").text("25");
  $(tab + ">.sec").text("00");
});
