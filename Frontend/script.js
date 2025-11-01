const login_button_link = document.getElementById('login-menu-button');
const login_box = document.getElementById('Login-box');
const sign_up_box = document.getElementById('sign-up-box'); 
const signup_button_link = document.getElementById('sign-up-menu-button')

//This script is for sign-in.html
function showLogin() {
  if (login_box.style.display === "flex") {
    login_box.style.display = "none";
  } else {
    login_box.style.display = "flex";
    sign_up_box.style.display = "none";
    login_button_link.style.display = "none";
    signup_button_link.style.display = "flex";
  }
}

function showSignup() {
    if (sign_up_box.style.display === "flex") {

      sign_up_box.style.display = "none"
    } else {
      login_box.style.display = "none";
      sign_up_box.style.display = "flex";
      login_button_link.style.display = "flex";
      signup_button_link.style.display = "none";
    }
}

login_button_link.addEventListener("click", showLogin);
signup_button_link.addEventListener("click", showSignup)

//