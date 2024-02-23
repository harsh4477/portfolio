$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".cm-navbar-main").addClass("sticky");
  } else {
    $(".cm-navbar-main").removeClass("sticky");
  }
});

// fixed card
if (window.innerWidth > 991) {
  var card = $(".profile-card");
  profileCardFixed = "profile-card-fixed";
  profileCard = $(".banner-detail-main").height();
  var timelineWrap = $(".timeline-wrap");
  timelineMain = $(".timeline-main").height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > profileCard) {
      card.addClass(profileCardFixed);
    } else {
      card.removeClass(profileCardFixed);
    }
    if ($(document).scrollTop() > timelineMain) {
      timelineWrap.addClass("timelineAnimation");
    } else {
      timelineWrap.removeClass("timelineAnimation");
    }
    if ($(document).scrollTop() > timelineMain) {
      timelineWrap.addClass("timelineAnimation");
    } else {
      timelineWrap.removeClass("timelineAnimation");
    }
  });
}

// open pdf
function pdfOPen() {
  window.open(
    "https://drive.google.com/file/d/1oHOTRvqJqUbGlbcZ44CBNuLhpnFBxzun/view",
    "_blank"
  );
}

// progress bar
// function skill(){
$(".skill-per").each(function () {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
    }
  );
});
// }

// Form data receive on gmail
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hp92448@gmail.com",
    Password: "57669684233DCF2A92702CEFAB9CB8CE8860",
    To: "hp92448@gmail.com",
    From: document.getElementById("email").value,
    Subject: "test",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

AOS.init();
