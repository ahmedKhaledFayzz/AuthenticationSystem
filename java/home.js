const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  alert("You must log in first!");
  window.location.href = "./index.html";
}

document.getElementById("userName").textContent = loggedInUser.email;

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./index.html";
});
