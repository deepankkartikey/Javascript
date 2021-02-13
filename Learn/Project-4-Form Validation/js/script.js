console.log("Welcome to Travel Desk");

const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const submit = document.querySelector("#submit");
let [isValidName, isValidEmail, isValidPhone] = [false, false, false];

// console.log(uname,email,phone);

uname.addEventListener("blur", () => {
  // console.log("USER-NAME is Blurred");
  // Validate Username
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){6,10}$/;
  let username = uname.value;
  if (regex.test(username)) {
    //console.log("Username Valid");
    isValidName = true;
    uname.classList.replace("is-invalid", "is-valid");
  } else {
    console.warn("Invalid Username");
    uname.classList.add("is-invalid");
  }
});

email.addEventListener("blur", () => {
  // console.log("EMAIL is Blurred");
  // Validate Email
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,5}$/; // (deepankkartikey)@(gmail)\.(com)
  let emailValue = email.value;
  //console.log(regex.exec(emailValue));
  if (regex.test(emailValue)) {
    isValidEmail = true;
    email.classList.replace("is-invalid", "is-valid");
  } else {
    console.warn("Email is invalid");
    email.classList.add("is-invalid");
  }
});

phone.addEventListener("blur", () => {
  //console.log("PHONE is Blurred");
  // Validate Phone
  let regex = /^[0-9]{10}$/;
  let phoneNumber = phone.value;
  if (regex.test(phoneNumber)) {
    isValidPhone = true;
    phone.classList.replace("is-invalid", "is-valid");
  } else {
    console.warn("Invalid Phone Number");
    phone.classList.add("is-invalid");
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Submit clicked...");
  let successAction = document.querySelector("#success");
  successAction.classList.add("alert", "show");
  successAction.innerHTML = ``;
  if (isValidName && isValidEmail && isValidPhone) {
    successAction.classList.replace("alert-danger", "alert-success");
    successAction.innerHTML = `<strong>Success!</strong> Your Travel request has been successfully submitted. 😊`;
  } else {
    successAction.classList.add("alert-danger");
    successAction.innerHTML = `<strong>Error!</strong> Username, Email or Phone not valid. 😟`;
  }
});
