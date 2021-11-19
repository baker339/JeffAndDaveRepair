(function () {
  emailjs.init("user_thooo9ffMBKAHDuOtYJZm");
})();

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const sendUsMessage = document.getElementById("send-us-message");
const thanksForSending = document.getElementById("thanks-for-sending");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      submitButton.setAttribute("disabled", true);
      emailjs.sendForm("service_l036xhw", "template_qt3gbor", this).then(
        function () {
          console.log("SUCCESS!");
          contactForm.reset();
          submitButton.removeAttribute("disabled");
          sendUsMessage.style.display = "none";
          thanksForSending.style.display = "flex";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
