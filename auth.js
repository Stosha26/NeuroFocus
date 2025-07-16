localStorage.clear();


function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const title = document.getElementById("formTitle");
  const toggleLink = document.querySelector(".toggle-link");

  const isLoggedIn = loginForm.classList.contains("active");
  loginForm.classList.toggle("active", !isLoggedIn);
  signupForm.classList.toggle("active", isLoggedIn);
  title.textContent = isLogin ? "Sign Up for NeuroFocus" : "Login to NeuroFocus";
  toggleLink.textContent = isLogin ? "Already have an account? Log in" : "Don't have an account? Sign up";
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("modeLabel").textContent = isDark ? "🌙 Dark Mode":"☀️ Light Mode";
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true");
  } else {
    alert("Invalid credentials.");
  }
}

function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("isLoggedIn", "true");

  
}


window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeToggle").checked = true;
    document.getElementById("modeLabel").textContent = "☀️ Light Mode";
  }
};
function login() {
  // your login logic
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
}

function signup() {
  // your signup logic
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
}
