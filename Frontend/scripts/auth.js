const login_button_link = document.getElementById("login-menu-button");
const login_box = document.getElementById("Login-box");
const sign_up_box = document.getElementById("sign-up-box");
const signup_button_link = document.getElementById("sign-up-menu-button");

//This script is for sign-in.html
const showLogin = () => {
  if (login_box.style.display === "flex") {
    login_box.style.display = "none";
  } else {
    login_box.style.display = "flex";
    sign_up_box.style.display = "none";
    login_button_link.style.display = "none";
    signup_button_link.style.display = "flex";
  }
};

function showSignup() {
  if (sign_up_box.style.display === "flex") {
    sign_up_box.style.display = "none";
  } else {
    login_box.style.display = "none";
    sign_up_box.style.display = "flex";
    login_button_link.style.display = "flex";
    signup_button_link.style.display = "none";
  }
}

login_button_link.addEventListener("click", showLogin);
signup_button_link.addEventListener("click", showSignup);

//Sign UP
const UserName = document.querySelector(".signup-username");

const Email = document.querySelector(".signup-email");
const PassWord = document.querySelector(".signup-password");
const SubmitButton = document.querySelector("#sign_up_button");
const signUpButton = document.querySelector(".sign-up-buttons");


function get_user_data(id) {
  const content = id.value.trim();
  console.log(content)
  return content
}

SubmitButton.addEventListener("click", () => {
  const username = get_user_data(UserName);
  const useremail = get_user_data(Email);
  const userpassword = get_user_data(PassWord);
  fetch("http://127.0.0.1:8001/authentication/SignUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      NAME: username,
      EMAIL: useremail,
      PASSWORD: userpassword,
    }),
  })
  

});
