const direction = window.localStorage.getItem("direction") || "ltr";
if (direction === "rtl") {
  const animateElements1 = document.querySelectorAll('[data-aos="fade-left"]');
  const animateElements2 = document.querySelectorAll('[data-aos="fade-right"]');

  animateElements1.forEach((element) => {
    element.setAttribute("data-aos", "fade-right");
  });

  animateElements2.forEach((element) => {
    element.setAttribute("data-aos", "fade-left");
  });
}

// loader
const screen_loader = document.getElementsByClassName("screen_loader");
if (screen_loader?.length) {
  setTimeout(() => {
    document.body.removeChild(screen_loader[0]);
  }, 200);
}

// Mobile menu js
const toggleMenu = () => {
  const menus = document.querySelector(".menus");
  const overlay = document.querySelector(".overlay");
  menus.classList.toggle("open-menus");
  overlay.classList.toggle("hidden");
};

// AOS Animation
if (window["AOS"]) {
  window["AOS"].init({
    once: true,
  });
}

// Search Bar - Header
const search = () => {
  var search = document.querySelector(".search-bar");
  search.classList.toggle("open-search-bar");
};

// Scroll to top
const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  setOnScroll();
};

const setOnScroll = () => {
  let scrollpos = window.scrollY;
  if (scrollpos > 0) {
    document.getElementById("scrollToTopBtn")?.classList.remove("hidden");
    document.getElementById("top-header")?.classList.add("sticky-header");
  } else {
    document.getElementById("scrollToTopBtn")?.classList.add("hidden");
    document.getElementById("top-header")?.classList.remove("sticky-header");
  }
};
setOnScroll();

// Light - Dark Mode
const toggleTheme = (isFirstTime = false) => {
  let theme = window.localStorage.getItem("theme") || "light";

  if (!isFirstTime) {
    theme = theme === "light" ? "dark" : "light";
  }
  window.localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
};

toggleTheme(true);

// rtl
const toggleDirection = (isFirstTime = false) => {
  let direction = window.localStorage.getItem("direction") || "ltr";

  if (!isFirstTime) {
    direction = direction === "ltr" ? "rtl" : "ltr";
  }
  window.localStorage.setItem("direction", direction);

  if (direction === "rtl") {
    document.querySelector("html").setAttribute("dir", "rtl");
  } else {
    document.querySelector("html").setAttribute("dir", "ltr");
  }
  if (!isFirstTime) {
    window.location.reload();
  }
};
toggleDirection(true);

// current year
const ele = document.querySelectorAll(".curr-year");
if (ele?.length) {
  const date = new Date();
  const fullyear = date.getFullYear();
  for (let i = 0; i < ele.length; i++) {
    ele[i].innerHTML = fullyear;
  }
}

// Testimonial Slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-swiper-button-next",
    prevEl: ".testimonial-swiper-button-prev",
  },
});

// Counter Js
VanillaCounter();

//  Filter

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("data-filter");
    let itemsToHide = document.querySelectorAll(
      `.projects .project:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(
      `.projects [data-filter='${selectedFilter}']`
    );

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(".projects [data-filter]");
    }

    filterMenu = document.querySelectorAll(".filters li.filter");
    filterMenu.forEach((el) => {
      el.classList.remove("active");
    });
    filter.classList.add("active");

    itemsToHide.forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("block");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hidden");
      el.classList.add("block");
    });
  });
});
