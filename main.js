const form = document.getElementById("form");

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email-input");
  const errorIcon = document.getElementById("error-icon");
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("succes-msg");

  // Reset styles and messages
  emailInput.style.borderColor = "#ce9898";
  errorIcon.style.display = "none";
  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  if (emailInput.value === "") {
    // Empty input
    emailInput.style.borderColor = "#F96464";
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";
  } else if (!isValidEmail(emailInput.value)) {
    // Invalid email format
    emailInput.style.borderColor = "#F96464";
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";
  } else {
    // Valid email
    emailInput.style.borderColor = "green";
    successMsg.style.display = "block";
    emailInput.value = ""; // Clear the input field
  }
});