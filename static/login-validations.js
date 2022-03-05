const submitBtn = document.querySelector('#login-btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submitBtn.addEventListener("click", event => {

  if (email.value.length < 1) {
    console.log("Email can't be empty");
    email.style.borderColor = "red";
    event.preventDefault();
    return;
  } else {
    console.log("Email Validated");
    email.style.borderColor = "rgb(229 231 235";
  }

  if (password.value.length < 8 || password.value.length > 30) {
    console.log("Password must be within 8 to 29 characters");
    password.style.borderColor = "red";
    event.preventDefault();
  } else {
    console.log("Password validated");
    password.style.borderColor = "rgb(229 231 235";
  }

})

