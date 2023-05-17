$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".cm-navbar-main").addClass("sticky");
  } else {
    $(".cm-navbar-main").removeClass("sticky");
  }
});
