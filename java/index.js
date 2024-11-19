// Local Storage for Users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Forms and Tabs
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const cardTitle = document.getElementById("cardTitle");

// Switch to Login Form
loginTab.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    cardTitle.textContent = "Login";
});

// Switch to Register Form
registerTab.addEventListener("click", () => {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    cardTitle.textContent = "Create Account";
});

// Register User
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (users.some(user => user.email === email)) {
        alert("Email is already registered!");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    registerForm.reset();
    loginTab.click(); // Switch to Login Form
});

// Login User
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./home.html";
    } else {
        alert("Invalid email or password!");
    }
});
