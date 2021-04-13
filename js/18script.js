if (confirm("This page contains +18 content. If you are over the age of 18, press OK to continue")){
    console.log("continua");
} else {
    window.history.back();
}


$("#backArrow").mouseover(function () {
    console.log("should work");
  $(this).attr('src', 'img/backArrowHover.png');
}).mouseout(function () {
  $(this).attr('src', 'img/backArrow.png');
});
