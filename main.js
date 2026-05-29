// Menu toggle
document.querySelector(".fa-solid.fa-bars").addEventListener("click", () => {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Unobserve after animation runs once
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(element => {
  observer.observe(element);
});
