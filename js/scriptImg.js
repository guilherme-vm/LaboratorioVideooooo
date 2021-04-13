console.log("hi");

$(".menu a").on("mouseenter",function(){

    $(this).addClass("selection");
})

$(".menu a").on("mouseleave",function(){
    $(this).removeClass("selection");
})



$("#backArrow").mouseover(function () {
    console.log("should work");
  $(this).attr('src', 'img/backArrowHover.png');
}).mouseout(function () {
  $(this).attr('src', 'img/backArrow.png');
});
