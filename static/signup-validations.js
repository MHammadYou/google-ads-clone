const validateEmail = inputEmail => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
}

