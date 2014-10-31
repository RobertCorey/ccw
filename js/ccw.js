// Set Copyright Year Dynamically in Footer

var copyrightYear = new Date().getFullYear();
document.getElementById("date").innerHTML = copyrightYear;


// Contact Form Validation

// Name
document.theform.clientname.onkeyup = function () {
  var clientName = document.theform.name.value;

  if (clientName.length <= 2) {
    document.getElementById("nameerror").innerHTML = "A valid name is required, and it must be at least 3 characters.";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }
};

document.theform.clientname.onblur = function () {
  var clientName = document.theform.name.value;

  if (clientName.length <= 2) {
    document.getElementById("nameerror").innerHTML = "A valid name is required, and it must be at least 3 characters.";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }
};

// Phone Number
document.theform.phone.onkeyup = function () {
  var phoneField = document.theform.phone.value, // create a variable for the input field
      phonePattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i"), // set the requested pattern by creating a new RegExp, include i for case insensitivity
      valid = phoneField.search(phonePattern) >= 0;

  if (!(valid)) {
    document.getElementById("phoneerror").innerHTML = "A valid 10 digit phone number is required in this format: 123-456-7890.";
  } else {
    document.getElementById("phoneerror").innerHTML = "";
  }
};

document.theform.phone.onblur = function () {
  var phoneField = document.theform.phone.value,
      phonePattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i"),
      valid = phoneField.search(phonePattern) >= 0;

  if (!(valid)) {
    document.getElementById("phoneerror").innerHTML = "A valid 10 digit phone number is required in this format: 123-456-7890.";
  } else {
    document.getElementById("phoneerror").innerHTML = "";
  }
};

// Email Address
document.theform.email.onkeyup = function () {
  var emailAddress = document.theform.email.value,
      emailPattern = new RegExp("\\S+@\\S+", "i"),
      validEmail = emailAddress.search(emailPattern) >= 0;

  if (!(validEmail)) {
    document.getElementById("emailerror").innerHTML = "A valid email is required, and it must be at least 3 characters.";
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }
};

document.theform.email.onblur = function () {
  var emailAddress = document.theform.email.value,
      emailPattern = new RegExp("\\S+@\\S+", "i"),
      validEmail = emailAddress.search(emailPattern) >= 0;

  if (!(validEmail)) {
    document.getElementById("emailerror").innerHTML = "A valid email is required, and it must be at least 3 characters.";
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }
};

// Comments/Questions
document.theform.comments.onkeyup = function () {
  var comments = document.theform.comments.value;

  if (comments.length <= 5) {
    document.getElementById("commenterror").innerHTML = "A brief description of your inquiry is required.";
  } else {
    document.getElementById("commenterror").innerHTML = "";
  }
};

document.theform.comments.onblur = function () {
  var comments = document.theform.comments.value;

  if (comments.length <= 5) {
    document.getElementById("commenterror").innerHTML = "A brief description of your inquiry is required.";
  } else {
    document.getElementById("commenterror").innerHTML = "";
  }
};
