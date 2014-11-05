// Set Copyright Year Dynamically in Footer
var copyrightYear = new Date().getFullYear();
document.getElementById("date").innerHTML = copyrightYear;

function validateName() {
  var clientName = document.theform.name.value;
  if (clientName.length <= 2) {
    document.getElementById("nameerror").innerHTML = "A valid name is required, and it must be at least 3 characters.";
    return false;
  } else {
    document.getElementById("nameerror").innerHTML = "";
    return true;
  }
}

function validatePhone() {
  var phoneField = document.theform.phone.value, // create a variable for the input field
  phonePattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i");
  var valid = phonePattern.test(phoneField);
  if (!valid) {
    document.getElementById("phoneerror").innerHTML = "A valid 10 digit phone number is required in this format: 123-456-7890.";
    return false;
  } else {
    document.getElementById("phoneerror").innerHTML = "";
    return true;
  }
}

function validateEmail() {
  var emailAddress = document.theform.email.value,
  emailPattern = new RegExp("\\S+@\\S+", "i");
  var validEmail = emailPattern.test(emailAddress);
  if (!validEmail) {
    document.getElementById("emailerror").innerHTML = "A valid email is required, and it must be at least 3 characters.";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
    return true;
  }
}

function validateComments() {
  var comments = document.theform.comments.value;
  if (comments.length <= 5) {
    document.getElementById("commenterror").innerHTML = "A brief description of your inquiry is required.";
    return false;
  } else {
    document.getElementById("commenterror").innerHTML = "";
    return true;
  }
}

document.theform.name.addEventListener("change", validateName);
document.theform.phone.addEventListener("change", validatePhone);
document.theform.email.addEventListener("change", validateEmail);
document.theform.comments.addEventListener("change", validateComments);

function validationSubmit() {
  if (validateName() && validatePhone() && validateEmail() && validateComments()) {
    return true;
  }
  else {
    return false;
  }
}