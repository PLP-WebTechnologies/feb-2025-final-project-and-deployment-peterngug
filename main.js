// Simple Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgDiv = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msgDiv.textContent = "Please fill in all fields.";
    msgDiv.style.color = "red";
    return;
  }

  // Simulate successful submission
  msgDiv.textContent = "Thank you, " + name + "! Your message has been sent.";
  msgDiv.style.color = "green";

  this.reset();
});

// Optional: Image Slider (add an image carousel to home page if needed)
function setupSlider() {
  const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
  ];
  let currentIndex = 0;
  const sliderImg = document.getElementById("slider");

  if (!sliderImg) return;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to MySite!");
});
// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
window.addEventListener("DOMContentLoaded", setupSlider);