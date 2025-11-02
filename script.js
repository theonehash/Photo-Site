// Smooth scroll indicator fade
window.addEventListener("scroll", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.style.opacity = window.scrollY > 100 ? "0" : "1";
  }
});

// Insert current year dynamically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
