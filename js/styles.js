// open pdf
function pdfOPen() {
  window.open(
    "https://drive.google.com/file/d/1rWop8zZeje0AwfeNfocrsj-c8fldvxnU/view?usp=drive_link",
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

// AOS.init();

// document.getElementById("vid").play();
