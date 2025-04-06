let sr = ScrollReveal({
  duration: 2500,
  distance: "80px",
});

sr.reveal(".col-md-5", { origin: "top", delay: 200 });
sr.reveal(".text-orange-name", { origin: "left", delay: 200 });
sr.reveal(".section-title", { origin: "left", delay: 200 });
sr.reveal(".header-title", { origin: "right", delay: 200 });
sr.reveal(".text-secondary", { origin: "right", delay: 200 });
sr.reveal(".header-skill", { origin: "bottom", delay: 200 });
sr.reveal(".mb-3", { origin: "bottom", delay: 200 });
sr.reveal(".col-md-4", { origin: "bottom", delay: 200 });
sr.reveal(".text-orange-skills", { origin: "right", delay: 200 });
sr.reveal(".text-orange-about", { origin: "bottom", delay: 200 });
sr.reveal(".text-about", { origin: "right", delay: 200 });
sr.reveal(".portfolio-section", { origin: "left", delay: 300 });
sr.reveal(".section-title", { origin: "top", delay: 400 });

const texts = ["Rifa Mazharul Haq Dini Hari Putra", "Software Engineering", "Universitas Pendidikan Indonesia"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const changingText = document.getElementById("changing-text");

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  changingText.textContent = letter;

  changingText.classList.add("text-fade-in");
  setTimeout(() => {
    changingText.classList.remove("text-fade-in");
  }, 300);

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

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollHeight > 50) {
    navbar.classList.add('navbar-transparent');
  } else {
    navbar.classList.remove('navbar-transparent');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
    scrollToTopBtn.classList.add('fadeIn');
  } else {
    scrollToTopBtn.classList.remove('fadeIn');

    scrollToTopBtn.classList.add('fadeOut');
    setTimeout(function () {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.classList.remove('fadeOut');
    }, 500);
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  scrollToTop();
  this.style.animation = 'buttonClick 0.3s ease';
  var self = this;

  setTimeout(function () {
    self.style.animation = '';
  }, 300);
});

const navLinks = document.querySelectorAll(".nav-link");

const sections = Array.from(navLinks)
  .map((link) => {
    const id = link.getAttribute("href").replace("#", "");
    return document.getElementById(id);
  })
  .filter(Boolean);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href").replace("#", "");

    if (scrollY < sections[0].offsetTop - 200 && link.getAttribute("href") === "#") {
      link.classList.add("active");
    }

    else if (href === current) {
      link.classList.add("active");
    }
  });
});

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(item => {
      item.classList.remove('active');
    });
    link.classList.add('active');
  });
});

var projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.btn-prev-project',
    prevEl: '.btn-next-project',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

var certificateSwiper = new Swiper(".certificate-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.btn-prev-certificate',
    prevEl: '.btn-next-certificate',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 30
    },
  }
});
