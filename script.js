const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav-bar");
const colmd6 = document.getElementById("col-md-6");
navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();
