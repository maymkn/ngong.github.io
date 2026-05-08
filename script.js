// script.js

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  }
);

fadeElements.forEach((el) => {
  observer.observe(el);
});