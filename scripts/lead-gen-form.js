/* Display the second step */
function showNext() {
  var x = document.getElementById("hsForm_b6081e88-1b6a-40e8-928c-95ada16491f1").getElementsByClassName("hs-form-field");
  if (!validateForm()) {
    return false;
  } else {
    startFrom = 4;
    for(var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for(var i = startFrom; i < x.length; i++) {
      x[i].style.display = "block";
    }
    var step = document.getElementById("hsForm_b6081e88-1b6a-40e8-928c-95ada16491f1").getElementsByClassName("ph-status")[0];
    step.innerHTML = "Step 2 of 2";
    var nextButton = document.getElementById("nextBtn");
    nextButton.classList.add("is-hidden");
    var submitButton = document.getElementById("hsForm_b6081e88-1b6a-40e8-928c-95ada16491f1").getElementsByClassName("hs-button")[0];
    submitButton.classList.remove("is-hidden");
  }
}

/* Validate Form */
function validateForm() {
  var x, y, i, valid = true;
  var requiredItems = 3;
  var email = document.getElementById("email-b6081e88-1b6a-40e8-928c-95ada16491f1");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat) && email.value != "") {
    valid = true;
  } else {
    valid = false;
  }
  x = document.getElementById("hsForm_b6081e88-1b6a-40e8-928c-95ada16491f1").getElementsByClassName("hs-input");
  for (i = 0; i < 3; i++) {
    if (x[i].value == "") {
      if(x[i].classList.contains("invalid")) {
      } else {
        x[i].className += " invalid";
      }
      valid = false;
    } 
  }
  return valid;
}

/* Remove input styles */
function resetInput() {
  var inputField = document.getElementById("hsForm_b6081e88-1b6a-40e8-928c-95ada16491f1").getElementsByClassName("hs-input");
  for (i = 0; i < inputField.length; i++) {
    if(inputField[i].classList.contains("invalid")) {
      inputField[i].classList.remove("invalid");
    }
  } 
}