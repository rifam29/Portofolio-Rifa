let sr = ScrollReveal({
  duration: 2500,
  distance: "80px",
});

sr.reveal(".col-md-5", { origin: "top", delay: 200 });
sr.reveal(".text-orange-name", { origin: "left", delay: 200 });
sr.reveal(".section-title", { origin: "top", delay: 400 }); // <-- hanya ini yang dipakai
sr.reveal(".header-title", { origin: "right", delay: 200 });
sr.reveal(".text-secondary", { origin: "right", delay: 200 });
sr.reveal(".header-skill", { origin: "bottom", delay: 200 });
sr.reveal(".mb-3", { origin: "bottom", delay: 200 });
sr.reveal(".col-md-4", { origin: "bottom", delay: 200 });
sr.reveal(".text-orange-skills", { origin: "right", delay: 200 });
sr.reveal(".text-orange-about", { origin: "bottom", delay: 200 });
sr.reveal(".text-about", { origin: "right", delay: 200 });
sr.reveal(".portfolio-section", { origin: "left", delay: 300 });

const texts = ["Rifa Mazharul Haq Dini Hari Putra", "Software Engineering", "Universitas Pendidikan Indonesia"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const changingText = document.getElementById("changing-text");

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  changingText.textContent = letter;

  changingText.classList.add("text-fade-in");
  setTimeout(() => changingText.classList.remove("text-fade-in"), 300);

  if (letter.length === currentText.length) {
    setTimeout(() => {
      changingText.classList.add("text-fade-out");
      setTimeout(() => {
        changingText.classList.remove("text-fade-out");
        count++;
        index = 0;
        setTimeout(type, 500);
      }, 500);
    }, 1000);
  } else {
    setTimeout(type, 50);
  }
})();

const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const navLinks = document.querySelectorAll(".nav-link");
const sections = Array.from(navLinks)
  .map((link) => document.getElementById(link.getAttribute("href").replace("#", "")))
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Navbar transparan toggle
  navbar.classList.toggle('navbar-transparent', scrollY > 50);

  // Scroll To Top Button toggle
  if (scrollY > 20) {
    scrollToTopBtn.style.display = 'block';
    scrollToTopBtn.classList.add('fadeIn');
  } else {
    scrollToTopBtn.classList.remove('fadeIn');
    scrollToTopBtn.classList.add('fadeOut');
    setTimeout(() => {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.classList.remove('fadeOut');
    }, 500);
  }

  // Highlight active nav
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if ((scrollY < sections[0].offsetTop - 200 && link.getAttribute("href") === "#") || href === current) {
      link.classList.add("active");
    }
  });
});

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  this.style.animation = 'buttonClick 0.3s ease';
  setTimeout(() => this.style.animation = '', 300);
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#project-carousel', {
    type   : 'loop',
    perPage: 3,
    gap    : '1rem',
    breakpoints: {
      768: { perPage: 1 },
      1024: { perPage: 2 }
    }
  }).mount();

  new Splide('#certificate-carousel', {
    type   : 'loop',
    perPage: 5,
    gap    : '1rem',
    breakpoints: {
      768: { perPage: 1 },
      1024: { perPage: 2 }
    }
  }).mount();
});