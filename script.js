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

$(".start").click(timer);

function timer() {
  
}

