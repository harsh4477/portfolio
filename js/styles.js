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


// Initialize EmailJS
(function() {
  emailjs.init("eo78_5F6c0Vr88CWO"); // Replace with your actual public key
})();

// EmailJS functionality
function sendEmail() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const phone = document.getElementById('phone').value;
  const description = document.getElementById('description').value;
  
  // Validate form
  if (!name || !email || !subject || !phone || !description) {
    alert('Please fill in all fields');
    return false;
  }
  
  // EmailJS configuration (you'll need to set up your own EmailJS account)
  const serviceID = 'service_harsh_5199_email';
  const templateID = 'template_harsh_5199_mail';
  const publicKey = 'eo78_5F6c0Vr88CWO';
  
  // EmailJS parameters
  const templateParams = {
    name: name,
    email: email,
    phone:phone,
    subject: subject,
    message: description
  };
  
  // Send email using EmailJS
  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      document.querySelector('.form-wrapper').reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
  
  return false;
}
