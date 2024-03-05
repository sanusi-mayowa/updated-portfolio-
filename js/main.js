const NavMenu = document.getElementById("nav-menu");
const NavToggle = document.getElementById("nav-toggle");
const NavClose = document.getElementById("nav-close");

if (NavToggle) {
  NavToggle.addEventListener("click", () => {
    NavMenu.classList.add("show-menu");
  });
}
if (NavClose) {
  NavClose.addEventListener("click", () => {
    NavMenu.classList.remove("show-menu");
  });
}
const NavLink = document.querySelectorAll(".nav__link");

NavLink.forEach((n) =>
  n.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  })
);

let swiperProjects = new Swiper(".projects-container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

let swiperTestimonial = new Swiper(".testimonial-container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (email) => {
  email.preventDefault();

  if (!contactName || !contactEmail || contactProject.value === "") {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Wite all the input fields 📩";
  } else {
    emailjs.sendForm(
      "service_q9e1tjc",
      "template_uwazhn5",
      "#contact-form",
      "cnGCR34xaw1QfKObL"
    );

    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
    contactMessage.textContent = "Message sent ✅";
    setTimeout(() => {}, 5000);
  }
};

contactForm.addEventListener("submit", sendEmail);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(
  `.home-data , .projects-container , .testimonial-container , .footer-container`
);
sr.reveal(`.home-info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills-content:nth-child(1) , .contact-content:nth-child(1) `, {
  origin: "left",
});
sr.reveal(`.skills-content:nth-child(2) , .contact-content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.qualification-content , .services-card`, { interval: 100 });
