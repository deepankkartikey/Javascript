console.log("Welcome to Travel Desk");

const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

// console.log(uname,email,phone);

uname.addEventListener("blur", () => {
  // console.log("USER-NAME is Blurred");
  // Validate Username
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){6,10}/;
  let str = uname.value;
  if (regex.test(str)) {
    console.log("Username Valid");
    uname.classList.add('is-valid');
  }else{
      console.warn("Invalid Username");
      uname.classList.add('is-invalid');
  }
});

email.addEventListener("blur", () => {
  // console.log("EMAIL is Blurred");
  // Validate Email
});

phone.addEventListener("blur", () => {
  //console.log("PHONE is Blurred");
  // Validate Phone
});
