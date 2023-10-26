$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".cm-navbar-main").addClass("sticky");
  } else {
    $(".cm-navbar-main").removeClass("sticky");
  }
});

// // fixed card
// if (window.innerWidth > 991) {
//   var card = $(".profile-card");
//   profileCardFixed = "profile-card-fixed";
//   profileCard = $(".banner-detail-main").height();

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > profileCard) {
//       card.addClass(profileCardFixed);
//     } else {
//       card.removeClass(profileCardFixed);
//     }
//   });
// }

// open pdf
function pdfOPen() {
  window.open(
    "https://drive.google.com/file/d/1oHOTRvqJqUbGlbcZ44CBNuLhpnFBxzun/view",
    "_blank"
  );
}

// progress bar
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

//
