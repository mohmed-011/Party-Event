/// <reference types="../@types/jquery"/>
let curunt = "btn-red";
let curunt1 = "bg-red-400";
$(".SingerOneP , .SingerTwoP , .SingerThreeP , .SingerFourP").slideUp(0);

$(".SingerOneD").on("click", function () {
  $(".SingerOneP").slideToggle(500);
});
$(".SingerTwoD").on("click", function () {
  $(".SingerTwoP").slideToggle(500);
});
$(".SingerThreeD").on("click", function () {
  $(".SingerThreeP").slideToggle(500);
});
$(".SingerFourD").on("click", function () {
  $(".SingerFourP").slideToggle(500);
});

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  console.log(
    ` days: ${days} hours: ${hours} minutes: ${minutes}  seconds: ${seconds}`
  );
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

$(".message").on("input", function () {
  let word = $(this).val();

  let Reamining = 100 - word.length;

  if (Reamining >= 0) {
    $("#chars").html(Reamining);
  } else {
    $("#chars").html("your available character finished");
  }
});
$(".sideBarc").animate({ width: "toggle", paddingInline: "toggle" }, 0);
$(".open").on("click", function () {
  $(".sideBarc").animate({ width: "toggle", paddingInline: "toggle" }, 800);
});
$(".close").on("click", function () {
  $(".sideBarc").animate({ width: "toggle", paddingInline: "toggle" }, 800);
});

$(".nav-lin").on("click", function () {
  let elem = $(this).attr("id");
  console.log(elem);
  let offset = $(elem).offset().top - 200;
  console.log(offset);
  $("html, body").animate({ scrollTop: offset }, 1000);
});

$(".colorBox").on("click", function (e) {
  let color = $(e.target).css("backgroundColor");
  console.log(color);
  $(".SingerOneD  , .SingerTwoD  , .SingerThreeD , .SingerFourD").css({
    backgroundColor: color,
  });
  $(".SingerOneP  , .SingerTwoP  , .SingerThreeP , .SingerFourP").css({
    backgroundColor: "rgba(0, 0, 0,0.3)",
  });
  $(".openingBtn").removeClass(curunt);
  $(".openingBtn").addClass($(e.target).attr("id"));

  $(".sendBtn").removeClass(curunt);
  $(".sendBtn").addClass($(e.target).attr("id"));

  $("#Home").removeClass(curunt1);
  $("#Home").css({ backgroundColor: color });

  $("#count").removeClass(curunt1);
  $("#count").css({ backgroundColor: color });

  $("#Footer").removeClass(curunt1);
  $("#Footer").css({ backgroundColor: color });

  $("i").css({ color: color });
  curunt = $(e.target).attr("id");
});
