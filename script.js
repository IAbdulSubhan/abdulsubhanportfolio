function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_mxqzz6v", "template_v329sya", params).then(alert("Email Sent!!"))
}

window.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#type-it', {
      strings: ['Data Scientist', 'Machine Learning Engineer', 'Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  });