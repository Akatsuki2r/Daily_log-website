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
  console.log(content);
  return content;
}

SubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = {
    username: UserName.value.trim(),
    email: Email.value.trim(),
    hashed_password: PassWord.value.trim(),
  };

  fetch("http://127.0.0.1:8001/v1/authentication/SignUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Signup failed");
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("Registration Successful!");
    })
    .catch((error) => console.error("Error:", error));
});

//Login
const Login_password = document.querySelector("#login-password");
const Login_email = document.querySelector("#login-email");

const Login_button = document.querySelector("#Log_in_button");

Login_button.addEventListener("click", (e) => {
  e.preventDefault();
  const UsrData = {
    email: Login_email.value.trim(),
    password: Login_password.value.trim(),
  };
  console.log(UsrData);

  fetch("http://127.0.0.1:8001/v1/authentication/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UsrData),
  })
    .then((response) => {
      console.log("cool");
      if (!response.ok) throw new Error("Login failed");
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("Login Successful!");
      const welcomeMessage = document.querySelector("#welcome_message");
      if (welcomeMessage) {
        welcomeMessage.textContent = `Welcome ${data.username || "User"}`;
      }

      window.location.assign("index.html");
    })
    .catch((error) => console.error("Error:", error));
});
