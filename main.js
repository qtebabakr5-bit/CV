
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #283593, #3949ab)";
    header.style.transform = "scale(1.05)";
  } else {
    header.style.background = "linear-gradient(135deg, #3f51b5, #5c6bc0)";
    header.style.transform = "scale(1)";
  }
  header.style.transition = "all 0.4s ease";
});

const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0) scale(1)";
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px) scale(0.9)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});

const backToTopBtn = document.getElementById("backToTop");
backToTopBtn.style.transition = "all 0.4s ease";

window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
            backToTopBtn.style.bottom = "30px";
            backToTopBtn.style.opacity = "1";
        } else {
            backToTopBtn.style.bottom = "-50px";
            backToTopBtn.style.opacity = "0";
        }
    });

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
