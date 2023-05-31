const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav-bar");
const colmd6 = document.getElementById("col-md-6");
navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});